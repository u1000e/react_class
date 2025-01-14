import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  TextArea,
  FileInput,
  ImagePreview,
  SubmitButton,
  CancelButton,
  Message,
} from "./EditBoard.styles";
import { useNavigate, useParams } from "react-router-dom";

const EditBoard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");
  const [boardWriter, setBoardWriter] = useState("");
  const [file, setFile] = useState(null); // 선택한 파일
  const [existingFileUrl, setExistingFileUrl] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false); // 제출 상태

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await axios.get(`http://localhost/boards/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setBoardTitle(response.data.boardTitle);
        setBoardContent(response.data.boardContent);
        setBoardWriter(response.data.boardWriter);
        setExistingFileUrl(response.data.fileUrl || "");
      } catch (err) {
        console.error("게시글 조회 실패:", err);
        setMessage("게시글을 불러오는데 실패했습니다.");
      }
    };

    fetchBoard();
  }, [id]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("boardTitle", boardTitle);
      formData.append("boardContent", boardContent);
      formData.append("boardWriter", boardWriter);
      formData.append("fileUrl", existingFileUrl);
      if (file) {
        formData.append("file", file);
      }

      await axios.put(`http://localhost/boards/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      setMessage("게시글이 성공적으로 수정되었습니다.");

      setTimeout(() => {
        navigate(`/boards/${id}`);
      }, 1500);
    } catch (err) {
      console.error("게시글 수정 실패:", err);
      setMessage("게시글 수정을 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Title>게시글 수정</Title>
      {message && <Message>{message}</Message>}
      <Form onSubmit={handleSubmit}>
        <Label>제목</Label>
        <Input
          type="text"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          required
        />

        <Label>내용</Label>
        <TextArea
          rows="10"
          value={boardContent}
          onChange={(e) => setBoardContent(e.target.value)}
          required
        />

        <Label>첨부 파일</Label>
        {existingFileUrl && (
          <>
            <ImagePreview src={existingFileUrl} alt="기존 첨부 파일" />
            <Label>파일 변경:</Label>
          </>
        )}
        <FileInput type="file" onChange={handleFileChange} />

        <SubmitButton type="submit" disabled={submitting}>
          {submitting ? "수정 중..." : "수정 완료"}
        </SubmitButton>
      </Form>
      <CancelButton
        onClick={() => {
          navigate(-1);
        }}
      >
        취소
      </CancelButton>
    </Container>
  );
};

export default EditBoard;
