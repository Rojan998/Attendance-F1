import React from "react";

const Register = () => {
  return (
    <>
      <h1> Welcome to Register Page</h1>
      <section>
        <div className="container">
          <h3 className="txt-center">Sign Up</h3>

          <div className="card">
            <form className="form">
              <label for="username">User Name</label>
              <input type="text" id="username" name="username" />
              <br></br>
              <label for="password">Password</label>
              <input type="password" id="password" name="password" />
            </form>
            <a href="/dashboard.html" target="_blank">
              Sign Up
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;