import "./css/App.css";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import theme from "./theme";
import { BrowserRouter } from "react-router";
import Router from "./components/features/navigation/Router";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Container maxWidth="xl">
            <Router />
          </Container>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
