import axios from "axios";
import React, { useState, useContext } from "react";
import {
  LoginContainer,
  Form,
  Input,
  Button,
  ErrorMessage,
} from "./Login.styles";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:80/member/login", {
        userName,
        userPwd,
      })
      .then((response) => {
        const { accessToken, refreshToken, username } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("username", username);
        login(username, accessToken, refreshToken);
        window.location = "/";
      })
      .catch((error) => {
        setError(error.response.data.detail);
      });
  };

  return (
    <LoginContainer>
      <h2>로그인</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="사용자명"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={userPwd}
          onChange={(e) => setUserPwd(e.target.value)}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">로그인</Button>
      </Form>
    </LoginContainer>
  );
};

export default Login;
