import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Temp11() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-[#1c1c2e] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Campaign Monitor</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-300">Features</a>
            <a href="#" className="hover:text-gray-300">Pricing</a>
            <a href="#" className="hover:text-gray-300">Resources</a>
            <a href="#" className="hover:text-gray-300">Customers</a>
            <a href="#" className="hover:text-gray-300">Gallery</a>
            <a href="#" className="hover:text-gray-300">Agencies</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">Contact us</a>
            <a href="#" className="hover:text-gray-300">Log in</a>
            <a href="#" className="bg-[#66e3ff] text-[#1c1c2e] px-4 py-2 rounded-md hover:bg-[#33d6ff]">Try it free</a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-[#1c1c2e] text-white p-4">
          <a href="#" className="block py-2">Features</a>
          <a href="#" className="block py-2">Pricing</a>
          <a href="#" className="block py-2">Resources</a>
          <a href="#" className="block py-2">Customers</a>
          <a href="#" className="block py-2">Gallery</a>
          <a href="#" className="block py-2">Agencies</a>
          <a href="#" className="block py-2">Contact us</a>
          <a href="#" className="block py-2">Log in</a>
          <a href="#" className="block py-2 bg-[#66e3ff] text-[#1c1c2e] px-4 rounded-md hover:bg-[#33d6ff] text-center mt-4">Try it free</a>
        </div>
      )}

      <main className="container mx-auto px-8 py-12 md:flex items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Drive results with unforgettable email marketing.
          </h1>
          <p className="text-xl mb-8">
            Connecting with your audience has never been easier with Campaign Monitor's straightforward email marketing and automation tools.
          </p>
          <div className="space-x-4">
            <a href="#" className="bg-[#7c5dfa] text-white px-6 py-3 rounded-md hover:bg-[#6a4df0]">Sign up for free</a>
            <a href="#" className="border border-[#1c1c2e] text-[#1c1c2e] px-6 py-3 rounded-md hover:bg-gray-100">Learn more</a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg?height=400&width=600" alt="Email templates" className="w-full h-auto" />
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <p className="text-xl">Powering email marketing for businesses around the world.</p>
        </div>
      </footer>
    </div>
  )
}