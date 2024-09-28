import { ShoppingBag, Search, User, ChevronDown } from 'lucide-react'

export default function Ecom8() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-3xl font-serif text-gold">Luxe Gems</a>
            <nav className="hidden md:flex space-x-8">
              <div className="group relative">
                <a href="#" className="text-gray-300 hover:text-gold flex items-center">
                  Collections <ChevronDown size={16} className="ml-1" />
                </a>
                <div className="absolute left-0 mt-2 w-48 bg-gray-900 shadow-lg py-2 hidden group-hover:block">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Necklaces</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Rings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Earrings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Bracelets</a>
                </div>
              </div>
              <a href="#" className="text-gray-300 hover:text-gold">About</a>
              <a href="#" className="text-gray-300 hover:text-gold">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-gold">
                <Search size={20} />
              </button>
              <button className="text-gray-300 hover:text-gold">
                <User size={20} />
              </button>
              <button className="text-gray-300 hover:text-gold">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-screen">
          <img src="https://img.freepik.com/free-vector/realistic-3d-jewelry-showcase-podium_23-2149057234.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid" alt="Luxury Jewelry" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-serif mb-4">Timeless Elegance</h1>
              <p className="text-xl md:text-2xl mb-8">Discover our exquisite collection of fine jewelry</p>
              <a href="#" className="bg-gold text-black px-8 py-3 rounded-full hover:bg-opacity-80 transition duration-300">Explore Collection</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-gold mb-8 text-center">Featured Pieces</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group">
                  <div className="relative overflow-hidden">
                    <img src="https://img.freepik.com/free-vector/realistic-3d-jewelry-showcase-podium_52683-70307.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid" alt={`Jewelry ${item}`} className="w-full h-[600px] object-cover transition duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <button className="bg-gold text-black px-6 py-2 rounded-full hover:bg-opacity-80 transition duration-300">Quick View</button>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-serif text-gold">Exquisite {item === 1 ? 'Necklace' : item === 2 ? 'Ring' : 'Earrings'}</h3>
                    <p className="text-gray-400">$1,999.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-gold mb-4">The Art of Luxury</h2>
              <p className="text-gray-300 mb-8">Each piece in our collection is meticulously crafted by master artisans, using only the finest materials and gemstones. Experience the pinnacle of luxury and elegance with our timeless designs.</p>
              <a href="#" className="text-gold border border-gold px-8 py-3 rounded-full hover:bg-gold hover:text-black transition duration-300">Learn Our Story</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-gold mb-8 text-center">New Arrivals</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group">
                  <div className="relative overflow-hidden">
                    <img src="https://img.freepik.com/premium-photo/black-jewelry-necklace-dummy-stand-mannequin-display-white-background-3d-rendering_476612-17581.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid" className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <button className="bg-gold text-black px-6 py-2 rounded-full hover:bg-opacity-80 transition duration-300">Quick View</button>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-serif text-gold">New Arrival {item}</h3>
                    <p className="text-gray-400">$999.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-gold mb-4">Join Our Exclusive Circle</h2>
              <p className="text-gray-300 mb-8">Be the first to know about new collections, special events, and exclusive offers.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 bg-black border border-gray-800 rounded-l-full focus:outline-none focus:ring-2 focus:ring-gold" />
                <button type="submit" className="bg-gold text-black px-6 py-2 rounded-r-full hover:bg-opacity-80 transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif text-gold mb-4">Collections</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-gold">Necklaces</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold">Rings</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold">Earrings</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold">Bracelets</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif text-gold mb-4">Customer Care</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-gold">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold">Shipping & Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold">Care Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif text-gold mb-4">About Luxe Gems</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-gold">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold">Craftsmanship</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold">Sustainability</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif text-gold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-gold">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-gold">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-gold">Pinterest</a>
              </div>
              <p className="text-gray-400">Sign up for our newsletter to receive exclusive offers and updates.</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2023 Luxe Gems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}