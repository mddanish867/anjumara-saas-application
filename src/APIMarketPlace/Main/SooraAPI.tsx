import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import LoginPage from "../Authentication/Login";
import RegisterPage from "../Authentication/RegisterPage";
import ForgotPasswordPage from "../Authentication/ForgotPasswordPage";
import Pricing from "../Pricing/Pricing";
import Features from "../Features/Features";

const SooraAPI = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />

      </Routes>
    </>
  );
};

export default SooraAPI;
