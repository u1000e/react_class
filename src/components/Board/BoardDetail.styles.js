import styled from "styled-components";
export const Container = styled.div`
  max-width: 800px;
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
  font-size: 2em;
  color: #333333;
  margin-bottom: 20px;
  text-align: center;
  min-height: 50px;
`;

export const Content = styled.p`
  font-size: 1.2em;
  color: #555555;
  line-height: 1.6;
  margin-bottom: 20px;
  min-height: 200px;
`;

export const Author = styled.span`
  font-size: 0.9em;
  color: #888888;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
  display: block;
  margin: 20px auto;
  border-radius: 8px;
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: auto;
  margin-top: 20px;

  &:hover {
    background-color: #2980b9;
  }
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  background-color: #fff099;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: auto;
  display: block;
  margin-top: 20px;

  &:hover {
    background-color: #fff066;
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 20px;
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #c0392b;
  }
`;

export const Message = styled.p`
  text-align: center;
  color: ${(props) => (props.$error ? "#e74c3c" : "#2ecc71")};
  margin-bottom: 20px;
`;
