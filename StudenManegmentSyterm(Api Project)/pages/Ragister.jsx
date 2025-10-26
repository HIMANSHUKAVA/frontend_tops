import React, { useContext, useState } from "react";
import Layoutm from "../Layoutm";
import { Authocontex } from "./Useautho";
import {
  Box,
  Button,
  Divider,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Password } from "@mui/icons-material";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Ragister() {
  const { islogin, setislogin } = useContext(Authocontex);

  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handlformevent = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handlsubmitevet = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/add-login`, form)
      
      .then((Response) => {
        console.log("student ragister", Response.data);

        Swal.fire({
          icon: "success",
          title: "Faculty Ragister Successfully",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            container: "swal-overlay",
          },
        });
        navigate("/dasboard");
        setislogin(true);
        setform({ name: "", cource: "", email: "" });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: error.response?.data || "Faild",
          timer: 1500,
          showConfirmButton: false,
        });
      });
  };
  return (
    <>
      <Toolbar />
      <Layoutm />

      <Box sx={{ ml: "190px", p: 2 }}>
        <Typography variant="h4" color="initial">
          Faculty Ragister Page
        </Typography>
        <Divider sx={{ mt: 3 }} />

        <Typography variant="h4" sx={{ mt: 2, textAlign: "center" }}>
          Ragister Here
        </Typography>
        <form
          style={{
            textAlign: "center",
          }}
        >
          <TextField
            id="name"
            name="name"
            label="Enter Your Name"
            value={form.name}
            onChange={handlformevent}
            sx={{ mt: 2, width: "50%" }}
          />
          <br />

          <TextField
            id="email"
            name="email"
            label="Enter Your Email"
            value={form.email}
            onChange={handlformevent}
            sx={{ mt: 2, width: "50%" }}
            // style={{width:"5%"}}
          />
          <br />

          <TextField
            id="password"
            name="password"
            label="Enter Your Passsword"
            value={form.password}
            onChange={handlformevent}
            sx={{ mt: 2, width: "50%" }}
            // style={{width:"35%"}}
          />
          <br />

          <Box sx={{ display: "flex", ml: 36 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handlsubmitevet}
              type="submit"
              sx={{ mt: 2 }}
            >
              Ragister
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setform({ name: "", password: "", email: "" })}
              sx={{ mt: 2, ml: 1 }}
            >
              Reset
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
