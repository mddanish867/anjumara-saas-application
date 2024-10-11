import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

export default function ZIP() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-pink-300">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">ZIP</span>
          <span className="ml-1 px-1 bg-orange-500 text-white text-xs font-bold rounded">WP</span>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-pink-500 font-medium">Home</a>
          <a href="#" className="text-gray-700 font-medium">Pricing</a>
          <a href="#" className="text-gray-700 font-medium">For Hosts</a>
          <a href="#" className="text-gray-700 font-medium">Contact Us</a>
          <div className="relative group">
            <a href="#" className="text-gray-700 font-medium">Help Center </a>
            <span className="text-xs">▼</span>
          </div>
          <button className="ml-8 px-6 py-2 text-gray-700 font-medium border border-pink-300 rounded-full hover:bg-gray-50 transition-colors">
            Log In
          </button>
        </nav>
        <div className="md:hidden" ref={menuRef}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg py-2 w-48">
              <a href="#" className="block px-4 py-2 text-pink-500 font-medium">Home</a>
              <a href="#" className="block px-4 py-2 text-gray-700 font-medium">Pricing</a>
              <a href="#" className="block px-4 py-2 text-gray-700 font-medium">For Hosts</a>
              <a href="#" className="block px-4 py-2 text-gray-700 font-medium">Contact Us</a>
              <a href="#" className="block px-4 py-2 text-gray-700 font-medium">Help Center</a>
              <button className="block w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-gray-100">
                Log In
              </button>
            </div>
          )}
        </div>
      </header>
      
      <main className="container mx-auto px-4 text-center mt-20">
        <p className="text-orange-500 font-semibold mb-4">#1 AI Website Builder for WordPress</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Create Stunning WordPress Website<br className="hidden md:inline" />in 60 Seconds with AI!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          Build professional websites in seconds with limitless customization options.<br className="hidden md:inline" />
          No coding required.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold rounded-lg text-xl hover:from-fuchsia-700 hover:to-pink-700 transition-colors">
          Sign Up for Free
        </button>
      </main>
    </div>
  )
}