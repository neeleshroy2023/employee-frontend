import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router";
import "./../css/App.css";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

let pages = ["Home", "Employees", "Department", "Login"];

function Navbar() {
  const { isUser }: any = useContext(UserContext);
  if (isUser) {
    pages = pages.filter((item) => {
      return item !== "Login";
    });
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Utils
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ textDecoration: "none", color: "white" }}
              >
                <Link
                  className="link"
                  to={`/${page === "Home" ? "" : page.toLowerCase()}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
