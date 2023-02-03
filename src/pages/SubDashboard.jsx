import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Container, StyledTable2 ,LeftDiv,RightDiv} from '../components/Styles';
const SubDashboard=()=>{
  const [data2, setData2] = useState([]);

  const [labels, setLables] = useState([]);
  const [series, setSeries] = useState([]);
  const {DeviceId} = useParams();
  
  console.log(DeviceId)

  const [isLoading, setLoading] = useState(false);
  const [isLoading2, setLoading2] = useState(true);


  const fetchData=async() =>{
    await axios.get(`http://localhost:4000/dashboard/percentages/${DeviceId}`)
                .then(async(response)=>{
                    const json = await response.data;
                    const dd=json.data[0]
                    const arr1=dd.map(item => item.location);
                    const arr2=dd.map(item => item.location_percentage);
                    setLables(arr1)
                    setSeries(arr2)
                    setLoading(false);
                })
                .catch(error => console.error(error));
    await axios.get(`http://localhost:4000/dashboard/locations/${DeviceId}`)
                    .then(async(response)=>{
                    const json = await response.data;
                    const dd=json.data[0]
                    setData2(dd);
                    setLoading2(false);
        
    })
    .catch(error => console.error(error));
  }
  if(!isLoading) {
    
  }
  useEffect(() => {fetchData()}, []);
  return (
    
      (!isLoading)&&(!isLoading2)&&<Container><LeftDiv ><StyledTable2 data={data2}></StyledTable2></LeftDiv>
      <RightDiv ><Chart 
      type="pie"
      width={350}
      height={350}
      series={series}
      options={{
        labels:labels,
        
      }}     
      >
      </Chart></RightDiv></Container>
      
      
  )
}

export default SubDashboard;