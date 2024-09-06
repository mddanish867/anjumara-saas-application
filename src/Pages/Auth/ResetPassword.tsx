import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useResetPasswordMutation } from "@/API/AuthAPI/authApi";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";

// Define the interface for form data
interface FormData {
  password: string;
  token: string; // Only password and token are part of formData
}

function ResetPassword() {
  // Initialize the state with password and token (confirmPassword not included)
  const [formData, setFormData] = useState<FormData>({
    password: "",
    token: "",
  });

  const [confirmPassword, setConfirmPassword] = useState(""); // Separate state for confirmPassword
  const [errors, setErrors] = useState<{ password?: string }>({});

  const location = useLocation();
  const navigate = useNavigate();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (!token) {
      toast.error("Verification token is missing.");
      return;
    }

    // Set the token in formData
    setFormData((prevFormData) => ({ ...prevFormData, token }));
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "password") {
      setFormData({ ...formData, password: value });
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  // Validate form
  const formValidate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (formData.password !== confirmPassword) {
      newErrors.password = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValidate()) {
      try {
        // Only send the token and password
        const { password, token } = formData;
        const user = await resetPassword({ password, token }).unwrap(); // Call the resetPassword mutation
        toast.success("Password has been reset successfully.", user);
        setTimeout(() => {
          navigate("/"); // Redirect to a dashboard or home page after success
        }, 2000);
      } catch (resetError) {
        toast.error("Failed to reset the password.");
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
      <main className="w-full flex flex-col items-center justify-center px-4 mt-24">
        <div className="max-w-sm w-full space-y-4">
          <div className="pb-4 text-center">
            <p className="text-lg font-semibold mt-4">Reset your password</p>
            <p className="text-sm mt-2">
              Enter your new password below to reset it.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">{errors.password}</p>
              )}
            </div>
            <div>
              <label className="font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#38bdf8] shadow-sm rounded-lg"
              />
            </div>
            <Button
              variant="default"
              className="w-full px-4 py-2 rounded-lg duration-150"
              disabled={isLoading}
            >
              {isLoading ? (
                <ColorRing
                  visible={true}
                  height="52"
                  width="52"
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
                "Reset your password"
              )}
            </Button>
          </form>
        </div>
        <p className="text-center mt-24">
          Don't have an account?
          <Link
            to="/signup"
            className="font-medium text-[#38bdf8] hover:text-[#38bdf8]"
          >
            <span className="mx-1">Get access →</span>
          </Link>
        </p>
      </main>
    </div>
  );
}

export default ResetPassword;
