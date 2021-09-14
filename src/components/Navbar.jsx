import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [appear, setAppear] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <h1>IIC</h1>
        </div>
        <div className="navbar-content">
          <div className="navbar-items">
            <i className="fas fa-home"></i>
            <p>home</p>
          </div>
          <div className="navbar-items">
            <i className="fas fa-globe"></i>
            <p>connection</p>
          </div>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/userdashboard"
            className="navbar-items"
          >
            <i className="fas fa-user"></i>
            <p>user</p>
          </Link>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/signup"
            className="navbar-items"
          >
            <i className="fas fa-lock"></i>
            <p>signup/login</p>
          </Link>
          <div
            onClick={() => setAppear(!appear)}
            className="navbar-items-mobile"
          >
            {appear ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
        </div>
      </div>
      {/* for mobile */}
      {appear ? (
        <div className="navbar-mobile-content">
          <div className="navbar-mobile-content-items">
            <p>Home</p>
          </div>
          <div className="navbar-mobile-content-items">
            <p>Connection</p>
          </div>
          <div className="navbar-mobile-content-items">
            <p>User</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
