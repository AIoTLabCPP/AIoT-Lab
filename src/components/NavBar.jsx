import React from "react";
import "../assets/css/navBar.css";
import { Link } from "react-router-dom";
import aiotlogo from '../assets/images/AIOT_logo.png';
import Dropdown from "./Dropdown";

export default function NavBar() {
  const Options = {
    software: {
      name: "TESTBED PLATFORM",
      page: "/software"
    },

    publications: {
      name: "PUBLICATIONS",
      page: "/publications"
    }
  }

  return (
    <div className="navBar">
      <div className="pages">
        <div className="item_wrapper">
          <div className="items">
            <Link to="/">HOME</Link>
          </div>
        </div>
        <div className="item_wrapper">
          <div className="items">
            <Link to="/team">TEAM</Link>
          </div>
        </div>
        <div className="item_wrapper">
          <div className="items">
           <Dropdown options={Options} />
          </div>
        </div>
        <div className="item_wrapper">
          <div className="items">
            <Link to="/news">NEWS</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
