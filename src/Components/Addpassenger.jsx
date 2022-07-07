import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPassanger, fetchPassanger } from "../Features/PassngerSlice";

function Addpassenger() {
  const dispatch = useDispatch();
  const [passangerData, setpassangerData] = useState({});
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setpassangerData({
      ...passangerData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // navigate("/");
    dispatch(addPassanger({ airline: 2, name: "rew", trips: 123 }));
    dispatch(fetchPassanger());
    e.preventDefault();
  };
  return (
    <Container sx={{ p: 3 }}>
      <Typography
        variant="h4"
        sx={{ backgroundColor: "#1976d2", color: "white" }}
      >
        Add New Passenger
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Paper sx={{ p: 5 }}>
          <Box>
            <TextField
              sx={{ m: 2 }}
              fullWidth
              id="outlined-basic"
              label="Name"
              type="text"
              name="name"
              value={passangerData.name}
              variant="outlined"
              onChange={handlerChange}
            />
            <TextField
              sx={{ m: 2 }}
              fullWidth
              id="outlined-basic"
              label="Trips"
              type="number"
              name="trips"
              value={passangerData.trips}
              variant="outlined"
              onChange={handlerChange}
            />
            <TextField
              sx={{ m: 2 }}
              fullWidth
              id="outlined-basic"
              label="Airline Number"
              type="number"
              name="airline"
              value={passangerData.airline}
              variant="outlined"
              onChange={handlerChange}
            />
          </Box>
        </Paper>
        <Box sx={{ textAlign: "right", m: 2 }}>
          <Link to="/">
            <Button
              variant="outlined"
              sx={{ color: "red", borderColor: "red", margin: 2 }}
            >
              Exit
            </Button>
          </Link>
          <Button type="submit" variant="contained">
            Add New Passenger
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default Addpassenger;
