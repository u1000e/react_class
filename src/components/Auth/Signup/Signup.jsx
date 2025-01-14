import React, { useState } from "react";
import {
  SignupContainer,
  Form,
  Input,
  Button,
  ErrorMessage,
} from "./Signup.styles";
import axios from "axios";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost/member/join", {
        userName,
        userPwd,
      })
      .then((response) => {
        if (response.status === 201) {
          alert(response.data);
          window.location = "/login";
        } else {
          setError(response.data.message);
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <SignupContainer>
      <h2>회원가입</h2>
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
        <Button type="submit">회원가입</Button>
      </Form>
    </SignupContainer>
  );
};

export default Signup;
