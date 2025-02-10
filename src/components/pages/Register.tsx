import { Box, FormControl, Grid2, Input, Typography } from "@mui/material";

const Register = () => {
  return (
    <Box>
      <Grid2 container spacing={4}>
        <Grid2
          size={{ xs: 12, sm: 12, md: 7 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontSize: { xs: ".8rem", sm: "1rem" } }}
          >
            Employee Management
          </Typography>
          <Box
            component="img"
            sx={{
              // height: {sx:80, sm: 200, lg: 400 },
              borderRadius: 3,
              width: { xs: "100%" },
              // maxHeight: { xs: 233, md: 167 },
              // maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 12, md: 5, lg: 5 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
          <FormControl sx={{ mb: "16px", cursor: "pointer" }} fullWidth>
            <Input type="Submit" />
          </FormControl>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Register;
