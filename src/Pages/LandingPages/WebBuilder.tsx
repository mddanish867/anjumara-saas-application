import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function WebBuilder() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 via-indigo-500 to-gray-300">
      <nav className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">B12</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-white hover:text-indigo-200">Product overview</a>
              <a href="#" className="text-white hover:text-indigo-200">Industries</a>
              <a href="#" className="text-white hover:text-indigo-200">How it works</a>
              <a href="#" className="text-white hover:text-indigo-200">Pricing</a>
              <a href="#" className="text-white hover:text-indigo-200">Case studies</a>
              <a href="#" className="text-white hover:text-indigo-200">Log in</a>
              <a href="#" className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100">Start for free</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block text-white hover:text-indigo-200 py-2">Product overview</a>
              <a href="#" className="block text-white hover:text-indigo-200 py-2">Industries</a>
              <a href="#" className="block text-white hover:text-indigo-200 py-2">How it works</a>
              <a href="#" className="block text-white hover:text-indigo-200 py-2">Pricing</a>
              <a href="#" className="block text-white hover:text-indigo-200 py-2">Case studies</a>
              <a href="#" className="block text-white hover:text-indigo-200 py-2">Log in</a>
              <a href="#" className="block bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 mt-4">Start for free</a>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-white mb-2">B12 WEBSITE BUILDER</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Grow your business with a professional AI website</h1>
            <p className="text-white text-lg mb-8">B12 is the easiest AI website builder to help businesses attract, win, and serve clients online.</p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-indigo-100">
              Start for free
            </button>
            <p className="text-white text-sm mt-2">No credit card required</p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Tell us about your business</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">Business name</label>
                  <input type="text" id="business-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Gray & Associates" />
                </div>
                <div>
                  <label htmlFor="business-description" className="block text-sm font-medium text-gray-700">Business description</label>
                  <textarea id="business-description" rows={3} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="NYC corporate lawyer focusing on deals and transactions"></textarea>
                </div>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}