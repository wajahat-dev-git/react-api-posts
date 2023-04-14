import React, { createContext, useState } from "react";

const getUserFromLocalStorage = () => {
  let currUser = localStorage.getItem("currentUser");
  return currUser ? currUser : null;
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(getUserFromLocalStorage());

  return (
    <UserContext.Provider value={{ currUser, setCurrUser }}>
      {children}
    </UserContext.Provider>
  );
};
