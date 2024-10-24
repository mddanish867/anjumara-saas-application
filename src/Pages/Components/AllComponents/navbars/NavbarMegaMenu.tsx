import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import {Link} from 'react-router-dom'

const menuItems = [
  { name: 'Home', href: '#' },
  {
    name: 'Products',
    href: '#',
    megaMenu: [
      {
        title: 'Categories',
        items: [
          { name: 'Electronics', href: '#' },
          { name: 'Clothing', href: '#' },
          { name: 'Books', href: '#' },
          { name: 'Home & Garden', href: '#' },
        ],
      },
      {
        title: 'Featured',
        items: [
          { name: 'New Arrivals', href: '#' },
          { name: 'Best Sellers', href: '#' },
          { name: 'Sale Items', href: '#' },
        ],
      },
      {
        title: 'Brands',
        items: [
          { name: 'Apple', href: '#' },
          { name: 'Samsung', href: '#' },
          { name: 'Nike', href: '#' },
          { name: 'Adidas', href: '#' },
        ],
      },
    ],
  },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function NavbarMegaMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveMegaMenu(null)
  }

  const toggleMegaMenu = (name:any) => {
    setActiveMegaMenu(activeMegaMenu === name ? null : name)
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
                  {item.megaMenu ? (
                    <button
                      className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      onClick={() => toggleMegaMenu(item.name)}
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
                  {item.megaMenu && (
                    <div className="absolute z-10 left-0 mt-2 w-screen max-w-7xl mx-auto px-2 sm:px-0 lg:max-w-full lg:left-1/2  lg:-translate-x-1/2 hidden group-hover:block">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-3">
                          {item.megaMenu.map((section) => (
                            <div key={section.title}>
                              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                {section.title}
                              </h3>
                              <ul className="mt-4 space-y-4">
                                {section.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      to={subItem.href}
                                      className="text-base text-gray-600 hover:text-gray-900"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
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
              {item.megaMenu ? (
                <button
                  className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left justify-between items-center"
                  onClick={() => toggleMegaMenu(item.name)}
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
              {item.megaMenu && activeMegaMenu === item.name && (
                <div className="pl-4 space-y-2">
                  {item.megaMenu.map((section) => (
                    <div key={section.title} className="pt-2">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        {section.title}
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {section.items.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              to={subItem.href}
                              className="text-base text-gray-600 hover:text-gray-900 block"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
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