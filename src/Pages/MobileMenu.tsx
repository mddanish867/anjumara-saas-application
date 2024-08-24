"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="mr-7">
              <Link to="/">
                <h1 className="text-2xl font-semibold">
                  Anjum<span className="text-blue-500">Ara</span>
                </h1>
              </Link>
            </div>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <NavbarLink />
        <div className="block lg:hidden items-center gap-x-2">
          <Button
            variant="secondary"
            className="font-semibold mr-2 bg-white hover:bg-white text-md"
          >
            Sign in
          </Button>
          <Button className="font-semibold text-1xl">
            Get all-access <ArrowRight className="text-md" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
