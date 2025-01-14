import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Title,
  Message,
  AddButton,
  PostList,
  PostItem,
  PostTitle,
  Author,
  LoadMoreButton,
} from "./BoardList.styles";
import { useNavigate } from "react-router-dom";

const BoardList = () => {
  const [boards, setBoards] = useState([]);
  const [message, setMessage] = useState("");
  const [page, setPage] = useState(0); // 현재 페이지 번호
  const [hasMore, setHasMore] = useState(true); // 더 불러올 게시글이 있는지 여부
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get(`http://localhost/boards`, {
          params: {
            page: page,
          },
        });
        console.log(response.data);
        setBoards((prevBoards) => [...prevBoards, ...response.data]);
        if (response.data.length < 3) {
          setHasMore(false);
        }
      } catch (err) {
        console.error("게시글 목록 조회 실패:", err);
        setMessage("게시글 목록을 불러오는데 실패했습니다.");
        setError(true);
      }
    };

    fetchBoards();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Container>
      <Title>게시글 목록</Title>
      {message && <Message $error={error}>{message}</Message>}
      <AddButton onClick={() => navigate("/insert")}>새 게시글 작성</AddButton>
      <PostList>
        {boards.map((board) => (
          <PostItem key={board.boardNo}>
            <PostTitle
              onClick={() => {
                navigate(`/boards/${board.boardNo}`);
              }}
            >
              {board.boardTitle}
            </PostTitle>
            <Author>작성자: {board.boardWriter}</Author>
          </PostItem>
        ))}
      </PostList>
      {hasMore && (
        <LoadMoreButton onClick={handleLoadMore}>더 보기</LoadMoreButton>
      )}
    </Container>
  );
};

export default BoardList;
