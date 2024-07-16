import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  const handleLogin = () =>{navigate('/Homepage')}
  return (
    <div className="seperate">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <nav className="navbar">
        <ul className="nav-links">
        <Link to='/' style={{textDecoration: 'none', color:'#1D2229'}}><li>Home</li></Link>
          <li>About</li>
          <Link to='classes' style={{textDecoration: 'none', color:'#1D2229'}}><li>Classes</li></Link>
          <li>Trainers</li>
          <li>News</li>
          <li>Contact</li>
          <button>Book Class</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
