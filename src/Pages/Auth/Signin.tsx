import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useLoginMutation } from "@/API/AuthAPI/authApi"; // Import the login mutation
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import { Eye, EyeOff } from "lucide-react";
import axios from 'axios';

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
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation(); // Use the login mutation

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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValidate()) {
      try {
        const user = await login(formData).unwrap(); // Call the login mutation
        // Extract the token from the response
        const { token } = user;
        // Store the token in sessionStorage
        sessionStorage.setItem("token", token);
        // Optionally, store the token in localStorage if you want to persist it across sessions
        localStorage.setItem("token", token);
        toast.success("Logged in successfully", user);
        setTimeout(() => {
          navigate("/"); // Redirect to a dashboard or home page after login
        }, 2000);
      } catch (loginError) {
        toast.error("Failed to login.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/google', null, {
        withCredentials: true,
      });
      console.log('Google login successful:', response.data);
      // Handle successful login
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Login error:', error.response?.data?.error || error.message);
      } else {
        console.error('Login error:', error);
      }
    }
  };
  
  return (
    <div className="container bg-transparent px-4 py-6">
      <h1
        className="text-2xl font-semibold cursor-pointer mb-6"
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
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                  errors.email && !formData.email ? "border-red-500" : ""
                } focus:border-[#38bdf8] shadow-sm rounded-lg`}
              />
              {errors.email && !formData.email &&(
                <p className="text-red-500 text-sm mt-2">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="relative">
              <label className="font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                  errors.password && !formData.password ? "border-red-500" : ""
                } focus:border-[#38bdf8] shadow-sm rounded-lg`}
              />
              <div
                className="absolute inset-y-0 right-3 top-11 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)} // Toggle visibility
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
              {errors.password && !formData.password && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.password}
                </p>
              )}
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
                to="/forgot-password"
                className="text-[#38bdf8] hover:text-[#38bdf8] mt-10"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              variant="default"
              className="w-full px-4 py-2 rounded-lg duration-150"
              disabled={isLoading}
            >
              {isLoading ? (
                <ColorRing
                  visible={true}
                  height="48"
                  width="48"
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
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
          <div className="relative mt-10 mb-10">
            <span className="block w-full h-px bg-transparent"></span>
            <p className="inline-block w-fit text-sm bg-transparent px-2 absolute -top-2 inset-x-0 mx-auto">
              Or continue with
            </p>
          </div>
          <div className="grid gap-y-4 sm:grid-cols-1 lg:grid-cols-2 px-1">
            <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center py-2.5 border rounded-lg hover:bg-transparent duration-150 active:bg-transparent hover:border-[#38bdf8]">
              <FcGoogle className="text-2xl" />
            </button>

            <button className="w-full flex items-center justify-center py-2.5 border rounded-lg hover:bg-transparent duration-150 active:bg-transparent hover:border-[#38bdf8]">
              <FaGithub className="text-2xl" />
            </button>
          </div>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-[#38bdf8] hover:text-[#38bdf8]"
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
