import React from 'react';
import './NewPost.css'

export default (props) => {
  const handleClick = () => {
    props.setFormState({...props.formState, visible: true, newComment: true})
  }

  return (
    <div className="new-post">
      <div className="new-post__content">
        <p className="new-post__title">
          Maths For 'em
        </p>
        <button className="new-post__btn btn" onClick={handleClick}>
          <p className="new-post__btn__name">
            New Post
          </p>
        </button>
    </div>
    </div>
  );
}