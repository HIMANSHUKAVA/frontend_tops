import React, { useEffect, useState } from 'react'
import Layoutm from '../Layoutm'
import { Box, Button, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function ViewStudent1() {

  const navigate = useNavigate();
  const [student, setstudent] = useState([])
  useEffect(() => {
    
axios
.get(`http://localhost:8080/view-student`)
.then((Response)=>{
  console.log(Response.data);
  
  setstudent(Response.data)
})
.catch((err)=>console.log(err))

  }, [])
  
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/delete-student/${id}`)
      .then(() => {
 
                Swal.fire({
                  icon: "success",
                  title: "Student Data Updated Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                  customClass: {
                    container: "swal-overlay",
                    
                  },
                  
                }).then(()=>{
                    navigate("/studentlist");
                });

        // Delete ke baad student list ko refresh karne ke liye
        setstudent(student.filter((stud) => stud.id !== id));

      })
      .catch((err) => console.log(err));
  }
  return (
    <>
    
    <Layoutm/>

    <Toolbar/>
    <Box sx={{ml:"210px" , p:3}}>
        <Typography variant='h3'>Student List</Typography>
        <Divider sx={{mt:2}}/>
        <TableContainer sx={{mt:2}} >
        <Table>
          
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Cource</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow> 
          </TableHead>

        <TableBody sx={{textAlign:"center"}}>
  {student.map((student, index) => (
    <TableRow key={index}>
      <TableCell>{student.id}</TableCell>
      <TableCell>{student.name}</TableCell>
      <TableCell>{student.cource}</TableCell>
      <TableCell>{student.email}</TableCell>
      <TableCell>
        {/* Action buttons yahan add karenge */}
        <Button variant='outlined' color='primary' component={Link} to={`/edit-student/${student.id}`}>Edit</Button>
      <Button
  variant="outlined"
  color="error"
  value={student.id}
  sx={{ ml: 2 }}
  onClick={() => handleDelete(student.id)}
>
  Delete
</Button>
  
      </TableCell>
    </TableRow>
  ))}
</TableBody>

        </Table>
        </TableContainer>

    </Box>
    </>
  )
}
