import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

// Define the interface for form data
interface FormData {
  email: string;
}

function ForgotPassword() {
  // Initialize the state with the FormData type
  const [formData, setFormData] = useState<FormData>({ email: "" });
  const [errors, setErrors] = useState<{ email?: string }>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email) {
      // Handle the password reset logic here
      console.log("Password reset link sent to", formData.email);
    } else {
      setErrors({ email: "Email is required" });
    }
  };

  return (
    <div className="container bg-transparent px-4 py-6">
      <h1
        className="text-3xl font-semibold cursor-pointer mb-6"
        onClick={() => navigate("/")}
      >
        Anjum<span className="text-start text-[#38bdf8]">Ara</span>
      </h1>
      <main className="w-full flex flex-col items-center justify-center px-4 mt-24">
        <div className="max-w-sm w-full space-y-4">
          <div className="pb-4 text-center">
            <p className="text-lg font-semibold mt-4">Reset your password</p>
            <p className="text-sm mt-2">
              Enter your email and we'll send you a link to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}                
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${errors.email ? 'border-red-500' : ''} focus:border-[#38bdf8] shadow-sm rounded-lg`}
              />
              {/* {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )} */}
            </div>
            <Button variant="default" className="w-full px-4 py-2 rounded-lg duration-150">
              Reset your password
            </Button>
          </form>
        </div>
        <p className="text-center mt-24">
          Don't have an account?
          <Link
            to="/signup"
            className="font-medium text-[#38bdf8] hover:text-[#38bdf8]"
          >
            Get access →
          </Link>
        </p>
      </main>
    </div>
  );
}

export default ForgotPassword;
