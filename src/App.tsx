import "highlight.js/styles/github.css";

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
import AllComponents from "./Pages/Components/AllComponents";
import AllTemplates from "./Pages/Templates/AllTemplates";
import ComponentDetails from "./Pages/Components/ComponentDetails";
import InterviewSection from "./Pages/InterviewPrep/InterviewSection";
import ChatUI from "./Pages/AI/ChatUI";
import B12Clone from "./Pages/LandingPages/B12LandingPage";
import ZIP from "./Pages/LandingPages/ZIPLandingPage";
import Jasper1 from "./Pages/LandingPages/Jasper1";
import Jasper2 from "./Pages/LandingPages/jasper2";
import Stack from "./Pages/LandingPages/Stack";
import Aethik from "./Pages/LandingPages/Aethik";
import React from "./Pages/Frontend/React";
import HubSpotClone from "./Pages/LandingPages/HubSpotClone";
import Temp7 from "./Pages/LandingPages/Temp7";
import HubSpotLanding from "./Pages/LandingPages/temp6";
import Temp8 from "./Pages/LandingPages/temp8";
import Temp9 from "./Pages/LandingPages/temp9";
import Temp10 from "./Pages/LandingPages/Temp10";
import Temp11 from "./Pages/LandingPages/Temp11";
import Temp12 from "./Pages/LandingPages/Temp12";
import Ecom1 from "./Pages/LandingPages/Ecom1";
import Ecom2 from "./Pages/LandingPages/Ecom2";
import Ecom3 from "./Pages/LandingPages/Ecom3";
import Ecom4 from "./Pages/LandingPages/Ecom4";
import Ecom5 from "./Pages/LandingPages/Ecom5";
import Ecom6 from "./Pages/LandingPages/Ecom6";
import Ecom7 from "./Pages/LandingPages/Ecom7";
import Ecom8 from "./Pages/LandingPages/Ecom8";
import Ecom9 from "./Pages/LandingPages/Ecom9";
import Ecom10 from "./Pages/LandingPages/Ecom10";
import EmailMarketDashboard from "./Pages/LandingPages/EmailmarketDashboard";
import EmailMarketTemp from "./Pages/LandingPages/EmailTemp";
import ForumTemplate from "./Pages/LandingPages/Forumtemp";
import CodaCommunity from "./Pages/LandingPages/CommunityForum";
import BankTemp from "./Pages/LandingPages/bankTemp";
import Banktemp2 from "./Pages/LandingPages/Banktemp2";
import AITemp from "./Pages/LandingPages/AIteemp";
import BankTemp3 from "./Pages/LandingPages/BankTemp3";
import Banktemp4 from "./Pages/LandingPages/BankTemp4";
import BankTempp5 from "./Pages/LandingPages/bankTemp5";
import Banktemp6 from "./Pages/LandingPages/BankTemp6";
import WebStudio from "./Pages/LandingPages/WebStudio";
import AITemp2 from "./Pages/LandingPages/ATTemp";
import WebBuilder from "./Pages/LandingPages/WebBuilder";
import WebBuilder2 from "./Pages/LandingPages/WebBuilder2";
import Hostweb from "./Pages/LandingPages/Hostweb";
import CodeReview from "./Pages/LandingPages/CodeReview";
import FlipkartHome from "./Pages/LandingPages/FliptKart";
import Temp22 from "./Pages/LandingPages/temp22";
import Temp24 from "./Pages/LandingPages/Temp24";
import Temp25 from "./Pages/LandingPages/Temp25";
import Temp26 from "./Pages/LandingPages/Temp26";
import Temp27 from "./Pages/LandingPages/Temp27";
import Temp28 from "./Pages/LandingPages/Temp28";
import Temp29 from "./Pages/LandingPages/Temp29";
import Temp30 from "./Pages/LandingPages/Temp30";
import Temp31 from "./Pages/LandingPages/Temp31";
import Temp32 from "./Pages/LandingPages/Temp32";
import Temp33 from "./Pages/LandingPages/Temp33";
import Temp34 from "./Pages/LandingPages/Temp34";
import Temp35 from "./Pages/LandingPages/Temp35";
import Temp36 from "./Pages/LandingPages/Temp36";
import Temp37 from "./Pages/LandingPages/Temp37";
import Temp38 from "./Pages/LandingPages/Temp38";
import Temp39 from "./Pages/LandingPages/Temp39";
import Temp40 from "./Pages/LandingPages/Temp40";
import Temp42 from "./Pages/LandingPages/Temp42";
import Temp43 from "./Pages/LandingPages/Temp43";
import Temp41 from "./Pages/LandingPages/Temp41";
import Temp45 from "./Pages/LandingPages/Temp45";
import Temp46 from "./Pages/LandingPages/Temp46";
import OTPVerification from "./Pages/Components/AllComponents/OTPVerification";
import Register from "./Pages/Components/AllComponents/Register";
import Login from "./Pages/Components/AllComponents/Login";
import EcommerceFilter from "./Pages/Components/AllComponents/ecommerce-filter";
import EcommerceFilter2 from "./Pages/Components/AllComponents/ecommerce-filter2";
import EcommerceFilter3 from "./Pages/Components/AllComponents/ecommerce-filter3";
import Temp47 from "./Pages/LandingPages/Temp47";
import LoginForm from "./Pages/Components/AllComponents/LoginForm";
import Temp48 from "./Pages/LandingPages/Temp48";
import OnboardingWizard from "./Pages/Components/AllComponents/MultiStepForm";
import Temp49 from "./Pages/LandingPages/Temp49";

