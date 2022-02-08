import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import SubmitAttendance from "./components/SubmitAttendance/SubmitAttendance";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login} />

        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/submitattendance" component={SubmitAttendance} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
