import React, { useState } from 'react'
import Layoutm from '../Layoutm'
import { Box, Button, Container, FormLabel, Grid, TextField, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Email } from '@mui/icons-material'
import axios from 'axios'
import Swal from 'sweetalert2'
export default function StudentRagister() {

    const [form, setform] = useState({
        name : " ",
        cource:"",
        email :""
    })

    const handlmethod=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
    }

    const hanlesubmitmethod=(e)=>{
        e.preventDefault();
        axios
        .post("http://localhost:8080/add-student",form)
        .then((Response)=>{
            console.log("student ragister",Response.data);
            
            Swal.fire({
                    icon: "success",
                    title: "Student Ragister Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                      container: "swal-overlay",
                    },
                  });

                    setform({ name: "", cource: "", email: "" });
            
        })
        .catch((err)=>{
            console.log("error",err);
        });
    }
  return (
    <>
    <Layoutm/>

    <Toolbar/>

    <Container>
        <Box sx={{ml:"190px" ,p:3}}>
            <h1>Student Ragister Page</h1>
            <hr/>
                <form onSubmit={hanlesubmitmethod}>

                       <TextField  label="Enter The Student Name" fullWidth name='name' id='name' value={form.name} onChange={handlmethod} sx={{mt:2}}/>

                      <br/>


                       <TextField  label="Enter The Cource Name" fullWidth name='cource' id='cource' value={form.cource} onChange={handlmethod} sx={{mt:2}}/>

                      <br/>

                       <TextField  label="Enter The Student Email" fullWidth name='email' id='email' value={form.email} onChange={handlmethod} sx={{mt:2}}/>

                      <br/>

                    <Button variant='outlined' type='submit' sx={{mt:2}}>Ragister</Button>
                    <Button variant='outlined' onClick={() => setform({ Name: "", Cource: "", Email: "" })} color='error' sx={{mt:2 , ml:2}}>Reset</Button>
                                           
                    <br/>
                    
                </form>

        </Box>
    </Container>
    </>
  )
}
