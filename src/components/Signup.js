import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/signup-login/logo.png";
import "../styles/Signup.css";
function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(true);
  const [user, setUser] = useState({
    username: "",
    email: "",
    profession: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      username: username,
      email: email,
      phone: phone,
      password: password,
      profession: profession,
    });
    if (password === confirmpassword) {
      alert("User Signed Up successfully");
      setChecked(true);
      setUserName("");
      setEmail("");
      setPhone("");
      setProfession("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setChecked(false);
    }
  };

  return (
    <div className="signup-main">
      <div className="signup-form">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="row">
            <h2>Sign Up</h2>
            <hr />
            <div className="col-md-6">
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
                      {/* <i className="fa fa-paper-plane"></i> */}
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email Address"
                    required="required"
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
                      <i className="fa fa-phone"></i>
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    name="mobile"
                    placeholder="Phone Number"
                    required="required"
                    autoComplete="off"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-briefcase"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="work"
                    placeholder="Your Profession"
                    required="required"
                    autoComplete="off"
                    onChange={(e) => setProfession(e.target.value)}
                    value={profession}
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
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required="required"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {checked ? (
                        <i className="fa fa-unlock"></i>
                      ) : (
                        <i style={{ color: "red" }} className="fa fa-times"></i>
                      )}
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Confirm Password"
                    required="required"
                    autoComplete="off"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmpassword}
                  />
                </div>
              </div>

              {/* <div className="form-group">
                    // <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>
                </div> */}
              <div className="form-group btn-signin">
                <button
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  Sign Up
                </button>
              </div>
            </div>

            <div className="col-md-6 text-center image-center">
              <div className="signup-image">
                <figure>
                  <img src={logo} alt="error" srcSet="" />
                </figure>
                <div className="text-center">
                  Already have an account? <Link to="/login">Login here</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
