import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import SubmitAttendance from "./components/SubmitAttendance";
import { AttendanceProvider } from "./Context/attendanceContext";
import Update from "./components/Update";

function App() {
  return (
    <AttendanceProvider>
      <Router>
        <Route exact path="/" component={Login} />

        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/submitattendance" component={SubmitAttendance} />
          <Route exact path="/update" component={Update} />
        </Switch>
      </Router>
    </AttendanceProvider>
  );
}

export default App;
