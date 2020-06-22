import React, { useState, useEffect, Component } from 'react';
import Comment from '../Comment/Comment';
import './CommentsList.css';

export default (props) => {
  return (
    <div className="comments-list">
      <div className="comments-list__container">
        {props.commentsState.map((comment, index) => {
          return <Comment 
                  key={index} 
                  indent={comment.indent}
                  userName={comment.userName}
                  comment={comment.comment}
                  setFormState={props.setFormState}
                  index={index}
                  />
        })}
      </div>
    </div>
  );
}