import "./css/App.css";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import theme from "./theme";
import { BrowserRouter } from "react-router";
import Router from "./components/features/navigation/Router";
import Navbar from "./Ui/Navbar";
import { UserProvider } from "./Context/UserContext";
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
    </ThemeProvider>
  );
}

export default App;
