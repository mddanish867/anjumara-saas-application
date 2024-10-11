import { ArrowLeft } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function OtpVerificationPage() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  
    useEffect(() => {
      otpRefs.current = otpRefs.current.slice(0, 6);
    }, []);
  
    const handleOtpChange = (index: number, value: string) => {
      if (value.length <= 1) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
  
        // Move to next input if value is entered
        if (value !== "" && index < 5) {
          otpRefs.current[index + 1]?.focus();
        }
      }
    };
  
    const handleOtpKeyDown = (
      index: number,
      e: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (e.key === "Backspace" && index > 0 && otp[index] === "") {
        otpRefs.current[index - 1]?.focus();
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle OTP verification logic here
      console.log("OTP verification submitted", { otp: otp.join("") });
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <div className="w-full max-w-lg">
          <div className=" text-3xl font-bold mb-6">
            <Link to="/">
              <h1 className="text-2xl font-semibold text-orange-200">
                Soora<span className="text-orange-400">.ai</span>
              </h1>
            </Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="border border-orange-200 rounded px-8 pt-6 pb-8 mb-4"
          >
            {" "}
            {/* Added border and rounded for consistency */}
            <button
              type="button"
              className="mb-4 text-orange-200 hover:text-orange-200 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <ArrowLeft className="inline mr-2" size={20} />
              Back to Login
            </button>
            <h2 className="text-2xl font-bold text-center text-white mb-6 mt-6">
              Verify OTP
            </h2>
            <p className="text-white text-sm mb-6">
              Enter the OTP we just sent to your mobile ******4563
            </p>
            <div className="mb-6">
              <label
                className="block text-orange-200 text-sm font-bold mb-2"
                htmlFor="otp"
              >
                Enter 6-digit OTP
              </label>
              <div className="flex justify-between">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpRefs.current[index] = el)}
                    className="appearance-none border border-orange-200 w-12 h-12 text-center text-white mb-3 leading-tight focus:outline-none focus:shadow-outline bg-black transition duration-300 ease-in-out transform hover:scale-105"
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    required
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <button
                className="bg-orange-200 hover:bg-orange-400 text-black hover:text-white font-bold py-2 px-4 w-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                type="submit"
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  