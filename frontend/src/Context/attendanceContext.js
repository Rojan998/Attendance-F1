import React, { useState, createContext } from "react";

export const AttendanceContext = createContext();

export const AttendanceProvider = (props) => {
  // For Form Data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remarks: "",
  });
  // For Checkin and Checkout time
  const [time, setTime] = useState({
    checkin: "00:00",
    checkout: "00:00",
  });

  return (
    <AttendanceContext.Provider
      value={([formData, setFormData], [time, setTime])}
    >
      {props.children}
    </AttendanceContext.Provider>
  );
};
