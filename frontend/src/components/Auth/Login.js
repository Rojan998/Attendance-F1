import React from "react";

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
            <a href="/dashboard.html" target="_blank">
              Sign In
            </a>
            <span>
              Create Account here,{" "}
              <a href="/register.html" target="_blank" className="a_no_css">
                Sign Up
              </a>
            </span>
          </div>

          <div className="submit_form">
            <a href="/submitAttendance.html" target="_blank">
              Submit Attendance
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
