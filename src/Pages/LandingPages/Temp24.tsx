import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Temp24() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="md:container min-h-screen bg-white">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">≡ Bookmark</div>
        <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Log In</a>
          <a href="#" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Get Started</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 absolute w-full z-10">
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Pricing</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Products</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Resources</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Log In</a>
          <a href="#" className="block px-4 py-2 bg-red-500 text-white hover:bg-red-600">Get Started</a>
        </div>
      )}

      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:-mt-44">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Spend time running your business, not your website
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Let our AI powered website builder get your business online in minutes.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <img src="https://framerusercontent.com/images/ie1yYbK7hjhZ9M8U4VNkgG0HSoQ.png?scale-down-to=1024" alt="Website Builder" className="w-full h-auto" />
          <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-24 h-24 bg-purple-300 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-16 h-16 bg-gray-200 opacity-50" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        </div>
      </section>

      <section className="md:p-36 md:rounded-tl-full md:rounded-br-full bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet AiDA,</h2>
            <p className="text-2xl mb-6">your artificial intelligence design assistant.</p>
            <div className="flex space-x-4">
              <button className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300">
                Learn More →
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img src="https://framerusercontent.com/images/ie1yYbK7hjhZ9M8U4VNkgG0HSoQ.png?scale-down-to=1024" alt="AiDA Demo" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 bg-blue-500 opacity-50" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
          </div>
        </div>
      </section>
    </div>
  )
}