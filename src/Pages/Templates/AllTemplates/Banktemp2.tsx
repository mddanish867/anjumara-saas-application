import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Banktemp2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const navItems = [
    {
      name: 'Business Checking',
      items: ['Features', 'Pricing', 'Comparison'],
    },
    {
      name: 'Use Cases',
      items: ['Startups', 'Freelancers', 'E-commerce'],
    },
    {
      name: 'About',
      items: ['Our Story', 'Team', 'Careers'],
    },
    {
      name: 'Help',
      items: ['FAQs', 'Contact Us', 'Support'],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="py-4 flex items-center justify-between">
            <div className="flex items-center">
              <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-2 text-2xl font-bold text-gray-800">novo</span>
            </div>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 rounded-full px-4 py-2 transition-colors duration-300">
                Log In
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                <button
                  className="flex items-center justify-between w-full text-left text-gray-600 hover:text-gray-900"
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === item.name && (
                  <div className="mt-2 ml-4">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className="block py-2 text-gray-600 hover:text-gray-900">
              Log In
            </a>
            <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
        )}
      </header>

      <main className="pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Powerfully simple business banking
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Get a business edge with an award-winning, free business checking account from Novo.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
              <p className="mt-4 text-sm text-gray-500">
                Trusted by over 150,000 small businesses
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://img.freepik.com/premium-vector/flat-illustration-online-banking-money-management_1332470-1587.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid"
                alt="Novo app interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center items-center space-x-8">
            <img src="https://img.freepik.com/premium-vector/flat-illustration-online-banking-money-management_1332470-1587.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid" alt="Visa" className="h-8" />
            <img src="https://img.freepik.com/premium-vector/flat-illustration-online-banking-money-management_1332470-1587.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid" alt="WSJ" className="h-8" />
            <img src="https://img.freepik.com/premium-vector/flat-illustration-online-banking-money-management_1332470-1587.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid" alt="American Banker" className="h-8" />
            <img src="https://img.freepik.com/premium-vector/flat-illustration-online-banking-money-management_1332470-1587.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid" alt="CNBC" className="h-8" />
          </div>
        </div>
      </footer>
    </div>
  )
}