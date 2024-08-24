import React from "react";
import Navbar from "../Pages/Navbar";

interface Props{
  children: React.ReactNode;
}

const Layout = ({children}:Props) => {
  return (
    <div className="flex flex-col min-h-screen">
     <Navbar/>
      <div className="container mx-auto py-10 flex-1">{children}</div>
     
    </div>
  );
};
export default Layout;
