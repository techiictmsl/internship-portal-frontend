import React, { useState } from "react";
import "../styles/navcol.css";
import Logo from "../assets/logo.png";
import PopupContent from "./Popup-content";
function NavCollap() {
  const [show, setShow] = useState(false);
  const year = new Date().getFullYear();
  // console.log(year);
  // function openNav() {}
  // function closeNav() {}
  return (
    <div>
      <div className={show ? "sidebar openNav" : "sidebar"}>
        <div
          className="closebtn"
          onClick={() => setShow(false)}
        >
          ×
        </div>
        <div className="sidebarContent">
          <div className="logo">
            <img src={Logo} alt="IIC Logo" />
          </div>
          <div className="Dashboard">
            <i className="fas fa-laptop"></i>Dashboard
          </div>
          <div className="logout">
            <i className="fas fa-folder-open"></i>Logout
          </div>
          <div className="footerSide">&copy; {year} IIC TMSL</div>
        </div>
      </div>

      <div id={show ? "newMain" : "main"}>
        <div className="nav">
          <div className="topHead">
            <div className="brandTitle">
              <button className="openbtn" onClick={() => setShow(true)}>
                ☰ Dashboard
              </button>
            </div>
            <div className="user">
              <i className="fas fa-user-circle"></i>
              <button>
                User <i className="fas fa-chevron-down"></i>
              </button>

              <ul>
                <li>
                  <div href="#">Option1</div>
                </li>
                <li>
                  <div href="#">Option2</div>
                </li>
                <li>
                  <div href="#">Option3</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mainContainer">
          <div className="heading">Companies</div>
          <div className="content_admin_dash">
            <div className="companyContent">
              <div className="companyinfo-serial">Sl no</div>
              <div className="companyinfo-left">Company name</div>
              <div className="companyinfo-left websiteLink">
                Company website
              </div>
              <div className="companyinfo-middle">Date of application</div>
              <div className="companyinfo-left approvalCol">
                <div>1</div>
                <div>Next</div>
              </div>
            </div>
            <div className="companyContent">
              <div className="companyinfo-serial">1</div>
              <div className="companyinfo-left" style={{ color: "blue" }}>
                <PopupContent />
              </div>
              <div className="companyinfo-left websiteLink">
                www.teachforIndia.com
              </div>
              <div className="companyinfo-middle">3.5.09</div>
              <div className="companyinfo-left approvalCol">
                <div style={{ color: "green" }}>
                  <i className="fas fa-check"></i>Accept
                </div>
                <div style={{ color: "red" }}>
                  <i className="fas fa-trash-alt"></i>Delete
                </div>
              </div>
            </div>
            <div className="companyContent">
              <div className="companyinfo-serial">2</div>
              <div className="companyinfo-left" style={{ color: "blue" }}>
                <PopupContent />
              </div>
              <div className="companyinfo-left websiteLink">
                www.teachforIndia.com
              </div>
              <div className="companyinfo-middle">3.5.09</div>
              <div className="companyinfo-left approvalCol">
                <div style={{ color: "green" }}>
                  <i className="fas fa-check"></i>Accept
                </div>
                <div style={{ color: "red" }}>
                  <i className="fas fa-trash-alt"></i>Delete
                </div>
              </div>
            </div>
            <div className="companyContent">
              <div className="companyinfo-serial">3</div>
              <div className="companyinfo-left" style={{ color: "blue" }}>
                <PopupContent />
              </div>
              <div className="companyinfo-left websiteLink">
                www.teachforIndia.com
              </div>
              <div className="companyinfo-middle">3.5.09</div>
              <div className="companyinfo-left approvalCol">
                <div style={{ color: "green" }}>
                  <i className="fas fa-check"></i>Accept
                </div>
                <div style={{ color: "red" }}>
                  <i className="fas fa-trash-alt"></i>Delete
                </div>
              </div>
            </div>
            <div className="companyContent">
              <div className="companyinfo-serial">4</div>
              <div className="companyinfo-left" style={{ color: "blue" }}>
                <PopupContent />
              </div>
              <div className="companyinfo-left websiteLink">
                www.teachforIndia.com
              </div>
              <div className="companyinfo-middle">3.5.09</div>
              <div className="companyinfo-left approvalCol">
                <div style={{ color: "green" }}>
                  <i className="fas fa-check"></i>Accept
                </div>
                <div style={{ color: "red" }}>
                  <i className="fas fa-trash-alt"></i>Delete
                </div>
              </div>
            </div>
            <div className="companyContent">
              <div className="companyinfo-serial">5</div>
              <div className="companyinfo-left" style={{ color: "blue" }}>
                <PopupContent />
              </div>
              <div className="companyinfo-left websiteLink">
                www.teachforIndia.com
              </div>
              <div className="companyinfo-middle">3.5.09</div>
              <div className="companyinfo-left approvalCol">
                <div style={{ color: "green" }}>
                  <i className="fas fa-check"></i>Accept
                </div>
                <div style={{ color: "red" }}>
                  <i className="fas fa-trash-alt"></i>Delete
                </div>
              </div>
            </div>
            <div className="companyContent">
              <div className="companyinfo-serial">6</div>
              <div className="companyinfo-left" style={{ color: "blue" }}>
                TeachFor India
              </div>
              <div className="companyinfo-left websiteLink">
                www.teachforIndia.com
              </div>
              <div className="companyinfo-middle">3.5.09</div>
              <div className="companyinfo-left approvalCol">
                <div style={{ color: "green" }}>
                  <i className="fas fa-check"></i>Accept
                </div>
                <div style={{ color: "red" }}>
                  <i className="fas fa-trash-alt"></i>Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavCollap;
