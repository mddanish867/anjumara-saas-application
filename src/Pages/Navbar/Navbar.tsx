import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import { MoveRight, Search } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "@/components/ModeToggle";
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();

  const  handleSignin = () => {
    navigate("/signup");
  }
  return (
    <>
      <nav className="sticky top-0 z-50 max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-4 bg-transparent/0 backdrop-blur-xl">
        {/* Logo Section */}
        <div className="md:col-span-3">
          <Link to="/">
            <h1 className="text-2xl font-semibold">
              Anjum<span className="text-[#38bdf8]">Ara</span>
            </h1>
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden lg:flex gap-x-4 md:col-span-5">
          <NavbarLink />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-x-4 ml-auto md:col-span-4 justify-end">
          <Button
            variant="secondary"
            className="font-semibold bg-transparent hover:bg-transparent text-md"
          >
            <Search size={20} />
          </Button>

          <div className="lg:hidden">
            <ModeToggle/>
            </div>

          {/* Desktop and Laptop View Buttons */}
          <div className="hidden lg:flex gap-x-2">
            <Button
              variant="secondary"
              className="font-semibold bg-transparent hover:bg-transparent text-md"
              onClick={handleSignin}
            >
              Sign in
            </Button>
            <Button className="font-semibold text-1xl">
              Get all-access <MoveRight className="ml-2" />
            </Button>
            <div className="">
            <ModeToggle/>
            </div>
            
          </div>

          {/* Mobile and Tablet View */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
