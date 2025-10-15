import React, { useState } from 'react'
import Layoutm from '../Layoutm'
import { Box, Button, Divider, TextField, Toolbar, Typography } from '@mui/material'
import axios from 'axios';
import Swal from 'sweetalert2';
export default function StudentAttendence() {
    const [attend, setattend] = useState("");

    const handlsub=(e)=>
    {
        setattend(e.target.value);
          console.log(attend);
          
    }
    const handlsumit = (e)=>
   {

    e.preventDefault();
    
     axios
     .post(`http://localhost:8080/mark`,{email:attend.trim().toLowerCase()})
     .then((Response)=>{
        Swal.fire({
        icon: "success",
        title: Response.data,
        timer: 1500,
        showConfirmButton: false,
      });

      setattend("");
     })
.catch((error)=>{
  Swal.fire({
    icon: "error",
    title: error.response?.data || "Faild",
    timer: 1500,
    showConfirmButton: false,
  });
});

   }
  return (
    <>
    <Layoutm/>

    <Toolbar/>

    <Box sx={{ml:"190px",p:4 ,}}>


        <Typography variant="h5" color="initial">Student Attendence Page</Typography>

        <Divider sx={{mt:2}}/>

        <TextField id='email' name='email' label="Enter The Email" variant='outlined' sx={{mt:4}} style={{width:"35%"}} value={attend} onChange={handlsub}/>
       <br/>
       <Button variant='outlined' type='submit' onClick={handlsumit} sx={{mt:3}}>Attend</Button>
    </Box>
    
    </>
  )
}
