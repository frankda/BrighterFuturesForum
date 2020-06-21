import React, { useState } from 'react';
import './Comment.css'

export default (props) => {
  const [indentState, setIndentState] = useState(1)

  return (
    <div className="comment" style={{marginLeft: props.indent * 96 || 48}}>
      <div className="comment__voting">
        <div className="comment__voting__container">
          <div className="comment__voting__container__up-arrow">
            <div className="arrow"></div>
          </div>
          <p className="votes">0</p>
          <div className="comment__voting__container__down-arrow">
            <div className="arrow"></div>
          </div>
        </div>
      </div>
      <div className="comment__card">
        <p className="comment__card__title">Pythagoras</p>
        <p className="comment__card__txt">TIL if only i had an easy way to type that equation</p>
        <div className="comment__card__btn">
          <button className="btn">Reply</button>
        </div>
      </div>
    </div>
  );
}