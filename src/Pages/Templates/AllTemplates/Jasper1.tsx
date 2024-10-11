"use client"

import { useState } from 'react'
import { Menu, ChevronDown } from 'lucide-react'

export default function Jasper1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-b from-black via-[#0a0a0a] to-[#df4609] min-h-screen text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#3d0000] to-transparent opacity-40"></div>
      <div className="relative z-10">
        <nav className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full mr-2"></div>
            <span className="text-2xl font-bold">Jasper</span>
          </div>
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="flex items-center">Features <ChevronDown className="ml-1 w-4 h-4" /></a>
            <a href="#" className="flex items-center">Company <ChevronDown className="ml-1 w-4 h-4" /></a>
            <a href="#" className="flex items-center">Support <ChevronDown className="ml-1 w-4 h-4" /></a>
            <a href="#">Pricing</a>
            <a href="#">Business</a>
            <a href="#">API</a>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Login</a>
            <a href="#" className="bg-gradient-to-b from-[#4354ff] to-[#5e8ff1] hover:from-[#3b4af0] hover:to-[#2e0fc7] px-4 py-2 rounded-md">Start Now →</a>
          </div>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
        </nav>
        
        {isMenuOpen && (
          <div className="lg:hidden bg-black absolute top-16 left-0 right-0 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#">Features</a>
              <a href="#">Company</a>
              <a href="#">Support</a>
              <a href="#">Pricing</a>
              <a href="#">Business</a>
              <a href="#">API</a>
              <a href="#">Login</a>
              <a href="#" className="bg-gradient-to-b from-[#4354ff] to-[#3311db] hover:from-[#3b4af0] hover:to-[#2e0fc7] px-4 py-2 rounded-md text-center">Start Now →</a>
            </div>
          </div>
        )}

        <main className="container mx-auto px-4 pt-20 pb-32 text-left max-w-5xl">
          <p className="text-sm uppercase tracking-wider mb-4 text-gray-400">MEET JASPER 👋</p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Create amazing blog posts<br />
            10X faster with AI.
          </h1>
          <div className="bg-gradient-to-r from-orange-500 to-purple-500 h-1 w-24 mb-8"></div>
          <p className="text-xl mb-12 max-w-3xl text-gray-300">
            Jasper is the generative AI platform for business that helps your team create content
            tailored for your brand 10X faster, wherever you work online.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-md font-semibold">
              Get A Demo
            </a>
            <a href="#" className="bg-gradient-to-b from-[#4354ff] to-[#5e8ff1] hover:from-[#3b4af0] hover:to-[#2e0fc7] px-8 py-3 rounded-md font-semibold">
              Start Now →
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}