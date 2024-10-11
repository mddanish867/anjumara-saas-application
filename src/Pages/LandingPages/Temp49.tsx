import { useState, useEffect, useRef } from "react";
import { Code2Icon, Menu, X } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} className="text-white hover:text-orange-200 transition-colors">
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
      <div className="md:container min-h-screen bg-black text-orange-200 relative overflow-hidden">
        {stars.map((style, index) => (
          <Star key={index} style={style} />
        ))}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-transparent w-8 h-8 rounded-md flex items-center justify-center mr-2">
              <Code2Icon className="text-orange-200" size={40} />
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
              className="bg-transparent text-white px-4 py-2 rounded-none border border-orange-200 hover:border-orange-400 transition-colors"
            >
              Login
            </a>

            <a
              href="#get-started"
              className="bg-orange-200 text-black px-4 py-2 rounded-none hover:bg-orange-400 transition-colors"
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
                className="bg-transparent text-center text-white px-4 py-2 rounded-none border border-orange-200 hover:border-orange-400 transition-colors"
              >
                Login
              </a>
              <a
                href="#get-started"
                className="bg-orange-200 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition-colors text-center"
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
            <span className="text-violet-500">MIXO.</span>
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
            className="bg-transparent text-white border border-orange-200 px-8 py-4 rounded-md text-xl hover:border-orange-400 hover:bg-transparent hover:text-orange-200 transition-colors inline-flex items-center"
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
      <AnimatedStatistics />
      <RealTimeCharts />
      <APIMarketplace/>
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
              className="bg-orange-200 hover:bg-orange-400 text-black hover:text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="text-center">
            <button
              className="font-bold text-sm text-orange-200 hover:text-orange-200"
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
              className="bg-orange-200 hover:bg-orange-400 text-black hover:text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <button
              className="font-bold text-sm text-orange-200 hover:text-orange-200"
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
              className="bg-orange-200 hover:bg-orange-400 text-black hover:text-white font-bold py-2 px-4 w-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
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

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

const stats: Stat[] = [
  { label: "Total Users", value: 10000 },
  { label: "Revenue", value: 1000000, suffix: "$" },
  { label: "Active Projects", value: 500 },
  { label: "Team Members", value: 50 },
];

function AnimatedStatistics() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const stepTime = 20; // Update every 20ms

    const timers = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          const step = stat.value / (duration / stepTime);
          newCounts[index] = Math.min(newCounts[index] + step, stat.value);
          return newCounts;
        });
      }, stepTime);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-black text-orange-200 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-200">
          Company Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-orange-200 mb-2">
                {stat.suffix && <span>{stat.suffix}</span>}
                {Math.round(counts[index]).toLocaleString()}
              </div>
              <div className="text-orange-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// bar char stats
// npm i recharts
const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE"];

interface DataPoint {
  name: string;
  value: number;
}

function RealTimeCharts() {
  const [barData, setBarData] = useState<DataPoint[]>([
    { name: "A", value: 0 },
    { name: "B", value: 0 },
    { name: "C", value: 0 },
    { name: "D", value: 0 },
  ]);

  const [pieData, setPieData] = useState<DataPoint[]>([
    { name: "Category 1", value: 25 },
    { name: "Category 2", value: 25 },
    { name: "Category 3", value: 25 },
    { name: "Category 4", value: 25 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update bar chart data
      setBarData((prevData) =>
        prevData.map((item) => ({
          ...item,
          value: Math.floor(Math.random() * 100),
        }))
      );

      // Update pie chart data
      setPieData((prevData) => {
        const newData = prevData.map((item) => ({
          ...item,
          value: Math.max(5, Math.floor(Math.random() * 50)),
        }));
        const total = newData.reduce((sum, item) => sum + item.value, 0);
        return newData.map((item) => ({
          ...item,
          value: Math.round((item.value / total) * 100),
        }));
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Real-Time Statistics
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-black p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                contentStyle={{ backgroundColor: "#333", border: "none" }}
              />
              <Legend />
              <Bar dataKey="value" fill="#8884d8">
                {barData.map((index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }: any) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {pieData.map((index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#333", border: "none" }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function APIMarketplace() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-black bg-grid-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-orange-200 mb-6">API Marketplace</h1>
          <p className="text-sm md:text-2xl text-orange-200 mb-8">Discover, Connect, and Innovate with APIs</p>
          <Button size="lg" className="bg-transparent border border-orange-200 hover:bg-orange-400 hover:border-none text-white">
            Explore APIs
          </Button>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 md:px-8 relative bg-black bg-grid-white/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black "></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-200 mb-12">Why Choose Our Marketplace?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Wide Selection', 'Easy Integration', 'Secure & Reliable'].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-transparent bg-opacity-50 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-orange-200 mb-4">{feature}</h3>
                <p className="text-orange-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular APIs */}
      <section className="py-20 px-4 md:px-8 bg-black bg-grid-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-400 mb-12">Popular APIs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Payment API', 'Weather API', 'Social Media API', 'E-commerce API', 'Machine Learning API', 'Geolocation API'].map((api, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-transparent bg-opacity-50 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-orange-300 mb-4">{api}</h3>
                <p className="text-orange-200 mb-4">Integrate powerful {api.toLowerCase()} functionality into your applications.</p>
                <Button variant="outline" className="bg-transparent text-white border-orange-200 hover:bg-orange-400 hover:border-none hover:text-white">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 relative bg-black bg-grid-white/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-300 mb-6">Ready to Supercharge Your Development?</h2>
          <p className="text-xl text-orange-200 mb-8">Join thousands of developers using our API marketplace to build amazing applications.</p>
          <Button size="lg" className="bg-transparent border border-orange-200 hover:bg-orange-400 hover:border-none text-white">
            Sign Up Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-grid-white/[0.2] text-white py-8 px-4 md:px-8 relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">API Marketplace</h3>
            <p className="text-gray-400">Empowering developers since 2023</p>
          </div>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-blue-400">About</a>
            <a href="#" className="hover:text-blue-400">Blog</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
            <a href="#" className="hover:text-blue-400">Terms</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}