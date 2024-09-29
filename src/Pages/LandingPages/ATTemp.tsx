import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function AITemp2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-pink-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.71 11.29l-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42l9 9a1 1 0 0 0 1.42 0l9-9a1 1 0 0 0 0-1.42zM14 14.5V12h-4v3H8v-4a1 1 0 0 1 1-1h5v-2.5l3.5 3.5L14 14.5z" />
            </svg>
            <span className="ml-2 text-xl font-bold text-purple-900">Butternut AI</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-purple-900 hover:text-purple-700">Home</a>
            <a href="#" className="text-purple-900 hover:text-purple-700">Product</a>
            <a href="#" className="text-purple-900 hover:text-purple-700">Contact us</a>
            <a href="#" className="text-purple-900 hover:text-purple-700">Pricing</a>
          </nav>
          <button 
            className="md:hidden text-purple-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg p-4 mb-6">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-purple-900 hover:text-purple-700">Home</a>
              <a href="#" className="text-purple-900 hover:text-purple-700">Product</a>
              <a href="#" className="text-purple-900 hover:text-purple-700">Contact us</a>
              <a href="#" className="text-purple-900 hover:text-purple-700">Pricing</a>
            </nav>
          </div>
        )}

        <main className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4">
            Build your <span className="underline decoration-purple-500">dream website</span>
            <br />in 20 seconds with AI
          </h1>
          <p className="text-lg md:text-xl text-purple-800 mb-8">
            World's first text-to-website builder that creates full-<br className="hidden md:inline" />
            fledged, multipage websites from a single prompt!
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Name of your business"
              className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Keywords e.g. Law Firm, Real Estate, Fintech S"
              className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
              Generate
            </button>
          </div>
        </main>

        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-2">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-bold text-gray-800">PRODUCT HUNT</span>
          </div>
          <div className="text-xs text-red-500 font-bold">#1 Product of the Day</div>
        </div>
      </div>
    </div>
  )
}