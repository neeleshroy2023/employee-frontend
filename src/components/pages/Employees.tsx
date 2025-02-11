import { Box, CircularProgress, Typography } from "@mui/material";
import EmployeeList from "../features/employees/EmployeeList";
import API_KEYS from "../../api/keys";
import useGetRequest from "../../hooks/useApiRequest";
import { useEffect } from "react";

const Employees = () => {
  const {
    data: employees,
    loading,
    error,
    getData,
  } = useGetRequest(`${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}`);

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h2">Employees</Typography>
      <EmployeeList employees={employees} />
    </Box>
  );
};

export default Employees;
