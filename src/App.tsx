import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Authorization from "./Pages/MachinesCodes/Auth/Authorization";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/authorization" element={<Authorization />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
