"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Jasper2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-br from-black to-purple-900 min-h-screen text-white">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-purple-500 rounded-full mr-2"></div>
          <span className="text-2xl font-bold">Jasper</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-purple-300">Features</a>
          <a href="#" className="hover:text-purple-300">Company</a>
          <a href="#" className="hover:text-purple-300">Support</a>
          <a href="#" className="hover:text-purple-300">Pricing</a>
          <a href="#" className="hover:text-purple-300">Business</a>
          <a href="#" className="hover:text-purple-300">API</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-purple-300">Login</a>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Start Now →</a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 absolute top-16 left-0 right-0 p-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-purple-300">Features</a>
            <a href="#" className="hover:text-purple-300">Company</a>
            <a href="#" className="hover:text-purple-300">Support</a>
            <a href="#" className="hover:text-purple-300">Pricing</a>
            <a href="#" className="hover:text-purple-300">Business</a>
            <a href="#" className="hover:text-purple-300">API</a>
            <a href="#" className="hover:text-purple-300">Login</a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-center">Start Now →</a>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 py-20 text-center">
        <p className="text-sm uppercase tracking-wider mb-4">MEET JASPER 👋</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Create amazing blog posts<br />
          10X faster with AI.
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Jasper is the generative AI platform for business that helps your team create content
          tailored for your brand 10X faster, wherever you work online.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <a href="#" className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-md font-semibold">
            Get A Demo
          </a>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md font-semibold">
            Start Now →
          </a>
        </div>
      </main>
    </div>
  )
}