import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import { ArrowRight, Search } from "lucide-react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <>
      <nav className=" relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
        <div className="md:col-span-3">
          <Link to="/">
            <h1 className="text-2xl font-semibold">
              Anjum<span className="text-blue-500">Ara</span>
            </h1>
          </Link>
        </div>

        <NavbarLink />

        <div className="flex items-center gap-x-4 ms-auto md:col-span-4">
          <Button
            variant="secondary"
            className="font-semibold mr-2 md:mr-4 lg:mr-2 bg-white hover:bg-white text-md"
          >
            <Search size={20} />
          </Button>

          <div className="hidden lg:flex items-center gap-x-2">
            <Button
              variant="secondary"
              className="font-semibold mr-2 bg-white hover:bg-white text-md"
            >
              Sign in
            </Button>
            <Button className="font-semibold text-1xl mr-10">
              Get all-access <ArrowRight className="text-md" />
            </Button>
          </div>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
