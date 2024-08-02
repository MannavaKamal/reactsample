import React,{useEffect, useState} from "react";
import axios from "axios";

import {TextField,Button,Card, CardContent, Typography} from '@mui/material' ;
import IconButton from '@mui/joy/IconButton';
import Delete from '@mui/icons-material/Delete';
import './App.css';


const response = await axios.get('http://localhost:4000/route2');
console.log(response.data)







  
  function Axios1(){
    const[name1,setname] = useState('');
  const[email1,setemail] = useState('');
  const[presentData,pastData] = useState([]);


  useEffect(()   => {
     const fetchData = async () => {
       try {
         const response1 = await axios.get('http://localhost:4000/route2');   

         pastData(response1.data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
 
     fetchData();

     const intervalId = setInterval(fetchData, 1000); // Fetch data every 5 seconds

     // Cleanup interval on component unmount
     return () => clearInterval(intervalId);



   }, []);


//const data1 = response.data;

  const handlepost = async(event)=>{
  console.log(name1);
  console.log (email1);
  axios.post('http://localhost:4000/insertdata',{
    name:name1,
    email:email1
  });
 
 }

 function handleDelete(id1,name1,email1){
  console.log(id1);
  console.log(name1);
  console.log(email1);
  axios.post('http://localhost:4000/delete',{
    _id:id1,
    name:name1,
    email:email1
  });
  
  }

 const data3 = presentData.map((data2, index) => {
  // Create table row (<tr>) every 3 elements (or at the beginning)
  if (index % 3 === 0 || index === 0) {
    return (
      <tr>
        {/* Render 3 cards in a row */}
        <td style={{ paddingRight: '150px'}}>
          <Card  style={{ width: '300px', backgroundColor: 'rgb(254, 30, 25)'  }}>
            <CardContent>
              <Typography variant="body2">{data2._id}</Typography>
              <Typography variant="body2">{data2.name}</Typography>
              <Typography variant="body2">{data2.email}</Typography>
              <Typography variant="body2">Index: {index}</Typography>
            </CardContent>
            <IconButton
                color="danger"
                variant="plain"
                size="sm"
                sx={{ mr: 'auto' }}
                onClick={() => handleDelete(presentData[index ]._id,presentData[index ].name,presentData[index ].email)}
              >
                <Delete />
              </IconButton>
          </Card>
        </td>
        <td style={{ paddingRight: '150px' }}>
          {index + 1 < presentData.length && ( // Check within bounds
            <Card style={{ width: '300px' }}>
              <CardContent>
                <Typography variant="body2">{presentData[index + 1]._id}</Typography>
                <Typography variant="body2">{presentData[index + 1].name}</Typography>
                <Typography variant="body2">{presentData[index + 1].email}</Typography>
                <Typography variant="body2">Index: {index + 1}</Typography>
              </CardContent>
              <IconButton
                color="danger"
                variant="plain"
                size="sm"
                sx={{ mr: 'auto' }}
                onClick={() => handleDelete(presentData[index + 1]._id,presentData[index + 1].name,presentData[index + 1].email)}
              >
                <Delete />
              </IconButton>
            </Card>
          )}
        </td>
        <td style={{ paddingRight: '300px' }}>
          {index + 2 < presentData.length && ( // Check within bounds
            <Card style={{ width: '300px' }}>
              <CardContent>
                <Typography variant="body2">{presentData[index + 2]._id}</Typography>
                <Typography variant="body2">{presentData[index + 2].name}</Typography>
                <Typography variant="body2">{presentData[index + 2].email}</Typography>
                <Typography variant="body2">Index: {index + 2}</Typography>
              </CardContent>
              <IconButton
                color="danger"
                variant="plain"
                size="sm"
                sx={{ mr: 'auto' }}
                onClick={() => handleDelete(presentData[index + 2]._id,presentData[index + 2].name,presentData[index + 2].email)}
              >
                <Delete />
              </IconButton>
            </Card>
          )}
        </td>
      </tr>
    );
  } else {
    // Return an empty cell to maintain table structure
    return <td key={index} />; // Add unique keys for empty cells
  }
});
   
    return(
     <>
     <TextField  label="name" onChange={(e)=>{setname(e.target.value)}}/>
     <br/>
        <TextField  label="email" onChange={(e)=>{setemail(e.target.value)}}/>
        <br/>
         <Button variant = "contained" onClick={handlepost}>POST</Button>
      {data3}
     
     </>
  
    );
  }
  export default Axios1;