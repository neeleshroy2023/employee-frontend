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

import theme from "../../../theme";
import BasicSelect from "../../../ui/BasicSelect";
import { useAddEmployee } from "../../../hooks/feature/useAddEmployee";

const AddEmployee = () => {
  const { departments, loading, error, handleChange, handleFormSubmit } =
    useAddEmployee();

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>{error.message}</Typography>;
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
            <BasicSelect
              id="department"
              handleChange={handleChange}
              departments={departments}
            />
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
