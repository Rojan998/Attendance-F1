import React, { useContext } from "react";
import axios from "axios";
import { AttendanceContext } from "../../Context/attendanceContext";

const RegisterLayout = () => {
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
      // console.log(formData);

      const newUser = {
        username,
        password,
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post("/api/users", body, config);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        console.log(res.data);

        const getUserInfo = localStorage.getItem("userInfo");
        if (getUserInfo) {
          console.log(getUserInfo);
          alert("User Registered, going to dashboard");
          window.location.href = "/Dashboard";
        }
      } catch (error) {
        alert(error);
        console.error(error.response.data);
      }
    }
  };

  return (
    <>
      <h1> Welcome to Register Page</h1>
      <section>
        <div className="container">
          <h3 className="txt-center">Sign Up</h3>

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
                required
                minLength="6"
                value={password}
                onChange={onChangeHandler}
              />
              <input
                type="submit"
                className="btn btn-center"
                value="Register"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterLayout;
