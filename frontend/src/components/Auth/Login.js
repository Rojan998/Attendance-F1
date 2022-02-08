import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1> Welcome to Login Page</h1>
      <section>
        <div className="container">
          <h3 className="txt-center">Sign In</h3>

          <div className="card">
            <form className="form">
              <label for="username">User Name</label>
              <input type="text" id="username" name="username" />
              <br></br>
              <label for="password">Password</label>
              <input type="password" id="password" name="password" />
            </form>
            <Link to="/dashboard" target="_blank">
              Sign In
            </Link>
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

export default Login;
