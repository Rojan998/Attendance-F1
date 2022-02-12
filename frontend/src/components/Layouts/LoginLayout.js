import axios from "axios";
import React, { useContext } from "react";
import { AttendanceContext } from "../../Context/attendanceContext";

import { Link } from "react-router-dom";

const LoginLayout = () => {
  const [formData, setFormData] = useContext(AttendanceContext);
  const { username, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      console.log("Password Length must be greater than 6");
    } else {
      console.log(formData);
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/auth",
        {
          username,
          password,
        },
        config
      );
      console.log("this is data", data);
      console.log("this is data.token", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data));
      const getUserInfo = localStorage.getItem("userInfo");
      if (getUserInfo) {
        // window.location.href = "/Dashboard";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1> Welcome to Login Page</h1>

      <section>
        <div className="container">
          <h3 className="txt-center">Sign In</h3>

          <div className="card">
            <form className="form" onSubmit={onSubmitHandler}>
              <label for="username">User Name</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={username}
                onChange={onChangeHandler}
              />

              <br></br>

              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                minLength="6"
                required
                value={password}
                onChange={onChangeHandler}
              />
              <input type="submit" className="btn btn-center" value="Login" />
            </form>
            <span>
              Create Account here,{" "}
              <Link to="/register" target="_blank" className="a_no_css">
                Sign Up
              </Link>
            </span>
          </div>

          <div className="submit_form">
            <Link to="/submitattendance" target="_blank">
              Submit Attendance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginLayout;
