import { useState, useEffect, useRef } from "react";
import { Code2Icon, Menu, X } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} className="text-white hover:text-orange-300 transition-colors">
    {children}
  </a>
);

const Star = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute bg-orange-100 rounded-full opacity-70"
    style={{
      width: "3px",
      height: "3px",
      ...style,
      animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
    }}
  />
);

export default function Temp49() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timer, setTimer] = useState(0);
  const [stars, setStars] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setStars(newStars);
  }, []);

  return (
    <>
      <div className="md:container min-h-screen bg-black text-orange-300 relative overflow-hidden">
        {stars.map((style, index) => (
          <Star key={index} style={style} />
        ))}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-transparent w-8 h-8 rounded-md flex items-center justify-center mr-2">
              <Code2Icon className="text-orange-300" size={40} />
            </div>
            <span className="text-1xl font-bold">Mixo</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
          </nav>
          <div className="hidden md:flex space-x-4">
            <a
              href="#get-started"
              className="bg-transparent text-white px-4 py-2 rounded-none border border-orange-300 hover:border-orange-400 transition-colors"
            >
              Login
            </a>

            <a
              href="#get-started"
              className="bg-orange-300 text-black px-4 py-2 rounded-none hover:bg-orange-400 transition-colors"
            >
              Get Started for Free
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="text-white" size={24} />
          </button>
        </header>

        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-full bg-black z-50 p-6">
            <button
              className="absolute top-6 right-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="text-white" size={24} />
            </button>
            <nav className="flex flex-col space-y-4 mt-16">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <a
                href="#get-started"
                className="bg-transparent text-center text-white px-4 py-2 rounded-none border border-orange-300 hover:border-orange-400 transition-colors"
              >
                Login
              </a>
              <a
                href="#get-started"
                className="bg-orange-300 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition-colors text-center"
              >
                Get Started for Free
              </a>
            </nav>
          </div>
        )}

        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl md:text-7xl font-bold mb-6">
            Ready to Supercharge
            <br />
            Your Development? With{" "}
            <span className="text-orange-500">MIXO.</span>
          </h1>

          <motion.p
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Have an idea for a startup, product or service? Bring it to life
            with MIXO
            <br />
            effortlessly and watch it grow.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <span className="text-yellow-400">Free Trial Available</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">
              Over Thousands of Sites Created
            </span>
          </motion.div>

          <motion.a
            href="#get-started"
            className="bg-transparent text-white border border-orange-300 px-8 py-4 rounded-md text-xl hover:border-orange-400 hover:bg-transparent hover:text-orange-300 transition-colors inline-flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            Get Started for Free
            <span className="ml-2">✨</span>
          </motion.a>
        </main>

        <div className="absolute bottom-4 right-4 text-white opacity-50">
          Time elapsed: {timer} seconds
        </div>

        <style>{`
        @keyframes twinkle {
          0% { opacity: 0.7; }
          50% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
      `}</style>
      </div>
      <LoginPage />
      <RegisterPage />
      <ForgotPasswordPage />
      <ResetPasswordPage />
      <OtpVerificationPage />
    </>
  );
}

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-lg">
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
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Login
          </h2>
          <div className="mb-4">
            <label
              className="block text-orange-200 text-sm font-bold mb-2"
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
              className="block text-orange-200 text-sm font-bold mb-2"
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
          <div className="flex items-center justify-between mb-6">
            <button
              className="bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="text-center">
            <button
              className="font-bold text-sm text-orange-200 hover:text-orange-300"
              type="button"
            >
              Don't have an account? Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function RegisterPage() {
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
              className="block text-orange-200 text-sm font-bold mb-2"
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
              className="block text-orange-200 text-sm font-bold mb-2"
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
              className="block text-orange-200 text-sm font-bold mb-2"
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
              className="block text-orange-200 text-sm font-bold mb-2"
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
              className="bg-orange-300 hover:bg-orange-400 text-black hover:text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <button
              className="font-bold text-sm text-orange-200 hover:text-orange-300"
              type="button"
            >
              Already have an account? Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log("Forgot password submitted", { email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-lg">
        {" "}
        {/* Adjusted max width to match login page */}
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
            Forgot Password
          </h2>
          <div className="mb-4">
            <label
              className="block text-orange-200 text-sm font-bold mb-2"
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
              className="bg-orange-300 hover:bg-orange-400 text-black hover:text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
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

function ResetPasswordPage() {
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
        <div className="text-orange-300 text-3xl font-bold mb-6">
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
              className="bg-orange-300 hover:bg-orange-400 text-black hover:text-white font-bold py-2 px-4 w-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
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
function OtpVerificationPage() {
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
              className="bg-orange-300 hover:bg-orange-400 text-black hover:text-white font-bold py-2 px-4 w-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
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
