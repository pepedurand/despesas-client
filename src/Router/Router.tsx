import { HomePage } from "../Pages";
import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
};
