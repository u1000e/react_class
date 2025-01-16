import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CommentContainer,
  CommentItem,
  CommentAuthor,
  CommentContent,
  CommentDate,
} from "./CommentList.styles";

const CommentList = ({ boardId, comments }) => {
  return (
    <CommentContainer>
      {comments.length === 0 ? (
        <p>작성된 댓글이 없습니다.</p>
      ) : (
        comments.map((comment) => (
          <CommentItem key={comment.commentNo}>
            <CommentAuthor>{comment.userNo}</CommentAuthor>
            <CommentContent>{comment.content}</CommentContent>
            <CommentDate>
              {new Date(comment.createDate).toLocaleString()}
            </CommentDate>
          </CommentItem>
        ))
      )}
    </CommentContainer>
  );
};

export default CommentList;
