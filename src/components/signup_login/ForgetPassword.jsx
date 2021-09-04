import React, { useState } from "react";
import "../../styles/signup_login/SignUp.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ForgetPassword() {
  const [email, setemail] = useState("");
  let history = useHistory();
  const handleReset = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://arcane-stream-76776.herokuapp.com/forgotpassword?email=${email}`
      )
      .then(() => {
        history.push("/resetpassword");
      });
  };
  return (
    <div className="signup-container forget-password-container">
      <div className="signup-main">
        <div className="signup-content">
          <div className="signup-content-left">
            <form onSubmit={(e) => handleReset(e)}>
              <div className="form-input-container">
                <span className="form-before">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-input-field"
                  placeholder="Email Address"
                  required="required"
                  autoComplete="off"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
              </div>
              <button className="signup forget-password" type="submit">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
