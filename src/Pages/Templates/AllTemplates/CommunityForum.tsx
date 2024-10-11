import { useState } from 'react'
import { Menu, MessageSquare, Repeat2, Search, SquareCheck, X } from 'lucide-react'

export default function CodaCommunity() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="container bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-500">C</div>
          <div className="hidden md:flex space-x-4 items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Log In</button>
            <Search className="text-gray-500" />
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Log In</button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Coda Community</h1>
        <p className="text-center text-gray-600 mb-8">
          We're happy to have you here. If you need help, please search before you post.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search"
            className="w-full border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500" />
        </div>

        {/* Categories and Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className='container'>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Top Categories</h2>
              <a href="#" className="text-blue-500 text-sm">See more</a>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 border-l-4 border-blue-500 bg-white p-4 rounded-md shadow-sm">
                <div className="bg-blue-500 text-white p-2 rounded-md"><MessageSquare /></div>
                <span>Ask the Community</span>
              </div>
              <div className="flex items-center space-x-4 border-l-4 border-orange-500 bg-white p-4 rounded-md shadow-sm">
                <div className="bg-orange-500 text-white p-2 rounded-md"><Repeat2 /></div>
                <span>News from Coda</span>
              </div>
              <div className="flex items-center space-x-4 border-l-4 border-green-500 bg-white p-4 rounded-md shadow-sm">
                <div className="bg-green-500 text-white p-2 rounded-md"><SquareCheck /></div>
                <span>Suggestion Box</span>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Maker Highlights</h2>
              <a href="#" className="text-blue-500 text-sm">See more</a>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-semibold">Introducing the Notion Pack! 🎉</h3>
                <p className="text-sm text-gray-500">Apr '22</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-semibold">Introducing our new Community Champions!</h3>
                <p className="text-sm text-gray-500">Aug '22</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-semibold">Preview: Cross-doc Plus (codenamed) — My opinionated take on Cross-doc</h3>
                <p className="text-sm text-gray-500">Apr '22</p>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Posts */}
        <div className="container mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <button className="text-blue-500 font-semibold">Latest</button>
              <button className="text-gray-500">Top</button>
            </div>
            <select className="border rounded-md py-1 px-2 text-sm">
              <option>All Categories</option>
            </select>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md shadow-sm flex items-start space-x-4">
              <img src="/placeholder.svg" alt="User" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold">Duplicate rows with certain columns as unique: OR restrict duplication of rows</h3>
                <p className="text-sm text-gray-500">Ask the Community</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm flex items-start space-x-4">
              <img src="/placeholder.svg" alt="User" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold">Launched: Calculate column</h3>
                <p className="text-sm text-gray-500">News from Coda</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pack Studio Banner */}
        <div className="container bg-purple-600 text-white p-6 rounded-md">
          <h2 className="text-xl font-semibold mb-2">🎉 Pack Studio is live!</h2>
          <p className="mb-4">Now's your time to shine! Use classic tools like AI for a chance to win great prizes.</p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-md font-semibold">Learn more</button>
        </div>
      </main>
    </div>
  )
}