import React from 'react';
import './App.css';
import CommentsList from './components/CommentsList/CommentsList';
import NewPost from './components/NewPost/NewPost';

function App() {
  return (
    <div className="App">
      <NewPost />
      <CommentsList />
    </div>
  );
}

export default App;
