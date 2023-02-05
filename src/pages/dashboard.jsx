import { MainTable2 } from "./../components/Styles";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    await axios
      .post("http://localhost:4000/dashboard/getAll")
      .then(async (response) => {
        const json = await response.data;
        const dataArr = json.data[0];
        setData(dataArr);
        setLoading(false);
      })
      .catch((error) => window.alert(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    !isLoading && (
      <MainTable2
        data={data}
        style={{ width: "8000px", borderRadius: "30px" }}
      ></MainTable2>
    )
  );
};
export default Dashboard;
