import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router";

const EmployeeList = ({ employees }) => {
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate("/add-employee");
  };

  if (employees.length === 0) {
    return <Box>No employees found</Box>;
  }

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 1, marginBottom: 1 }}
        onClick={handleAddEmployee}
      >
        Add New Employee
      </Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell component="th" scope="row">
                  {employee.firstName}
                </TableCell>
                <TableCell align="right">{employee.lastName}</TableCell>
                <TableCell align="right">{employee.email}</TableCell>
                <TableCell align="right">{employee.position}</TableCell>
                <TableCell align="right">{employee.department}</TableCell>
                <TableCell align="right">{employee.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmployeeList;
