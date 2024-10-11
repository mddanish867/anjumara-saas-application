import { useState } from 'react'
import { Menu, X, ChevronDown, User } from 'lucide-react'

export default function WebStudio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="flex items-center">
                <span className="sr-only">Webstudio</span>
                <div className="h-8 w-8 bg-purple-600 rounded-md flex items-center justify-center text-white font-bold text-xl">W</div>
                <span className="ml-2 text-xl font-bold text-gray-900">Webstudio</span>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Benefits
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                How it works
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="#" className="flex items-center text-base font-medium text-gray-500 hover:text-gray-900">
                <img src="https://flagcdn.com/w20/us.png" alt="EN" className="h-4 w-6 mr-1" />
                EN
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
              >
                <User className="h-5 w-5 mr-2" />
                Giancar...
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
                    <div className="h-8 w-8 bg-purple-600 rounded-md flex items-center justify-center text-white font-bold text-xl">W</div>
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
                      Benefits
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      How it works
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Pricing
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Blog
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="flex items-center">
                  <a href="#" className="flex items-center text-base font-medium text-gray-900">
                    <img src="https://flagcdn.com/w20/us.png" alt="EN" className="h-4 w-6 mr-1" />
                    EN
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
                  >
                    <User className="h-5 w-5 mr-2" />
                    Giancar...
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 sm:py-24">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
            Build websites 3.0<br />without code!
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Whether you need a landing page or a web app for your business or clients, build it and launch it in minutes in the web 3.0: borderless, verifiable, low connectivity compliant, and secure.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
            >
              Start Building
            </a>
          </div>
        </div>
        <div className="w-3/4 -mt-12 md:ml-40 mb-24 border-8 rounded-lg border-blue-950">
          <img
            className="w-full rounded-lg shadow-inner"
            src="/web-studio-hero.png"
            alt="Webstudio interface"
          />
        </div>
      </main>
    </div>
  )
}