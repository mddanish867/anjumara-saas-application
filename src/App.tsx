import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Banner from "./Pages/Hero/Banner";
import Recent from "./Pages/Hero/Recent";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Banner />
              <Recent/>
              <Footer/>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
