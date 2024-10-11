import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2Icon, Menu, X } from "lucide-react";



// navigation constant
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
            <span className="text-1xl font-bold text-orange-400">SOORA</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
          </nav>
          <div className="hidden md:flex space-x-4">
            <a
              href="/soora-api/login"
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
                href="/soora-api/login"
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
          <motion.h1 className="text-3xl md:text-7xl font-bold mb-6"
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
    </>
  )
}

export default Home
