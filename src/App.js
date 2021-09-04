import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/signup_login/SignUp.jsx";
import Login from "./components/signup_login/Login.jsx";
import VerifyMail from "./components/signup_login/VerifyMail";
import ResetPassword from "./components/signup_login/ResetPassword";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/verifymail" component={VerifyMail} />
          <Route path="/login" component={Login} />
          <Route path="/demodashboard" component={Dashboard} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/" exact component={Navbar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
