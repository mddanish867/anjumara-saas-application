import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log("Forgot password submitted", { email });
  };
  const handleSinIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/soora-api/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-lg">
        {" "}
        {/* Adjusted max width to match login page */}
        <div className="text-orange-200 text-3xl font-bold mb-6">
          <Link to="/soora-api">
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
            onClick={handleSinIn}
          >
            <ArrowLeft className="inline mr-2" size={20} />
            Back to Login
          </button>
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Forgot Password
          </h2>
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
          <div className="flex items-center justify-between mb-6">
            <button
              className="bg-orange-200 hover:bg-orange-400 text-black hover:text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
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
