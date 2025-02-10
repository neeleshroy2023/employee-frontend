import { Grid2, Box, FormControl, Typography, Input } from "@mui/material";

const LandingPage = () => {
  return (
    <Box>
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, sm: 6, md: 8 }}>
          <h1>Employee Management</h1>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography variant="h3" sx={{ mb: "16px", mt: "16px" }}>
            Register
          </Typography>
          <FormControl sx={{ mb: "16px" }} fullWidth>
            <Input
              id="register-email"
              placeholder="Email address"
              type="email"
            />
          </FormControl>
          <FormControl sx={{ mb: "16px" }} fullWidth>
            <Input
              id="register-password"
              placeholder="Password"
              type="password"
            />
          </FormControl>
          <FormControl sx={{ mb: "16px" }} fullWidth>
            <Input
              id="register-employeeId"
              placeholder="Employee Id"
              type="number"
            />
          </FormControl>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default LandingPage;
