import { Box, CircularProgress, Typography } from "@mui/material";
import EmployeeList from "../features/employees/EmployeeList";

import API_KEYS from "../../api/keys";
import useGetRequest from "../../hooks/useApiRequest";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";


const Employees = () => {
  const {pathname} = useLocation()
  const [refresh, setRefrsh] = useState(true)

  const {
    data: employees,
    loading,
    error,
    getData,
  } = useGetRequest(`${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}`);

  useEffect(() => {
      refresh && getData();
      setRefrsh(!refresh);
  }, [pathname]);

  if (loading) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <Box>
      <Box>
        <Typography variant="h2">Employees</Typography>
        <Link to="/addEmployee">Add Employ</Link>
      </Box>
      <EmployeeList employees={employees} />
    </Box>
  );
};

export default Employees;
