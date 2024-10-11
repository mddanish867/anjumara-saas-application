import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import LoginPage from "../Authentication/Login";
import RegisterPage from "../Authentication/RegisterPage";

const SooraAPI = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>

      </Routes>
    </>
  )
}

export default SooraAPI
