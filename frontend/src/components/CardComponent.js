import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ checkin, checkout, date }) => {
  return (
    <>
      <div className="card">
        <h4>Date: {date} </h4>
        <h4>Check In Time: {checkin} </h4>
        <h4>Check Out Time: {checkout}</h4>
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
    </>
  );
};

export default CardComponent;
