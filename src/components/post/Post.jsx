import React, { useState } from 'react';
import { Users } from '../../dummyData';
import { get_comments } from "../../services/posts";
import './post.css';

const Post = ({ post }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [comments, setComments] = useState([]);
  const [hidden, setHidden] = useState(false);

  const handleCommentClick = async () => {
    if (comments.length === 0) {
      get_comments(post.id)
      .then((res) => setComments(res.data))
      .catch((err) => console.error(err));
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setTitle(post.title);
    setBody(post.body);
  };

  const handleSaveClick = () => {
    post.title = title.trim();
    post.body = body.trim();
    if (post.title==="" || post.body===""){
      setHidden(true);
    }
    setEditMode(false);
  };

  const handleDeleteClick = () => {
    setHidden(true);
  };

  if (hidden) {
    return null;
  }

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <span className="postUsername">
              {Users.length > 0 && Users.filter((u) => u.id === post.userId)[0]?.username}
            </span>
          </div>
          <div className="postTopRight">
            {editMode ? (
              <>
                <button className="cancelBtn" onClick={handleCancelClick}>Cancel</button>
                <button className="saveBtn" onClick={handleSaveClick}>Save</button>
              </>
            ) : (
              <>
                <button className="editBtn" onClick={handleEditClick}>Edit</button>
                <button className="deleteBtn" onClick={handleDeleteClick}>Delete</button>
              </>
            )}
          </div>
        </div>
        <hr className="postHr" />
        <div className="postCenter">
          {editMode ? (
            <>
              <input className='editInput' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              <textarea className='editInput' value={body} onChange={(e) => setBody(e.target.value)} />
            </>
          ) : (
            <>
              <p className="postTitle">{post.title}</p>
              <span className="postBody">{post.body}</span>
            </>
          )}
        </div>
        <div className="postBottom">
          <span className="postCommentText" onClick={handleCommentClick}>
            comments
          </span>
        </div>
        <div className="comments">
          {comments.map((comment) => (
            <div key={comment.id}>
              <h4 className='commentsName'>{comment.name}</h4>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
