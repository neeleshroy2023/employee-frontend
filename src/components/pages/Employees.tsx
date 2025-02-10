import { Box, Typography } from "@mui/material";
import EmployeeList from "../features/employees/EmployeeList";

const Employees = () => {
  return (
    <Box>
      <Typography variant="h2">Employees</Typography>
      <EmployeeList employees={[]} />
    </Box>
  );
};

export default Employees;
