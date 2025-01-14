import React, { useState, useContext } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Input,
  Button,
  ErrorMessage,
} from "./ChangePassword.styles";
import { AuthContext } from "../../context/AuthContext";

const ChangePassword = () => {
  const { auth } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    axios
      .put(
        "http://localhost/member",
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      )
      .then(() => {
        setSuccess("비밀번호가 성공적으로 변경되었습니다.");
        setCurrentPassword("");
        setNewPassword("");
      })
      .catch((error) => {
        setError(
          error.response.data.message || "비밀번호 변경 중 오류가 발생했습니다."
        );
      });
  };

  return (
    <Container>
      <h2>비밀번호 변경</h2>
      <Form onSubmit={handleChangePassword}>
        <Input
          type="password"
          placeholder="현재 비밀번호"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="새 비밀번호"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <Button type="submit">비밀번호 변경</Button>
      </Form>
    </Container>
  );
};

export default ChangePassword;
