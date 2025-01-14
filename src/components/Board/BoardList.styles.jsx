import styled from "styled-components";
export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  @media (max-width: 768px) {
    margin: 20px;
    padding: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 2em;
  color: #333333;
  margin-bottom: 20px;
  text-align: center;
`;

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PostItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9f9f9;
    cursor: pointer;
  }
`;

export const PostTitle = styled.a`
  font-size: 1.2em;
  color: #3498db;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Author = styled.span`
  font-size: 0.9em;
  color: #888888;
`;

export const AddButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #2ecc71;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27ae60;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto 0;
  padding: 10px 30px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

export const Message = styled.p`
  text-align: center;
  color: "#2ecc71";
  margin-bottom: 20px;
`;
