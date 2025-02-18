import { Routes, Route, useNavigate, Navigate } from "react-router";
import { LandingPage, Login, Employees } from "../../pages";
import PrivateRoute from "./PrivateRoute";
import AddEmployee from "../employees/AddEmployee";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import Department from "../../pages/Department";

const Router = () => {
  const {isUser}:any = useContext(UserContext)
  
  return (
    <Routes>
      <Route index element={isUser ? <Navigate to="/employees" /> : <LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/employees/:id" element={<Employees />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/dipartment" element={<Department />} />
      </Route>
    </Routes>
  );
};

export default Router;
