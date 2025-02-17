import "./css/App.css";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import theme from "./theme";
import { BrowserRouter } from "react-router";
import Router from "./components/features/navigation/Router";
import Navbar from "./ui/Navbar";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <div className="App">
            <Container maxWidth="xl">
              <Router />
            </Container>
          </div>
        </BrowserRouter>
      </UserProvider>
      {/* <UserProvider /> */}
    </ThemeProvider>
  );
}

export default App;
