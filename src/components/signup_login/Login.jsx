import React, { useState } from "react";
import "../../styles/signup_login/SignUp.css";
import axios from "axios";
import login from "../../assets/signup-login/login.gif";
import ForgetPassword from "./ForgetPassword";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [resetpassword, setresetpassword] = useState(false);

  let history = useHistory();
  let formData = new FormData();

  formData.append("username", username);
  formData.append("password", password);

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password);
    // pass this as a form data
    axios
      .post("https://arcane-stream-76776.herokuapp.com/token", formData, config)
      .then((res) => {
        console.log(res);
        let newtoken = [
          {
            access_token: res.data.access_token,
            refresh_token: res.data.refresh_token,
          },
        ];
        localStorage.setItem("tokens", JSON.stringify(newtoken));
        history.push("/demodashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signup-container">
      {resetpassword ? (
        <i
          onClick={() => setresetpassword(false)}
          className="fas fa-times cancel"
        ></i>
      ) : (
        <></>
      )}
      {resetpassword ? <ForgetPassword /> : <></>}
      <div className="signup-main">
        <h1 className="signup-heading">LOGIN</h1>
        <hr style={{ width: "50%" }} />
        <div className="signup-content login-content">
          <div className="signup-content-left">
            <form onSubmit={(e) => handleLogin(e)}>
              <p>Please fill in this form to login!</p>
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
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
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
                  onChange={(e) => setPassword(e.target.value)}
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
            <p onClick={() => setresetpassword(true)}>
              Forget Password?{" "}
              <span style={{ color: "#A33D3D", cursor: "pointer" }}>
                <u>Reset Here</u>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
