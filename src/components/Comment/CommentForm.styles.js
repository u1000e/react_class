import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const TextArea = styled.textarea`
  resize: none;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;
