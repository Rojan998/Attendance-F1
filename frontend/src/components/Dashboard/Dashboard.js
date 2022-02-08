import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1>Welcome to Dashboard</h1>
      <section>
        <h2>Welcome User</h2>
        <div className="container">
          <div className="card">
            <h4>Date:</h4>
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
        </div>
      </section>
    </>
  );
};

export default Dashboard;
