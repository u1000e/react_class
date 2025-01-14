import React, { useState, useContext } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Input,
  Button,
  ErrorMessage,
} from "./DeleteAccount.styles";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    setError("");

    axios
      .delete("http://localhost/member", {
        data: {
          password,
        },
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      })
      .then(() => {
        logout();
        navigate("/"); // 탈퇴 후 회원가입 페이지로 이동
      })
      .catch((error) => {
        setError(
          error.response.data.message || "계정 삭제 중 오류가 발생했습니다."
        );
      });
  };

  return (
    <Container>
      <h2>계정 탈퇴</h2>
      <Form onSubmit={handleDeleteAccount}>
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">계정 탈퇴</Button>
      </Form>
    </Container>
  );
};

export default DeleteAccount;
