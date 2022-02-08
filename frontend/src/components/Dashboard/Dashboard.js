import React from "react";

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
              <a href="#">
                <i className="fas fa-edit">Edit</i>
              </a>
              <a href="#">
                <i className="fas fa-trash-alt">Delete</i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
