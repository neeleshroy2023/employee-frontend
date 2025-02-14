import { useState } from "react";
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
import EmployeeModal from "./EmployeeModal";

const EmployeeList = ({ employees, onDeleteEmployee }: any) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleModalOpen = (employee: any) => {
    setSelectedEmployee(employee);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedEmployee(null);
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 1, marginBottom: 1 }}
        onClick={() => navigate("/add-employee")}
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
            {employees.map((employee: any) => (
              <TableRow
                key={employee.id}
                onClick={() => handleModalOpen(employee)}
              >
                <TableCell>{employee.firstName}</TableCell>
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

      {selectedEmployee && (
        <EmployeeModal
          open={openModal}
          handleClose={handleModalClose}
          employee={selectedEmployee}
          onDeleteEmployee={onDeleteEmployee}
        />
      )}
    </Box>
  );
};

export default EmployeeList;
