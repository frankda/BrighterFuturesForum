import React, { useState } from 'react';
import './Comment.css'

export default (props) => {
  const [likes, setLikes] = useState(0)

  return (
    <div className="comment" style={{marginLeft: props.indent * 96 || 48}}>
      <div className="comment__voting">
        <div className="comment__voting__container">
          <div className="comment__voting__container__up-arrow" onClick={() => setLikes(likes + 1)}>
            <div className="arrow"></div>
          </div>
          <p className="votes">{likes}</p>
          <div className="comment__voting__container__down-arrow" onClick={() => setLikes(likes - 1)} >
            <div className="arrow"></div>
          </div>
        </div>
      </div>
      <div className="comment__card">
        <p className="comment__card__title">{props.userName}</p>
        <p className="comment__card__txt">{props.comment}</p>
        <div className="comment__card__btn">
          <button className="btn" onClick={() => props.setFormState({...props.formState, visible: true, replyIndex: props.index, indent: props.indent})}>Reply</button>
        </div>
      </div>
    </div>
  );
}