import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../utilis/utilis";
import "./topbar.css";


const Topbar = () => {
const { setCurrUser } = useContext(UserContext);
const navigate = useNavigate();

const handleLogout = () => {
navigate('/login');
localStorage.removeItem('currentUser');
setCurrUser(null);
};

  return (
    <div className="topbarContainer">
      <p>Project 2 - React App</p>
      <button className="logoutBtn" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Topbar;