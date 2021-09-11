import React, { useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import "../styles/UserDashboard.css";

export default function UserDashboard() {
  const [active, setactive] = useState(true);
  const [newresume, setnewresume] = useState(true);
  const [edit, setedit] = useState(false);
  const [headline, setheadline] = useState("");
  const [about, setabout] = useState("");
  const [resume, setresume] = useState("");
  const handleResume = (e) => {
    e.preventDefault();
    console.log(resume);
  };
  const companyname = [
    "Accenture",
    "Apple",
    "Google",
    "Flipkart",
    "Amazon",
    "Netflix",
  ];
  const location = [
    "Kolkata",
    "Kolkata",
    "Kolkata",
    "Kolkata",
    "Kolkata",
    "Kolkata",
  ];
  const positions = [
    "Web Developer",
    "System Designer",
    "Data Scientists",
    "Product Engineer",
    "Designer",
    "Marketing Expert",
  ];
  const date = [
    "Jan 2020- Apr 2020",
    "Jan 2020- Apr 2020",
    "Jan 2020- Apr 2020",
    "Jan 2020- Apr 2020",
    "Jan 2020- Apr 2020",
    "Jan 2020- Apr 2020",
  ];
  return (
    <div className="userdashboard-container">
      <Navbar />
      {edit ? <div className="background"></div> : <></>}
      {newresume ? <div className="background"></div> : <></>}
      <div className="userdashboard-content">
        <div className="userdashboard-left">
          <div className="user-resume-container">
            {newresume ? (
              <div className="resume-upload-container">
                <form
                  className="resume-uploader"
                  onSubmit={(e) => handleResume(e)}
                >
                  <label htmlFor="resume">Upload your resume: </label>
                  <input
                    type="file"
                    accept=".pdf"
                    id="resume"
                    name="resume"
                    onChange={(val) => setresume(val.target.files)}
                  />
                  <div className="upload-cancel">
                    <button className="upload" type="submit">
                      Upload
                    </button>
                    <button
                      className="upload"
                      onClick={() => setnewresume(false)}
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <></>
            )}
            <div className="resume-part">
              <h2>Resume</h2>
              <div className="resume-actions">
                <div onClick={() => setnewresume(true)} className="action-item">
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>
                  <span>Add new</span>
                </div>
                <div className="action-item">
                  <span>
                    <i className="fas fa-download"></i>
                  </span>
                  <span>Download</span>
                </div>
                <div className="action-item">
                  <span>
                    <i className="far fa-eye"></i>
                  </span>
                  <span>View</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="user-skills">
              <h2>Skills</h2>
              <div className="skill-tags">
                <div className="skill-item">Leadership</div>
                <div className="skill-item">Marketing</div>
                <div className="skill-item">Content Writing</div>
              </div>
            </div>
          </div>
        </div>
        <div className="userboard-middle">
          <div className="user-details">
            {edit ? (
              <div className="user-profile-details">
                <form className="user-profile-intro">
                  <h2 className="edit-heading">Edit Intro</h2>
                  <label className="label" htmlFor="headline">
                    Headline
                  </label>
                  <input
                    type="text"
                    id="headline"
                    name="headline"
                    value={headline}
                    onChange={(e) => setheadline(e.target.value)}
                    minLength={5}
                    maxLength={30}
                    required={true}
                  />
                  <label className="label" htmlFor="about">
                    About
                  </label>
                  <input
                    type="text"
                    id="about"
                    name="about"
                    value={about}
                    onChange={(e) => setabout(e.target.value)}
                    minLength={5}
                    maxLength={60}
                    required={true}
                  />
                  <div className="two-buttons">
                    <button className="save" type="submit">
                      Save
                    </button>
                    <button
                      className="save"
                      onClick={() => setedit(false)}
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="user-initial">
                <h1>Rohit Purkait</h1>
                <p style={{ cursor: "pointer" }} onClick={() => setedit(true)}>
                  Edit Profile
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="userboard-right">
          <div className="user-internships">
            <div className="internship-dashboard-heading">
              <h2>Dashboard</h2>
            </div>
            <div className="active-completed-internships">
              <div
                style={
                  active
                    ? { fontWeight: "bold" }
                    : { background: "transparent" }
                }
                className="active-internships"
                onClick={() => setactive(true)}
              >
                <span>Active</span>
                <span className="total-active">4</span>
              </div>
              <div
                style={
                  !active
                    ? { fontWeight: "bold" }
                    : { background: "transparent" }
                }
                className="completed-internships"
                onClick={() => setactive(false)}
              >
                <span>Completed</span>
                <span className="total-complete">4</span>
              </div>
            </div>
            <div>
              {active ? (
                <div className="internships-content">
                  {companyname.map((company, index) => {
                    return (
                      <div className="internship-record" key={index}>
                        <div>
                          <span className="number">{index + 1}. </span>
                          <span className="company-name-details">
                            <span className="company-name">{company}</span>
                            <p className="position">
                              <span>{positions[index]}</span>|
                              <span>{date[index]}</span>|
                              <span>{location[index]}</span>
                            </p>
                          </span>
                        </div>
                        <span>
                          <button>
                            <i className="fas fa-download"></i>
                            <span>view</span>
                          </button>
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="internships-content-completed">
                  {companyname.map((company, index) => {
                    return (
                      <div className="internship-record" key={index}>
                        <div>
                          <span className="number">{index}. </span>
                          <span className="company-name-details">
                            <span className="company-name">{company}</span>
                            <p className="position">
                              <span>{positions[index]}</span>|
                              <span>{date[index]}</span>|
                              <span>{location[index]}</span>
                            </p>
                          </span>
                        </div>
                        <span>
                          <button>
                            <i className="fas fa-download"></i>
                            <span>view</span>
                          </button>
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
