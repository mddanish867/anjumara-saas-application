import { useState } from 'react'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'

const menuItems = [
  { name: 'Creation', hasSubmenu: true },
  { name: 'Business', hasSubmenu: true },
  { name: 'Growth', hasSubmenu: true },
  { name: 'Resources', hasSubmenu: true },
  { name: 'Enterprise', hasSubmenu: true },
  { name: 'Pricing', hasSubmenu: false },
  { name: 'Support', hasSubmenu: false },
]

export default function WebBuilder2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <svg className="w-16 h-8" viewBox="0 0 100 50" fill="black">
              <path d="M50,0 L100,25 L50,50 L0,25 Z" />
            </svg>
            <nav className="hidden lg:flex space-x-6">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button 
                    className="text-gray-700 hover:text-black flex items-center"
                    onClick={() => item.hasSubmenu && toggleSubmenu(item.name)}
                  >
                    {item.name}
                    {item.hasSubmenu && <ChevronDown className="ml-1 w-4 h-4" />}
                  </button>
                  {item.hasSubmenu && openSubmenu === item.name && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu Item 1</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu Item 2</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu Item 3</a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black"><Globe className="w-5 h-5" /></button>
            <button className="text-gray-700 hover:text-black">Log In</button>
            <button className="bg-[#3a41ff] text-white px-4 py-2 rounded-full hover:bg-[#2a31ff]">
              Get Started
            </button>
          </div>
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full absolute top-16 left-0 p-4 z-50">
          {menuItems.map((item) => (
            <div key={item.name} className="py-2">
              <button 
                className="text-gray-700 hover:text-black flex items-center justify-between w-full"
                onClick={() => item.hasSubmenu && toggleSubmenu(item.name)}
              >
                {item.name}
                {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
              </button>
              {item.hasSubmenu && openSubmenu === item.name && (
                <div className="mt-2 ml-4">
                  <a href="#" className="block py-2 text-sm text-gray-700">Submenu Item 1</a>
                  <a href="#" className="block py-2 text-sm text-gray-700">Submenu Item 2</a>
                  <a href="#" className="block py-2 text-sm text-gray-700">Submenu Item 3</a>
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 space-y-2">
            <button className="text-gray-700 hover:text-black w-full text-left">Log In</button>
            <button className="bg-[#2b31c7] text-white px-4 py-2 rounded-full hover:bg-[#2a31ff] w-full">
              Get Started
            </button>
          </div>
        </div>
      )}

      <div className="bg-[#2b31c7] text-white py-2 px-4 text-center">
        <p className="text-sm">
          🇺🇦 Let's make an impact together to stand with the people of Ukraine. 
          <a href="#" className="underline ml-2">Show Support →</a>
        </p>
      </div>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 bg-[#4353ff]">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 mt-10">
          Create a website<br />without limits
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
          Build and scale with confidence. From a powerful website builder to
          advanced business solutions—we've got you covered.
        </p>
        <button className="bg-white text-[#2b31c7] px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
          Get Started
        </button>
        <p className="text-white mt-4 mb-44">Try Wix. No credit card required.</p>
      </main>

      <div className="bg-[#e3e0ff] p-8 ">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#f6f4ff] rounded-lg p-4 shadow-lg -mt-40">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold text-[#2b31c7]">ciao</div>
              <div className="flex space-x-4 text-[#2b31c7]">
                <span>ABOUT</span>
                <span>SHOP</span>
                <span>BLOG</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-[#2b31c7] mb-4">Sparkling</h2>
            <div className="flex justify-center">
              <img
                src="https://media.istockphoto.com/id/1186848461/photo/abstract-red-and-gradient-light-background-with-studio-backdrops-blank-display-or-clean-room.jpg?s=612x612&w=0&k=20&c=xhDxSV8kxpT-YceSyTkDxTm3mJxzUINZBgc_5Xs-PQk="
                alt="Sparkling drinks"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}