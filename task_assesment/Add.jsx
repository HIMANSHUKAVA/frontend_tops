import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const [task, settask] = useState({
    title: "",
    task: "",
    duedate: "",
  });

  const navigate = useNavigate();

  const handletaskevent = (e) => {
    settask({ ...task, [e.target.name]: e.target.value });
  };

  const handlsubmit = async (e) => {
    e.preventDefault();

    const error = validetions();

    if (Object.keys(error).length > 0) {
      setvalidate(error);
      return;
    }
    setvalidate({});
    axios
      .post(`http://localhost:3000/add`, task)
      .then(() => {
        console.log("success");
        navigate("/view");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [validate, setvalidate] = useState({});

  const validetions = () => {
    const newerror = {};

    if (!task.title.trim()) newerror.title = "Task title is required";
    else if (task.title.length < 10)
      newerror.title = "task title length is small";
    if (!task.task.trim()) newerror.task = "task description is required";
    if (!task.duedate.trim()) newerror.duedate = "date is required";

    return newerror;
  };

  return (
    <>
      <Box
        sx={{
          boxShadow: "0 20px 40px rgba(15, 23, 42, 0.8)",
          backgroundColor: "#020617",
          minHeight: "100vh",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: "1px solid rgba(148, 163, 184, 0.3)",
            boxShadow:
              "0 20px 40px rgba(15, 23, 42, 0.8), 0 0 0 1px rgba(80, 144, 233, 0.1)",
            width: { xs: "85%", sm: "60%", md: "40%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px",
            gap: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            {" "}
            Add Task
          </Typography>
          <form onSubmit={handlsubmit}>
            <TextField
              id="title"
              name="title"
              value={task.title}
              onChange={handletaskevent}
              label="Enter The Task Title"
              sx={{
                // mb: 2,
                width: "90%",

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(148,163,184,0.4)",
                  },
                  "&:hover fieldset": {
                    borderColor: "#38bff8",
                  },
                  "& .Mui-focused fieldset": {
                    borderColor: "#38bdf8",
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "#cbd5f5",
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "#94a3b8",
                },
              }}
              error={!!validate.title}
              helperText={validate.title}
            />
            <TextareaAutosize
              placeholder="Task Description"
              name="task"
              value={task.task}
              onChange={handletaskevent}
              minRows={5}
              style={{
                width: "90%",
                color: "#cbd5f5",
                marginTop: "10px",
                borderRadius: 4,
                border: validate.task
                  ? "1px solid red"
                  : "1px solid rgba(148,163,184,0.4)",
                outline: "none",
                background: "#020617",
              }}
            />

            {validate.task && (
              <Typography
                sx={{
                  color: "red",
                  fontSize: "12px",
                  width: "90%",
                  textAlign: "left",
                }}
              >
                {validate.task}
              </Typography>
            )}

            <TextField
              name="duedate"
              id="duedate"
              value={task.duedate}
              onChange={handletaskevent}
              type="date"
              error={!!validate.duedate}
              helperText={validate.duedate}
              sx={{
                // mb: 2,
                width: "90%",
                mt: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(148,163,184,0.4)",
                  },
                  "&:hover fieldset": {
                    borderColor: "#38bff8",
                  },
                  "& .Mui-focused fieldset": {
                    borderColor: "#38bdf8",
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "#cbd5f5",
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "#94a3b8",
                },
              }}
            />

            <Button
              type="submit"
              variant="outlined"
              sx={{
                mt: 2,
                width: "90%",
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}
