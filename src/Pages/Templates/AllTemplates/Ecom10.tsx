import React from 'react'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'

export default function Ecom10() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-gray-800">MinimalShop</a>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Shop</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <ShoppingCart size={20} />
            </button>
            <button className="md:hidden text-gray-600 hover:text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Shop</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
        </div>
      )}

      <main>
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Discover Minimalist Elegance</h1>
              <p className="text-xl text-gray-600 mb-8">Elevate your style with our curated collection of minimalist essentials.</p>
              <a href="#" className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition duration-300">Shop Now</a>
            </div>
            <div className="md:w-1/2">
              <img src="https://media.istockphoto.com/id/1394033413/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=612x612&w=0&k=20&c=MSrTLh8EAj7BnqEN-dLgKnBF5NpGgktUrwsYgz-zk6I=" alt="Hero Image" className="rounded-lg shadow-md" />
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                  <img src="https://media.istockphoto.com/id/1080132360/photo/woman-mannequins-in-store-window.jpg?s=612x612&w=0&k=20&c=A1rsUNSeDzu-JSXfQLxY8j_JqnwcrvJPISO3hzRhFBM=" alt={`Product ${item}`} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Product {item}</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800">$99.99</span>
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-8">Stay updated with our latest products and exclusive offers.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-800" />
                <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded-r-md hover:bg-gray-700 transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">MinimalShop is your destination for curated minimalist essentials that elevate your everyday life.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2023 MinimalShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}