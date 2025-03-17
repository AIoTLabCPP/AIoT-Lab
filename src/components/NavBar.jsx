import React from "react";
import "../assets/css/navBar.css";
import { Link } from "react-router-dom";
import aiotlogo from '../assets/images/AIOT_logo.png';
import Dropdown from "./Dropdown";

export default function NavBar() {
  const Options = {
    software: {
      name: "TESTBED PLATFORMS",
      page: "/software"
    },

    publications: {
      name: "PUBLICATIONS",
      page: "/publications"
    }
  }

  return (
    <div className="navBar">
      <Link style={{ textDecoration: 'none' }} className="items" to="/">HOME</Link>
      <Link style={{ textDecoration: 'none' }} className="items" to="/team">TEAM</Link>
      <Link style={{ textDecoration: 'none' }} className="items" to="/alumni">ALUMNI</Link>
      <Dropdown className="items" options={Options} />
      <Link style={{ textDecoration: 'none' }} className="items" to="/news">NEWS</Link>
    </div>
  );
}
