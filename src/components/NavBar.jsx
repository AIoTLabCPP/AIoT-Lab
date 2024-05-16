import React from "react";
import "../assets/css/navBar.css";
import { Link } from "react-router-dom";
import aiotlogo from '../assets/images/AIOT_logo.png';

export default function NavBar() {
  return (
    <div className="navBar">
       <div className="icon items">
        <Link to="/">
          <img alt="AIOT Logo" src={aiotlogo} style={{ width: '5.7vw', height: '4.3vh' }} />
        </Link>
      </div>
      <div className="pages items">
        <Link to="/team">TEAM</Link>
      </div>
      <div className="pages items">
        <Link to="/outcomes">OUTCOMES</Link>
      </div>
      <div className="pages items">
        <Link to="/news">NEWS</Link>
      </div>
    </div>
  );
}
