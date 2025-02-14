import { Box, CircularProgress, Typography } from "@mui/material";
import EmployeeList from "../features/employees/EmployeeList";

import API_KEYS from "../../api/keys";
import useGetRequest from "../../hooks/useApiRequest";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

const Employees = () => {
  const { pathname } = useLocation();
  const {isUser}:any = useContext(UserContext)
  const navigate = useNavigate();

  useEffect(() => {
    if(!isUser){
      navigate("/login");
    }
  }, [])

  const {
    data: employees,
    loading,
    error,
    getData,
  } = useGetRequest(`${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}`);

  useEffect(() => {
    console.log(pathname);
    const fn = async () => {
      await getData();
    };
    fn();
  }, []);

  useEffect(() => {
    if (pathname === "/employees") {
      async function abc() {
        await getData();
      }
      abc();
    }
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
        <Link className="addEmp" to="/addEmployee">Add Employ</Link>
      </Box>
      <EmployeeList employees={employees} />
    </Box>
  );
};

export default Employees;
