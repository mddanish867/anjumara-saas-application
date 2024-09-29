import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Hostweb() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHostingOpen, setIsHostingOpen] = useState(false)

  return (
    <div className="md:ml-20 md:mr-20 min-h-screen bg-white">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
<span className='text-violet-900 font-bold'>Host Your App</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  WordPress
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Website Builder
                </a>
                <div className="relative">
                  <button
                    onClick={() => setIsHostingOpen(!isHostingOpen)}
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Hosting
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isHostingOpen && (
                    <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Web Hosting</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cloud Hosting</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">VPS Hosting</a>
                      </div>
                    </div>
                  )}
                </div>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Pro
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Domains
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="inline-flex items-center font-semibold px-4 py-2 border-2 border-gray-950 text-sm  rounded-md shadow-sm text-gray-950  focus:outline-none ">
                Log in
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
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
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">WordPress</a>
              <a href="#" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">Website Builder</a>
              <a href="#" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">Hosting</a>
              <a href="#" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">Pro</a>
              <a href="#" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">Domains</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 space-y-1">
                <button className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                  Log in
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-violet-950 sm:text-4xl">
              AI Website Builder - Go <br/>Live in 4 Clicks
            </h2>
            <p className="mt-4 text-lg text-gray-500">Up to 75% off Website Builder</p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-base text-gray-700">24/7 Customer Support</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-base text-gray-700">Free Domain</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-base text-gray-700">Build on Mobile or Desktop</span>
              </li>
            </ul>
            <div className="mt-8">
              <span className="text-4xl font-extrabold text-violet-950">$2.99</span>
              <span className="text-base font-medium text-gray-500">/mo</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">+ 3 Months Free</p>
            <div className="mt-8 flex space-x-4">
              <div className="bg-gray-100 rounded-lg p-2 text-center">
                <span className="block text-2xl font-bold">01</span>
                <span className="text-xs text-gray-500">Days</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-2 text-center">
                <span className="block text-2xl font-bold">16</span>
                <span className="text-xs text-gray-500">Hours</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-2 text-center">
                <span className="block text-2xl font-bold">00</span>
                <span className="text-xs text-gray-500">Minutes</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-2 text-center">
                <span className="block text-2xl font-bold">10</span>
                <span className="text-xs text-gray-500">Seconds</span>
              </div>
            </div>
            <button className="mt-8 w-64 bg-purple-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Claim Deal
            </button>
            <p className="mt-4 text-sm text-violet-950 flex items-center">
              <svg className="h-5 w-5 text-violet-950 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              30-Day Money-Back Guarantee
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <img className="w-full rounded-lg" src="/host-web-hero.png" alt="AI Website Builder Preview" />
          </div>
        </div>
      </main>
    </div>
  )
}