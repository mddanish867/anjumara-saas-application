import {
  Cloud,
  CreditCard,
  Github,
  LifeBuoy,
  LogOut,
  Settings,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogoutMutation } from "@/API/AuthAPI/authApi"; // Import the logout hook
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

export interface UserProfileProps {
  name: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  isVerified: boolean;
}
function UserProfile({ name }: any) {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();
      // Clear cookies
      document.cookie.split(";").forEach((cookie) => {
        document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
      });
      // Clear local storage
      localStorage.clear();
      // Clear session storage
      toast.success("Logged out successfully");
      window.location.href = "/signin"; // Redirect to home or login page
    } catch (error) {
      console.error("Logout failed:", error);
      toast.success("An error occured while logout.");
    }
  };

  const handleUserDetails = () => {
    navigate("/dashboard/profile");
  };

  const handleSupport = () => {
    navigate("/landing-page1");
  };

  const handleSettings = () => {
    navigate("/dashboard/security");
  };
  const handleSubscriptionBillings = () => {
    navigate("/subscription-billings");
  };
  
  
  const handleAPIs = () => {
    navigate("/soora-api");
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="bg-transparent hover:bg-transparent focu outline-none border-none focus:ring-transparent"
        >
          <Button variant="outline">
            <UserAvatar name={name} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Welcome {name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleUserDetails}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSubscriptionBillings}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSettings}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSupport}>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleAPIs}>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserProfile;
