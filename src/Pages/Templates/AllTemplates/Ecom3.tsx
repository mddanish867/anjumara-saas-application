import { useState } from 'react'
import { ShoppingBag, Search, User, Heart, } from 'lucide-react'

export default function Ecom3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-white shadow-md relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="md:hidden text-amber-800" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <a href="/" className="text-2xl font-serif font-bold text-amber-800">Artisan Haven</a>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-amber-800 hover:text-amber-600 transition duration-300">Home</a>
              <a href="#" className="text-amber-800 hover:text-amber-600 transition duration-300">Shop</a>
              <a href="#" className="text-amber-800 hover:text-amber-600 transition duration-300">Artisans</a>
              <a href="#" className="text-amber-800 hover:text-amber-600 transition duration-300">About</a>
              <a href="#" className="text-amber-800 hover:text-amber-600 transition duration-300">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-amber-800 hover:text-amber-600 transition duration-300" onClick={toggleSearch}>
                <Search size={20} />
              </button>
              <a href="#" className="text-amber-800 hover:text-amber-600 transition duration-300">
                <User size={20} />
              </a>
              <a href="#" className="text-amber-800 hover:text-amber-600 transition duration-300">
                <ShoppingBag size={20} />
              </a>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#" className="text-amber-800 hover:text-amber-600 transition duration-300">Home</a>
              <a href="#" className="text-amber-800 hover:text-amber-600 transition duration-300">Shop</a>
              <a href="#" className="text-amber-800 hover:text-amber-600 transition duration-300">Artisans</a>
              <a href="#" className="text-amber-800 hover:text-amber-600 transition duration-300">About</a>
              <a href="#" className="text-amber-800 hover:text-amber-600 transition duration-300">Contact</a>
            </nav>
          </div>
        )}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4">
            <div className="container mx-auto flex items-center">
              <input type="text" placeholder="Search for artisanal products..." className="flex-grow px-4 py-2 rounded-l-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <button className="bg-amber-600 text-white px-6 py-2 rounded-r-full hover:bg-amber-700 transition duration-300">Search</button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="py-16 bg-amber-100">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-800 mb-4 text-center">Discover Handcrafted Treasures</h1>
            <p className="text-xl text-amber-700 mb-8 text-center">Support local artisans and bring unique pieces into your home</p>
            <div className="flex justify-center">
              <a href="#" className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition duration-300 mr-4">Shop Now</a>
              <a href="#" className="bg-white text-amber-600 px-8 py-3 rounded-full hover:bg-amber-100 transition duration-300 border border-amber-600">Meet Our Artisans</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-amber-800 mb-8 text-center">Featured Creations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Hand-Woven Basket', price: 59.99, image: 'https://media.istockphoto.com/id/1079640592/photo/men-elegant-clothing-in-a-store-in-paris-2018.jpg?s=612x612&w=0&k=20&c=l1zyklXuRTewFyIucUuyCxQcW35Oq6p5eWOgmAC506I=', height: 'h-96' },
                { name: 'Ceramic Vase', price: 79.99, image: 'https://media.istockphoto.com/id/1080132360/photo/woman-mannequins-in-store-window.jpg?s=612x612&w=0&k=20&c=A1rsUNSeDzu-JSXfQLxY8j_JqnwcrvJPISO3hzRhFBM=', height: 'h-72' },
                { name: 'Wooden Cutting Board', price: 44.99, image: 'https://media.istockphoto.com/id/1137550851/photo/female-overcoat-in-modern-clothing-store.jpg?s=612x612&w=0&k=20&c=Oa8LYOo-0qCNmOcjryiPuRD8SoAcMrvPLbuHyMzjQrk=', height: 'h-80' },
                { name: 'Handmade Soap Set', price: 24.99, image: 'https://media.istockphoto.com/id/1394033413/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=612x612&w=0&k=20&c=MSrTLh8EAj7BnqEN-dLgKnBF5NpGgktUrwsYgz-zk6I=', height: 'h-64' },
                { name: 'Macramé Wall Hanging', price: 89.99, image: 'https://media.istockphoto.com/id/1079640592/photo/men-elegant-clothing-in-a-store-in-paris-2018.jpg?s=612x612&w=0&k=20&c=l1zyklXuRTewFyIucUuyCxQcW35Oq6p5eWOgmAC506I=', height: 'h-108' },
                { name: 'Leather Journal', price: 34.99, image: 'https://media.istockphoto.com/id/1137550851/photo/female-overcoat-in-modern-clothing-store.jpg?s=612x612&w=0&k=20&c=Oa8LYOo-0qCNmOcjryiPuRD8SoAcMrvPLbuHyMzjQrk=', height: 'h-72' },
              ].map((product, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden ${product.height}`}>
                  <img src={product.image} alt={product.name} className="w-full h-2/3 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">{product.name}</h3>
                    <p className="text-amber-600 font-bold mb-2">${product.price.toFixed(2)}</p>
                    <div className="flex justify-between items-center">
                      <button className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition duration-300">Add to Cart</button>
                      <button className="text-amber-600 hover:text-amber-800 transition duration-300">
                        <Heart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-100">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img src="https://media.istockphoto.com/id/1137550851/photo/female-overcoat-in-modern-clothing-store.jpg?s=612x612&w=0&k=20&c=Oa8LYOo-0qCNmOcjryiPuRD8SoAcMrvPLbuHyMzjQrk=" alt="Artisan at Work" className="w-full h-64 md:h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8">
                  <h2 className="text-3xl font-serif font-bold text-amber-800 mb-4">Meet Our Artisans</h2>
                  <p className="text-amber-700 mb-6">Discover the stories behind our handcrafted products and the skilled artisans who create them. Each piece tells a unique tale of tradition, creativity, and passion.</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <img src="/placeholder.svg?height=100&width=100&text=Artisan+1" alt="Artisan 1" className="w-20 h-20 rounded-full mx-auto mb-2" />
                      <p className="text-center text-amber-800 font-semibold">Emma</p>
                      <p className="text-center text-amber-600">Ceramicist</p>
                    </div>
                    <div>
                      <img src="/placeholder.svg?height=100&width=100&text=Artisan+2" alt="Artisan 2" className="w-20 h-20 rounded-full mx-auto mb-2" />
                      <p className="text-center text-amber-800 font-semibold">Liam</p>
                      <p className="text-center text-amber-600">Woodworker</p>
                    </div>
                    <div>
                      <img src="/placeholder.svg?height=100&width=100&text=Artisan+3" alt="Artisan 3" className="w-20 h-20 rounded-full mx-auto mb-2" />
                      <p className="text-center text-amber-800 font-semibold">Sophia</p>
                      <p className="text-center text-amber-600">Textile Artist</p>
                    </div>
                    <div>
                      <img src="/placeholder.svg?height=100&width=100&text=Artisan+4" alt="Artisan 4" className="w-20 h-20 rounded-full mx-auto mb-2" />
                      <p className="text-center text-amber-800 font-semibold">Noah</p>
                      <p className="text-center text-amber-600">Metalsmith</p>
                    </div>
                  </div>
                  <a href="#" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition duration-300">Explore Artisan Profiles</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-amber-800 mb-8 text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['Ceramics', 'Textiles', 'Woodwork', 'Jewelry', 'Home Decor', 'Stationery'].map((category, index) => (
                <a key={index} href="#" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://media.istockphoto.com/id/1137550851/photo/female-overcoat-in-modern-clothing-store.jpg?s=612x612&w=0&k=20&c=Oa8LYOo-0qCNmOcjryiPuRD8SoAcMrvPLbuHyMzjQrk=" alt={category} className="w-full h-40 object-cover group-hover:opacity-80 transition duration-300" />
                    <div className="p-4">
                      <h3 className="text-center text-amber-800 font-semibold group-hover:text-amber-600 transition duration-300">{category}</h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Join Our Artisanal Community</h2>
            <p className="text-xl mb-8">Get exclusive offers, artisan stories, and first access to new collections.</p>
            <form className="max-w-md mx-auto flex">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-amber-300 text-amber-800" />
              <button type="submit" className="bg-amber-800 px-6 py-2 rounded-r-full hover:bg-amber-900 transition duration-300">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-amber-800 text-amber-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition duration-300">All Products</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition duration-300">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Artisan Profiles</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition duration-300">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Pinterest</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-amber-700 text-center">
            <p>&copy; 2023 Artisan Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}