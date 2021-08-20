import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
