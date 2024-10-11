import { ArrowLeft, EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle reset password logic here
      console.log("Reset password submitted", { password, confirmPassword });
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <div className="w-full max-w-lg">
          {" "}
          {/* Updated max-w-lg to match login page */}
          <div className="text-orange-200 text-3xl font-bold mb-6">
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
            <button
              type="button"
              className="mb-4 text-orange-200 hover:text-orange-200 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <ArrowLeft className="inline mr-2" size={20} />
              Back to Login
            </button>
            <h2 className="text-2xl font-bold text-center text-white mb-6">
              Reset Password
            </h2>
  
            {/* New Password Field */}
            <div className="relative mb-4">
              <label
                className="block text-orange-200 text-sm font-bold mb-2"
                htmlFor="password"
              >
                New Password
              </label>
              <input
                className="shadow appearance-none border border-orange-200 w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black transition duration-300 ease-in-out transform hover:scale-105 pr-10"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="****************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-orange-200"
                onClick={() => setConfirmShowPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} className="justify-center items-center" />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
  
            {/* Confirm Password Field */}
            <div className="relative mb-4">
              <label
                className="block text-orange-200 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border border-orange-200 w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black transition duration-300 ease-in-out transform hover:scale-105 pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="****************"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-orange-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} className="justify-center items-center" />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
  
            <div className="flex items-center justify-between mb-6">
              <button
                className="bg-orange-200 hover:bg-orange-400 text-black hover:text-white font-bold py-2 px-4 w-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                type="submit"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }