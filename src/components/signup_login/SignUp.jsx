import React, { useState } from "react";
import "../../styles/signup_login/SignUp.css";
import axios from "axios";
import login from "../../assets/signup-login/login.gif";
import { useHistory, Link } from "react-router-dom";

export default function SignUp() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("student");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(true);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmpassword) {
      axios
        .post("https://arcane-stream-76776.herokuapp.com/signup", {
          username: username,
          full_name: username,
          email: email,
          passwd: password,
          role: profession,
        })
        .then((res) => {
          axios
            .post(
              `https://arcane-stream-76776.herokuapp.com/verification?email=${email}`
            )
            .then(() => {
              console.log("please check your mail");
            })
            .catch((err) => {
              console.log(err);
            });
          history.push("/verifymail");
        })
        .catch((err) => {
          console.log(err);
        });
      setChecked(true);
      setUserName("");
      setEmail("");
      setProfession("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setChecked(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-main">
        <h1 className="signup-heading text-3xl sm:text-4xl">SIGN UP</h1>
        <hr style={{ width: "50%", margin: "0 auto 1em auto" }} />
        <div className="signup-content">
          <div className="signup-content-left">
            <form onSubmit={(e) => handleSubmit(e)}>
              <p>Please fill in this form to create an account!</p>
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
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-input-field"
                  placeholder="Email Address"
                  required="required"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
              <div className="form-input-container">
                <span className="form-before">
                  {!checked ? (
                    <i style={{ color: "red" }} className="fas fa-times"></i>
                  ) : (
                    <i className="fas fa-unlock"></i>
                  )}
                </span>
                <input
                  type="password"
                  className="form-input-field"
                  placeholder="Confirm Password"
                  required="required"
                  autoComplete="off"
                  minLength={8}
                  maxLength={30}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmpassword}
                />
              </div>
              <div className="form-input-profession-container">
                <span>
                  <span style={{ marginRight: "0.5em" }}>
                    <i className="fas fa-briefcase"></i>
                  </span>
                  Profession
                </span>
                <div className="form-input-profession">
                  <div className="student-select">
                    <label>
                      <input
                        type="radio"
                        name="profession"
                        required="required"
                        onChange={() => setProfession("student")}
                        id="student"
                      />
                      <span style={{ marginLeft: "0.5em" }}>Student</span>
                    </label>
                  </div>
                  <div className="company-select">
                    <label>
                      <input
                        type="radio"
                        name="profession"
                        required="required"
                        onChange={() => setProfession("company")}
                        id="company"
                      />
                      <span style={{ marginLeft: "0.5em" }}>Company</span>
                    </label>
                  </div>
                </div>
              </div>
              <button className="signup" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <div className="signup-content-right">
            <img src={login} alt="" />
            <p>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#A33D3D" }}>
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