import CodeDisplayComponent from "./Pages/Components/AllComponents/CodeDisplayComponent";

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
              <Route
                path="/interview-section/frontend"
                element={<Frontend />}
              />
              <Route path="/frontend" element={<Frontend />} />
              <Route path="/frontend/react" element={<React />} />
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
              <Route
                path="/interview-section/sql/texttosql"
                element={<TextToSql />}
              />
              <Route path="/texttosql" element={<TextToSql />} />
              <Route path="/sql/texttosql" element={<TextToSql />} />
              <Route path="/all-components" element={<AllComponents />} />
              <Route path="/all-templates" element={<AllTemplates />} />
              <Route path="/component-details" element={<ComponentDetails />} />
            </Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verifyemail" element={<VerifyEmail />} />
            <Route path="/landing-page1" element={<LandingPage1 />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/chatui" element={<ChatUI />} />
            <Route path="/all-templates/b12clone" element={<B12Clone />} />
            <Route path="/all-templates/zip" element={<ZIP />} />
            <Route path="/all-templates/jasper" element={<Jasper1 />} />
            <Route path="/all-templates/jasper2" element={<Jasper2 />} />
            <Route path="/all-templates/stack" element={<Stack />} />
            <Route path="/all-templates/aethik" element={<Aethik />} />
            <Route path="/all-templates/temp5" element={<HubSpotClone />} />
            <Route path="/all-templates/temp7" element={<Temp7 />} />
            <Route path="/all-templates/temp6" element={<HubSpotLanding />} />
            <Route path="/all-templates/temp8" element={<Temp8 />} />
            <Route path="/all-templates/temp9" element={<Temp9 />} />
            <Route path="/all-templates/temp10" element={<Temp10 />} />
            <Route path="/all-templates/temp11" element={<Temp11 />} />
            <Route path="/all-templates/temp12" element={<Temp12 />} />
            <Route path="/all-templates/ecom1" element={<Ecom1 />} />
            <Route path="/all-templates/ecom2" element={<Ecom2 />} />
            <Route path="/all-templates/ecom3" element={<Ecom3 />} />
            <Route path="/all-templates/ecom4" element={<Ecom4 />} />
            <Route path="/all-templates/ecom5" element={<Ecom5 />} />
            <Route path="/all-templates/ecom6" element={<Ecom6 />} />
            <Route path="/all-templates/ecom7" element={<Ecom7 />} />
            <Route path="/all-templates/ecom8" element={<Ecom8 />} />
            <Route path="/all-templates/ecom9" element={<Ecom9 />} />
            <Route path="/all-templates/ecom10" element={<Ecom10 />} />
            <Route
              path="/all-templates/email-market-dashboard"
              element={<EmailMarketDashboard />}
            />
            <Route
              path="/all-templates/email-market-temp"
              element={<EmailMarketTemp />}
            />
            <Route
              path="/all-templates/forum-temp"
              element={<ForumTemplate />}
            />
            <Route
              path="/all-templates/community-temp"
              element={<CodaCommunity />}
            />
            <Route path="/all-templates/bank-temp" element={<BankTemp />} />
            <Route path="/all-templates/bank-temp2" element={<Banktemp2 />} />
            <Route path="/all-templates/ai-temp" element={<AITemp />} />
            <Route path="/all-templates/bank-temp3" element={<BankTemp3 />} />
            <Route path="/all-templates/bank-temp4" element={<Banktemp4 />} />
            <Route path="/all-templates/bank-temp5" element={<BankTempp5 />} />
            <Route path="/all-templates/bank-temp6" element={<Banktemp6 />} />
            <Route path="/all-templates/web-studio" element={<WebStudio />} />
            <Route path="/all-templates/ai-temp2" element={<AITemp2 />} />
            <Route path="/all-templates/web-builder" element={<WebBuilder />} />
            <Route
              path="/all-templates/web-builder2"
              element={<WebBuilder2 />}
            />
            <Route path="/all-templates/host-web" element={<Hostweb />} />
            <Route path="/all-templates/code-review" element={<CodeReview />} />
            <Route
              path="/all-templates/flipkart-clone"
              element={<FlipkartHome />}
            />
            <Route path="/all-templates/temp22" element={<Temp22 />} />
            <Route path="/all-templates/temp24" element={<Temp24 />} />
            <Route path="/all-templates/temp25" element={<Temp25 />} />
            <Route path="/all-templates/temp26" element={<Temp26 />} />
            <Route path="/all-templates/temp27" element={<Temp27 />} />
            <Route path="/all-templates/temp28" element={<Temp28 />} />
            <Route path="/all-templates/temp29" element={<Temp29 />} />
            <Route path="/all-templates/temp30" element={<Temp30 />} />
            <Route path="/all-templates/temp31" element={<Temp31 />} />
            <Route path="/all-templates/temp32" element={<Temp32 />} />
            <Route path="/all-templates/temp33" element={<Temp33 />} />
            <Route path="/all-templates/temp34" element={<Temp34 />} />
            <Route path="/all-templates/temp35" element={<Temp35 />} />
            <Route path="/all-templates/temp36" element={<Temp36 />} />
            <Route path="/all-templates/temp37" element={<Temp37 />} />
            <Route path="/all-templates/temp38" element={<Temp38 />} />
            <Route path="/all-templates/temp39" element={<Temp39 />} />
            <Route path="/all-templates/temp40" element={<Temp40 />} />
            <Route path="/all-templates/temp41" element={<Temp41 />} />
            <Route path="/all-templates/temp42" element={<Temp42 />} />
            <Route path="/all-templates/temp43" element={<Temp43 />} />
            <Route path="/all-templates/temp45" element={<Temp45 />} />
            <Route path="/all-templates/temp46" element={<Temp46 />} />
            <Route path="/all-templates/temp47" element={<Temp47 />} />
            <Route path="/all-templates/temp48" element={<Temp48 />} />
            <Route path="/all-templates/temp49" element={<Temp49 />} />

            <Route path="/all-components/otp-verification" element={<OTPVerification />} />
            <Route path="/all-components/register" element={<Register />} />
            <Route path="/all-components/login" element={<Login />} />
            <Route path="/all-components/ecommerce-filter" element={<EcommerceFilter />} />
            <Route path="/all-components/ecommerce-filter2" element={<EcommerceFilter2 />} />
            <Route path="/all-components/ecommerce-filter3" element={<EcommerceFilter3 />} />
            <Route path="/all-components/login-form" element={<LoginForm />} />
            <Route path="/all-components/onboarding-wizard" element={<OnboardingWizard />} />
<Route path="/all-components/display-components" element={<CodeDisplayComponent/>} />



          </Routes>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
