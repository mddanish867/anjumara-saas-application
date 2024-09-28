import { useState } from 'react'
import { ShoppingCart, Search, User, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Ecom6() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const products = [
    { name: 'Smart Watch', price: 199.99, image: 'https://media.istockphoto.com/id/1394033413/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=612x612&w=0&k=20&c=MSrTLh8EAj7BnqEN-dLgKnBF5NpGgktUrwsYgz-zk6I=' },
    { name: 'Wireless Earbuds', price: 149.99, image: 'https://media.istockphoto.com/id/1137550851/photo/female-overcoat-in-modern-clothing-store.jpg?s=612x612&w=0&k=20&c=Oa8LYOo-0qCNmOcjryiPuRD8SoAcMrvPLbuHyMzjQrk=' },
    { name: 'Drone', price: 499.99, image: 'https://media.istockphoto.com/id/1080132360/photo/woman-mannequins-in-store-window.jpg?s=612x612&w=0&k=20&c=A1rsUNSeDzu-JSXfQLxY8j_JqnwcrvJPISO3hzRhFBM=' },
    { name: 'VR Headset', price: 299.99, image: 'https://media.istockphoto.com/id/1079640592/photo/men-elegant-clothing-in-a-store-in-paris-2018.jpg?s=612x612&w=0&k=20&c=l1zyklXuRTewFyIucUuyCxQcW35Oq6p5eWOgmAC506I=' },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-neon-blue">TechZone</a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-neon-blue transition duration-300">Home</a>
              <a href="#" className="hover:text-neon-blue transition duration-300">Shop</a>
              <a href="#" className="hover:text-neon-blue transition duration-300">Deals</a>
              <a href="#" className="hover:text-neon-blue transition duration-300">Support</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="hover:text-neon-blue transition duration-300">
                <Search size={20} />
              </button>
              <button className="hover:text-neon-blue transition duration-300">
                <User size={20} />
              </button>
              <button className="hover:text-neon-blue transition duration-300">
                <ShoppingCart size={20} />
              </button>
              <button className="md:hidden hover:text-neon-blue transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="hover:text-neon-blue transition duration-300">Home</a>
            <a href="#" className="hover:text-neon-blue transition duration-300">Shop</a>
            <a href="#" className="hover:text-neon-blue transition duration-300">Deals</a>
            <a href="#" className="hover:text-neon-blue transition duration-300">Support</a>
          </nav>
        </div>
      )}

      <main>
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-neon-blue">The Future of Tech is Here</h1>
              <p className="text-xl mb-8">Discover cutting-edge gadgets that will revolutionize your daily life.</p>
              <a href="#" className="bg-neon-blue text-gray-900 px-8 py-3 rounded-full hover:bg-opacity-80 transition duration-300">Explore Now</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {products.map((product, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                          <p className="text-neon-blue font-bold">${product.price.toFixed(2)}</p>
                          <button className="mt-4 bg-neon-blue text-gray-900 px-4 py-2 rounded-full hover:bg-opacity-80 transition duration-300">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Choose TechZone?</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-neon-blue rounded-full p-2 mr-4">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span>Cutting-edge technology at competitive prices</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-neon-blue rounded-full p-2 mr-4">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span>Expert customer support available 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-neon-blue rounded-full p-2 mr-4">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span>Free shipping on orders over $500</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-neon-blue rounded-full p-2 mr-4">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span>30-day money-back guarantee</span>
                  </li>
                </ul>
              </div>
              <div>
                <img src="https://media.istockphoto.com/id/1079640592/photo/men-elegant-clothing-in-a-store-in-paris-2018.jpg?s=612x612&w=0&k=20&c=l1zyklXuRTewFyIucUuyCxQcW35Oq6p5eWOgmAC506I=" alt="Tech Support" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Tech News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <img src="https://media.istockphoto.com/id/1079640592/photo/men-elegant-clothing-in-a-store-in-paris-2018.jpg?s=612x612&w=0&k=20&c=l1zyklXuRTewFyIucUuyCxQcW35Oq6p5eWOgmAC506I=" alt={`Tech News ${item}`} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Latest Innovation in AI</h3>
                    <p className="text-gray-400 mb-4">Discover how artificial intelligence is reshaping the tech landscape...</p>
                    <a href="#" className="text-neon-blue hover:underline">Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-8">Subscribe to our newsletter for the latest tech news, exclusive deals, and product launches.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-full bg-gray-700 focus:outline-none focus:ring-2 focus:ring-neon-blue" />
                <button type="submit" className="bg-neon-blue text-gray-900 px-6 py-2 rounded-r-full hover:bg-opacity-80 transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-neon-blue transition duration-300">All Products</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Featured</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">New Arrivals</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Deals</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">FAQs</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Shipping</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-neon-blue transition duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-neon-blue transition duration-300">Facebook</a>
                <a href="#" className="hover:text-neon-blue transition duration-300">Twitter</a>
                <a href="#" className="hover:text-neon-blue transition duration-300">Instagram</a>
                <a href="#" className="hover:text-neon-blue transition duration-300">YouTube</a>
              </div>
              <p>Follow us for tech tips, product reviews, and exclusive offers.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {Date.now().toLocaleString()} TechZone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}