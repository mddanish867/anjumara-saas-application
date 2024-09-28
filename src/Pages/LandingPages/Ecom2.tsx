import { useState, useEffect } from 'react'
import { ShoppingBag, Search, User, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Ecom2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const products = [
    { name: 'Silk Evening Gown', price: 2999.99, image: 'https://media.istockphoto.com/id/1394033413/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=612x612&w=0&k=20&c=MSrTLh8EAj7BnqEN-dLgKnBF5NpGgktUrwsYgz-zk6I=' },
    { name: 'Tailored Suit', price: 3499.99, image: 'https://media.istockphoto.com/id/1137550851/photo/female-overcoat-in-modern-clothing-store.jpg?s=612x612&w=0&k=20&c=Oa8LYOo-0qCNmOcjryiPuRD8SoAcMrvPLbuHyMzjQrk=' },
    { name: 'Designer Handbag', price: 1999.99, image: 'https://media.istockphoto.com/id/1080132360/photo/woman-mannequins-in-store-window.jpg?s=612x612&w=0&k=20&c=A1rsUNSeDzu-JSXfQLxY8j_JqnwcrvJPISO3hzRhFBM=' },
    { name: 'Luxury Watch', price: 5999.99, image: 'https://media.istockphoto.com/id/1079640592/photo/men-elegant-clothing-in-a-store-in-paris-2018.jpg?s=612x612&w=0&k=20&c=l1zyklXuRTewFyIucUuyCxQcW35Oq6p5eWOgmAC506I=' },
  ]

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev + 1) % products.length)
    }
  }

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500)
    return () => clearTimeout(timer)
  }, [currentSlide])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="text-2xl font-light tracking-wide">LUXE BOUTIQUE</a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-gold transition duration-300">Home</a>
              <a href="#" className="hover:text-gold transition duration-300">Collections</a>
              <a href="#" className="hover:text-gold transition duration-300">About</a>
              <a href="#" className="hover:text-gold transition duration-300">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="hover:text-gold transition duration-300">
                <Search size={20} />
              </button>
              <a href="#" className="hover:text-gold transition duration-300">
                <User size={20} />
              </a>
              <a href="#" className="hover:text-gold transition duration-300">
                <ShoppingBag size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex items-center justify-center">
          <nav className="text-center">
            <a href="#" className="block text-2xl mb-6 hover:text-gold transition duration-300">Home</a>
            <a href="#" className="block text-2xl mb-6 hover:text-gold transition duration-300">Collections</a>
            <a href="#" className="block text-2xl mb-6 hover:text-gold transition duration-300">About</a>
            <a href="#" className="block text-2xl mb-6 hover:text-gold transition duration-300">Contact</a>
          </nav>
        </div>
      )}

      <main className="pt-16">
        <section className="relative h-screen">
          {products.map((product, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ zIndex: index === currentSlide ? 1 : 0 }}
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-5xl font-light mb-4">{product.name}</h2>
                  <p className="text-2xl mb-8">${product.price.toFixed(2)}</p>
                  <a href="#" className="bg-white text-gray-900 px-8 py-3 hover:bg-gold hover:text-white transition duration-300">Shop Now</a>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-gold hover:text-white transition duration-300"
            style={{ zIndex: 2 }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-gold hover:text-white transition duration-300"
            style={{ zIndex: 2 }}
          >
            <ChevronRight size={24} />
          </button>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Evening Wear', 'Business Attire', 'Accessories'].map((collection, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <img src="https://media.istockphoto.com/id/1079640592/photo/men-elegant-clothing-in-a-store-in-paris-2018.jpg?s=612x612&w=0&k=20&c=l1zyklXuRTewFyIucUuyCxQcW35Oq6p5eWOgmAC506I=" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <a href="#" className="text-white text-2xl font-light hover:text-gold transition duration-300">{collection}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center">Our Philosophy</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl mb-8">At Luxe Boutique, we believe in the power of timeless elegance. Our curated collections blend classic sophistication with modern sensibilities, creating pieces that transcend trends and stand the test of time.</p>
              <a href="#" className="text-gold hover:text-gray-900 transition duration-300">Learn More About Our Craft</a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center">Latest Arrivals</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden mb-4">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <a href="#" className="bg-white text-gray-900 px-6 py-2 hover:bg-gold hover:text-white transition duration-300">Quick View</a>
                    </div>
                  </div>
                  <h3 className="text-lg font-light mb-2">{product.name}</h3>
                  <p className="text-gold">${product.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-light mb-8">Join Our Exclusive Circle</h2>
            <p className="text-xl mb-8">Be the first to know about new collections, exclusive events, and special offers.</p>
            <form className="max-w-md mx-auto flex">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 bg-transparent border border-white focus:outline-none focus:border-gold" />
              <button type="submit" className="bg-gold text-gray-900 px-6 py-2 hover:bg-white transition duration-300">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-light mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gold transition duration-300">New Arrivals</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Best Sellers</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Collections</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gold transition duration-300">Our Story</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Craftsmanship</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Sustainability</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Customer Care</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gold transition duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Size Guide</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gold transition duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Facebook</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Twitter</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p>&copy; 2023 Luxe Boutique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}