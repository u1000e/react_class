import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Title,
  Author,
  Content,
  Image,
  EditButton,
  DeleteButton,
  BackButton,
  Message,
} from "./BoardDetail.styles";
import { useParams, useNavigate } from "react-router-dom";

const BoardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await axios.get(`http://localhost/boards/${id}`, {});
        setBoard(response.data);
        setLoading(false);
      } catch (err) {
        console.error("게시글 조회 실패:", err);
        setMessage("게시글을 불러오는데 실패했습니다.");
        setError(true);
        setLoading(false);
      }
    };

    fetchBoard();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    navigate(`/boards/${id}/edit`);
  };

  const handleDelete = async () => {
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      try {
        await axios.delete(`http://localhost/boards/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMessage("게시글이 성공적으로 삭제되었습니다.");
        setTimeout(() => {
          navigate("/boards");
        }, 1500);
      } catch (err) {
        console.error("게시글 삭제 실패:", err);
        setMessage("게시글 삭제에 실패했습니다.");
        setError(true);
      }
    }
  };

  if (loading) {
    return (
      <Container>
        <Message>로딩 중...</Message>
      </Container>
    );
  }

  if (!board) {
    return (
      <Container>
        <Message $error={true}>게시글을 찾을 수 없습니다.</Message>
      </Container>
    );
  }

  return (
    <Container>
      <Title>{board.boardTitle}</Title>
      <Author>작성자: {board.boardWriter}</Author>
      <Content>{board.boardContent}</Content>
      {board.fileUrl && <Image src={board.fileUrl} alt="첨부 이미지" />}
      {localStorage.getItem("username") === board.boardWriter && (
        <div>
          <EditButton onClick={handleEdit}>수정하기</EditButton>
          <DeleteButton onClick={handleDelete}>삭제하기</DeleteButton>
        </div>
      )}
      <BackButton onClick={handleBack}>뒤로가기</BackButton>
    </Container>
  );
};

export default BoardDetail;
