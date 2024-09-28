import React from 'react'
import { ShoppingBag, Search, User, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Ecom9() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const slides = [
    { image: 'https://media.istockphoto.com/id/1079640592/photo/men-elegant-clothing-in-a-store-in-paris-2018.jpg?s=612x612&w=0&k=20&c=l1zyklXuRTewFyIucUuyCxQcW35Oq6p5eWOgmAC506I=', title: 'Summer Collection', subtitle: 'Discover the hottest trends' },
    { image: 'https://media.istockphoto.com/id/1080132360/photo/woman-mannequins-in-store-window.jpg?s=612x612&w=0&k=20&c=A1rsUNSeDzu-JSXfQLxY8j_JqnwcrvJPISO3hzRhFBM=', subtitle: 'Fresh styles just in' },
    { image: 'https://media.istockphoto.com/id/1137550851/photo/female-overcoat-in-modern-clothing-store.jpg?s=612x612&w=0&k=20&c=Oa8LYOo-0qCNmOcjryiPuRD8SoAcMrvPLbuHyMzjQrk=', subtitle: 'Up to 50% off' },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">Free shipping on orders over $100</p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Sign In</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Create Account</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-3xl font-bold text-pink-600">Fashionista</a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-800 hover:text-pink-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-pink-600">Women</a>
              <a href="#" className="text-gray-800 hover:text-pink-600">Men</a>
              <a href="#" className="text-gray-800 hover:text-pink-600">Accessories</a>
              <a href="#" className="text-gray-800 hover:text-pink-600">Sale</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-800 hover:text-pink-600">
                <Search size={20} />
              </button>
              <button className="text-gray-800 hover:text-pink-600">
                <User size={20} />
              </button>
              <button className="text-gray-800 hover:text-pink-600">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="relative h-[600px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-xl mb-8">{slide.subtitle}</p>
                    <a href="#" className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition duration-300">Shop Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Trending Now</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="group">
                  <div className="relative overflow-hidden">
                    <img src="https://media.istockphoto.com/id/1137550851/photo/female-overcoat-in-modern-clothing-store.jpg?s=612x612&w=0&k=20&c=Oa8LYOo-0qCNmOcjryiPuRD8SoAcMrvPLbuHyMzjQrk=" alt={`Product ${item}`} className="w-full h-96 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <button className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">Quick View</button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">Product {item}</h3>
                    <p className="text-gray-600">$99.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-pink-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our VIP Club</h2>
              <p className="text-gray-600 mb-8">Get exclusive access to new arrivals, special offers, and fashion tips.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-pink-600" />
                <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded-r-full hover:bg-pink-700 transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Women</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Men</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Accessories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping & Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Size Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Pinterest</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2023 Fashionista. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}