
import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'

export default function Temp29() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="md:container min-h-screen bg-[#1c1c1c] text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">zyro</div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-red-500 hover:text-red-400">Website</a>
          <a href="#" className="hover:text-gray-300">Online Store</a>
          <a href="#" className="hover:text-gray-300">Templates</a>
          <a href="#" className="hover:text-gray-300">Pricing</a>
          <a href="#" className="hover:text-gray-300">All products</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center space-x-1">
            <Globe size={20} />
            <span>EN</span>
          </button>
          <button className="hover:text-gray-300">Sign In</button>
          <button className="bg-[#2d2d2d] text-white px-4 py-2 rounded-full hover:bg-gray-700">
            JOIN ZYRO
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-[#2d2d2d] p-4">
          <a href="#" className="block py-2 text-red-500 hover:text-red-400">Website</a>
          <a href="#" className="block py-2 hover:text-gray-300">Online Store</a>
          <a href="#" className="block py-2 hover:text-gray-300">Templates</a>
          <a href="#" className="block py-2 hover:text-gray-300">Pricing</a>
          <a href="#" className="block py-2 hover:text-gray-300">All products</a>
          <a href="#" className="block py-2 hover:text-gray-300">Sign In</a>
          <button className="mt-4 w-full bg-[#2d2d2d] text-white px-4 py-2 rounded-full hover:bg-gray-700">
            JOIN ZYRO
          </button>
        </div>
      )}

      <main className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-start">
        <div className={`md:w-1/2 mb-8 md:mb-0 transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The easiest way to build a website
          </h1>
          <p className="text-lg mb-8 text-gray-400">
            Our website builder is not only easy to use - it's mighty powerful too.
            No coding or design skills needed. Get started in minutes.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200">
            CREATE A FREE WEBSITE
          </button>
        </div>
        <div className="md:w-1/2 grid grid-cols-3 gap-4 relative">
          <img src="/temp29.png" alt="Website example 1" className="col-span-2 rounded-lg" />
          <div className="space-y-4">
            <img src="/temp28.png" alt="Website example 2" className="rounded-lg" />
            <img src="/temp27.png" alt="Website example 3" className="rounded-lg" />
          </div>
          <img src="/temp16.jpg" alt="Website example 4" className="col-span-2 rounded-lg" />
          <img src="/temp8.jpg" alt="Website example 5" className="rounded-lg" />
        </div>
      </main>
    </div>
  )
}