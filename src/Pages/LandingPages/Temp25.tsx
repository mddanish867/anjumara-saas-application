'use client'

import { useState } from 'react'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'

export default function Temp25() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F5F7FF] flex flex-col items-center pt-8 px-4">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 rounded-full w-full max-w-6xl flex items-center justify-between relative z-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full"></div>
          <span className="text-2xl font-bold">Jasper</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <NavItem text="Products" />
          <NavItem text="Learn" />
          <NavItem text="Company" />
          <NavItem text="Pricing" />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 text-gray-700 font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            Login
          </button>
          <button className="px-4 py-2 bg-[#7C3AED] text-white font-medium rounded-full flex items-center hover:bg-[#6D28D9] transition-colors">
            Try Jasper Free
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-white shadow-md rounded-b-2xl p-4 z-40">
          <NavItem text="Products" mobile />
          <NavItem text="Learn" mobile />
          <NavItem text="Company" mobile />
          <NavItem text="Pricing" mobile />
          <div className="mt-4 space-y-2">
            <button className="w-full px-4 py-2 text-gray-700 font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-[#7C3AED] text-white font-medium rounded-full flex items-center justify-center hover:bg-[#6D28D9] transition-colors">
              Try Jasper Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center mt-12">
        <h2 className="text-lg mb-4">Select your brand tone of voice and watch Jasper get to work.</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Cheeky', 'Formal', 'Bold', 'Pirate'].map((tone, index) => (
            <button
              key={tone}
              className={`px-6 py-2 rounded-full border ${
                index === 2 ? 'bg-[#1A0B2E] text-white' : 'bg-white text-gray-700 border-gray-300'
              } hover:bg-opacity-90 transition-colors`}
            >
              {tone}
            </button>
          ))}
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">Meet Jasper.</h1>
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 max-w-4xl">
          On-brand AI content wherever you create.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="px-6 py-3 bg-[#7C3AED] text-white font-medium rounded-full flex items-center hover:bg-[#6D28D9] transition-colors">
            Try Jasper Free
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button className="px-6 py-3 bg-white text-gray-700 font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            Request Demo
          </button>
        </div>
      </main>
    </div>
  )
}

function NavItem({ text, mobile}: { text: string; mobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownItems = ['Item 1', 'Item 2', 'Item 3']

  return (
    <div className={`relative ${mobile ? 'py-2' : ''}`}>
      <div
        className="flex items-center space-x-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{text}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <div className={`${mobile ? '' : 'absolute top-full left-0'} bg-white shadow-md rounded-lg mt-2 py-2 w-48`}>
          {dropdownItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}