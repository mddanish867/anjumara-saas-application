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
import { AlignRight } from "lucide-react";
import NavbarLink from "./NavbarLink";
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function MobileMenu() {
  const navigate = useNavigate();

  const  handleSignin = () => {
    navigate("/signup");
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="outline-none border-none bg-transparent"
        >
          <AlignRight className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-col items-start">
          <SheetTitle>
            <div className="mr-7">
              <a href="/">
                <h1 className="text-2xl font-semibold">
                  Anjum<span className="text-[#38bdf8]">Ara</span>
                </h1>
              </a>
            </div>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-start gap-y-4 mt-4">
          <NavbarLink />
          <Button
            variant="secondary"
            className="font-semibold w-full bg-transparent hover:bg-transparent text-md"
            onClick={handleSignin}
          >
            Sign in
          </Button>
          <Button className="font-semibold w-full text-xl flex items-center justify-between">
            Get all-access <ArrowRight className="text-md ml-2" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
