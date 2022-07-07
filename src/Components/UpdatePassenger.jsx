import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  fetchSelectedPassanger,
  getArlines,
  getSelectedPassager,
  updatePassanger,
} from "../Features/PassngerSlice";

function UpdatePassenger() {
  const [updateData, setupdateData] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedPassanger = useSelector(getSelectedPassager());
  const { airlines } = useSelector(getArlines());
  console.log("selectedPassanger: ", selectedPassanger);

  useEffect(() => {
    dispatch(fetchSelectedPassanger(id));
  }, [dispatch, id]);

  useMemo(() => {
    if (selectedPassanger && airlines) {
      setupdateData({
        name: selectedPassanger?.name || "",
        trips: selectedPassanger?.trips || "",
        airline:
          (selectedPassanger.airline && selectedPassanger?.airline[0]?.id) ||
          "",
      });
    }
  }, [airlines, selectedPassanger]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setupdateData({
      ...updateData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    dispatch(
      updatePassanger(
        {
          name: "John Doe",
          trips: 500,
          airline: 8,
        },
        id
      )
    );
    // navigate("/");
  };
  return (
    <Container sx={{ m: "auto", p: 3 }}>
      <Typography
        variant="h4"
        sx={{ backgroundColor: "#1976d2", color: "white" }}
      >
        Update Passenger
      </Typography>
      <form>
        <Paper sx={{ p: 5 }}>
          <Box>
            <TextField
              sx={{ m: 2 }}
              fullWidth
              id="outlined-basic"
              label="Name"
              name="name"
              type="text"
              value={updateData.name || " "}
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              sx={{ m: 2 }}
              fullWidth
              name="trips"
              id="outlined-basic"
              label="Trips"
              value={updateData.trips || " "}
              variant="outlined"
              onChange={handleChange}
            />
            <FormControl fullWidth sx={{ m: 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Airline
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="airline"
                value={updateData.airline || ""}
                label="Airline"
                onChange={handleChange}
              >
                {airlines.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
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
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Update Passenger
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default UpdatePassenger;
