import { Routes, Route } from "react-router";
import { LandingPage, Login, Employees } from "../../pages";
import PrivateRoute from "./PrivateRoute";
import AddEmployee from "../../pages/AddEmployee";

const Router = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/employees" element={<Employees />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Route>
    </Routes>
  );
};

export default Router;
