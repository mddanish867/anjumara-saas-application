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

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
