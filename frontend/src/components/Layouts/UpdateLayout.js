import React, { useContext, useState, useEffect } from "react";
import { AttendanceContext } from "../../Context/attendanceContext";
import axios from "axios";
// Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Time Picker
import TimePicker from "react-time-picker";

const UpdateLayout = () => {
  // Form Data
  const [formData, setFormData] = useContext(AttendanceContext);

  const { username, password, remarks } = formData;

  // setDatas
  const [datas, setDatas] = useState([]);

  const [time, setTime] = useContext(AttendanceContext);
  // const { checkin, checkout } = time;

  const [startDate, setStartDate] = useState(new Date());

  // GET THE DATA FROM THE BACKEND MONGODB AND SHOW IT IN THE LAYOUT. (EDITING THE FORM DATA)
  const loadDataFromDB = async () => {
    const retriveTokenFromLS = localStorage.getItem("userInfo");
    if (!retriveTokenFromLS) {
      alert("There is no token and you are not authorized");
      window.location.href = "/";
    }
    const strToken = JSON.parse(retriveTokenFromLS);
    console.log(strToken.token);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": strToken.token,
        },
      };

      const dataJson = await axios.get("/api/update", config);
      const datas = await Object.values(dataJson).splice(0, 1);

      // const datas = await JSON.stringify(dataJson);

      console.log("This is data", datas);

      setDatas(datas);
    } catch (error) {
      // alert(error);
      console.error(error);
    }
  };
  useEffect(() => {
    loadDataFromDB();
  }, []);

  const onChangeHandler = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  // Updating the form data
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      console.log("Password Length must be greater than 6");
    } else {
      console.log(formData);
    }

    const retriveTokenFromLS = localStorage.getItem("userInfo");

    const strToken = JSON.parse(retriveTokenFromLS);
    console.log(strToken.token);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": strToken.token,
        },
      };

      const dataJson = await axios.post("/api/update", config);
      const datas = await Object.values(dataJson).splice(0, 1);

      setFormData(datas);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  return (
    <>
      <h1>Update Attendance Page</h1>

      <section>
        <div className="container">
          <h3>Update Attendance</h3>

          <div className="card">
            <form className="form" onSubmit={onSubmitHandler}>
              <label for="username">User Name</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={datas.map((name) => name.username)}
                onChange={onChangeHandler}
              />
              {datas.map((name) => {
                return <>{name.username}</>;
              })}
              <br />
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                minLength="6"
                required
                value={datas.map((password) => password.password)}
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
                  value={datas.map((checkin) => checkin.checkin)}
                />

                <label for="check-out">Check Out Time</label>

                <TimePicker
                  onChange={(checkout) => setTime({ ...time, checkout })}
                  value={datas.map((checkout) => checkout.checkout)}
                />
              </div>

              <h3>Remarks</h3>
              <textarea
                name="remarks"
                id="remarks"
                cols="15"
                rows="2s"
                value={datas.map((remakrs) => remakrs.remarks)}
                onChange={onChangeHandler}
              ></textarea>
              <input
                type="submit"
                className="btn btn-center"
                value="Update Form"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateLayout;
