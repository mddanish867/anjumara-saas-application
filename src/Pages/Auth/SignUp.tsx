import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useRegisterMutation } from "@/API/AuthAPI/authApi"; // Adjust the path based on your setup
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import { Eye, EyeOff } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface Errors {
  name?: string;
  email?: string;
  password?: string;
}

export default function SignUp() {
  const [register, { isLoading }] = useRegisterMutation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let validationErrors: Errors = {};

    // Validate name
    if (!formData.name) {
      validationErrors.name = "Name is required";
    }

    // Validate email
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email address is invalid";
    }

    // Validate password
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await register(formData).unwrap();
        toast.success(
          "User has been added successfully. Please check yoour email to verify your account."
        );
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      } catch (registerError) {
        toast.error("Registration failed.");
      }
    }
  };

  return (
    <div className="container bg-transparent px-4 py-6">
      <h1
        className="text-2xl font-semibold cursor-pointer mb-6"
        onClick={handleClick}
      >
        Soora<span className="text-start text-[#38bdf8]">.ai</span>
        </h1>
      <main className="w-full flex flex-col items-center justify-center px-4 mt-14">
        <div className="max-w-sm w-full space-y-4">
          <div className="pb-4 text-center">
            <h3 className="text-xl font-semibold sm:text-3xl">
              Create your account
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full mt-2 px-3 py-2 bg-transparent outline-none border ${
                  errors.name && !formData.name ? "border-red-500" : ""
                } focus:border-[#38bdf8] shadow-sm rounded-lg`}
              />
              {errors.name && !formData.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                  errors.email && !formData.email ? "border-red-500" : ""
                } focus:border-[#38bdf8] shadow-sm rounded-lg`}
              />
              {errors.email && !formData.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <Button
              type="submit"
              variant="default"
              className="w-full px-4 py-2 rounded-lg duration-150"
              disabled={isLoading}
            >
              {isLoading ? (
                <ColorRing
                  visible={true}
                  height="64"
                  width="64"
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
                "Create account"
              )}
            </Button>
          </form>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-[#38bdf8] hover:text-[#38bdf8]"
            >
              Log in
            </Link>
          </p>

          <div className="relative">
            <span className="block w-full h-px bg-transparent"></span>
            <p className="inline-block w-fit text-sm bg-transparent px-2 absolute -top-2 inset-x-0 mx-auto">
              Or continue with
            </p>
          </div>
          <div className="grid gap-y-4 sm:grid-cols-1 lg:grid-cols-2 px-1">
            <Link to="/api/auth/google/login" className="w-full flex items-center justify-center py-2.5 border rounded-lg hover:bg-transparent duration-150 active:bg-transparent hover:border-[#38bdf8]">
              <FcGoogle className="text-2xl" />
            </Link>

            <button className="w-full flex items-center justify-center py-2.5 border rounded-lg hover:bg-transparent duration-150 active:bg-transparent hover:border-[#38bdf8]">
              <FaGithub className="text-2xl" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
