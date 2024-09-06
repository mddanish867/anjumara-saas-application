// src/pages/VerifyEmail.tsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useVerifyUserMutation } from "@/API/AuthAPI/authApi";
import { ColorRing } from "react-loader-spinner";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [verifyUser] = useVerifyUserMutation();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (!token) {
      toast.error("Verification token is missing.");
      return;
    }

    const verifyToken = async () => {
      try {
        await verifyUser({ token }).unwrap();
        setIsVerified(true);
        toast.success("Account verified successfully!");
        setTimeout(() => {
          navigate("/signin"); // Redirect to login page after 3 seconds
        }, 2000);
      } catch (verificationError) {
        const errorMessage =
          (verificationError as { data?: { message: string } })?.data
            ?.message || "An error occurred during verification.";
        toast.error(errorMessage);
      }
    };

    verifyToken();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (isVerified) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        <h1 className="text-3xl font-bold">Congratulations!</h1>
        <p className="mt-4">Your account has been successfully verified.</p>
        <p className="mt-2">
          You will be redirected to the sign-in page shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center">
      <ColorRing
                  visible={true}
                  height="84"
                  width="84"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "#38bdf8",
                    "#38bdf8",
                    "#38bdf8",
                    "#38bdf8",
                    "#38bdf8",
                  ]}
                />
      <h1 className="text-3xl font-bold">Verifying your account...</h1>
      <p className="mt-4">Please wait while we verify your account.</p>
    </div>
  );
}
