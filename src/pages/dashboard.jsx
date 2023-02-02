import {
  
  StyledTable
} from "./../components/Styles";
import React, { useState, useEffect } from 'react';
 import axios from "axios";

const Dashboard = () => {
  const [abc, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchData=async() =>{
    await axios.post('http://localhost:4000/dashboard/getAll')
    .then(async(response)=>{
     const json = await response.data;
     const dd=json.data[0]
     setData(dd);
     setLoading(false);
     
    })
    .catch(error => console.error(error));
   
 }
  useEffect(() => {fetchData()}, []);
  return (
    (!isLoading)&&
    <StyledTable data={abc}>

    </StyledTable>
  )
};
export default Dashboard;

