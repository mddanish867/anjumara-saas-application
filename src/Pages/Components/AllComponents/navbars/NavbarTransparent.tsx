import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import {Link} from 'react-router-dom'

const menuItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function NavbarTransparent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                className={`h-8 w-auto transition-all duration-300 ${isScrolled ? 'filter-none' : 'filter invert'}`}
                src="/placeholder.svg?height=32&width=32" 
                alt="Logo" 
              />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:bg-gray-50 hover:text-gray-900' 
                      : 'text-white hover:bg-white/10 hover:text-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300 ${
                isScrolled ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100' : 'text-white hover:text-gray-300 hover:bg-white/10'
              }`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-50 hover:text-gray-900' 
                  : 'text-white hover:bg-white/10 hover:text-gray-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}