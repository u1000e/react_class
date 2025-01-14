import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ff4d4f;
  border-radius: 8px;
  background-color: #ffe6e6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #ff4d4f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #d9363e;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;
