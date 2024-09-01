import Home from "@/Pages/Home";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "@/Pages/Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="-mt-14 mx-auto flex-1">
        <Home/>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
