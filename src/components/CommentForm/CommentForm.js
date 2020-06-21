import React, { useState } from 'react';
import './CommentForm.css'

export default (props) => {
  const handleClick = () => {
    props.setFormState({visible: false, newComment: false})
  }

  const handleSubmit = () => {
    
  }

  return (
    <div className="comment-form" onClick={handleClick}>
      <div className="comment-form__container" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <textarea name="comment" placeholder="Write your post..." />
          <input name="userName" type="text" placeholder="Enter your pseudonym" />
          <button className="btn" type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}