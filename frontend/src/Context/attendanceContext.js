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
    checkin: "",
    checkout: "",
  });

  return (
    <AttendanceContext.Provider
      value={([formData, setFormData], [time, setTime])}
    >
      {props.children}
    </AttendanceContext.Provider>
  );
};
