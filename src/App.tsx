import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Authorization from "./Pages/Auth/Authorization";
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
import SignUp from "./Pages/Auth/SignUp";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Signin from "./Pages/Auth/Signin";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import VerifyEmail from "./Pages/Auth/VerifyEmail";
import UserDetails from "./Pages/Auth/UserDetails";
import LandingPage1 from "./Pages/LandingPages/LandingPage1";

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
              <Route path="/user-details" element={<UserDetails />} />

            </Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/verifyemail" element={<VerifyEmail/>} />
            <Route path="/landing-page1" element={<LandingPage1/>} />

          </Routes>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
