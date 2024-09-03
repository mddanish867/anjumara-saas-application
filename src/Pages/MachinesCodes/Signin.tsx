import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Define the type for your form data
interface FormData {
  email: string;
  password: string;
}

export default function Signin() {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  // Validate form
  const formValidate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValidate()) {
      // Handle registration logic here
      console.log("Form data submitted", formData);
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
      <main className="w-full flex flex-col items-center justify-center px-4 mt-14">
        <div className="max-w-sm w-full space-y-4">
          <div className="pb-4 text-center">
            <h3 className="text-xl font-semibold sm:text-3xl">
              Log in to your account
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${errors.email ? 'border-red-500' : ''} focus:border-[#38bdf8] shadow-sm rounded-lg`}
              />              
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${errors.password ? 'border-red-500' : ''} focus:border-[#38bdf8] shadow-sm rounded-lg`}
              />             
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-x-3">
                <input
                  type="checkbox"
                  id="remember-me-checkbox"
                  className="checkbox-item peer hidden"
                />
                <label
                  htmlFor="remember-me-checkbox"
                  className="relative flex w-5 h-5 bg-white peer-checked:bg-[#38bdf8] rounded-md border ring-offset-2 ring-[#38bdf8] duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                ></label>
                <span>Remember me</span>
              </div>
              <Link
                to="/forgotpassword"
                className="text-[#38bdf8] hover:text-[#38bdf8] mt-10"
              >
                Forgot password?
              </Link>
            </div>
            <Button variant="default" className="w-full px-4 py-2 rounded-lg duration-150">
              Sign in
            </Button>
          </form>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
            aria-label="Continue with Google"
          >
            {/* Google SVG omitted for brevity */}
            Continue with Google
          </button>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-[#38bdf8] hover:text-[#38bdf8]">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
