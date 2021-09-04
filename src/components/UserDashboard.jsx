import React from "react";
import Navbar from "./Navbar";
import FindingInterships from "./FindingInterships";
import "../styles/CompanyDashboard.css";
import "../styles/UserDashboard.css";

export default function UserDashBoard() {
  const skills = ["HTML", "CSS", "Python", "JavaScript"];
  return (
    <div className="companydashboard-container">
      <Navbar />
      <div className="companydashboard-content">
        <div className="company-left">
          <div className="company-socials">
            <h2 className="resume-heading">Resume</h2>
            <div className="resume-actions">
              <div className="resume-actions-items">
                <i class="fas fa-plus"></i>
                <div>Add New</div>
              </div>
              <div className="resume-actions-items">
                <i class="fas fa-download"></i>
                <div>Download</div>
              </div>
              <div className="resume-actions-items">
                <i class="far fa-eye"></i>
                <div>View</div>
              </div>
            </div>
            <h2 className="heading">Skills</h2>
            <div className="resume-actions">
              {skills.map((skill, index) => {
                return (
                  <div key={index} className="skill-items">
                    <div>{skill}</div>
                  </div>
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
            <img
              className="user-pic"
              src="https://picsum.photos/id/237/100"
              alt=""
            />
            <div className="user-primary-details">
              <div className="user-name-college">
                <h4>User</h4>
                <p>Techno Main Saltlake</p>
              </div>
              <div className="user-bio">
                <p>
                  Student at TMSL in B.Tech,I.T| Beginner Frontend Developer |
                  media marketing enthusiast | logo designing | video editing
                </p>
              </div>
            </div>
            <br></br>
            <hr size="1" width="100%" color="black"></hr>
            <div className="user-about">
              <h4>About</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="company-innovation">
            <div className="student-details">
              <div className="student-details-items">
                <h3>Academic Qualification</h3>
                <div className="education-details">
                  <img src="" alt="school-logo" />
                  <div className="school-details">
                    <h4>Techno Main Salt Lake</h4>
                    <p>Electrical Engineering</p>
                    <p>2020-2024</p>
                  </div>
                </div>
              </div>
              <div className="student-details-items">
                <h3>Certificates</h3>
              </div>
              <div className="student-details-items">
                <h3>Projects</h3>
              </div>
            </div>
          </div>
        </div>
        <FindingInterships />
      </div>
    </div>
  );
}
