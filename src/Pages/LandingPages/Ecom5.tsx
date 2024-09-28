import { useState } from 'react'
import { ShoppingCart, Search, User, ChevronUp, ChevronDown } from 'lucide-react'

export default function Ecom5() {
  const [currentProduct, setCurrentProduct] = useState(0)
  const products = [
    { name: 'Quantum Headphones', price: 299.99, image: 'https://media.istockphoto.com/id/1137550851/photo/female-overcoat-in-modern-clothing-store.jpg?s=612x612&w=0&k=20&c=Oa8LYOo-0qCNmOcjryiPuRD8SoAcMrvPLbuHyMzjQrk=' },
    { name: 'Holo Projector', price: 499.99, image: 'https://media.istockphoto.com/id/1079640592/photo/men-elegant-clothing-in-a-store-in-paris-2018.jpg?s=612x612&w=0&k=20&c=l1zyklXuRTewFyIucUuyCxQcW35Oq6p5eWOgmAC506I=' },
    { name: 'NeuroLink VR', price: 799.99, image: 'https://media.istockphoto.com/id/1137550851/photo/female-overcoat-in-modern-clothing-store.jpg?s=612x612&w=0&k=20&c=Oa8LYOo-0qCNmOcjryiPuRD8SoAcMrvPLbuHyMzjQrk=' },
    { name: 'Gravity Shoes', price: 249.99, image: 'https://media.istockphoto.com/id/1394033413/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=612x612&w=0&k=20&c=MSrTLh8EAj7BnqEN-dLgKnBF5NpGgktUrwsYgz-zk6I=' },
  ]

  const nextProduct = () => setCurrentProduct((prev) => (prev + 1) % products.length)
  const prevProduct = () => setCurrentProduct((prev) => (prev - 1 + products.length) % products.length)

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gray-900 border-b border-neon-blue">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <p className="text-neon-blue text-sm">Free quantum shipping on orders over $500</p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-neon-blue transition duration-300">Sign In</a>
            <a href="#" className="text-sm hover:text-neon-blue transition duration-300">Create Account</a>
          </div>
        </div>
      </header>
      <nav className="bg-black py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-3xl font-bold text-neon-blue">NeoTech</a>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-neon-blue transition duration-300">Home</a>
            <a href="#" className="hover:text-neon-blue transition duration-300">Shop</a>
            <a href="#" className="hover:text-neon-blue transition duration-300">About</a>
            <a href="#" className="hover:text-neon-blue transition duration-300">Contact</a>
          </div>
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
          </div>
        </div>
      </nav>

      <main>
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 flex">
            <div className="w-1/2 pr-8">
              <h1 className="text-5xl font-bold mb-6 text-neon-blue">The Future is Now</h1>
              <p className="text-xl mb-8">Experience cutting-edge technology that will transform your reality.</p>
              <a href="#" className="bg-neon-blue text-black px-8 py-3 rounded-full hover:bg-opacity-80 transition duration-300 inline-block">Shop Now</a>
            </div>
            <div className="w-1/2 relative">
              <div className="absolute inset-0 flex flex-col justify-between py-8">
                <button onClick={prevProduct} className="text-neon-blue hover:text-white transition duration-300">
                  <ChevronUp size={40} />
                </button>
                <button onClick={nextProduct} className="text-neon-blue hover:text-white transition duration-300">
                  <ChevronDown size={40} />
                </button>
              </div>
              <div className="h-[500px] relative">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentProduct ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                    }`}
                  >
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-neon-blue font-bold">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        </section>

        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Audio', 'VR', 'Wearables'].map((category) => (
                <div key={category} className="group relative overflow-hidden rounded-lg">
                  <img src="https://media.istockphoto.com/id/1394033413/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=612x612&w=0&k=20&c=MSrTLh8EAj7BnqEN-dLgKnBF5NpGgktUrwsYgz-zk6I=" alt={category} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold">{category}</h3>
                  </div>
                  <div className="absolute inset-0 bg-neon-blue bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <a href="#" className="bg-black text-neon-blue px-6 py-2 rounded-full hover:bg-gray-900 transition duration-300">Shop Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Innovations</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-neon transition duration-300">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-neon-blue font-bold mb-4">${product.price.toFixed(2)}</p>
                    <button className="w-full bg-neon-blue text-black py-2 rounded-full hover:bg-opacity-80 transition duration-300">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-neon-blue text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Future</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter for exclusive tech updates and special offers.</p>
            <form className="max-w-md mx-auto flex">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-black" />
              <button type="submit" className="bg-black text-neon-blue px-6 py-2 rounded-r-full hover:bg-opacity-80 transition duration-300">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-neon-blue transition duration-300">All Products</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">New Arrivals</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Best Sellers</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">FAQs</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Shipping</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-neon-blue transition duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Facebook</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Twitter</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-neon-blue transition duration-300">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2023 NeoTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}