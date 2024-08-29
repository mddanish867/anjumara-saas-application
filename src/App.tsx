import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Authorization from "./Pages/MachinesCodes/Auth/Authorization";
import Home from "./Pages/Home";
import Section from "./Pages/Section/Section";
import Frontend from "./Pages/Frontend/Frontend";
import React from "./Pages/Frontend/React";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/authorization" element={<Authorization />} />
          <Route path="/section" element={<Section />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/react" element={<React />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
