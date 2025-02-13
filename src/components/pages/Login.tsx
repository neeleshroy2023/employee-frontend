import {
  Container,
  Grid2,
  Card,
  CardContent,
  Typography,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import { useLocation } from "react-router";
import theme from "../../theme";
import useAuth from "../../hooks/feature/useAuth";

const Login = () => {
  const location = useLocation();
  const { handleLogin } = useAuth();
  const { email } = location.state || { email: "" };
  return (
    <Container maxWidth="xl">
      <Grid2 container spacing={4} sx={{ marginTop: 4 }}>
        <Grid2 size={{ xs: 12, sm: 6, md: 8 }}>
          <h1>Employee Management</h1>
        </Grid2>
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
                Login
              </Typography>
              <form onSubmit={(e) => handleLogin(e)}>
                <FormControl sx={{ mb: "16px" }} fullWidth>
                  <TextField
                    id="loginEmail"
                    placeholder="Email address"
                    type="email"
                    defaultValue={email}
                  />
                </FormControl>
                <FormControl sx={{ mb: "16px" }} fullWidth>
                  <TextField
                    id="loginPassword"
                    placeholder="Password"
                    type="password"
                  />
                </FormControl>
                <FormControl sx={{ mb: "16px" }} fullWidth>
                  <Button type="submit" variant="contained">
                    Sign In
                  </Button>
                </FormControl>
              </form>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Login;
