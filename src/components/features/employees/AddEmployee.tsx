import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  CircularProgress,
} from "@mui/material";
import useAddEmployee from "../../../hooks/useAddEmployee";
import DeptSelector from "../../../Ui/DeptSelector";

const AddEmployee = () => {
  const {
    newEmployee,
    loading,
    error,
    handleChange,
    handleSubmit,
    handleDeptChange,
  } = useAddEmployee();

  if (loading) {
    return <CircularProgress />;
  }

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
          <DeptSelector onDeptChange={handleDeptChange} />
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
      </form>

      {error && <Typography>{error}</Typography>}
    </Box>
  );
};

export default AddEmployee;
