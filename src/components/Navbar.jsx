import React, { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [appear, setAppear] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <h1>Philips</h1>
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
          <div className="navbar-items">
            <i className="fas fa-comments"></i>
            <p>feedback</p>
          </div>
          <div className="navbar-items">
            <i className="fas fa-bell"></i>
            <p>notification</p>
          </div>
          <div className="navbar-items">
            <i className="fas fa-user"></i>
            <p>user</p>
          </div>
          <div className="navbar-items">
            <i className="fas fa-hands-helping"></i>
            <p>help</p>
          </div>
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
            <p>About</p>
          </div>
          <div className="navbar-mobile-content-items">
            <p>Connections</p>
          </div>
          <div className="navbar-mobile-content-items">
            <p>Feedback</p>
          </div>
          <div className="navbar-mobile-content-items">
            <p>Help</p>
          </div>
          <div className="navbar-mobile-content-items">
            <p>Messaging</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
