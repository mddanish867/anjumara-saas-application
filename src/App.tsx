import 'highlight.js/styles/github.css'; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./layout/Layout";
import Authorization from "./Pages/Auth/Authorization";
import Home from "./Pages/Hero/Home";
import Frontend from "./Pages/Frontend/Frontend";
import ReactPage from "./Pages/Frontend/React";
import Backend from "./Pages/Backend/Backend";
import Sql from "./Pages/Database/Sql";
import Azure from "./Pages/Cloud/Azure";
import Git from "./Pages/VersionControl/Git";
import ScrollToTop from "./BreadCrum/ScrollTop";
import SignUp from "./Pages/Auth/SignUp";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Signin from "./Pages/Auth/Signin";
import VerifyEmail from "./Pages/Auth/VerifyEmail";
import UserDetails from "./Pages/Auth/UserDetails";
import LandingPage1 from "./Pages/LandingPages/LandingPage1";
import Settings from "./Pages/Settings/Settings";
import Pricing from "./Pages/Pricing/Pricing";
import ResetPassword from "./Pages/Auth/ResetPassword";
import TemplateDetails from "./Pages/Templates/TemplateDetails";
import TextToSql from "./Pages/Database/TextToSql";
import AllComponents from './Pages/Components/AllComponents';
import AllTemplates from './Pages/Templates/AllTemplates';
import ComponentDetails from './Pages/Components/ComponentDetails';
import InterviewSection from './Pages/InterviewPrep/InterviewSection';
import ChatUI from './Pages/AI/ChatUI';
import B12Clone from './Pages/LandingPages/B12LandingPage';
import ZIP from './Pages/LandingPages/ZIPLandingPage';
import Jasper1 from './Pages/LandingPages/Jasper1';
import Jasper2 from './Pages/LandingPages/jasper2';
import Stack from './Pages/LandingPages/Stack';
import Aethik from './Pages/LandingPages/Aethik';
import React from './Pages/Frontend/React';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/authorization" element={<Authorization />} />
              <Route path="/interview-section" element={<InterviewSection />} />
              <Route path="/interview-section/frontend" element={<Frontend />} />
              <Route path="/frontend" element={<Frontend />} />
              <Route path="/frontend/react" element={<React/>} />
              <Route path="/react" element={<ReactPage />} />
              <Route path="/interview-section/backend" element={<Backend />} />
              <Route path="/backend" element={<Backend />} />
              <Route path="/interview-section/sql" element={<Sql />} />
              <Route path="/sql" element={<Sql />} />
              <Route path="/azure" element={<Azure />} />
              <Route path="/interview-section/azure" element={<Azure />} />
              <Route path="/git" element={<Git />} />
              <Route path="/interview-section/git" element={<Git />} />
              <Route path="/user-details" element={<UserDetails />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/all-access" element={<Pricing />} />
              <Route path="/template-details" element={<TemplateDetails />} />
              <Route path="/interview-section/sql/texttosql" element={<TextToSql/>} />
              <Route path="/texttosql" element={<TextToSql/>} />
              <Route path="/sql/texttosql" element={<TextToSql/>} />
              <Route path="/all-components" element={<AllComponents/>} />
              <Route path="/all-templates" element={<AllTemplates/>} />
              <Route path="/component-details" element={<ComponentDetails/>} />


            </Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verifyemail" element={<VerifyEmail/>} />
            <Route path="/landing-page1" element={<LandingPage1/>} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/chatui" element={<ChatUI/>} />
            <Route path="/all-templates/b12clone" element={<B12Clone/>} />
            <Route path="/all-templates/zip" element={<ZIP/>} />
            <Route path="/all-templates/jasper" element={<Jasper1/>} />
            <Route path="/all-templates/jasper2" element={<Jasper2/>} />
            <Route path="/all-templates/stack" element={<Stack/>} />
            <Route path="/all-templates/aethik" element={<Aethik/>} />


          </Routes>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
