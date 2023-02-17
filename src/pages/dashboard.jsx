import { MainTable2 } from "./../components/Styles";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem('isAuthenticated')==='true');


  
  useEffect(() => {
    const fetchData = async () => {
      if(isAuthenticated){
      await axios
        .post("http://localhost:4000/dashboard/getAll")
        .then(async (response) => {
          const json = await response.data;
          const dataArr = json.data[0];
          setData(dataArr);
          setLoading(false);
        })
        .catch((error) => window.alert(error));
      }
    };
    fetchData();
  }, []);

  return (
    (isAuthenticated)? (
      (!isLoading)&&
      <MainTable2
        data={data}
        style={{ width: "8000px", borderRadius: "30px" }}
      ></MainTable2>
    ):
    (<Navigate to="/login" />)
  );
};
export default Dashboard;
