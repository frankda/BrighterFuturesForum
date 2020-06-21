import React, { useState, useEffect, Component } from 'react';
import Comment from '../Comment/Comment';
import './CommentsList.css';

export default () => {
  const example1 = {
    indent: 1,
    userName: 'frank',
    comment: 'this is a comment',
    threads: [
      {
        indent: 2,
        userName: 'frank',
        comment: 'this is a comment',
        threads: []
      }
    ],
  }

  const example2 = {
    indent: 1,
    userName: 'frank',
    comment: 'this is a comment',
    threads: [
    ],
  }

  const [commentsState, setCommentState] = useState([example1, example2]);
  const [commentsList, setCommentsList] = useState([])

  useEffect(() => {
    const commentsArr = []
    flatten(commentsState, commentsArr)
    setCommentsList(commentsArr)
  }, [commentsState])
  

  const flatten = (arr, objArr) => {
    arr.forEach((obj) => {
      objArr.push({indent: obj.indent, userName: obj.userName, comment: obj.comment})
      if (obj.threads.length != 0) {
        return flatten(obj.threads, objArr)
      }
    })
    return objArr
  }

  return (
    <div className="comments-list">
      <div className="comments-list__container">
        {/* {renderComments()} */}
        {/* <Comment />   */}
        {commentsList.map((comment, index) => {
          return <Comment key={index} indent={comment.indent} />
        })}
      </div>
    </div>
  );
}