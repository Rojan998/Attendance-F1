import "./App.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import SubmitAttendance from "./components/SubmitAttendance/SubmitAttendance";

function App() {
  return (
    <>
      <Login />
      <Register />
      <Dashboard />
      <SubmitAttendance />
    </>
  );
}

export default App;
