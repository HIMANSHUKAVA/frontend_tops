import React, { useEffect, useState } from "react";
import Layoutm from "../Layoutm";
import {
  Box,
  Divider,
  Toolbar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
export default function FetchStudentdeta() {
  const { id } = useParams();

  const navigate = useNavigate();   
  const [deta, setdeta] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:8080/view-student/${id}`).then((Response) => {
      console.log(Response.data);
      setdeta(Response.data);
    });
  },[] );

  const handlupdate = () => {
    axios
      .put(`http://localhost:8080/update-student/${id}`, deta)
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
       
          setdeta({ name: "", cource: "", email: "" });
        
      })
      .catch((err) => console.log(err));
      
  };

  return (
    <>
      <Layoutm />

      <Toolbar />

      <Box sx={{ ml: "210px", p: 3 }}>
        <Typography variant="h4">Student Detail</Typography>
        <Divider />

        <form onSubmit={handlupdate}>
          <TextField
            id="name"
            name="name"
            value={deta?.name}
            variant="outlined"
            sx={{ mt: 2, width: "50%" }}
            onChange={(e) => setdeta({ ...deta, name: e.target.value })}

          />
          <br />
          <TextField
            id="cource"
            name="cource"
            value={deta?.cource}
            variant="outlined"
            sx={{ mt: 2, width: "50%" }}
            onChange={(e) => setdeta({ ...deta, cource: e.target.value })}
            
          />
          <br />
          <TextField
            id="email"
            name="email"
            value={deta?.email}
            variant="outlined"
            sx={{ mt: 2, width: "50%" }}
            onChange={(e) => setdeta({ ...deta, email: e.target.value })}
            
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Update
          </Button>
        </form>
      </Box>
    </>
  );
}
