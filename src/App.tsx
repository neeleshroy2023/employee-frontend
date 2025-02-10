import "./css/App.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import { BrowserRouter } from "react-router";
import Router from "./components/features/navigation/Router";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
