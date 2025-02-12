import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Box,
} from "@mui/material";
import BasicModal from "../../../ui/BasicModal";
import { Link } from "react-router";
import { TEmployee, TEmployeeList } from "../../../types/uiType";

const EmployeeList = ({ employees }: TEmployeeList) => {
  if (employees.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  function createData(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    position: string,
    department: string,
    salary: number,
    status: string,
    hireDate: string
  ) {
    return {
      id,
      firstName,
      lastName,
      email,
      position,
      department,
      salary,
      status,
      hireDate,
    };
  }

  const rows: TEmployee[] = employees.map((employee: TEmployee) =>
    createData(
      employee.id,
      employee.firstName,
      employee.lastName,
      employee.email,
      employee.position,
      employee.department,
      employee.salary,
      employee.status,
      employee.hireDate
    )
  );
  return (
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
          {rows.map((row: TEmployee) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <Link to={`/employees/${row.id}`}><BasicModal firstName={row.firstName} id={row.id}/></Link>
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;
