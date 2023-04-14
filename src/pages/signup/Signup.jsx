import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin =() =>{
    navigate("/login");
  }
  const handleSignup = () => {
    const newUser = { name, email, password };
    if (name==="" || email==="" || password===""){
        alert("Please enter all fields")
        return;
    }

    let users = localStorage.getItem("users");

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExist = existingUsers.some((user) => user.email===email);
    if(userExist){
      alert("User with this email already exists");
      return;
    }

    if (!users) {
      users = [];
    } else {
      users = JSON.parse(users);
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">P2 - Reactjs</h3>
          <span className="loginDesc">
            Enter your credentials and connect with your friends all around the
            world!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              className="loginInput"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="loginInput"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your Password"
              className="loginInput"
            />
            <button className="loginButton" onClick={handleSignup}>
              Sign Up
            </button>
            <button className="signupBtn" onClick={handleLogin}>Log into your Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;