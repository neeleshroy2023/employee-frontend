import { Routes, Route } from "react-router";
import { LandingPage, Register } from "../../pages";

const Router = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
