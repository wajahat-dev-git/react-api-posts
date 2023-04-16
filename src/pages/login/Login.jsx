import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../utilis/utilis";
import "./login.css";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrUser } = useContext(UserContext);

  const handleLogin = () => {
    let users = localStorage.getItem("users");
    if (!users) {
      alert("No users found. Please sign up.");
      return;
    }
    users = JSON.parse(users);
    const user = users.find((user) => user.email === email && user.password === password);
    if (!user) {
      alert("Invalid email or password.");
      return;
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrUser(user);
    navigate("/");
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">P2 - Reactjs</h3>
          <span className="loginDesc">
            Connect with your friends all around the world!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
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
            <button className="loginButton" onClick={handleLogin}>
              Log In
            </button>
            <button className="signupBtn" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;