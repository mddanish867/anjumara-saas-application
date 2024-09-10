import Navbar from "../Pages/Navbar/Navbar";
import Footer from "@/Pages/Footer/Footer";
import { Outlet } from "react-router-dom";  // Import Outlet from react-router-dom

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="-mt-14 mx-auto flex-1">
        <Outlet />  {/* Use Outlet to render the matched child routes */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
