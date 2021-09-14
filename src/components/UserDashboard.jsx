import React, { useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import "../styles/UserDashboard.css";

export default function UserDashboard() {
  const [active, setactive] = useState(true);
  const [newresume, setnewresume] = useState(false);
  const [edit, setedit] = useState(false);
  const [headline, setheadline] = useState("");
  const [about, setabout] = useState("");
  const [resume, setresume] = useState("");

  // academic qualifications
  const [academic, setacademic] = useState(false);
  const [collegename, setcollegename] = useState("");
  const [yearofentering, setyearofentering] = useState("");
  const [yearofremoval, setyearofremoval] = useState("");
  const [stream, setstream] = useState("");

  // projects
  const [project, setproject] = useState(false);
  const [projecttitle, setprojecttitle] = useState("");
  const [projectdescription, setprojectdescription] = useState("");
  const [projecturl, setprojecturl] = useState("");

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

      {/* academic- background */}
      {academic ? <div className="background"></div> : <></>}

      {/* academic form */}
      {academic ? (
        <div className="academic-form">
          <form className="academic-items">
            <div className="form-inputs">
              <label className="label" htmlFor="college-name">
                College/School Name
              </label>
              <input
                type="text"
                placeholder="write here..."
                id="college-name"
                name="college-name"
                value={collegename}
                onChange={(e) => setcollegename(e.target.value)}
                required={true}
                minLength={5}
                maxLength={40}
              />
            </div>
            <div className="form-inputs">
              <label className="label" htmlFor="year-of-entering">
                Year of Entering
              </label>
              <input
                type="number"
                placeholder="write here..."
                id="year-of-entering"
                name="year-of-entering"
                value={yearofentering}
                onChange={(e) => setyearofentering(e.target.value)}
                required={true}
                maxLength={4}
                minLength={4}
              />
            </div>
            <div className="form-inputs">
              <label className="label" htmlFor="year-of-completion">
                Year of Completion
              </label>
              <input
                type="number"
                placeholder="write here..."
                id="year-of-completion"
                name="year-of-completion"
                value={yearofremoval}
                onChange={(e) => setyearofremoval(e.target.value)}
                required={true}
                maxLength={4}
                minLength={4}
              />
            </div>
            <div className="form-inputs">
              <label className="label" htmlFor="stream">
                Stream
              </label>
              <input
                type="text"
                placeholder="write here..."
                id="stream"
                name="stream"
                value={stream}
                onChange={(e) => setstream(e.target.value)}
                required={true}
                minLength={5}
                maxLength={40}
              />
            </div>
            <button className="academic" type="submit">
              Submit
            </button>
            <button
              className="academic"
              onClick={() => setacademic(false)}
              type="button"
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}

      {/* project-background */}
      {project ? <div className="background"></div> : <></>}

      {/* project-form */}
      {project ? (
        <div className="academic-form">
          <form className="academic-items">
            <div className="form-inputs">
              <label className="label" htmlFor="project-title">
                Title
              </label>
              <input
                type="text"
                placeholder="write here..."
                id="project-title"
                name="project-title"
                value={projecttitle}
                onChange={(e) => setprojecttitle(e.target.value)}
                required={true}
                minLength={5}
                maxLength={40}
              />
            </div>
            <div className="form-inputs">
              <label className="label" htmlFor="project-description">
                Description
              </label>
              <textarea
                style={{ resize: "none" }}
                placeholder="write here..."
                id="project-description"
                name="project-description"
                value={projectdescription}
                onChange={(e) => setprojectdescription(e.target.value)}
                required={true}
                maxLength={100}
                minLength={4}
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="form-inputs">
              <label className="label" htmlFor="project-url">
                Project Url
              </label>
              <input
                type="url"
                placeholder="write here..."
                id="project-url"
                name="project-url"
                value={projecturl}
                onChange={(e) => setprojecturl(e.target.value)}
                maxLength={80}
                minLength={4}
              />
            </div>
            <button className="academic" type="submit">
              Submit
            </button>
            <button
              className="academic"
              onClick={() => setproject(false)}
              type="button"
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}

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
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setnewresume(true)}
                  className="action-item"
                >
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
              <div style={{ marginLeft: "1.2em" }} className="user-initial">
                <h1 style={{ fontWeight: "bold" }}>Rohit Purkait</h1>
                <p style={{ cursor: "pointer" }} onClick={() => setedit(true)}>
                  Edit Profile
                </p>
              </div>
            )}
          </div>
          {/* bootstrap accordion */}
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <h4>Academic Qualifications</h4>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setacademic(true)}
                    className="action-item"
                  >
                    <span>
                      <i className="fas fa-plus"></i>
                    </span>
                    <span>Add new</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h4>Certificates</h4>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setnewresume(true)}
                    className="action-item"
                  >
                    <span>
                      <i className="fas fa-plus"></i>
                    </span>
                    <span>Add new</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h4>Projects</h4>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setproject(true)}
                    className="action-item"
                  >
                    <span>
                      <i className="fas fa-plus"></i>
                    </span>
                    <span>Add new</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* end of accordion */}
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
                          <button className="view-button">
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
                          <button className="view-button">
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
