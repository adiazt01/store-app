import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Register } from "../pages";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to={"login"} />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};
