import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import {Link} from 'react-router-dom'

const NavLink = ({ to, children }:{to:string,children:any}) => (
  <Link to={to} className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </Link>
)

const DropdownLink = ({ title, items }:{title:any,items:any}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
      >
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item:any, index:any) => (
              <Link
                key={index}
                to={item.to}
                className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const MobileMenu = ({ isOpen, }:{isOpen:any,setIsOpen:any}) => (
  <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <NavLink to="#features">Features</NavLink>
      <NavLink to="#company">Company</NavLink>
      <NavLink to="#support">Support</NavLink>
      <NavLink to="#pricing">Pricing</NavLink>
      <NavLink to="#business">Business</NavLink>
      <NavLink to="#api">API</NavLink>
    </div>
  </div>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <DropdownLink
                  title="Features"
                  items={[
                    { title: 'Art Generation', to: '#art-generation' },
                    { title: 'Image Editing', to: '#image-editing' },
                  ]}
                />
                <DropdownLink
                  title="Company"
                  items={[
                    { title: 'About Us', to: '#about' },
                    { title: 'Careers', to: '#careers' },
                  ]}
                />
                <NavLink to="#support">Support</NavLink>
                <NavLink to="#pricing">Pricing</NavLink>
                <NavLink to="#business">Business</NavLink>
                <NavLink to="#api">API</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <NavLink to="#login">Login</NavLink>
              <Link
                to="#start-now"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
              >
                Start Now
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  )
}

const Hero = () => (
  <div className="bg-black text-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-center">
        Imagine if AI could create any<br />art or image in seconds?
      </h1>
      <p className="mt-6 text-xl max-w-3xl mx-auto text-center text-gray-300">
        Meet Jasper, the AI art generator who turns your imagination into unique images and photos in seconds. Finally, you'll have the perfect picture to match your message.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-800 text-gray-100">
          <svg className="mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
          </svg>
          High-resolution 2k-px images
        </span>
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-800 text-gray-100">
          <svg className="mr-1.5 h-2 w-2 text-blue-400" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
          </svg>
          Royalty-free commercial use
        </span>
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-800 text-gray-100">
          <svg className="mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
          </svg>
          No watermark
        </span>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200">
          Watch Demo
        </button>
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
          Try free
        </button>
      </div>
    </div>
  </div>
)

export default function Temp28() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
    </div>
  )
}