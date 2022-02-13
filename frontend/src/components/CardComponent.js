import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CardComponent = ({ checkin, checkout, date, key }) => {
  // Delete User
  const deleteUser = async () => {
    let retriveTokenFromLS = localStorage.getItem("userInfo");

    const strToken = JSON.parse(retriveTokenFromLS);
    console.log(strToken.token);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": strToken.token,
        },
      };

      axios.delete("/api/delete", config);
      let retriveTokenFromLS = localStorage.clear();
      alert(
        "Your data has been deleted. Now you are redirecting to LOGIN PAGE"
      );
      if (!retriveTokenFromLS) {
        alert("There is no token and you are not authorized");
        window.location.href = "/";
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
  return (
    <>
      <div className="card" key={key}>
        <h4>Date: {date} </h4>
        <h4>Check In Time: {checkin} </h4>
        <h4>Check Out Time: {checkout}</h4>
        <h4>
          Status:(Present, Absent, Missed):
          {checkin && checkout
            ? "Present"
            : checkin || checkout
            ? "Missed"
            : "Absent"}
        </h4>
        <div className="setting">
          <Link to="/update">
            <i className="fas fa-edit">Edit</i>
          </Link>
          <button className="btn" onClick={deleteUser}>
            <i className="fas fa-trash-alt">Delete</i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
