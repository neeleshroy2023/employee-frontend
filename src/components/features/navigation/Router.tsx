import { Routes, Route } from "react-router";
import { LandingPage, Login, Employees } from "../../pages";
import AddEmployee from "../../pages/AddEmployee";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/employees" element={<Employees />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Route>
    </Routes>
  );
};

export default Router;
