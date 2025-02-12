import {
  Grid2,
  Container,
  FormControl,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import theme from "../../theme";
import useAuth from "../../hooks/feature/useAuth";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

const LandingPage = () => {
  const { handleRegister, err } = useAuth();
  const {isUser, setIsUser}:any = useContext(UserContext)
  console.log(isUser)

  useEffect(() => {
    setIsUser(true)
  }, [])
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Grid2 container spacing={4}>
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
                  Register
                </Typography>
                <form onSubmit={(e) => handleRegister(e)}>
                  <FormControl sx={{ mb: "16px" }} fullWidth>
                    <TextField
                      id="registerEmail"
                      placeholder="Email address"
                      type="email"
                    />
                  </FormControl>
                  <FormControl sx={{ mb: "16px" }} fullWidth>
                    <TextField
                      id="registerPassword"
                      placeholder="Password"
                      type="password"
                    />
                  </FormControl>
                  <FormControl sx={{ mb: "16px" }} fullWidth>
                    <TextField
                      id="registerEmployeeId"
                      placeholder="Employee Id"
                      type="number"
                    />
                  </FormControl>
                  {err && <Typography>{err}</Typography>}
                  <FormControl sx={{ mb: "16px" }} fullWidth>
                    <Button type="submit" variant="contained">
                      Sign Up
                    </Button>
                  </FormControl>
                </form>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default LandingPage;
