import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import CompanyDashboard from "./components/CompanyDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Navbar} />
          <Route path="/dashboard" component={CompanyDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
