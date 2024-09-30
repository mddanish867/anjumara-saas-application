import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-white hover:text-pink-500 transition-colors">
    {children}
  </a>
);

const Star = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute bg-white rounded-full opacity-70"
    style={{
      width: '2px',
      height: '2px',
      ...style,
      animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
    }}
  />
);

export default function Temp33() {
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
    <div className="md:container min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {stars.map((style, index) => (
        <Star key={index} style={style} />
      ))}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-pink-500 w-8 h-8 rounded-md flex items-center justify-center mr-2">
            <X className="text-white" size={20} />
          </div>
          <span className="text-2xl font-bold">Mixo</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
        </nav>
        <div className="hidden md:flex space-x-4">
          <NavLink href="#login">Log in</NavLink>
          <a
            href="#get-started"
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
          >
            Get Started for Free
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="text-white" size={24} />
        </button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-purple-900 z-50 p-6">
          <button className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}>
            <X className="text-white" size={24} />
          </button>
          <nav className="flex flex-col space-y-4 mt-16">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#login">Log in</NavLink>
            <a
              href="#get-started"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors text-center"
            >
              Get Started for Free
            </a>
          </nav>
        </div>
      )}

      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Launch a website
          <br />
          in seconds with <span className="text-pink-500">AI.</span>
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          Have an idea for a startup, product or service? Bring it to life with AI
          <br />
          effortlessly and watch it grow.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <span className="text-yellow-400">Free Trial Available</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-300">Over 2 Million Sites Created</span>
        </div>
        <a
          href="#get-started"
          className="bg-pink-500 text-white px-8 py-4 rounded-md text-xl hover:bg-pink-600 transition-colors inline-flex items-center"
        >
          Get Started for Free
          <span className="ml-2">✨</span>
        </a>
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
  );
}
