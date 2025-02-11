import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  CircularProgress,
} from "@mui/material";
import API_KEYS from "../../api/keys";
import { useNavigate } from "react-router";
import useApiRequest from "../../hooks/useApiRequest";

const AddEmployee = () => {
  const navigate = useNavigate();
  const { getData } = useApiRequest(
    `${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}`,
    "POST"
  );
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    department: "",
    salary: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    await getData({
      body: JSON.stringify(newEmployee),
    });
    navigate("/employees");
    console.log(newEmployee);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}`,
        {
          method: "POST",
          body: JSON.stringify(newEmployee),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("failed");
      }

      navigate("/employees");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }
  const handleNavigate = () => {
    navigate("/employees");
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h4">Add New Employee</Typography>
      <form
        onSubmit={handleSubmit}
        style={{ width: "400px", marginTop: "20px" }}
      >
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="First Name"
            name="firstName"
            value={newEmployee.firstName}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Last Name"
            name="lastName"
            value={newEmployee.lastName}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Email"
            name="email"
            value={newEmployee.email}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Position"
            name="position"
            value={newEmployee.position}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Department"
            name="department"
            value={newEmployee.department}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Salary"
            name="salary"
            value={newEmployee.salary}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button type="submit" variant="contained">
          Add Employee
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNavigate}
          sx={{ marginLeft: 9 }}
        >
          Return to Employee
        </Button>
      </form>

      {error && <Typography>{error}</Typography>}
    </Box>
  );
};

export default AddEmployee;
