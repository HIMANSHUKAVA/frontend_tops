import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function View() {
  const [task1, settask] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/viewdeta")
      .then((response) => {
        settask(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handldelete = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then(() => {
        navigate("/view");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>TITLE</TableCell>
            <TableCell>DESCRIPTION</TableCell>
            <TableCell>DUE DATE</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {task1.map((s, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{s.title}</TableCell>
              <TableCell>{s.task}</TableCell>
              <TableCell>{s.duedate}</TableCell>
              <TableCell>
                <Button color="error" onClick={() => handldelete(s.id)}>
                  Delete
                </Button>
                <Button component={Link} to={`/edit/${s.id}`}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
