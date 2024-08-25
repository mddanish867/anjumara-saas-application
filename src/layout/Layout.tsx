import React from "react";
import Navbar from "../Pages/Navbar/Navbar";

interface Props{
  children: React.ReactNode;
}

const Layout = ({children}:Props) => {
  return (
    <div className="flex flex-col min-h-screen">
     <Navbar/>
      <div className="container -mt-14 mx-auto  flex-1">{children}</div>
     
    </div>
  );
};
export default Layout;
