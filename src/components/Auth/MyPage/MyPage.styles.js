import styled from "styled-components";
export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Tab = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? "#61dafb" : "#f0f0f0")};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #61dafb;
    color: white;
  }
`;

export const Content = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
`;
