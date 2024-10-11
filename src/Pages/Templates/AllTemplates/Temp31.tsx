import { useState, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';

const products = ['Product 1', 'Product 2', 'Product 3'];
const resources = ['Resource 1', 'Resource 2', 'Resource 3'];

export default function Temp31() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [time, setTime] = useState({ days: 5, hours: 10, minutes: 29, seconds: 17 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="md:container bg-pink-500 min-h-screen text-white">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg?height=40&width=100" alt="Zyro logo" className="h-10" />
          <nav className="hidden md:flex space-x-4">
            <div className="relative group">
              <button className="flex items-center">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-black p-2 rounded shadow-lg">
                {products.map((product, index) => (
                  <a key={index} href="#" className="block py-1 hover:bg-gray-100">{product}</a>
                ))}
              </div>
            </div>
            <a href="#">Templates</a>
            <div className="relative group">
              <button className="flex items-center">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-black p-2 rounded shadow-lg">
                {resources.map((resource, index) => (
                  <a key={index} href="#" className="block py-1 hover:bg-gray-100">{resource}</a>
                ))}
              </div>
            </div>
            <a href="#">Pricing</a>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <select className="bg-transparent border-none">
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
          </select>
          <a href="#" className="hover:underline">Sign In</a>
          <a href="#" className="border border-white text-white px-4 py-2 rounded-full font-bold">JOIN ZYRO</a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-pink-600 p-4">
          <nav className="flex flex-col space-y-2">
            <div>
              <button className="flex items-center justify-between w-full py-2" onClick={() => {}}>
                Products <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4">
                {products.map((product, index) => (
                  <a key={index} href="#" className="block py-1">{product}</a>
                ))}
              </div>
            </div>
            <a href="#" className="py-2">Templates</a>
            <div>
              <button className="flex items-center justify-between w-full py-2" onClick={() => {}}>
                Resources <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4">
                {resources.map((resource, index) => (
                  <a key={index} href="#" className="block py-1">{resource}</a>
                ))}
              </div>
            </div>
            <a href="#" className="py-2">Pricing</a>
            <a href="#" className="py-2">Sign In</a>
            <a href="#" className="border border-white text-white px-4 py-2 rounded-full font-bold text-center">JOIN ZYRO</a>
          </nav>
        </div>
      )}

      <main className="flex flex-col md:flex-row p-4 md:p-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <img src="/Temp26.png" alt="Website preview" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Flawless templates, easy editing, no coding required — that's Zyro website builder
          </h1>
          <p className="text-xl">
            Build a website and save up to 68% with plans from $2.90/mo. Deal ends in:
          </p>
          <div className="flex space-x-4 text-2xl font-bold">
            <div className="bg-pink-600 p-2 rounded">
              {String(time.days).padStart(2, '0')}
            </div>
            <div className="bg-pink-600 p-2 rounded">
              {String(time.hours).padStart(2, '0')}
            </div>
            <div className="bg-pink-600 p-2 rounded">
              {String(time.minutes).padStart(2, '0')}
            </div>
            <div className="bg-pink-600 p-2 rounded">
              {String(time.seconds).padStart(2, '0')}
            </div>
          </div>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg uppercase">
            Start Building
          </button>
          <p className="flex items-center">
            <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            No credit card required
          </p>
        </div>
      </main>
    </div>
  );
}