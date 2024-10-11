import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
  
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle login logic here
      console.log("Login submitted", { email, password });
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <div className="w-full max-w-lg">
          <div className="text-orange-00 text-3xl font-bold mb-6">
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
            <h2 className="text-2xl font-bold text-center text-white mb-6">
              Create an account
            </h2>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border border-orange-200 w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black transition duration-300 ease-in-out transform hover:scale-105"
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border border-orange-200 w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black transition duration-300 ease-in-out transform hover:scale-105"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-orange-200 w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline bg-black pr-10 transition duration-300 ease-in-out transform hover:scale-105"
                type={showPassword ? "text" : "password"}
                placeholder="****************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-orange-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} className="text-center" />
                ) : (
                  <Eye size={20} className="text-center" />
                )}
              </button>
            </div>
            <div className="relative mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border border-orange-200 w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline bg-black pr-10 transition duration-300 ease-in-out transform hover:scale-105"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="****************"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-orange-200"
                onClick={() => setConfirmShowPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} className="text-center" />
                ) : (
                  <Eye size={20} className="text-center" />
                )}
              </button>
            </div>
            <div className="flex items-center justify-between mb-6">
              <button
                className="bg-orange-200 hover:bg-orange-400 text-black hover:text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="text-center">
              <button
                className="font-bold text-sm text-white "
                type="button"
              >
                Already have an account? <span className="text-orange-200 hover:text-orange-200">Sign In</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }