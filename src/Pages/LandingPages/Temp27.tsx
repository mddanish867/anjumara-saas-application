import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import {Link} from 'react-router-dom'

const NavLink = ({ to, children }:{to:string,children:any}) => (
  <Link to={to} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </Link>
)

const DropdownLink = ({ title, items }:{title:any,items:any}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
      >
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item:any, index:any) => (
              <Link
                key={index}
                to={item.to}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
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

const MobileMenu = ({ isOpen,}:{isOpen:any,setIsOpen:any}) => (
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
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/logo.svg" alt="Jasper" />
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
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
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
  <div className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        Imagine if AI could create any art or image in seconds?
      </h1>
      <p className="mt-6 text-xl max-w-3xl">
        Meet Jasper, the AI art generator who turns your imagination into unique images and photos in seconds. Finally, you'll have the perfect picture to match your message.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-800 text-gray-100">
          High-resolution 2k-px images
        </span>
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-800 text-gray-100">
          Royalty-free commercial use
        </span>
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-800 text-gray-100">
          No watermark
        </span>
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-800 text-gray-100">
          Unlimited generations
        </span>
      </div>
      <div className="mt-8 flex gap-4">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700">
          Watch Demo
        </button>
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Try free
        </button>
      </div>
    </div>
  </div>
)

const Features = () => (
  <div className="bg-gray-800 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        Powerful AI Art Generation
      </h2>
      <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Text-to-Image"
          description="Turn your words into stunning visuals with our advanced AI."
        />
        <FeatureCard
          title="Style Transfer"
          description="Apply artistic styles to your photos for unique creations."
        />
        <FeatureCard
          title="Image Editing"
          description="Enhance and modify images with AI-powered tools."
        />
      </div>
    </div>
  </div>
)

const FeatureCard = ({ title, description }:{title:any,description:any}) => (
  <div className="bg-gray-900 rounded-lg px-6 py-8">
    <h3 className="text-lg font-medium text-white">{title}</h3>
    <p className="mt-2 text-base text-gray-400">{description}</p>
  </div>
)

const SignUpForm = () => (
  <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Sign Up</h2>
      <form className="mt-8 space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-400">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
)

export default function Temp27() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Features />
      <SignUpForm />
    </div>
  )
}