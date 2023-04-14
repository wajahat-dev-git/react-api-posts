import Create from "../create/Create";
import Post from "../post/Post";
import "./feed.css";

const Feed = (props) => {

  const handleCreateNewPost = (newPost) => {
    props.onNewPost(newPost);
  };

  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Create onCreatePost={handleCreateNewPost} />
        {props.posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;