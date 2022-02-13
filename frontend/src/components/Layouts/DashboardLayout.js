import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../CardComponent";

const DashboardLayout = () => {
  const [datas, setDatas] = useState([]);

  const logoutHandler = () => {
    localStorage.clear();
    window.location.href = "/";
  };

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

      const dataJson = await axios.get("/api/dashboard", config);
      const datas = await Object.values(dataJson).splice(0, 1);

      // console.log("This is data", datas);

      setDatas(datas);
    } catch (error) {
      // alert(error);
      console.error(error);
    }
  };
  useEffect(() => {
    loadDataFromDB();
  }, []);

  return (
    <>
      <h1>Welcome to Dashboard</h1>

      <section>
        <h2>
          Welcome:
          {datas.map((data) => {
            return data.username;
          })}
        </h2>

        <div className="container">
          {datas.map((data) => {
            return <CardComponent {...data} key={data.id} />;
          })}

          <Link className="btn btn-center" onClick={logoutHandler}>
            Log Out
          </Link>
        </div>
      </section>
    </>
  );
};

export default DashboardLayout;
