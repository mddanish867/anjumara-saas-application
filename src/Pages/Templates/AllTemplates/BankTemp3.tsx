import { useState } from 'react'
import { Menu, X, Search, MapPin, User, MoveRight } from 'lucide-react'

export default function BankTemp3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="https://img.freepik.com/free-vector/people-taking-out-money-from-bank-concept-illustration_114360-13931.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid" alt="Customers Bank" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-b-2 border-transparent hover:border-[#1dacef] text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Small business
                </a>
                <a href="#" className="border-b-2 border-transparent hover:border-[#1dacef] text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Personal
                </a>
                <a href="#" className="border-b-2 border-transparent hover:border-[#1dacef] text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Commercial
                </a>
                <a href="#" className="border-b-2 border-transparent hover:border-[#1dacef] text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Digital you
                </a>
                <a href="#" className="border-b-2 border-transparent hover:border-[#1dacef] text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Investors
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1dacef]">
                <span className="sr-only">View notifications</span>
                <Search className="h-6 w-6" aria-hidden="true" />
              </button>
              <button type="button" className="ml-3 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1dacef]">
                <span className="sr-only">View locations</span>
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </button>
              <button type="button" className="ml-3 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1dacef]">
                <span className="sr-only">Sign in</span>
                <User className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1dacef]"
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

        {/* Mobile menu, show/hide based on menu state. */}
        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Small business</a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Personal</a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Commercial</a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Digital you</a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Investors</a>
            </div>
          </div>
        )}
      </nav>

      {/* Secondary Navigation */}
      <nav className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12">
            <div className="flex">
              <a href="#" className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Checking
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium ml-4">
                Cash management
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium ml-4">
                Loans
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium ml-4">
                Industry solutions
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium ml-4">
                Instant Payments
              </a>
            </div>
            <div className="flex items-center">
              <button type="button" className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Blue Banner */}
        <div className="bg-[#1dacef] text-white py-2 px-4 mt-4 rounded">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <p className="text-sm font-medium">Q2'22 earnings webcast</p>
            <a href="#" className="text-sm font-medium underline flex items-center">
              View recording
              <MoveRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Grow your<br />business.
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                You're ready for what's next. We've got the edge you need to take on tomorrow.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1dacef] hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <img className="w-full" src="https://img.freepik.com/free-vector/people-taking-out-money-from-bank-concept-illustration_114360-13931.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid" alt="Business growth" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}