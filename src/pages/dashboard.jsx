import {
  
  StyledTable
} from "./../components/Styles";
import React, { useState, useEffect } from 'react';
 import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchData=async() =>{
    await axios.get('http://localhost:4000/dashboard/')
    .then(async(response)=>{
     const json = await response.data;
     setData(json.data);
     setLoading(false);
     
    })
    .catch(error => console.error(error));
   
 }
  useEffect(() => {fetchData()}, []);
  return (
    (!isLoading)&&
    <div>
      <table>
      <thead >
        <tr>
        {Object.keys(data[0]).map((key,headind) => (
          <th key={headind}>{key}</th>
        ))}
        </tr>
      </thead>
      <tbody>
      {data.map((item,index) => (
        <tr key={index}>
          {Object.values(item).map((val,colind) => (
            <td key={colind}>{val}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>      
    </div>
  )
};
export default Dashboard;

