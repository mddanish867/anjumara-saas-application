import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Code2Icon, Menu, X } from "lucide-react";

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <a
      href={href}
      className="text-white hover:text-orange-200 transition-colors"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="md:container bg-black text-orange-200 relative overflow-hidden">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-transparent w-8 h-8 rounded-md flex items-center justify-center mr-2">
            <Code2Icon className="text-orange-200" size={40} />
          </div>
          <span
            className="text-1xl font-bold text-orange-400 cursor-pointer"
            onClick={handleNavigation("/soora-api")}
          >
            SOORA
          </span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#features" onClick={() => console.log("Services clicked")}>Services</NavLink>
          <NavLink href="#features" onClick={handleNavigation("/soora-api/features")}>Features</NavLink>
          <NavLink href="#features" onClick={() => console.log("APIs clicked")}>APIs</NavLink>
          <NavLink href="/soora-api/pricing" onClick={handleNavigation("/soora-api/pricing")}>Pricing</NavLink>
        </nav>
        <div className="hidden md:flex space-x-4">
          <a
            href="/soora-api/login"
            className="bg-transparent text-white px-4 py-2 rounded-none border border-orange-200 hover:border-orange-400 transition-colors"
            onClick={handleNavigation("/soora-api/login")}
          >
            Login
          </a>
          <a
            href="#get-started"
            className="bg-orange-200 text-black px-4 py-2 rounded-none hover:bg-orange-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              console.log("Get Started clicked");
            }}
          >
            Get Started for Free
          </a>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="text-white" size={24} />
        </button>
      </header>
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-black z-50 p-6">
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="text-white" size={24} />
          </button>
          <nav className="flex flex-col space-y-4 mt-16">
            <NavLink href="#features" onClick={() => console.log("Services clicked")}>Services</NavLink>
            <NavLink href="#features" onClick={() => console.log("Features clicked")}>Features</NavLink>
            <NavLink href="#features" onClick={() => console.log("APIs clicked")}>APIs</NavLink>
            <NavLink href="/soora-api/pricing" onClick={handleNavigation("/soora-api/pricing")}>Pricing</NavLink>
            <a
              href="/soora-api/login"
              className="bg-transparent text-center text-white px-4 py-2 rounded-none border border-orange-200 hover:border-orange-400 transition-colors"
              onClick={handleNavigation("/soora-api/login")}
            >
              Login
            </a>
            <a
              href="#get-started"
              className="bg-orange-200 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition-colors text-center"
              onClick={(e) => {
                e.preventDefault();
                console.log("Get Started clicked");
              }}
            >
              Get Started for Free
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;