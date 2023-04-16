import React, { createContext, useState } from "react";

const getUserFromLocalStorage = () => {
  let currUser = localStorage.getItem("currentUser");
  return currUser ? currUser : null;
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(getUserFromLocalStorage());
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <UserContext.Provider value={{ currUser, setCurrUser, posts, addPost }}>
      {children}
    </UserContext.Provider>
  );
};
