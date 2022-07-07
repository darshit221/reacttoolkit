import {
  Box,
  Button,
  Container,
  Pagination,
  Paper,
  Stack,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  deletePassanger,
  fetchArlines,
  fetchPassanger,
} from "../Features/PassngerSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Home() {
  const { passangers } = useSelector((state) => state.passangerSlice);
  const dispatch = useDispatch();
  console.log("passnger: ", passangers);

  useEffect(() => {
    dispatch(fetchPassanger());
    dispatch(fetchArlines());
  }, []);

  const deleteHandler = (id) => {
    dispatch(deletePassanger(id));
  };

  return (
    <Container>
      <Box sx={{ textAlign: "right", m: 2 }}>
        <Link to="/addpassenger">
          <Button variant="contained">Add New Passenger</Button>
        </Link>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Trips</StyledTableCell>
              <StyledTableCell align="left">Filght Name</StyledTableCell>
              <StyledTableCell align="left">Filght Id</StyledTableCell>
              <StyledTableCell align="left">Update</StyledTableCell>
              <StyledTableCell align="left">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {passangers?.data?.map((user) => {
              const { _id, name, trips, airline } = user;
              return (
                <StyledTableRow key={_id}>
                  <StyledTableCell align="left">{name}</StyledTableCell>
                  <StyledTableCell align="left">{trips}</StyledTableCell>
                  <StyledTableCell align="left">
                    {airline[0].name}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {airline[0].id}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Link to={`/updatepassenger/${_id}`}>
                      <Button variant="contained">update</Button>
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Button
                      onClick={() => deleteHandler(_id)}
                      variant="outlined"
                      sx={{ color: "red", borderColor: "red" }}
                    >
                      delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Home;
