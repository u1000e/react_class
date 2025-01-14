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
  Button,
  Message,
} from "./InsertForm.styles";
import { useNavigate } from "react-router-dom";

const InsertForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const token = localStorage.getItem("accessToken");
    if (token && storedUsername) {
      setUsername(storedUsername);
      setAccessToken(token);
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !username) {
      setMessage("모든 필드를 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("boardTitle", title);
    formData.append("boardContent", content);
    formData.append("boardWriter", username);
    if (file) {
      formData.append("file", file);
    }

    const response = await axios
      .post(`http://localhost/boards`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          alert("게시글이 성공적으로 작성되었습니다.");
          navigate("/");
        } else {
          setMessage(response.data.message);
        }
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (selectedFile && !allowedTypes.includes(selectedFile.type)) {
      setMessage("허용되지 않는 파일 형식입니다.");
      return;
    }

    if (selectedFile && selectedFile.size > maxSize) {
      setMessage("파일 크기가 너무 큽니다. 5MB 이하로 선택해주세요.");
      return;
    }

    setFile(selectedFile);
    setMessage("");
  };

  return (
    <Container>
      <Title>게시글 작성</Title>
      {message && <Message>{message}</Message>}
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="title">제목</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="제목을 입력하세요"
          />
        </div>
        <div>
          <Label htmlFor="content">내용</Label>
          <TextArea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="내용을 입력하세요"
          ></TextArea>
        </div>
        <div>
          <Label htmlFor="username">작성자 ID</Label>
          <Input id="username" type="text" value={username} readOnly />
        </div>
        <div>
          <Label htmlFor="file">파일 첨부: </Label>
          <FileInput
            id="file"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <Button type="submit">작성</Button>
      </Form>
    </Container>
  );
};

export default InsertForm;
