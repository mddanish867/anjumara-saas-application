"use client"

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Menu, } from 'lucide-react'

const NavItem = ({ title, items = [] }: { title: string; items?: string[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center text-gray-600 hover:text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {items.length > 0 && <ChevronDown className="ml-1 h-4 w-4" />}
      </button>
      {items.length > 0 && isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function EmailMarketTemp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="text-teal-700 font-bold">EmailMarket</span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <NavItem title="Software" items={['Item 1', 'Item 2', 'Item 3']} />
            <NavItem title="Pricing" />
            <NavItem title="Resources" items={['Item 1', 'Item 2', 'Item 3']} />
            <NavItem title="Partners" items={['Item 1', 'Item 2', 'Item 3']} />
            <NavItem title="About" items={['Item 1', 'Item 2', 'Item 3']} />
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-orange-600 rounded-sm shadow-sm text-base font-medium text-orange-600  ">
              Contact Sales
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700"
            >
              Get started free
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden mobile-menu">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className='text-teal-700 font-semibold'>Email Market</span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {['Software', 'Pricing', 'Resources', 'Partners', 'About'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">{item}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700"
                >
                  Get started free
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-500">
                    Contact Sales
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Email Marketing Software
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Create, personalize, and optimize your marketing emails without waiting on designers or IT.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
              >
                Get started free
              </a>
            </div>
          </div>
          <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-white text-sm text-gray-500">Boost email open and clickthrough rates</span>
            </div>
          </div>
          <div className="mt-8 relative">
            <img
              src="https://img.freepik.com/free-photo/e-mail-global-communications-connection-social-networking-concept_53876-123795.jpg?size=626&ext=jpg&ga=GA1.2.1752490079.1727444996&semt=ais_hybrid"
              alt="Email editor interface"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
            <img
              src="https://img.freepik.com/free-photo/letter-envelop-message-notification-concept_53876-13786.jpg?size=626&ext=jpg&ga=GA1.2.1752490079.1727444996&semt=ais_hybrid"
              alt="Overlay graphic"
              className="absolute -bottom-10 -right-10 md:max-w-3xl h-40 md:w-96 md:h-96"
            />
          </div>
        </div>
      </div>
    </header>
  )
}