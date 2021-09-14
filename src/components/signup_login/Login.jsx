import React, { useState } from "react";
import "../../styles/signup_login/SignUp.css";
import axios from "axios";
import loginpage from "../../assets/signup-login/login-page.gif";
import ForgetPassword from "./ForgetPassword";
import { useHistory, Link } from "react-router-dom";

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
    // pass this as a form data
    axios
      .post("https://arcane-stream-76776.herokuapp.com/token", formData, config)
      .then((res) => {
        let newtoken = [
          {
            access_token: res.data.access_token,
            refresh_token: res.data.refresh_token,
          },
        ];
        localStorage.setItem("tokens", JSON.stringify(newtoken));
        history.push("/demodashboard");
      })
      .catch(() => {});
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
        <hr style={{ width: "50%", margin: "0 auto 1em auto" }} />
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
                Login
              </button>
            </form>
          </div>
          <div className="signup-content-right">
            <img src={loginpage} alt="" />
            <p onClick={() => setresetpassword(true)}>
              Forget Password?{" "}
              <span style={{ color: "#A33D3D", cursor: "pointer" }}>
                <u>Reset Here</u>
              </span>
            </p>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/signup"
            >
              Don't have an account?{" "}
              <span style={{ color: "#A33D3D", cursor: "pointer" }}>
                <u>Sign Up</u>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
