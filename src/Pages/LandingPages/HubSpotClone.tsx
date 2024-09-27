import React, { useState } from "react";
import { ChevronDown, Search, Menu } from "lucide-react";

export default function HubSpotClone() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  const toggleDropdown = (
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-4">
      <header className="bg-white shadow-md md:container">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* First Header */}
        <div className="container mx-auto py-2 px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => toggleDropdown(setIsLanguageOpen)}
                  className="flex items-center"
                  aria-haspopup="true"
                  aria-expanded={isLanguageOpen}
                >
                  <span className="mr-1">🌐</span>
                  <span className="mr-1">English</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isLanguageOpen && (
                  <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md py-1 z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Español</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Français</a>
                  </div>
                )}
              </div>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">High Contrast</div>
              </label>
              <button className="text-gray-700">Contact Sales</button>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-teal-500" />
              <a href="#" className="text-gray-700">Log in</a>
              <a href="#" className="text-gray-700">Customer Support</a>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown(setIsAboutOpen)}
                  className="flex items-center"
                  aria-haspopup="true"
                  aria-expanded={isAboutOpen}
                >
                  <span className="mr-1">About</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isAboutOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-1 z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Company</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Careers</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Second Header */}
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="h-8 font-semibold text-teal-500">HubSpot</h1>
              <nav className="flex space-x-6">
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(setIsSoftwareOpen)}
                    className="text-gray-700 flex items-center"
                    aria-haspopup="true"
                    aria-expanded={isSoftwareOpen}
                  >
                    Software <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  {isSoftwareOpen && (
                    <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Marketing Hub</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sales Hub</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service Hub</a>
                    </div>
                  )}
                </div>
                <a href="#" className="text-gray-700">Pricing</a>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(setIsResourcesOpen)}
                    className="text-gray-700 flex items-center"
                    aria-haspopup="true"
                    aria-expanded={isResourcesOpen}
                  >
                    Resources <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  {isResourcesOpen && (
                    <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Academy</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Community</a>
                    </div>
                  )}
                </div>
              </nav>
            </div>
            <div className="flex space-x-4">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-sm">Get started free</button>
              <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-sm">Get a demo</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex justify-between items-center py-4 px-4">
          <h1 className="h-8 font-semibold text-teal-500">HubSpot</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="px-4 py-2 space-y-4">
            <div className="flex items-center justify-between">
              <div className="relative">
                <button
                  onClick={() => toggleDropdown(setIsLanguageOpen)}
                  className="flex items-center"
                  aria-haspopup="true"
                  aria-expanded={isLanguageOpen}
                >
                  <span className="mr-1">🌐</span>
                  <span className="mr-1">English</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isLanguageOpen && (
                  <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md py-1 z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Español</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Français</a>
                  </div>
                )}
              </div>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">High Contrast</div>
              </label>
            </div>
            <button className="text-gray-700 w-full text-left">Contact Sales</button>
            <a href="#" className="block text-gray-700">Log in</a>
            <a href="#" className="block text-gray-700">Customer Support</a>
            <div className="relative">
              <button
                onClick={() => toggleDropdown(setIsAboutOpen)}
                className="flex items-center text-gray-700"
                aria-haspopup="true"
                aria-expanded={isAboutOpen}
              >
                <span className="mr-1">About</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isAboutOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <a href="#" className="block text-sm text-gray-700">Company</a>
                  <a href="#" className="block text-sm text-gray-700">Careers</a>
                  <a href="#" className="block text-sm text-gray-700">Contact Us</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown(setIsSoftwareOpen)}
                className="flex items-center text-gray-700"
                aria-haspopup="true"
                aria-expanded={isSoftwareOpen}
              >
                <span className="mr-1">Software</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isSoftwareOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <a href="#" className="block text-sm text-gray-700">Marketing Hub</a>
                  <a href="#" className="block text-sm text-gray-700">Sales Hub</a>
                  <a href="#" className="block text-sm text-gray-700">Service Hub</a>
                </div>
              )}
            </div>
            <a href="#" className="block text-gray-700">Pricing</a>
            <div className="relative">
              <button
                onClick={() => toggleDropdown(setIsResourcesOpen)}
                className="flex items-center text-gray-700"
                aria-haspopup="true"
                aria-expanded={isResourcesOpen}
              >
                <span className="mr-1">Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isResourcesOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <a href="#" className="block text-sm text-gray-700">Blog</a>
                  <a href="#" className="block text-sm text-gray-700">Academy</a>
                  <a href="#" className="block text-sm text-gray-700">Community</a>
                </div>
              )}
            </div>
            <div className="space-y-2 mt-4">
              <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-sm">Get started free</button>
              <button className="w-full border border-orange-500 text-orange-500 px-4 py-2 rounded-sm">Get a demo</button>
            </div>
          </div>
        )}
      </div>
    </header>

      {/* Hero Section */}
      <main className="container mx-auto mt-8 px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-96 pr-0 md:pr-8 mb-8 md:mb-0">
            <nav className="text-sm mb-4 md:pl-14">
              <a href="#" className="text-teal-600">
                Marketing Hub
              </a>
              <span className="mx-2 text-gray-400">&gt;</span>
              <span className="text-gray-700">Email Marketing Tools</span>
            </nav>
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 rounded-l-full transform scale-125 translate-x-1/4 translate-y-1/4 mr-18 md:mr-0 md:w-full w-40"></div>
              <img
                src="/emailmarket-hero.avif"
                alt="Email Editor"
                className="relative z-10 rounded-lg shadow-lg md:w-full w-32
               h-auto md:ml-24 md:mt-10 mr-18 md:mr-0"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-56 mt-14">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Email Marketing Tools
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Create, personalize, and optimize your marketing emails without
              waiting on designers or IT.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-sm text-lg w-full sm:w-auto">
                Get started free
              </button>
              <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-sm text-lg w-full sm:w-auto">
                Get a demo
              </button>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✓</span>
                Boost your email open and clickthrough rates
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✓</span>
                Create emails that are automatically tailored to each recipient
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">✓</span>
                Do it all independently — without help from designers or IT
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
