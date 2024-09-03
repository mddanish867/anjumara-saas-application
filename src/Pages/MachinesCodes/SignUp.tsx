import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

// Define the interface for form data
interface FormData {
  name: string;
  email: string;
  password: string;
}

// Define the interface for errors
interface Errors {
  name?: string;
  email?: string;
  password?: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      // Proceed with form submission or further processing
      console.log("Form submitted", formData);
      // You can redirect or perform further actions here
    }
  };

  return (
    <div className="container bg-transparent px-4 py-6">
      <h1
        className="text-3xl font-semibold cursor-pointer mb-6"
        onClick={handleClick}
      >
        Anjum<span className="text-[#38bdf8]">Ara</span>
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
                  errors.name ? "border-red-500" : ""
                } focus:border-[#38bdf8] shadow-sm rounded-lg`}
              />              
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                  errors.email ? "border-red-500" : ""
                } focus:border-[#38bdf8] shadow-sm rounded-lg`}
              />              
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}                
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                  errors.password ? "border-red-500" : ""
                } focus:border-[#38bdf8] shadow-sm rounded-lg`}
              />              
            </div>
            <Button
              type="submit"
              variant="default"
              className="w-full px-4 py-2 rounded-lg duration-150"
            >
              Create account
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
            <button className="w-full flex items-center justify-center py-2.5 border rounded-lg hover:bg-transparent duration-150 active:bg-transparent hover:border-[#38bdf8]">
              <FcGoogle className="text-2xl" />
            </button>

            <button className="w-full flex items-center justify-center py-2.5 border rounded-lg hover:bg-transparent duration-150 active:bg-transparent hover:border-[#38bdf8]">
              <FaGithub className="text-2xl" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
