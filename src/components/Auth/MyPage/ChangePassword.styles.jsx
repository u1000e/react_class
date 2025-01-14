import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
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
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;
