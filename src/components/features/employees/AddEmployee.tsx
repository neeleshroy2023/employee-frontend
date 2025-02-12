import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../../theme";
import API_KEYS from "../../../api/keys";
import useApiRequest from "../../../hooks/useApiRequest";
import { useNavigate } from "react-router";

const AddEmployee = () => {
  const navigate = useNavigate();
  const { loading, error, getData } = useApiRequest(
    `${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}`,
    "POST"
  );

  console.log(error, loading)

  const handleFormSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    await getData({
      body: JSON.stringify({
        firstName: e.target.elements.firstName.value,
        lastName: e.target.elements.lastName.value,
        email: e.target.elements.email.value,
        position: e.target.elements.position.value,
        department: e.target.elements.department.value,
        salary: e.target.elements.salary.value,
      }),
    });
    navigate("/employees");
  };

  // if(loading){
  //   return <CircularProgress />
  // }

  if(error){
    return <Typography>{error.message}</Typography>
  }

  return (
    <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            variant="h3"
            sx={{
              mb: "16px",
              mt: "16px",
              color: theme.palette.primary.main,
            }}
          >
            Add New Employee
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <FormControl sx={{ mb: "16px" }} fullWidth>
              <TextField id="firstName" placeholder="First Name " type="text" />
            </FormControl>
            <FormControl sx={{ mb: "16px" }} fullWidth>
              <TextField id="lastName" placeholder="LastName" type="text" />
            </FormControl>
            <FormControl sx={{ mb: "16px" }} fullWidth>
              <TextField id="email" placeholder="Email" type="email" />
            </FormControl>
            <FormControl sx={{ mb: "16px" }} fullWidth>
              <TextField id="position" placeholder="Position" type="text" />
            </FormControl>
            <FormControl sx={{ mb: "16px" }} fullWidth>
              <TextField id="department" placeholder="Department" type="text" />
            </FormControl>
            <FormControl sx={{ mb: "16px" }} fullWidth>
              <TextField id="salary" placeholder="Salary" type="number" />
            </FormControl>
            <FormControl sx={{ mb: "16px" }} fullWidth>
              <Button type="submit" variant="contained">
                Add Employee
              </Button>
            </FormControl>
          </form>

        </CardContent>
      </Card>
    </Grid2>
  );
};

export default AddEmployee;
