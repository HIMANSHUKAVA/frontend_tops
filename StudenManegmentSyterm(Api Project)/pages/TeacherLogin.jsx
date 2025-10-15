import React, { useContext, useState } from "react";
import Layoutm from "../Layoutm";
import {
  Box,
  Button,
  Divider,
  FormLabel,
  Link,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { TextFields } from "@mui/icons-material";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Authocontex } from "./Useautho";
export default function TeacherLogin() {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const handlevent = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const {islogin , setislogin} = useContext(Authocontex);
  const handllogin = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/login`, {
        email: form.email,
        password: form.password,
      })
      .then((Response) => {
        Swal.fire({
          icon: "success",
          title: Response.data,
          timer: 1500,
          showConfirmButton: false,
          
        });
         setislogin(true);
         navigate("/dasboard")
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.response?.data || "Faild",
          timer: 1500,
          showConfirmButton: false,

        });
        navigate("/login");
        setform({ email: "", password: "" });
      });
  };
  return (
    <>
      <Layoutm />

      <Toolbar />

      <Box sx={{ ml: "190px", p: 3 }}>
        <Typography variant="h4">Faculty Login Page</Typography>
        <Divider sx={{ mt: 3 }} />

        <Typography
          variant="h4"
          sx={{ mt: 3, textAlign: "center", color: "darkgray" }}
        >
          Welcome Back
        </Typography>

        <form style={{ textAlign: "center" }}>
          <TextField
            label="Enter Your Email"
            sx={{ width: "50%", mt: 2 }}
            name="email"
            id="email"
            value={form.email}
            onChange={handlevent}
            required
          />
          <br />
          <TextField
            label="Enter Your Password"
            sx={{ width: "50%", mt: 3 }}
            name="password"
            id="password"
            value={form.password}
            onChange={handlevent}
            required
          />
          <br />
          <Button
            variant="outlined"
            type="submit"
            onClick={handllogin}
            sx={{ mt: 2 }}
          >
            Login
          </Button>

          
        </form>
      </Box>
    </>
  );
}
