import { useContext, useState } from 'react';
import { UserContext } from "../../utilis/utilis";
import Post from '../post/Post';
import './create.css';

const Createpost = () => {
  const [postWrapper, setState] = useState({ title: '', body: '' });
  const { addPost } = useContext(UserContext);

  const handleTitleChange = (e) => {
    setState({ ...postWrapper, title: e.target.value });
  };

  const handleBodyChange = (e) => {
    setState({ ...postWrapper, body: e.target.value });
  };

  const handleCreatePost = () => {
    const newPost = {
      userId: 1,
      id: Date.now(),
      title: postWrapper.title.trim(),
      body: postWrapper.body.trim()
    };

    if (newPost.title === '' && newPost.body === '') {
      alert("Post must have a title and body");
      return;
    }

    if (newPost.title !== '' && newPost.body !== '') {
      addPost(newPost);
      setState({ title: '', body: '' });
    }
  };

  return (
    <div className="createContainer">
      <div className="createWrapper">
        <div className="createTop">
          <input
            placeholder="Title"
            className="createInput"
            value={postWrapper.title}
            onChange={handleTitleChange}
          />
          <input
            placeholder="Body"
            className="createInput"
            value={postWrapper.body}
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
      <UserContext.Consumer>
        {(context) =>
          context.posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        }
      </UserContext.Consumer>
    </div>
  );
};

export default Createpost;
