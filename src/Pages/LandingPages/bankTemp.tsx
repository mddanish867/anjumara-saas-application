
import { useState } from 'react'
import { ChevronDown, CreditCard, Menu, X } from 'lucide-react'

export default function BankTemp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navItems = [
    {
      name: 'Product',
      dropdown: ['Features', 'Pricing', 'Integrations', 'Enterprise'],
    },
    {
      name: 'About',
      dropdown: ['Our Story', 'Team', 'Careers', 'Press'],
    },
    {
      name: 'Community',
      dropdown: ['Blog', 'Events', 'Forum', 'Support'],
    },
    {
      name: 'Industries',
      dropdown: ['Startups', 'E-commerce', 'SaaS', 'Marketplaces'],
    },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <div className="md:container min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center">
        <CreditCard size={30} className='text-indigo-600 ' />
                  <span className="text-xl font-bold p-2">MERCURY</span>
        </div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <button
                className="text-gray-600 hover:text-gray-900 flex items-center font-semibold"
                onClick={() => toggleDropdown(item.name)}
              >
                {item.name}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === item.name && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Log In
          </a>
          <a
            href="#"
            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Open Account
          </a>
        </div>
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                </button>
                {activeDropdown === item.name && (
                  <div className="pl-4">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Log In
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Open Account
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Banking stack for startups</h1>
            <p className="text-xl text-gray-600 mb-6">
              Scale with checking and savings accounts, custom-made tools, and access to our investor network.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
              >
                Open Account
              </a>
              <a
                href="#"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition duration-300"
              >
                Contact Sales
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://img.freepik.com/free-photo/stacks-coins-arranged-bar-graph_35913-2518.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid" alt="Banking UI" width={600} height={400} className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Trusted Companies */}
      <div className="container mx-auto px-4 py-12">
        <p className="text-sm text-gray-500 mb-4">TRUSTED BY DYNAMIC COMPANIES</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {['trust', 'will', 'Mighty', 'SCRATCHPAD', 'stir', 'lunchclub', 'Linear', 'Maven', 'chef'].map(
            (company, index) => (
              <span key={index} className="text-gray-400 text-lg">
                {company}
              </span>
            )
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-8 text-center text-gray-500">
        <p>Mercury is a financial technology company, not a bank. Banking services provided by</p>
      </div>
    </div>
  )
}