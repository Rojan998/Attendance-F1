import React from "react";

const SubmitAttendance = () => {
  return (
    <>
      <h1>Submit Attendance Page</h1>

      <section>
        <div className="container">
          <h3>Submit Attendance</h3>

          <div className="card">
            <form className="form">
              <label for="username">User Name</label>
              <input type="text" id="username" name="username" />
              <br />
              <label for="password">Password</label>
              <input type="password" id="password" name="password" />
              <br />

              <h3>Direction Of Attendance</h3>
              <div className="checkboxes">
                <input type="checkbox" id="check-in" name="check-in" />
                <label for="check-in">Check In</label>
                <input type="checkbox" id="check-out" name="check-out" />
                <label for="check-out">Check Out</label>
              </div>

              <label for="remarks">Remarks</label>
              <h3>Remarks</h3>
              <textarea
                name="remarks"
                id="remarks"
                cols="15"
                rows="2s"
              ></textarea>
            </form>
            <a href="#">Submit Form</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubmitAttendance;
