import { useState } from 'react'
import { ChevronDown, Globe, Search, Menu, X } from 'lucide-react'

export default function temp7() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Globe className="w-6 h-6" />
            <div className="relative hidden sm:block">
              <button className="flex items-center space-x-1">
                <span>English</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <Search className="w-6 h-6" />
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Login</a>
          </div>
          <button className="sm:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-blue-600 text-white">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>English</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="block py-1">Products</a>
            <a href="#" className="block py-1">Platform</a>
            <a href="#" className="block py-1">Pricing</a>
            <a href="#" className="block py-1">Request demo</a>
            <a href="#" className="block py-1">Contact</a>
            <a href="#" className="block py-1">Login</a>
          </div>
        </div>
      )}

      {/* Main navbar */}
      <nav className=" bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-2xl font-bold">ActiveCampaign</a>
            <div className="hidden md:flex space-x-4">
              <div className="relative group">
                <button className="flex items-center space-x-1">
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1">
                  <span>Platform</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <a href="#" className="hover:underline">Pricing</a>
              <a href="#" className="hover:underline">Request demo</a>
            </div>
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <input
              type="email"
              placeholder="Email Address"
              className="px-3 py-2 rounded-l-full text-black w-full sm:w-auto"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-r-full hover:bg-gray-900 transition duration-300 -ml-4">
              Try it free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
<section className="py-8 px-4 sm:py-16">
  <div className="mx-auto text-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
      Grow your business<br />with ActiveCampaign
    </h1>
    <p className="text-base sm:text-lg mb-8 text-gray-600 max-w-md mx-auto">
      The email marketing, marketing automation, and CRM tools
      you need to create incredible customer experiences.
    </p>
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
  <div className="relative w-full sm:w-96">
    <input
      type="email"
      placeholder="Email Address"
      className="px-4 py-3 rounded-full border border-gray-300 w-full pr-20" // Added pr-20 for padding-right
    />
    <button className="absolute right-0 top-0 h-full bg-blue-600 text-white px-4 rounded-full hover:bg-blue-700 transition duration-300">
      Get started
    </button>
  </div>
</div>

    <p className="mt-4 text-sm text-gray-500">
      Try it free. No credit card required. Instant setup.
    </p>
  </div>
</section>


      {/* Feature Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automation Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-100 p-6 relative">
                <div className="absolute top-0 left-0 bg-purple-600 text-white px-4 py-1 rounded-br-lg text-sm">
                  NEW
                </div>
                <h3 className="text-2xl font-bold mb-4">AUTOMATION</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <span>Visual journey planner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                    <span>Trigger automations</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2">
                    Start a demo
                  </button>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Automated customer journeys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Integrate your favorite apps</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>AI-driven targeted campaigns</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">+ MORE</a>
              </div>
            </div>

            {/* Marketing Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-100 p-6">
                <h3 className="text-2xl font-bold mb-4">MARKETING</h3>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="flex justify-between mb-2">
                    <span>Sign up for our</span>
                    <span>...</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div className="w-24 h-2 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div className="w-24 h-2 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div className="w-24 h-2 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Email marketing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Forms & landing pages</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Site & event tracking</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">+ MORE</a>
              </div>
            </div>

            {/* Sales Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-100 p-6">
                <h3 className="text-2xl font-bold mb-4">SALES</h3>
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-2 shadow flex justify-between items-center">
                    <span>Email Activity</span>
                    <div className="w-16 h-4 bg-blue-500 rounded"></div>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow flex justify-between items-center">
                    <span>Web Activity</span>
                    <div className="w-24 h-4 bg-green-500 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Sales automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Lead scoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>CRM</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">+ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}