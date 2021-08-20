import React from 'react'
import {Link} from 'react-router-dom'
import  logo  from "../assests/logo.png"
import "../styles/login.css"
function Login() {
    return (
        <>
            <div className="signup-form">
                <form action="/examples/actions/confirmation.php" method="post">
                <div className="row">
                <h2>Login</h2>
                
                <hr/>


                <div className="col-md-6 text-center image-center">
                <div className="signup-image">
                   <figure>
                    <img src={logo} alt="error" srcset="" />
                   </figure> 
                   <div className="text-center">Do not  have an account?  <Link to="/Signup">Signup here</Link></div>
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
                        <input type="text" className="form-control" name="username" placeholder="Username" required="required" autoComplete="off"  />
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
                        <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" autoComplete="off" />
                    </div>
                </div>
                {/* <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-phone"></i>
                            </span>
                        </div>
                        <input type="number" className="form-control" name="mobile" placeholder="Phone Number" required="required" autoComplete="off" />
                    </div>
                </div> */}
                {/* <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-briefcase"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="work" placeholder="Your Profession" required="required" autoComplete="off" />
                    </div>
                </div> */}
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" name="password"  id="password" placeholder="Password" required="required" autoComplete="off" />
                    </div>
                </div>

                {/* <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" name="cpassword" id="cpassword" placeholder="Confirm Password" required="required" autoComplete="off" />
                    </div>
                </div> */}

                {/* <div className="form-group">
                    <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>
                </div> */}
                <div className="form-group btn-signin">
                    <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                </div>

                
                </div>
                
                {/* <div className="col-md-6 text-center image-center">
                <div className="signup-image">
                   <figure>
                    <img src={logo} alt="error" srcset="" />
                   </figure> 
                   <div className="text-center">Already have an account? <Router> <NavLink to="/login">Login here</NavLink></Router></div>
                </div>
                </div> */}
                </div>
                </form>
           

            </div>
             
        </>
    )
}

export default Login
