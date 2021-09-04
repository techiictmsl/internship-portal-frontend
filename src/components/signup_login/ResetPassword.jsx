import React, { useState } from "react";
import "../../styles/signup_login/SignUp.css";
import axios from "axios";
import login from "../../assets/signup-login/login.gif";
import { useHistory } from "react-router-dom";

export default function ResetPassword() {
  const [username, setusername] = useState("");
  const [otp, setotp] = useState("");
  const [password, setpassword] = useState("");
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://arcane-stream-76776.herokuapp.com/resetpassword", {
        username: username,
        otp: otp,
        password: password,
      })
      .then(() => {
        console.log("Your password is changed");
        history.push("/login");
      })
      .catch(() => {
        console.log("There are some errors");
      });
  };
  return (
    <div className="signup-container">
      <div className="signup-main">
        <h1 className="signup-heading">RESET PASSWORD</h1>
        <hr style={{ width: "50%" }} />
        <div className="signup-content login-content">
          <div className="signup-content-left">
            <form onSubmit={(e) => handleSubmit(e)}>
              <p>Please fill in this form to change your password!</p>
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
              <div className="form-input-container">
                <span className="form-before">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-input-field"
                  id="password"
                  placeholder="Password"
                  required="required"
                  autoComplete="off"
                  minLength={8}
                  maxLength={30}
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
              </div>
              <button className="signup login" type="submit">
                Sign Up
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
