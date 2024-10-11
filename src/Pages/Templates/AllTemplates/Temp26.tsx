import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Temp26() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <svg className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-800">Hypotenuse AI</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Products
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Integrations
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Business
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Resources
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Login
              </button>
              <button className="ml-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Try for free →
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
              <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50">Products</a>
              <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">Integrations</a>
              <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">Pricing</a>
              <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">Business</a>
              <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">Resources</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <button className="flex-shrink-0 bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full">
                  Login
                </button>
              </div>
              <div className="mt-3 flex items-center px-4">
                <button className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-full">
                  Try for free →
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Let AI write your content in seconds.</span>
            <span className="block text-indigo-600">Without writer's block.</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Provide a few keywords, and we'll instantly turn them into full-length articles and marketing content, using our world-class AI with a vast knowledge of the world.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-600 md:py-4 md:text-lg md:px-10">
                Try writing for free
              </a>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            7-day trial. No credit card required.
          </p>
        </div>

        <div className="mt-16 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center space-x-4">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-medium text-gray-900">Using Bullet Points for Maximum Impact</span>
              </div>
              <button className="text-indigo-600 hover:text-indigo-900">Share</button>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Have you ever seen a LinkedIn post or article filled with long paragraphs and thought, "No way am I reading that?" It's hard for readers to stay focused when faced with large blocks of text. If you want to make an impact and keep your audience engaged, you need to break up that content into something more manageable. Enter bullet points.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}