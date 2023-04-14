import { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import { get_posts } from "../../services/posts";
import "./home.css";


const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    get_posts()
    .then((res)=>setPosts(res.data))
    .catch((err) => console.error(err))   
  }

  useEffect(() => {
    fetchPosts()
  }, []);

  const handleNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <Topbar />
      <div className="homeContainer">
       <Feed posts={posts} onNewPost={handleNewPost}/>
      </div>
    </>
  );
};

export default Home;
