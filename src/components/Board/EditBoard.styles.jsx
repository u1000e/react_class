import styled from "styled-components";
export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  @media (max-width: 768px) {
    margin: 20px;
    padding: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 1.8em;
  color: #333333;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  resize: none;
`;

export const FileInput = styled.input`
  padding: 5px 0;
  margin-bottom: 15px;
`;

export const ImagePreview = styled.img`
  min-width: auto;
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 8px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #27ae60;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: center;

  &:hover {
    background-color: #1e8449;
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #95a5a6;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  align-self: center;

  &:hover {
    background-color: #7f8c8d;
  }
`;

export const Message = styled.p`
  text-align: center;
  color: "#2ecc71";
  margin-bottom: 20px;
`;
