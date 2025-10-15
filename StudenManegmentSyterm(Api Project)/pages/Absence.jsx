import React, { useState } from 'react'
import Layoutm from '../Layoutm'    
import { Box, Button, Divider, TextField, Toolbar, Typography } from '@mui/material'
import axios from 'axios';
import Swal from 'sweetalert2';
export default function Absence() {
    const [absent, setabsent] = useState(0);

    const handlabsentevent = (e)=>{

        e.preventDefault();

        axios.post(`http://localhost:8080/attendence/absent/${absent}`)
        .then((Response)=>{
             Swal.fire({
                     icon: "success",
                     title: Response.data,
                     timer: 1500,
                     showConfirmButton: false,
                   });
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

    <Box sx={{p:3 , ml:"190px"}}>
        <Typography variant='h5'>This is Absence Page</Typography>
          <Divider sx={{mt:2}}/>
        <TextField label="Enter The Absence Student Id" type='number' variant="outlined" value={absent} onChange={(e)=>{setabsent(e.target.value)}} fullWidth sx={{mt:3}} style={{width:"35%"}}/>
          <br/>
        <Button sx={{mt:2}}  variant='outlined' type='submit' onClick={handlabsentevent}>Attend</Button>
    </Box>
    </>
  )
}
