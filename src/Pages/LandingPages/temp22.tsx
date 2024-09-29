import { useState } from 'react'
import { StarIcon, MenuIcon, XIcon } from 'lucide-react'

export default function Temp22() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="px-4 py-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-500">Logo</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-purple-500 transition duration-300">Features</a>
            <a href="#" className="hover:text-purple-500 transition duration-300">Pricing</a>
            <a href="#" className="hover:text-purple-500 transition duration-300">About</a>
            <button className="bg-transparent hover:bg-purple-700 text-purple-500 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded transition duration-300">
              Sign In
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
              Sign Up
            </button>
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <div className="flex flex-col space-y-4 px-4">
            <a href="#" className="hover:text-purple-500 transition duration-300">Features</a>
            <a href="#" className="hover:text-purple-500 transition duration-300">Pricing</a>
            <a href="#" className="hover:text-purple-500 transition duration-300">About</a>
            <button className="bg-transparent hover:bg-purple-700 text-purple-500 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded transition duration-300">
              Sign In
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Header content */}
      <div className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-purple-500">AI Website Builder</span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Build and Deploy in 30 Seconds!
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Our AI-powered website builder will help you launch & validate your next website from just a simple prompt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              Get Started for Free
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md transition duration-300">
              Lifetime Deal (Limited Slots)
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5" />
              <span>30 day money-back guarantee</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <span>Cancel anytime</span>
            <span className="hidden sm:inline">|</span>
            <span>No credit card required</span>
          </div>
          <div className="mt-8 text-purple-500 font-bold">
            14,972+ <span className="text-gray-400 font-normal">projects created using AI & still counting!</span>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-32 h-32 opacity-50">
          <div className="absolute inset-0 bg-pink-500 rounded-full filter blur-3xl"></div>
          <StarIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white" />
        </div>
        <div className="absolute bottom-10 right-20 w-48 h-48">
          <div className="absolute inset-0 bg-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute inset-0 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}