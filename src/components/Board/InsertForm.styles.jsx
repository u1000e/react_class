import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 20px;
    padding: 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #333333;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  text-align: center;
  color: "#e74c3c";
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: #555555;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  resize: none;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
    outline: none;
  }
`;

export const FileInput = styled.input`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #2ecc71;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  align-self: flex-end;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #1e8449;
    transform: translateY(0);
  }
`;
