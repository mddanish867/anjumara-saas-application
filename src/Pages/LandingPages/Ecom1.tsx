import { useState } from 'react'
import { ShoppingCart, Search, User, Menu, X, ChevronRight, MapPin, Camera, Compass } from 'lucide-react'

export default function Ecom1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All Gear')

  const categories = ['All Gear', 'Camping', 'Hiking', 'Climbing', 'Water Sports']
  const products = [
    { name: 'Ultralight Tent', price: 299.99, category: 'Camping', image: '/placeholder.svg?height=400&width=400&text=Ultralight+Tent' },
    { name: 'Hiking Boots', price: 179.99, category: 'Hiking', image: '/placeholder.svg?height=400&width=400&text=Hiking+Boots' },
    { name: 'Climbing Harness', price: 89.99, category: 'Climbing', image: '/placeholder.svg?height=400&width=400&text=Climbing+Harness' },
    { name: 'Inflatable Kayak', price: 499.99, category: 'Water Sports', image: '/placeholder.svg?height=400&width=400&text=Inflatable+Kayak' },
    { name: 'Backpack', price: 149.99, category: 'Hiking', image: '/placeholder.svg?height=400&width=400&text=Backpack' },
    { name: 'Sleeping Bag', price: 129.99, category: 'Camping', image: '/placeholder.svg?height=400&width=400&text=Sleeping+Bag' },
  ]

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <header className="bg-green-800 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold flex items-center">
              <Compass className="mr-2" />
              ADVENTURE OUTFITTERS
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-yellow-400 transition duration-300">Home</a>
              <a href="#" className="hover:text-yellow-400 transition duration-300">Shop</a>
              <a href="#" className="hover:text-yellow-400 transition duration-300">Adventures</a>
              <a href="#" className="hover:text-yellow-400 transition duration-300">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="hover:text-yellow-400 transition duration-300">
                <Search size={20} />
              </button>
              <a href="#" className="hover:text-yellow-400 transition duration-300">
                <User size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition duration-300">
                <ShoppingCart size={20} />
              </a>
              <button className="md:hidden hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-green-800 z-40 flex items-center justify-center">
          <nav className="text-center">
            <a href="#" className="block text-2xl mb-6 text-white hover:text-yellow-400 transition duration-300">Home</a>
            <a href="#" className="block text-2xl mb-6 text-white hover:text-yellow-400 transition duration-300">Shop</a>
            <a href="#" className="block text-2xl mb-6 text-white hover:text-yellow-400 transition duration-300">Adventures</a>
            <a href="#" className="block text-2xl mb-6 text-white hover:text-yellow-400 transition duration-300">About</a>
          </nav>
        </div>
      )}

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted className="absolute w-full h-full object-cover">
            <source src="/placeholder.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Gear Up for Adventure</h1>
            <p className="text-xl md:text-2xl mb-8">Equip yourself with top-quality outdoor gear</p>
            <a href="#" className="bg-yellow-400 text-green-800 px-8 py-3 rounded-full hover:bg-yellow-300 transition duration-300 inline-block">Explore Our Gear</a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Gear</h2>
            <div className="flex flex-wrap justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 m-2 rounded-full ${
                    activeCategory === category ? 'bg-green-800 text-white' : 'bg-stone-200 text-stone-800 hover:bg-stone-300'
                  } transition duration-300`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products
                .filter((product) => activeCategory === 'All Gear' || product.category === activeCategory)
                .map((product, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-green-800 font-bold mb-4">${product.price.toFixed(2)}</p>
                      <button className="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 w-full">Add to Cart</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-stone-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Adventure Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((story) => (
                <div key={story} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={`/placeholder.svg?height=300&width=400&text=Adventure+${story}`} alt={`Adventure ${story}`} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Epic Mountain Trek</h3>
                    <p className="text-stone-600 mb-4">Join Sarah on her incredible journey through the Rockies...</p>
                    <a href="#" className="text-green-800 hover:text-green-700 transition duration-300 flex items-center">
                      Read More <ChevronRight size={20} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Join Our Adventure Community</h2>
                <p className="text-xl mb-8">Share your experiences, get expert advice, and connect with fellow outdoor enthusiasts.</p>
                <a href="#" className="bg-yellow-400 text-green-800 px-8 py-3 rounded-full hover:bg-yellow-300 transition duration-300 inline-block">Join Now</a>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <img src="/placeholder.svg?height=300&width=300&text=Community+1" alt="Community 1" className="w-full h-40 object-cover rounded-lg" />
                <img src="/placeholder.svg?height=300&width=300&text=Community+2" alt="Community 2" className="w-full h-40 object-cover rounded-lg" />
                <img src="/placeholder.svg?height=300&width=300&text=Community+3" alt="Community 3" className="w-full h-40 object-cover rounded-lg" />
                <img src="/placeholder.svg?height=300&width=300&text=Community+4" alt="Community 4" className="w-full h-40 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Explore Nearby Adventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Mountain Trails', 'Lake Kayaking', 'Rock Climbing'].map((adventure, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
                  <img src={`/placeholder.svg?height=400&width=600&text=${adventure}`} alt={adventure} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="text-center">
                      <h3 className="text-white text-2xl font-bold mb-2">{adventure}</h3>
                      <a href="#" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition duration-300">
                        <MapPin size={20} className="mr-2" /> Find Nearby
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-stone-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Capture Your Adventures</h2>
            <p className="text-xl mb-8">Share your outdoor experiences and get featured on our site!</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6].map((photo) => (
                <img key={photo} src={`/placeholder.svg?height=150&width=150&text=User+Photo+${photo}`} alt={`User Photo ${photo}`} className="w-32 h-32 object-cover rounded-lg" />
              ))}
            </div>
            <a href="#" className="inline-flex items-center bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300">
              <Camera size={20} className="mr-2" /> Upload Your Photo
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">All Gear</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Camping</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Hiking</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Climbing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Adventures</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Find Trips</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Adventure Stories</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Community</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Our Story</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Sustainability</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Newsletter</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Facebook</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition duration-300">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-green-700 text-center">
            <p>&copy; 2023 Adventure Outfitters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}