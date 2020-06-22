import React, { useState, useEffect } from 'react';
import './App.css';
import CommentsList from './components/CommentsList/CommentsList';
import NewPost from './components/NewPost/NewPost';
import CommentForm from './components/CommentForm/CommentForm'

function App() {
  const example1 = {
    indent: 1,
    userName: 'Lucien',
    comment: 'Plz leave your question here',
  }

  const example2 = {
    indent: 2,
    userName: 'student 1',
    comment: 'How to solve riemann hypothesis?',
  }

  const [formState, setFormState] = useState({visible: false, newComment: false, replyIndex: null, indent: 1})
  const [commentsState, setCommentsState] = useState([example1, example2])

  return (
    <div className="App">
      <div className="header-blank"></div>
        <NewPost formState={formState} setFormState={setFormState} />
        <CommentsList commentsState={commentsState} setFormState={setFormState} />
        {formState.visible
        ? <CommentForm formState={formState} setFormState={setFormState} setCommentsState={setCommentsState} commentsState={commentsState} />
        : null
        }
    </div>
  );
}

export default App;
