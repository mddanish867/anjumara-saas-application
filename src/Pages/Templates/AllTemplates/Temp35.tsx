
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const NavItem = ({ title, items = [], isMobile = false }: { title: string; items?: string[]; isMobile?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={`relative ${isMobile ? 'w-full' : 'group'}`} ref={dropdownRef}>
      <button
        className={`flex items-center justify-between w-full text-gray-300 hover:text-white ${
          isMobile ? 'py-2' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {items.length > 0 && <ChevronDown className="w-4 h-4" />}
      </button>
      {items.length > 0 && (
        <div
          className={`${
            isMobile
              ? 'static mt-2 w-full'
              : 'absolute left-0 mt-2 w-48 rounded-md shadow-lg'
          } bg-gray-800 ring-1 ring-black ring-opacity-5 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
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

export default function Temp35() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="md:container min-h-screen bg-black overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-purple-900 to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500 via-purple-800 to-transparent opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <nav className="bg-black bg-opacity-50 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="text-white text-xl font-bold">Framer</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <NavItem title="Features" items={['Item 1', 'Item 2', 'Item 3']} />
              <NavItem title="Resources" items={['Resource 1', 'Resource 2', 'Resource 3']} />
              <NavItem title="Support" items={['Support 1', 'Support 2', 'Support 3']} />
              <NavItem title="Updates" />
              <NavItem title="Enterprise" />
              <NavItem title="Pricing" />
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white">Contact Sales</button>
              <button className="text-gray-300 hover:text-white">Login</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Start for free
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 p-4 space-y-4">
            <NavItem title="Features" items={['Item 1', 'Item 2', 'Item 3']} isMobile={true} />
            <NavItem title="Resources" items={['Resource 1', 'Resource 2', 'Resource 3']} isMobile={true} />
            <NavItem title="Support" items={['Support 1', 'Support 2', 'Support 3']} isMobile={true} />
            <NavItem title="Updates" isMobile={true} />
            <NavItem title="Enterprise" isMobile={true} />
            <NavItem title="Pricing" isMobile={true} />
            <div className="mt-4 space-y-2">
              <button className="text-gray-300 hover:text-white block w-full text-left py-2">Contact Sales</button>
              <button className="text-gray-300 hover:text-white block w-full text-left py-2">Login</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
                Start for free
              </button>
            </div>
          </div>
        )}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="text-purple-400 font-semibold mb-4">AI Tools</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Design better sites
            <br />
            with AI.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enhance your website using Framer's AI-powered tools:
            <br />
            Generate new pages with advanced localization, brand the tone
            <br />
            of your translations dynamically rewrite text for better copy.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
            Start for free today
          </button>
        </main>
        <div className="max-w-6xl mx-auto mt-20">
          <div className="bg-gray-900 rounded-t-2xl p-4">
            <div className="flex space-x-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex space-x-4 text-sm text-gray-400">
              <button className="px-3 py-1 rounded bg-gray-800">Insert</button>
              <button className="px-3 py-1 rounded bg-gray-800">Layout</button>
              <button className="px-3 py-1 rounded bg-gray-800">Text</button>
              <button className="px-3 py-1 rounded bg-gray-800">CMS</button>
              <button className="px-3 py-1 rounded bg-gray-800">Actions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}