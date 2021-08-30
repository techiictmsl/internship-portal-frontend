import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/signup-login/logo.png";
import "../styles/Login.css";

function Login() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validpassword, setValidPassword] = useState(false);

  let formData = new FormData();

  formData.append("username", "rohit");
  formData.append("password", "password");

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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showOnEnter = () => {
    setValidPassword(true);
  };
  return (
    <div className="login-main">
      <div className="signup-form">
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="row">
            <h2>Login</h2>
            <hr />
            <div className="col-md-6 text-center image-center">
              <div className="signup-image">
                <figure>
                  <img src={logo} alt="error" />
                </figure>
                <div className="text-center">
                  Do not have an account? <Link to="/signup">Signup here</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 content-center">
              {/* <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr /> */}
              <p>Please fill in this form to create an account!</p>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <span className="fa fa-user"></span>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    required="required"
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                    value={username}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email Address"
                    // required="required"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                  <input
                    style={{ position: "relative" }}
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required="required"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    // pattern={`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$`}
                    // minLength="8"
                  />
                  {/* <i
                    style={{ position: "absolute", right: 0 }}
                    class="fa fa-info-circle"
                    aria-hidden="true"
                  ></i> */}
                </div>
              </div>
              <div className="form-group btn-signin">
                <button
                  onSubmit={(e) => handleLogin(e)}
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
