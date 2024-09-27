import { useState } from 'react'
import { Menu, X, ChevronDown, Search } from 'lucide-react'

export default function Temp9() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-[#0b0a1e] text-white">
      {/* Top banner */}
      <div className="bg-[#e6ff4d] text-[#0b0a1e] py-2 px-4 text-center text-sm">
        This month only! Get 50% off our Starter plan for your first three months.{' '}
        <a href="#" className="underline font-semibold">
          Save now.
        </a>
      </div>

      {/* Navigation */}
      <nav className="bg-[#0b0a1e] p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">ActiveCampaign</div>
          <div className="hidden md:flex space-x-4 items-center">
            <NavItem title="Platform" />
            <NavItem title="Solutions" />
            <NavItem title="Resources" />
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-300">
              Demo
            </a>
            <div className="flex items-center space-x-2">
              <span>EN</span>
              <ChevronDown size={16} />
            </div>
            <Search size={20} />
            <a href="#" className="hover:text-gray-300">
              Log in
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Free trial
            </a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0b0a1e] p-4">
          <NavItem title="Platform" mobile />
          <NavItem title="Solutions" mobile />
          <NavItem title="Resources" mobile />
          <a href="#" className="block py-2 hover:text-gray-300">
            Pricing
          </a>
          <a href="#" className="block py-2 hover:text-gray-300">
            Demo
          </a>
          <a href="#" className="block py-2 hover:text-gray-300">
            Log in
          </a>
          <a
            href="#"
            className="block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 mt-4 text-center"
          >
            Free trial
          </a>
        </div>
      )}

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Effortless email & marketing automation
        </h1>
        <p className="text-xl mb-8">
          Grow your business with AI-powered automations that suggest, personalize, and validate your marketing
          campaigns.
        </p>
        <div className="max-w-md mx-auto">
          <p className="mb-4">Free 14-day trial with email sign-up</p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Form submitted with email: ' + email)
            }}
            className="flex flex-col md:flex-row gap-2"
          >
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 rounded-full text-black"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Get started
            </button>
          </form>
          <p className="text-sm mt-4 text-gray-400">
            Join over 150k customers. No credit card needed. Instant setup.
          </p>
        </div>
      </main>
    </div>
  )
}

function NavItem({ title, mobile = false }: { title: string; mobile?: boolean }) {
  return (
    <div className={`group ${mobile ? 'py-2' : ''}`}>
      <a href="#" className="flex items-center hover:text-gray-300">
        {title} <ChevronDown size={16} className="ml-1" />
      </a>
      {/* Dropdown content would go here */}
    </div>
  )
}