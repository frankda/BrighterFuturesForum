import React, { useState, useEffect } from 'react';
import './App.css';
import CommentsList from './components/CommentsList/CommentsList';
import NewPost from './components/NewPost/NewPost';
import CommentForm from './components/CommentForm/CommentForm'

function App() {
  const [formState, setFormState] = useState({visible: false, newComment: false})
  const [commentState, setCommentState] = useState([])

  return (
    <div className="App">
      <div className="header-blank"></div>
        <NewPost formState={formState} setFormState={setFormState} />
        <CommentsList />
        {formState.visible
        ? <CommentForm setFormState={setFormState} setCommentState={setCommentState} />
        : null
        }
    </div>
  );
}

export default App;
