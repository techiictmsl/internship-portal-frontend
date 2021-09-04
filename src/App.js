import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/signup_login/SignUp.jsx";
import Login from "./components/signup_login/Login.jsx";
import VerifyMail from "./components/signup_login/VerifyMail";
import ForgetPassword from "./components/signup_login/ForgetPassword";
import ResetPassword from "./components/signup_login/ResetPassword";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import CompanyDashboard from "./components/CompanyDashboard";
import UserDashBoard from "./components/UserDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/verifymail" component={VerifyMail} />
          <Route path="/login" component={Login} />
          <Route path="/demodashboard" component={Dashboard} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/" exact component={Navbar} />
          <Route path="/companydashboard" component={CompanyDashboard} />
          <Route path="/userdashboard" component={UserDashBoard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
