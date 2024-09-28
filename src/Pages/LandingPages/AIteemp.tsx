
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function AITemp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
      <nav className="flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center space-x-4">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3L18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 3L6 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-xl font-semibold">Framer</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Why Framer</a>
          <a href="#" className="hover:text-gray-300">Templates</a>
          <a href="#" className="hover:text-gray-300">Community</a>
          <a href="#" className="hover:text-gray-300">Resources</a>
          <a href="#" className="hover:text-gray-300">Awards</a>
          <a href="#" className="hover:text-gray-300">Feed</a>
          <a href="#" className="hover:text-gray-300">Business</a>
          <a href="#" className="hover:text-gray-300">Pricing</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="hover:text-gray-300">Log in</button>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Sign up</button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden bg-purple-900 p-4">
          <a href="#" className="block py-2">Why Framer</a>
          <a href="#" className="block py-2">Templates</a>
          <a href="#" className="block py-2">Community</a>
          <a href="#" className="block py-2">Resources</a>
          <a href="#" className="block py-2">Awards</a>
          <a href="#" className="block py-2">Feed</a>
          <a href="#" className="block py-2">Business</a>
          <a href="#" className="block py-2">Pricing</a>
          <a href="#" className="block py-2">Log in</a>
          <button className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md mt-4">Sign up</button>
        </div>
      )}

      <main className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl">
          Start your dream site with AI. Zero code, maximum speed.
        </h1>
        <div className="w-full max-w-2xl bg-white bg-opacity-10 rounded-full p-1 flex">
          <div className="bg-purple-700 rounded-full p-2 mr-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder="A business for writing better code called Chirp"
            className="flex-grow bg-transparent outline-none text-white placeholder-gray-400"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
            Start with AI
          </button>
        </div>
        <a href="#" className="mt-8 text-sm hover:underline">Announcing Framer AI →</a>
      </main>
    </div>
  )
}