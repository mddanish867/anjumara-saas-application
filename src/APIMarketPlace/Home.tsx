import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";



// Render Starts
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
const Home = () => {
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
        <Navbar/>

        
        <main className="container mx-auto px-4 py-20 text-center">
          <motion.h1
            className="text-3xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Ready to Supercharge
            <br />
            Your Development? With{" "}
            <span className="text-violet-500">SOORA.</span>
          </motion.h1>

          <motion.p
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Have an idea for a startup, product or service? Bring it to life
            with SOORA
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
        
        <div className="relative items-center w-full py-12 mx-auto mt-12">
      <svg
        className="absolute inset-0 -mt-24 blur-3xl"
        style={{ zIndex: -1 }}
        fill="none"
        viewBox="0 0 400 400"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g filter="url(#filter0_f_10_20)">
            <path
              d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
              fill="#03FFE0"
            />
            <path
              d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
              fill="#7C87F8"
            />
            <path
              d="M320 400H400V78.75L106.2 134.75L320 400Z"
              fill="#4C65E4"
            />
            <path
              d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
              fill="#043AFF"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_10_20"
            x="-160.333"
            y="-160.333"
            width="720.666"
            height="720.666"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="80.1666"
              result="effect1_foregroundBlur_10_20"
            />
          </filter>
        </defs>
      </svg>
      
      <img
        src="/temp49.png"
        alt="Hero image"
        className="relative object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl"
      />
    </div>

        <style>{`
        @keyframes twinkle {
          0% { opacity: 0.7; }
          50% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
      `}</style>
      </div>

      <Footer />
    </>
  );
};

export default Home;
