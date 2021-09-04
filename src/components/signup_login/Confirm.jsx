import React from 'react'
import {Link} from 'react-router-dom'
import  logo  from "../assests/signup-login/logo.png"
import "../styles/confirm.css"
function confirm() {
    return (
        <>
            <div className="signup-form">
                <form action="/examples/actions/confirmation.php" method="post">
                <div className="row">
                <h2>Confirm your password</h2>
                
                <hr/>


                {/* <div className="col-md-6 text-center image-center">
                <div className="signup-image">
                   <figure>
                    <img src={logo} alt="error" srcset="" />
                   </figure> 
                   <div className="text-center">Do not  have an account?  <Link to="/Signup">Signup here</Link></div>
                </div>
                </div> */}


                <div className="col-md-6 content-center">
               
                <p>Please fill in this form to confirm your password!</p>
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
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" name="password"  id="password" placeholder="Password" required="required" autoComplete="off" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-unlock"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" name="cpassword" id="cpassword" placeholder="Confirm Password" required="required" autoComplete="off" />
                    </div>
                </div>

                <div className="form-group btn-signin">
                 <Link to="/confirm">  <button type="submit" className="btn btn-primary btn-lg">Proceed</button></Link>
                </div>

                
                </div>
                
                <div className="col-md-6 text-center image-center">
                <div className="signup-image">
                   <figure>
                    <img src={logo} alt="error" srcset="" />
                   </figure> 
                   <div className="text-center">Do not  have an account?  <Link to="/Signup">Signup here</Link></div>
                </div>
                </div>

                </div>
                </form>
           

            </div>
             
        </>
    )
}

export default confirm