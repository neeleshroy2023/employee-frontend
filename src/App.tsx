import "./css/App.css";
import { ThemeProvider, Typography, CssBaseline } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <Typography variant="h1">Hello, World!</Typography>
          <Typography variant="body1">Hello, World!</Typography>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
