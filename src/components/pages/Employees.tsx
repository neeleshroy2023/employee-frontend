import { Box, CircularProgress, Typography } from "@mui/material";
import EmployeeList from "../features/employees/EmployeeList";
import API_KEYS from "../../api/keys";
import useGetRequest from "../../hooks/useApiRequest";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";

const Employees = () => {
  const { isUser }: any = useContext(UserContext);
  console.log(isUser);
  const { data, loading, error, getData }: any = useGetRequest(
    `${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}`
  );
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

  const onDeleteEmployee = (employeeId: any) => {
    const updatedEmployees = data.filter(
      (employee: any) => employee.id !== employeeId
    );
    getData(updatedEmployees);
  };

  return (
    <Box>
      <EmployeeList employees={data} onDeleteEmployee={onDeleteEmployee} />
    </Box>
  );
};

export default Employees;
