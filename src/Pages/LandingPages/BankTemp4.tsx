import { useState } from 'react'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import {Link} from 'react-router-dom'

export default function Banktemp4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white">
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-10">
              <div className="flex space-x-4">
                <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Union Building & Loan</Link>
                <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Security</Link>
                <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Rates</Link>
                <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Branches</Link>
                <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Locate ATM</Link>
              </div>
              <div className="flex items-center">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1 rounded-tr-full">
                <Link to="/" className="flex items-center">
                  <span className="sr-only">Brentwood Bank</span>
                  <div className="h-8 w-8 bg-teal-600 flex items-center justify-center text-white font-bold text-xl">B</div>
                  <span className="ml-2 text-gray-900 font-semibold text-lg">BrentwoodBank</span>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <nav className="hidden md:flex space-x-10">
                <div className="relative">
                  <button className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none ">
                    <span>Personal</span>
                    <ChevronDown className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  </button>
                </div>
                <div className="relative">
                  <button className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none ">
                    <span>Business</span>
                    <ChevronDown className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  </button>
                </div>
                <div className="relative">
                  <button className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none ">
                    <span>Wealth</span>
                    <ChevronDown className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  </button>
                </div>
                <div className="relative">
                  <button className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none ">
                    <span>About</span>
                    <ChevronDown className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  </button>
                </div>
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link to="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-br-full shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700">
                  LOGIN TO ONLINE BANKING
                </Link>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-8 w-8 bg-teal-600 flex items-center justify-center text-white font-bold text-xl">B</div>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Personal</span>
                    </Link>
                    <Link to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Business</span>
                    </Link>
                    <Link to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Wealth</span>
                    </Link>
                    <Link to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">About</span>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link to="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Union Building & Loan
                  </Link>
                  <Link to="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Security
                  </Link>
                  <Link to="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Rates
                  </Link>
                  <Link to="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Branches
                  </Link>
                  <Link to="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Locate ATM
                  </Link>
                </div>
                <div>
                  <Link
                    to="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700"
                  >
                    LOGIN TO ONLINE BANKING
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://img.freepik.com/premium-vector/flat-illustration-online-banking-money-management_1332470-1587.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid"
                  alt="People in kitchen"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 mix-blend-multiply"></div>
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Expertise You Need.</span>
                  <span className="block text-teal-200">Service You Deserve</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-teal-100 sm:max-w-3xl">
                  Nearly 100 years in business. 5 convenient locations and dozens of financial experts here to support your unique goals.
                  "Welcome to community banking"
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                    <Link
                      to="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-700 bg-white hover:bg-teal-50 sm:px-8"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link to="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">&copy; 2023 Brentwood Bank. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}