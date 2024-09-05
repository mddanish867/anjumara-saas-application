import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import { MoveRight, Search } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "@/components/ModeToggle";
import { useNavigate } from "react-router-dom";
import UserProfile from "../Auth/UserProfile";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  email: string;
  exp: number; // Expiration timestamp
  iat: number; // Issued at timestamp
  name: string;
  userId: string;
}
function Navbar() {
  const navigate = useNavigate();

  // Check if token exists in session or local storage
  const token = localStorage.getItem("token");
  let decodedToken: DecodedToken | null = null;
  
  //const name = decodedToken.name;
  if (token && token.split('.').length === 3) {
    try {
      decodedToken = jwtDecode<DecodedToken>(token);
      
    } catch (error) {
      console.error("Invalid token:", error);
      // Clear invalid token if necessary
      localStorage.removeItem("token");
    }
  }
  
  // Fetch user profile using the custom hook
  const handleSignin = () => {
    navigate("/signin");
  };

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
        <div className="flex items-center ml-auto md:col-span-4 justify-end">
          <Button
            variant="secondary"
            className="font-semibold bg-transparent hover:bg-transparent text-md"
          >
            <Search size={20} />
          </Button>

          <div className="lg:hidden">
            <ModeToggle />
          </div>

          <div className="block lg:hidden gap-x-2">
            {token && <UserProfile name={decodedToken?.name} />}
          </div>

          {/* Desktop and Laptop View Buttons */}
          <div className="hidden lg:flex gap-x-1">
            {token ? (
              <UserProfile name={decodedToken?.name} />
            ) : (
              <Button
                variant="secondary"
                className="font-semibold bg-transparent hover:bg-transparent text-md"
                onClick={handleSignin}
              >
                Sign in
              </Button>
            )}
            <div className="">
              <ModeToggle />
            </div>
            <Button className="font-semibold text-1xl">
              Get all-access <MoveRight className="ml-2" />
            </Button>
          </div>

          {/* Mobile and Tablet View */}
          <div className="lg:hidden">
            <MobileMenu token={token || ''} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
