import { ShoppingBag, Search, User, Leaf, ChevronRight } from 'lucide-react'

export default function Ecom7()  {
  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
              <Leaf className="text-green-600" size={24} />
              <span className="text-2xl font-semibold text-gray-800">EcoHome</span>
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-green-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Shop</a>
              <a href="#" className="text-gray-600 hover:text-green-600">About</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Blog</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-green-600">
                <Search size={20} />
              </button>
              <button className="text-gray-600 hover:text-green-600">
                <User size={20} />
              </button>
              <button className="text-gray-600 hover:text-green-600">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative py-20 bg-green-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Sustainable Living, Beautiful Home</h1>
              <p className="text-xl mb-8">Discover our collection of eco-friendly home goods that blend style with sustainability.</p>
              <a href="#" className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition duration-300">Shop Now</a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#f0fdf4" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Kitchen', 'Bedroom', 'Bathroom', 'Living Room'].map((category, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                  <img src="https://media.istockphoto.com/id/1079640592/photo/men-elegant-clothing-in-a-store-in-paris-2018.jpg?s=612x612&w=0&k=20&c=l1zyklXuRTewFyIucUuyCxQcW35Oq6p5eWOgmAC506I=" alt={category} className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <a href="#" className="text-white text-xl font-semibold">{category}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://media.istockphoto.com/id/1080132360/photo/woman-mannequins-in-store-window.jpg?s=612x612&w=0&k=20&c=A1rsUNSeDzu-JSXfQLxY8j_JqnwcrvJPISO3hzRhFBM=" alt={`Eco Product ${item}`} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Eco Product {item}</h3>
                    <p className="text-gray-600 mb-4">Sustainable and stylish for your home.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-bold">$29.99</span>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Commitment to Sustainability</h2>
              <p className="text-gray-600 mb-8">We believe in creating products that are not only beautiful but also kind to our planet. Every item in our collection is crafted with eco-friendly materials and sustainable practices.</p>
              <a href="#" className="inline-flex items-center text-green-600 hover:text-green-700 transition duration-300">
                Learn More About Our Process
                <ChevronRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Our Green Community</h2>
              <p className="text-gray-600 mb-8">Sign up for our newsletter to receive eco-living tips, exclusive offers, and updates on new sustainable products.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-600" />
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-r-full hover:bg-green-700 transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-300">All Products</a></li>
                <li><a href="#" className="hover:text-green-300">New Arrivals</a></li>
                <li><a href="#" className="hover:text-green-300">Best Sellers</a></li>
                <li><a href="#" className="hover:text-green-300">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-300">Our Story</a></li>
                <li><a href="#" className="hover:text-green-300">Sustainability</a></li>
                <li><a href="#" className="hover:text-green-300">Blog</a></li>
                <li><a href="#" className="hover:text-green-300">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-300">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-green-300">FAQ</a></li>
                <li><a href="#" className="hover:text-green-300">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-green-300">Facebook</a>
                <a href="#" className="hover:text-green-300">Instagram</a>
                <a href="#" className="hover:text-green-300">Twitter</a>
                <a href="#" className="hover:text-green-300">Pinterest</a>
              </div>
              <p>Follow us for eco-living inspiration and exclusive offers.</p>
            </div>
          </div>
          <div className="mt-8 text-center text-green-200">
            <p>&copy; 2023 EcoHome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}