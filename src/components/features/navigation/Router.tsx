import { Routes, Route, Navigate } from "react-router";
import { LandingPage, Login, Employees } from "../../pages";
import AddEmployee from "../employees/AddEmployee";
import PrivateRoute from "./PrivateRoute";
import { UserContext } from "../../../Context/UserContext";
import { useContext } from "react";

const Router = () => {
  const { isUser }: any = useContext(UserContext);
  console.log(isUser);
  return (
    <Routes>
      <Route
        index
        element={isUser ? <Navigate to="/employees" /> : <LandingPage />}
      />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/employees" element={<Employees />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Route>
    </Routes>
  );
};

export default Router;
