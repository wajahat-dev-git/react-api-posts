import { useNavigate } from "react-router-dom";
import "./topbar.css";


const Topbar = () => {

const navigate = useNavigate();

const handleLogout = () => {
navigate('/login');
localStorage.removeItem('currentUser');

};

  return (
    <div className="topbarContainer">
      <p>Project 2 - React App</p>
      <button className="logoutBtn" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Topbar;