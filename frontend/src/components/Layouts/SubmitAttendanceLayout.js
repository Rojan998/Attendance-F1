import React, { useContext, useState } from "react";
import { AttendanceContext } from "../../Context/attendanceContext";
import axios from "axios";
// Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Time Picker
import TimePicker from "react-time-picker";

const SubmitAttendanceLayout = () => {
  // Form Data
  const [formData, setFormData] = useContext(AttendanceContext);

  const { username, password, remarks } = formData;
  const [time, setTime] = useContext(AttendanceContext);
  const { checkin, checkout } = time;

  // this is working code
  // const changeCheckinTime = (checkin) => {
  //   setTime({ ...time, checkin });
  // };
  // const changeCheckoutTime = (checkout) => {
  //   setTime({ ...time, checkout });
  // };

  const [startDate, setStartDate] = useState(new Date());

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearData = () => {
    window.location.href = "./submitattendance";
    localStorage.clear();
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
        "/api/submitattendance",
        {
          username,
          password,
          checkin,
          checkout,
          remarks,
        },
        config
      );
      console.log("this is data", data);
      console.log("this is data.token", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data));
      const getUserInfo = localStorage.getItem("userInfo");
      if (getUserInfo) {
        alert("Your data has been pushed in the database");
        clearData();
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  return (
    <>
      <h1>Submit Attendance Page</h1>

      <section>
        <div className="container">
          <h3>Submit Attendance</h3>

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
              <br />
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
              <br />

              <h3>Choose Date</h3>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                maxDate={new Date()}
                isClearable
              />

              <h3>Direction Of Attendance</h3>
              <div className="checkboxes">
                <label for="check-in">Check In Time</label>

                <TimePicker
                  onChange={(checkin) => setTime({ ...time, checkin })}
                  value={checkin}
                />

                <label for="check-out">Check Out Time</label>

                <TimePicker
                  onChange={(checkout) => setTime({ ...time, checkout })}
                  value={checkout}
                />
              </div>

              <h3>Remarks</h3>
              <textarea
                name="remarks"
                id="remarks"
                cols="15"
                rows="2s"
                value={remarks}
                onChange={onChangeHandler}
              ></textarea>
              <input
                type="submit"
                className="btn btn-center"
                value="Submit Form"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubmitAttendanceLayout;
