"use client"

import { useState, useEffect } from 'react'
import { Menu, X, Star } from 'lucide-react'

export default function Temp34() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 font-sans">
      {/* Matrix-like background */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-4 bg-white bg-opacity-90">
        <div className="text-2xl font-bold text-gray-800">CodeDesign.ai</div>
        <div className="hidden md:flex space-x-4">
          <NavLink href="#" text="Learn CodeDesign" />
          <NavLink href="#" text="Pricing" />
          <NavLink href="#" text="Sign in/Sign up" />
          <button className="px-4 py-2 text-white bg-purple-500 rounded-full hover:bg-purple-600 transition-colors">
            Generate Your Website
          </button>
        </div>
        <button className="md:hidden z-30" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-10 bg-white">
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <NavLink href="#" text="Learn CodeDesign" />
            <NavLink href="#" text="Pricing" />
            <NavLink href="#" text="Sign in/Sign up" />
            <button className="px-4 py-2 text-white bg-purple-500 rounded-full hover:bg-purple-600 transition-colors">
              Generate Your Website
            </button>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 py-12 text-center">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-purple-600">AI Website Builder</span>
        </h1>
        <h2 className="text-4xl font-bold mb-8">Build, Host & Export in Minutes!</h2>
        <p className="text-xl mb-8">100,000+ businesses have created their AI website with us!</p>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
          <input
            type="text"
            placeholder="A portfolio website for my boutique shop"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <div className="flex justify-between items-center mb-4">
            <select className="p-2 border border-gray-300 rounded-md">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
            <span className="text-gray-500">0/200</span>
          </div>
          <button className="w-full py-3 text-white bg-purple-500 rounded-md hover:bg-purple-600 transition-colors">
            ✨ Generate Website
          </button>
        </div>

        <div className="flex justify-center items-center mb-8">
          <div className="flex items-center mr-4">
            <span className="text-green-500 mr-1">Trustpilot</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
            ))}
          </div>
          <span className="text-gray-700">Excellent</span>
        </div>

        <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
          <span>30 days money-back guarantee</span>
          <span>|</span>
          <span>Cancel anytime</span>
          <span>|</span>
          <span>No credit card required</span>
        </div>

        {/* Timer */}
        <div className="fixed bottom-4 right-4 bg-white p-2 rounded-md shadow-md">
          Time spent on page: {formatTime(timer)}
        </div>
      </main>

      {/* Additional component */}
      <section className="relative z-10 bg-white bg-opacity-90 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Websites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="bg-indigo-800 h-40 mb-4 rounded"></div>
                <h3 className="text-xl font-semibold mb-2">Website {i}</h3>
                <p className="text-gray-600">A beautiful AI-generated website showcasing the power of CodeDesign.ai</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a href={href} className="text-gray-600 hover:text-gray-800 transition-colors">
      {text}
    </a>
  )
}