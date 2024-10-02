import { useState } from 'react'
import { ChevronDown, Heart, MoreVertical, X } from 'lucide-react'

export default function Temp39() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleProductDropdown = () => setIsProductDropdownOpen(!isProductDropdownOpen)
  const toggleResourcesDropdown = () => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)

  return (
    <div className="md:container min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className='font-semibold text-3xl text-indio-600'>Dorik</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="flex items-center space-x-1 font-medium">
                <span>✨ Dorik AI</span>
              </a>
              <div className="relative">
                <button onClick={toggleProductDropdown} className="flex items-center space-x-1 font-medium">
                  <span>Product</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isProductDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 2</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 3</a>
                  </div>
                )}
              </div>
              <a href="#" className="font-medium">Templates</a>
              <a href="#" className="font-medium">Pricing</a>
              <a href="#" className="flex items-center space-x-1 font-medium">
                <span>Wall of Love</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </a>
              <div className="relative">
                <button onClick={toggleResourcesDropdown} className="flex items-center space-x-1 font-medium">
                  <span>Resources</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isResourcesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Resource 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Resource 2</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Resource 3</a>
                  </div>
                )}
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <a href="#" className="font-medium">Login</a>
              <a href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium">Sign Up</a>
              <button className="flex items-center space-x-1 font-medium">
                <span>EN</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <button onClick={toggleMenu} className="lg:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <MoreVertical className="h-6 w-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="mt-4 lg:hidden">
              <a href="#" className="block py-2 font-medium">✨ Dorik AI</a>
              <button onClick={toggleProductDropdown} className="w-full text-left py-2 font-medium flex items-center justify-between">
                <span>Product</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isProductDropdownOpen && (
                <div className="pl-4">
                  <a href="#" className="block py-2">Product 1</a>
                  <a href="#" className="block py-2">Product 2</a>
                  <a href="#" className="block py-2">Product 3</a>
                </div>
              )}
              <a href="#" className="block py-2 font-medium">Templates</a>
              <a href="#" className="block py-2 font-medium">Pricing</a>
              <a href="#" className="block py-2 font-medium items-center">
                <span>Wall of Love</span>
                <Heart className="h-4 w-4 text-red-500 fill-current ml-1" />
              </a>
              <button onClick={toggleResourcesDropdown} className="w-full text-left py-2 font-medium flex items-center justify-between">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isResourcesDropdownOpen && (
                <div className="pl-4">
                  <a href="#" className="block py-2">Resource 1</a>
                  <a href="#" className="block py-2">Resource 2</a>
                  <a href="#" className="block py-2">Resource 3</a>
                </div>
              )}
              <a href="#" className="block py-2 font-medium">Login</a>
              <a href="#" className="block py-2 font-medium">Sign Up</a>
              <button className="w-full text-left py-2 font-medium flex items-center justify-between">
                <span>EN</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          )}
        </nav>
      </header>
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-8">
            <div className="bg-indigo-900 text-white text-sm font-semibold px-4 py-2 rounded-full">
              ✨ Dorik AI Website Builder
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Easily build professional websites without code
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            Dorik is an all-in-one website building platform that makes it easy for anyone to create a beautiful website in minutes, without any design or coding experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Landing Pages</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>White-Label CMS</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Blogs</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Membership Sites</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Analytics</span>
            </div>
          </div>
          <a href="#" className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-md font-bold text-lg">
            Try it Free →
          </a>
        </div>
      </main>
    </div>
  )
}