import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Authorization from "./Pages/MachinesCodes/Auth/Authorization";
import Home from "./Pages/Home";
import Section from "./Pages/Section/Section";
import Frontend from "./Pages/Frontend/Frontend";
import ReactPage from "./Pages/Frontend/React";
import Backend from "./Pages/Backend/Backend";
import Sql from "./Pages/Database/Sql";
import Azure from "./Pages/Cloud/Azure";
import Git from "./Pages/VersionControl/Git";
import ScrollToTop from "./BreadCrum/ScrollTop";
import { ThemeProvider } from "./components/theme-provider";
import SignUp from "./Pages/MachinesCodes/SignUp";
import Login from "./Pages/MachinesCodes/Login";
import ForgotPassword from "./Pages/MachinesCodes/Auth/ForgotPassword";

function App() {
  return (
    <Router>
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ScrollToTop/>
      <Routes>
     
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/authorization" element={<Authorization />} />
          <Route path="/section" element={<Section />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/section/frontend" element={<Frontend />} />
          <Route path="/react" element={<ReactPage />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/section/backend" element={<Backend />} />
          <Route path="/section/sql" element={<Sql />} />
          <Route path="/sql" element={<Sql />} />
          <Route path="/azure" element={<Azure />} />
          <Route path="/section/azure" element={<Azure />} />
          <Route path="/git" element={<Git />} />
          <Route path="/section/git" element={<Git />} />
        </Route>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        
      </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
