import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import axios from "axios";

const SubDashboard=()=>{
  const [data, setData] = useState([]);
  const [labels, setLables] = useState([]);
  const [series, setSeries] = useState([]);


  const [isLoading, setLoading] = useState(true);
  const fetchData=async() =>{
    await axios.post('http://localhost:4000/dashboard/percentages')
    .then(async(response)=>{
     const json = await response.data;
     const dd=json.data[0]
     setData(dd);
     setLoading(false);
     const arr1=dd.map(item => item.location);
     const arr2=dd.map(item => item.location_percentage);
      setLables(arr1)
      setSeries(arr2)
    })
    .catch(error => console.error(error));
  }
  if(!isLoading) {
    
  }
  useEffect(() => {fetchData()}, []);
  return (
    
      (!isLoading)&&<Chart 
      type="pie"
      width={300}
      height={300}
      series={series}
      options={{
        labels:labels,
        
      }}
      
      >

      </Chart>
      
  )
}

export default SubDashboard;