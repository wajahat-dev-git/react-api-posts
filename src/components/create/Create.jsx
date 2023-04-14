import { useState } from 'react';

import Post from '../post/Post';
import './create.css';

const Create = () => {
  const [state, setState] = useState({ title: '', body: '', posts: [] });

  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };

  const handleBodyChange = (e) => {
    setState({ ...state, body: e.target.value });
  };

  const handleCreatePost = () => {
    const newPost = {
      userId: 1,
      id: Date.now(),
      title: state.title.trim(),
      body: state.body.trim()
    };

    if (newPost.title === '' && newPost.body === '') {
      alert("Post must have a title and body");
      return;
    }

    if (newPost.title !== '' && newPost.body !== '') {
      setState({ title: '', body: '', posts: [...state.posts, newPost] });
    }
  };

  return (
    <div className="createContainer">
      <div className="createWrapper">
        <div className="createTop">
          <input
            placeholder="Title"
            className="createInput"
            value={state.title}
            onChange={handleTitleChange}
          />
          <input
            placeholder="Body"
            className="createInput"
            value={state.body}
            onChange={handleBodyChange}
          />
        </div>
        <hr className="createHr" />
        <div className="createBottom">
          <button className="createBtn" onClick={handleCreatePost}>
            Share
          </button>
        </div>
      </div>
      {state.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

    </div>
  );
};

export default Create;