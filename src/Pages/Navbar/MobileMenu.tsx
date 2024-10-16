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
import { AlignRight, MoveRight } from "lucide-react";
import NavbarLink from "./NavbarLink";
import { useNavigate } from 'react-router-dom';

interface DecodedToken {
  email: string;
  exp: number;
  iat: number;
  name: string;
  userId: string;
}

interface LoggedInprop {
  token: DecodedToken | string;
}

export default function MobileMenu({token}: LoggedInprop) {
  const navigate = useNavigate();
  
  const handleSignin = () => {
    navigate("/signin");
  }

  const handleAllAccess = () => {
    navigate("/all-access");
  };
    
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
        <SheetHeader>
          <SheetTitle>
            <div className="text-left">
              <a href="/">
                <h1 className="text-2xl font-semibold">
                  Aether<span className="text-[#38bdf8]">AI</span>
                </h1>
              </a>
            </div>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-start gap-y-4 mt-4 w-full">
          <NavbarLink />
          {!token && (
            <Button
              variant="secondary"
              className="font-semibold w-full bg-transparent hover:bg-transparent text-md text-left justify-start"
              onClick={handleSignin}
            >
              Sign in
            </Button>
          )}
          <Button 
            className="font-semibold w-full text-xl flex items-center justify-between" 
            onClick={handleAllAccess}
          >
            <span className="mr-auto">Get all-access</span>
            <MoveRight className="ml-1" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}