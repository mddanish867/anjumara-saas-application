import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Temp12() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FFFCF9] font-sans">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-[#FB6970]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-2 text-xl font-semibold text-[#1B1B1B]">ConvertKit</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-[#1B1B1B] hover:text-[#FB6970]">Features</a>
          <a href="#" className="text-[#1B1B1B] hover:text-[#FB6970]">Pricing</a>
          <a href="#" className="text-[#1B1B1B] hover:text-[#FB6970]">Resources</a>
          <a href="#" className="text-[#1B1B1B] hover:text-[#FB6970]">Log In</a>
          <a href="#" className="bg-[#FB6970] text-white px-4 py-2 rounded-md hover:bg-[#E55A61]">Sign up free</a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 p-4 shadow-md">
          <a href="#" className="block py-2 text-[#1B1B1B] hover:text-[#FB6970]">Features</a>
          <a href="#" className="block py-2 text-[#1B1B1B] hover:text-[#FB6970]">Pricing</a>
          <a href="#" className="block py-2 text-[#1B1B1B] hover:text-[#FB6970]">Resources</a>
          <a href="#" className="block py-2 text-[#1B1B1B] hover:text-[#FB6970]">Log In</a>
          <a href="#" className="block py-2 bg-[#FB6970] text-white px-4 rounded-md hover:bg-[#E55A61] text-center mt-2">Sign up free</a>
        </div>
      )}

      <main className="container mx-auto px-4 py-12 text-center">
        <p className="text-sm text-[#6B6B6B] uppercase tracking-wide mb-4">FEATURES `${"<"}` EMAIL MARKETING</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B1B1B] mb-4">
          The email marketing tool<br />designed for creators
        </h1>
        <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto mb-8">
          ConvertKit helps you connect with your audience and grow your business using email marketing software that's so easy to use you can spend less time in our tool and more time creating.
        </p>
        <button className="bg-[#66C7B6] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#5AB3A3]">
          Get started for free
        </button>
      </main>

      <div className="container mx-auto px-4 py-12">
        <div className="relative">
          <img 
            src="/placeholder.svg" 
            alt="ConvertKit Dashboard" 
            className="w-full rounded-lg shadow-xl"
          />
          <svg className="absolute -top-12 -right-8 w-24 h-24 text-[#FB6970] transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}