import React, { useState } from 'react';
import './CommentForm.css'

export default (props) => {
  const [comment, setComment] = useState('')
  const [userName, setUserName] =useState('')

  const handleInput = (event) => {
    const target = event.target
    if (target.name === 'comment') {
      setComment(target.value)
    } else if (target.name === 'userName') {
      setUserName(target.value)
    }
  }

  const closeForm = () => {
    props.setFormState({visible: false, newComment: false})
  }

  const handlePost = (event) => {
    event.preventDefault()
    const formFields = {indent: 1, userName: userName, comment: comment}
    const originComments = props.commentsState
    originComments.push(formFields)
    props.setCommentsState(originComments)
    closeForm()
  }

  const handleReply = (event) => {
    event.preventDefault()
    const formFields = {indent: props.formState.indent + 1, userName: userName, comment: comment}
    const originComments = props.commentsState
    originComments.splice(props.formState.replyIndex + 1, 0, formFields)
    props.setCommentsState(originComments)
    closeForm()
  }

  const renderForm = () => {
    if (props.formState.newComment) {
      return (
        <React.Fragment> 
          <div className="comment-form" onClick={closeForm}>
            <div className="comment-form__container" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handlePost}>
                <textarea name="comment" placeholder="Write your post..." onChange={handleInput} />
                <input name="userName" type="text" placeholder="Enter your name" onChange={handleInput} />
                <button className="btn" type="submit">Post</button>
              </form>
            </div>
          </div>
        </React.Fragment>
      )} else {
        return (
          <React.Fragment> 
            <div className="comment-form" onClick={closeForm}>
              <div className="comment-form__container" onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleReply}>
                  <textarea name="comment" placeholder="Write your reply..." onChange={handleInput} />
                  <input name="userName" type="text" placeholder="Enter your name" onChange={handleInput} />
                  <button className="btn" type="submit">Reply</button>
                </form>
              </div>
            </div>
          </React.Fragment>
        )
      }
  }

  return (
    renderForm()
  );
}