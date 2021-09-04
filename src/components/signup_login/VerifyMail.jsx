import React, { useState } from "react";
import "../../styles/signup_login/SignUp.css";
import axios from "axios";
import login from "../../assets/signup-login/login.gif";
import { useHistory } from "react-router-dom";

export default function VerifyMail() {
  const [username, setusername] = useState("");
  const [otp, setotp] = useState("");
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://arcane-stream-76776.herokuapp.com/verifyemail", {
        username: username,
        otp: otp,
      })
      .then(() => {
        history.push("/login");
      })
      .catch(() => {});
  };
  return (
    <div className="signup-container">
      <div className="signup-main">
        <h1 className="signup-heading">Verify Mail</h1>
        <hr style={{ width: "50%" }} />
        <div className="signup-content login-content">
          <div className="signup-content-left">
            <form onSubmit={(e) => handleSubmit(e)}>
              <p>Please fill in this form to verify your email!</p>
              <div className="form-input-container">
                <span className="form-before">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-input-field"
                  placeholder="Username"
                  required="required"
                  autoComplete="off"
                  minLength={3}
                  maxLength={20}
                  onChange={(e) => setusername(e.target.value)}
                  value={username}
                />
              </div>
              <div className="form-input-container">
                <span className="form-before">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="number"
                  className="form-input-field"
                  placeholder="Otp"
                  required="required"
                  autoComplete="off"
                  minLength={3}
                  maxLength={20}
                  onChange={(e) => setotp(e.target.value)}
                  value={otp}
                />
              </div>
              <button className="signup login" type="submit">
                Verify
              </button>
            </form>
          </div>
          <div className="signup-content-right">
            <img src={login} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
