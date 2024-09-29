import { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

export default function Banktemp6() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">Personal</a>
                  <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">Premier</a>
                  <a href="#" className="px-3 py-2 rounded-md text-sm font-medium">Business</a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Log in
              </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-navy-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-blue focus:ring-white"
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
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-navy-blue-dark">products</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">help and Support</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">You and your money</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Banking with us</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Coronavirus</a>


          </div>
          <div className="pt-4 pb-3 border-t border-navy-blue-dark">
            <div className="flex items-center px-5">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Log in
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Secondary Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="https://img.freepik.com/free-photo/tree-grows-coin-glass-jar-with-copy-space_35913-2508.jpg?size=626&ext=jpg&ga=GA1.1.1752490079.1727444996&semt=ais_hybrid" alt="Bank Logo" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-orange-600 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Products
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Help and support
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  You and your money
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Banking with us
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Coronavirus
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="relative">
                <input type="text" placeholder="Search" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Discover our range of</span>{' '}
                    <span className="block text-orange-600 xl:inline">current accounts</span>
                  </h1>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10">
                        Explore all Current Accounts
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://img.freepik.com/free-photo/tree-grows-coin-glass-jar-with-copy-space_35913-2508.jpg?size=626&ext=jpg&ga=GA1.1.1752490079.1727444996&semt=ais_hybrid" alt="Woman using smartphone" />
          </div>
        </div>

        {/* Service Icons */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://t4.ftcdn.net/jpg/02/57/23/51/240_F_257235170_POtxe8rbJstjiKveWSofcM7SKIOULMeb.jpg" alt="Select the right mortgage" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://t4.ftcdn.net/jpg/02/57/23/51/240_F_257235170_POtxe8rbJstjiKveWSofcM7SKIOULMeb.jpg" alt="Get a personal loan" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://t4.ftcdn.net/jpg/02/57/23/51/240_F_257235170_POtxe8rbJstjiKveWSofcM7SKIOULMeb.jpg" alt="See our savings accounts" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img className="h-12" src="https://t4.ftcdn.net/jpg/02/57/23/51/240_F_257235170_POtxe8rbJstjiKveWSofcM7SKIOULMeb.jpg" alt="Banking with Royal Bank" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img className="h-12" src="https://t4.ftcdn.net/jpg/02/57/23/51/240_F_257235170_POtxe8rbJstjiKveWSofcM7SKIOULMeb.jpg" alt="Visit Support Centre" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img className="h-12" src="https://t4.ftcdn.net/jpg/02/57/23/51/240_F_257235170_POtxe8rbJstjiKveWSofcM7SKIOULMeb.jpg" alt="Login to Digital Banking" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}