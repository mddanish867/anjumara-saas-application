import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import {Link} from 'react-router-dom'

const menuItems = [
  { name: 'Home', href: '#' },
  {
    name: 'Products',
    href: '#',
    dropdown: [
      { name: 'Electronics', href: '#' },
      { name: 'Clothing', href: '#' },
      { name: 'Books', href: '#' },
    ],
  },
  {
    name: 'Services',
    href: '#',
    dropdown: [
      { name: 'Consulting', href: '#' },
      { name: 'Design', href: '#' },
      { name: 'Development', href: '#' },
    ],
  },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function NavbarDropdowns() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveDropdown(null)
  }

  const toggleDropdown = (name:any) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-8" src="/placeholder.svg?height=32&width=32" alt="Logo" />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.dropdown && (
                    <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
            <div key={item.name}>
              {item.dropdown ? (
                <button
                  className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              )}
              {item.dropdown && activeDropdown === item.name && (
                <div className="pl-4 space-y-2">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-sm"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}