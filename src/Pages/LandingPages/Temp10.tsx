import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Temp10() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen ">
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/placeholder.svg?height=40&width=150" alt="Constant Contact" className="h-10" />
          <div className="hidden text-white md:flex space-x-4">
            <NavItem text="Email Marketing" />
            <NavItem text="Websites & Stores" />
            <NavItem text="Services & Help" />
            <NavItem text="Partners" />
            <NavItem text="Pricing" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-white">+1 781-482-8911</span>
            <button className="text-white font-semibold">Log in</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
              Sign up free
            </button>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 p-4">
          <NavItem text="Email Marketing" />
          <NavItem text="Websites & Stores" />
          <NavItem text="Services & Help" />
          <NavItem text="Partners" />
          <NavItem text="Pricing" />
          <div className="mt-4">
            <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-full font-semibold mb-2">
              Sign up free
            </button>
            <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-full font-semibold">
              Log in
            </button>
          </div>
        </div>
      )}

      <main className="container bg-blue-800 mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Work smarter,
            <br />
            <span className="text-orange-500">not harder.</span>
          </h1>
          <p className="mb-8 text-lg">
            Create branded emails, sell products, build a website, and
            make it easy for people to find you—all from a single platform.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 h-12 rounded-full text-black"
            />
            <div className='flex flex-col'>
            <button className="bg-orange-500 h-12 text-white px-6 py-3 rounded-full font-semibold">
              Sign up free
            </button>
            <p className="mt-4 text-sm">No risk. No credit card required.</p>
            </div>
            
          </div>
         
          <button className="mt-8 flex items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Buy now
          </button>
        </div>
        <div className="md:w-96 md:ml-52">
          <img
            src="/Temp10-hero.jpg?height=400&width=400"
            alt="Person working"
            className="rounded-sm"
          />
        </div>
      </main>
    </div>
  )
}

function NavItem({ text }: { text: string }) {
  return (
    <a href="#" className="block py-2 text-white">
      {text}
    </a>
  )
}