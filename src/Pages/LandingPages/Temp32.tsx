import { useState } from 'react'
import { Menu, ChevronDown, User } from 'lucide-react'

const NavLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
  <a href={href} className={`text-white hover:text-gray-200 ${className}`}>
    {children}
  </a>
)

const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    {children}
  </a>
)

export default function Temp32() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mobileDropdowns, setMobileDropdowns] = useState({
    onlineStores: false,
    allProducts: false
  })

  const toggleMobileDropdown = (dropdown: 'onlineStores' | 'allProducts') => {
    setMobileDropdowns(prev => ({ ...prev, [dropdown]: !prev[dropdown] }))
  }

  return (
    <div className="min-h-screen bg-[#f55767] text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">zyro</div>
        <div className="hidden md:flex space-x-4 items-center">
          <NavLink href="#">Websites</NavLink>
          <div className="relative group">
            <NavLink href="#">
              Online stores <ChevronDown className="inline-block ml-1 w-4 h-4" />
            </NavLink>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
              <DropdownLink href="#">eCommerce</DropdownLink>
              <DropdownLink href="#">Dropshipping</DropdownLink>
            </div>
          </div>
          <NavLink href="#">Templates</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">Features</NavLink>
          <div className="relative group">
            <NavLink href="#">
              All products <ChevronDown className="inline-block ml-1 w-4 h-4" />
            </NavLink>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
              <DropdownLink href="#">Product 1</DropdownLink>
              <DropdownLink href="#">Product 2</DropdownLink>
            </div>
          </div>
          <button className="bg-white text-[#f55767] px-4 py-2 rounded-full font-medium">
            My websites
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 p-4">
          <NavLink href="#" className="block py-2 text-gray-800">Websites</NavLink>
          <div className="py-2">
            <button 
              onClick={() => toggleMobileDropdown('onlineStores')}
              className="flex items-center justify-between w-full py-2 text-gray-800"
            >
              Online stores
              <ChevronDown className={`w-4 h-4 transform ${mobileDropdowns.onlineStores ? 'rotate-180' : ''}`} />
            </button>
            {mobileDropdowns.onlineStores && (
              <div className="pl-4">
                <DropdownLink href="#">eCommerce</DropdownLink>
                <DropdownLink href="#">Dropshipping</DropdownLink>
              </div>
            )}
          </div>
          <NavLink href="#" className="block py-2 text-gray-800">Templates</NavLink>
          <NavLink href="#" className="block py-2 text-gray-800">Pricing</NavLink>
          <NavLink href="#" className="block py-2 text-gray-800">Features</NavLink>
          <div className="py-2">
            <button 
              onClick={() => toggleMobileDropdown('allProducts')}
              className="flex items-center justify-between w-full py-2 text-gray-800"
            >
              All products
              <ChevronDown className={`w-4 h-4 transform ${mobileDropdowns.allProducts ? 'rotate-180' : ''}`} />
            </button>
            {mobileDropdowns.allProducts && (
              <div className="pl-4">
                <DropdownLink href="#">Product 1</DropdownLink>
                <DropdownLink href="#">Product 2</DropdownLink>
              </div>
            )}
          </div>
          <button className="bg-[#f55767] text-white px-4 py-2 rounded-full font-medium mt-4 w-full">
            My websites
          </button>
        </div>
      )}

      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Make ideas happen. It's easy with Zyro website builder.
        </h1>
        <p className="text-xl mb-8">
          Build a website, online store, or portfolio - 70% of users publish websites in under 1 hour with Zyro, the simple to use website builder
        </p>
        <button className="bg-[#4353ff] text-white px-8 py-3 rounded-full font-medium text-lg">
          TRY FOR FREE
        </button>
        <p className="mt-4 text-sm">No credit card required</p>
      </main>

      <div className="container mx-auto px-4 py-8">
        <img
          src="/Temp26.png"
          alt="Zyro website builder interface"
          className="w-full rounded-lg shadow-2xl"
        />
      </div>
    </div>
  )
}