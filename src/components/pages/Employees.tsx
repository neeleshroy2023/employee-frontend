import { Box, Typography } from "@mui/material";
import EmployeeList from "../features/employees/EmployeeList";
import useFeed from "../../hooks/feature/useFeed";

const Employees = () => {

  const employees = useFeed()
  console.log(employees);

  return (
    <Box>
      <Typography variant="h2">Employees</Typography>
      <EmployeeList employees={[]} />
    </Box>
  );
};

export default Employees;
