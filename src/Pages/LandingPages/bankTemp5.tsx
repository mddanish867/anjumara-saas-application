import { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

export default function BankTempp5() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Personal');

  const tabs = ['Personal', 'Premier', 'Business'];
  const navLinks = ['Products', 'Help and support', 'You and your money', 'Banking with us', 'Coronavirus'];
  const serviceLinks = [
    { name: 'Select the right mortgage', icon: '🏠' },
    { name: 'Get a personal loan', icon: '💰' },
    { name: 'See our savings accounts', icon: '💳' },
    { name: 'Banking with Royal Bank', icon: '🏦' },
    { name: 'Visit Support Centre', icon: '❓' },
    { name: 'Login to Digital Banking', icon: '🖥️' },
  ];

  return (
    <div className="min-h-screen bg-white">


      {/* Second Header (Tab Navigation) */}
      <nav className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`px-3 py-2 text-sm font-medium ${
                        activeTab === tab ? 'bg-white text-blue-800' : ''
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              
            </div>
            <div>
              <button className="text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Log in
              </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6 text-blue-800" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-800 text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {tabs.map((tab) => (
              <a
                key={tab}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-navy-700"
              >
                {tab}
              </a>
            ))}
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-teal-600 hover:bg-teal-600"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Third Header (Navigation Links) */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className='text-blue-800 font-bold'>Bank Logo</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="border-transparent text-gray-500 hover:border-teal-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="relative border-2 border-b-teal-600 border-t-neutral-50 border-r-neutral-50 border-l-neutral-50">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-white focus:outline-none border-none  py-2 px-4 block w-full appearance-none leading-normal"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none border-none">
                  <Search className="h-5 w-5 text-teal-600 border-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gray-50">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://t4.ftcdn.net/jpg/02/57/23/51/240_F_257235170_POtxe8rbJstjiKveWSofcM7SKIOULMeb.jpg"
            alt="Woman using smartphone"
          />
          <div className="absolute mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 md:py-14">
          <h1 className="bg-blue-900 p-5 md:w-2/4 text-2xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Discover our range of<br />current accounts
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-900">
            Find the perfect account for your banking needs.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-teal-600 "
            >
              Explore all Current Accounts
            </a>
          </div>
        </div>
      </div>

      {/* Service Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {serviceLinks.map((link) => (
            <div key={link.name} className="col-span-1 flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white text-2xl">
                {link.icon}
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-medium text-gray-900">{link.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}