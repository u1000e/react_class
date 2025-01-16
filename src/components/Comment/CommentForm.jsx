import React, { useState } from "react";
import axios from "axios";
import {
  FormContainer,
  TextArea,
  SubmitButton,
  ErrorMessage,
} from "./CommentForm.styles";

const CommentForm = ({ boardId, onSuccess }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim() === "") {
      setError("댓글 내용을 입력해주세요.");
      return;
    }

    setSubmitting(true);
    setError("");
    const userName = localStorage.getItem("username");
    try {
      const response = await axios.post(
        `http://localhost/comments`,
        { boardNo: boardId, content: content, userNo: userName },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // JWT 토큰 사용 시
          },
        }
      );
      setContent("");
      onSuccess();
    } catch (err) {
      console.error("댓글 작성 실패:", err);
      setError("댓글 작성에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="댓글을 작성하세요..."
        rows="4"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SubmitButton type="submit" disabled={submitting}>
        {submitting ? "작성 중..." : "댓글 작성"}
      </SubmitButton>
    </FormContainer>
  );
};

export default CommentForm;
