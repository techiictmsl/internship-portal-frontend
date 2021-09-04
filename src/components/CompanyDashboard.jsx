import React from "react";
import "../styles/CompanyDashboard.css";
import Navbar from "./Navbar";
import FindingInterships from "./FindingInterships";
import Facebook from "../assets/social/facebook.svg";
import Twitter from "../assets/social/twitter.svg";
import Youtube from "../assets/social/youtube.svg";
import Instagram from "../assets/social/instagram.svg";

export default function CompanyDashboard() {
  const socialicons = [Facebook, Twitter, Youtube, Instagram];
  const images = [
    "https://picsum.photos/80",
    "https://picsum.photos/80",
    "https://picsum.photos/80",
    "https://picsum.photos/80",
  ];
  const title = ["Free", "Awesome", "Advanced", "Help"];
  const content = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cumque?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cumque?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cumque?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cumque?",
  ];

  return (
    <div className="companydashboard-container">
      <Navbar />
      <div className="companydashboard-content">
        <div className="company-left">
          <div className="company-socials">
            <h2>Connect With Us</h2>
            <div className="social-links">
              {socialicons.map((icon, index) => {
                return (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                    href="https://github.com/codeswithroh"
                  >
                    <img className="svg-icons" src={icon} alt="social-icons" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="company-dashboard">
            <h2>Dashboard</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
        <div className="company-middle">
          <div className="company-about">
            <img src="https://picsum.photos/id/237/100" alt="" />
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              explicabo?
            </p>
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              explicabo?
            </p>
          </div>
          <div className="company-innovation">
            <h2>Our Innovation</h2>
            <div className="innovation-card-container">
              <div className="innovation-card-inner-container">
                {images.map((image, index) => {
                  if (index % 2 !== 0) {
                    return (
                      <div key={index} className="card-content-left">
                        <img src={image} alt="" />
                        <div className="card-company-content">
                          <h3>{title[index]}</h3>
                          <p>{content[index]}</p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className="card-content-right">
                        <img src={image} alt="" />
                        <div className="card-company-content">
                          <h3>{title[index]}</h3>
                          <p>{content[index]}</p>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        <FindingInterships />
      </div>
    </div>
  );
}
