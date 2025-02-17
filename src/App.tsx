import "./css/App.css";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import theme from "./theme";
import { BrowserRouter } from "react-router";
// import Router from "./components/features/navigation/Router";
import Navbar from "./Ui/Navbar";
import { UserProvider } from "./Context/UserContext";
// import InfoPage from "./infiniteScroll/InfoPage";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import Todolist from "./DragDrop/TodoList";
import Promise from "./PromiseAPI/Promise";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <div className="App">
            <Container maxWidth="xl">
              {/* <Router /> */}
              {/* <InfoPage/> */}
              {/* <DndProvider backend={HTML5Backend}>
                <Todolist />
              </DndProvider> */}
              <Promise/>
            </Container>
          </div>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
