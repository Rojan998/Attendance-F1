import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AttendanceContext } from "../../Context/attendanceContext";

const DashboardLayout = () => {
  const [formData, setFormData] = useContext(AttendanceContext);
  const { username, password } = formData;

  const logoutHandler = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  // Time
  // var date = new Date();

  // var hour = date.getHours();
  // var min = date.getMinutes();
  // console.log(hour + ":" + min);

  // Date:

  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, "0");
  // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  // var yyyy = today.getFullYear();

  // today = mm + "/" + dd + "/" + yyyy;
  return (
    <>
      <h1>Welcome to Dashboard</h1>
      <section>
        <h2>Welcome {username}</h2>
        <div className="container">
          <div className="card">
            <h4>Date: </h4>
            <h4>Check In Time: </h4>
            <h4>Check Out Time: </h4>
            <h4>Status:(Present, Absent, Missed):</h4>
            <div className="setting">
              <Link to="#">
                <i className="fas fa-edit">Edit</i>
              </Link>
              <Link to="#">
                <i className="fas fa-trash-alt">Delete</i>
              </Link>
            </div>
          </div>
          <Link className="btn btn-center" onClick={logoutHandler}>
            Log Out
          </Link>
        </div>
      </section>
    </>
  );
};

export default DashboardLayout;
