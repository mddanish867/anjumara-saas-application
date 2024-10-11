import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function B12Clone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="text-purple-700 font-bold text-2xl">B12</a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                PRODUCT OVERVIEW
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                INDUSTRIES
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                HOW IT WORKS
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                PRICING
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                CASE STUDIES
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                LOG IN
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-base font-medium text-purple-600"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <a href="#" className="text-purple-700 font-bold text-2xl">B12</a>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      PRODUCT OVERVIEW
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      INDUSTRIES
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      HOW IT WORKS
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      PRICING
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      CASE STUDIES
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
                  >
                    GET STARTED
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a href="#" className="text-purple-600 hover:text-purple-500">
                      LOG IN
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-1 md:py-14 lg:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="mt-6 lg:mt-0 lg:ml-14">
              <img
                className="w-[450px] rounded-lg shadow-md"
                src="https://farm4.staticflickr.com/3752/9684880330_9b4698f7cb_z_d.jpg?height=400&width=500"
                alt="B12 Editor Screenshot"
              />
            </div>
            <div className="mb-12 lg:mb-0 mt-6 lg:mt-0">
              <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl md:text-6xl">
                The B12 Editor
              </h2>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                The B12 Editor gives you user-friendly control over how your business looks and performs online.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <input
                    type="email"
                    placeholder="Email address..."
                    className="block w-96 h-14 px-4 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-700 focus:border-indigo-700 sm:flex-1"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full h-14 px-4 py-3 font-medium text-white bg-indigo-700 rounded-md shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 sm:px-10"
                  >
                    Try it now
                  </button>
                </div>
              </div>
              <p className="text-center mt-4 text-sm text-gray-500">No credit card required</p>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  )
}