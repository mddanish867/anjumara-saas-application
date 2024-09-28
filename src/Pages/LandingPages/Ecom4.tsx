import { useRef } from 'react'
import { ShoppingBag, Search, User, ChevronRight, ChevronLeft, Leaf } from 'lucide-react'

export default function Ecom4() {
  const categoriesRef = useRef<HTMLDivElement>(null)

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoriesRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      categoriesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between">
            <a href="/" className="flex items-center space-x-2 text-2xl font-bold text-green-800">
              <Leaf size={24} />
              <span>EcoMarket</span>
            </a>
            <div className="flex items-center space-x-4 order-3 w-full md:w-auto md:order-2 mt-4 md:mt-0">
              <div className="relative flex-grow">
                <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 rounded-full border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
              </div>
              <button className="text-green-800 hover:text-green-600 transition duration-300">
                <User size={24} />
              </button>
              <button className="text-green-800 hover:text-green-600 transition duration-300">
                <ShoppingBag size={24} />
              </button>
            </div>
            <nav className="hidden md:flex space-x-6 order-2 md:order-3">
              <a href="#" className="text-green-800 hover:text-green-600 transition duration-300">Home</a>
              <a href="#" className="text-green-800 hover:text-green-600 transition duration-300">Shop</a>
              <a href="#" className="text-green-800 hover:text-green-600 transition duration-300">About</a>
              <a href="#" className="text-green-800 hover:text-green-600 transition duration-300">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="py-12 bg-green-100">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 text-center">Shop Sustainably</h1>
            <p className="text-xl text-green-600 mb-8 text-center">Discover eco-friendly products for a better tomorrow</p>
            <div className="relative">
              <div ref={categoriesRef} className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar">
                {['Home & Living', 'Fashion', 'Beauty', 'Food', 'Gardening', 'Energy'].map((category) => (
                  <div key={category} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden group">
                    <img src="https://media.istockphoto.com/id/1079640592/photo/men-elegant-clothing-in-a-store-in-paris-2018.jpg?s=612x612&w=0&k=20&c=l1zyklXuRTewFyIucUuyCxQcW35Oq6p5eWOgmAC506I=" alt={category} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">{category}</h3>
                      <a href="#" className="text-green-600 group-hover:text-green-800 transition duration-300 flex items-center">
                        Shop Now
                        <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => scrollCategories('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition duration-300">
                <ChevronLeft size={24} className="text-green-800" />
              </button>
              <button onClick={() => scrollCategories('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition duration-300">
                <ChevronRight size={24} className="text-green-800" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Bamboo Toothbrush', price: 4.99, image: 'https://media.istockphoto.com/id/1079640592/photo/men-elegant-clothing-in-a-store-in-paris-2018.jpg?s=612x612&w=0&k=20&c=l1zyklXuRTewFyIucUuyCxQcW35Oq6p5eWOgmAC506I=' },
                { name: 'Reusable Water Bottle', price: 19.99, image: 'https://media.istockphoto.com/id/1080132360/photo/woman-mannequins-in-store-window.jpg?s=612x612&w=0&k=20&c=A1rsUNSeDzu-JSXfQLxY8j_JqnwcrvJPISO3hzRhFBM=' },
                { name: 'Organic Cotton T-Shirt', price: 24.99, image: 'https://media.istockphoto.com/id/1137550851/photo/female-overcoat-in-modern-clothing-store.jpg?s=612x612&w=0&k=20&c=Oa8LYOo-0qCNmOcjryiPuRD8SoAcMrvPLbuHyMzjQrk=' },
                { name: 'Solar Power Bank', price: 39.99, image: 'https://media.istockphoto.com/id/1394033413/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=612x612&w=0&k=20&c=MSrTLh8EAj7BnqEN-dLgKnBF5NpGgktUrwsYgz-zk6I=' },
              ].map((product) => (
                <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-green-800 mb-2">{product.name}</h3>
                      <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
                    </div>
                    <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-100">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img src="https://media.istockphoto.com/id/1394033413/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=612x612&w=0&k=20&c=MSrTLh8EAj7BnqEN-dLgKnBF5NpGgktUrwsYgz-zk6I=" alt="Eco-Friendly Living" className="w-full h-64 md:h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8">
                  <h2 className="text-3xl font-bold text-green-800 mb-4">Why Choose Eco-Friendly?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Leaf size={24} className="text-green-600 mr-2 flex-shrink-0" />
                      <span>Reduce your carbon footprint and help combat climate change</span>
                    </li>
                    <li className="flex items-start">
                      <Leaf size={24} className="text-green-600 mr-2 flex-shrink-0" />
                      <span>Support sustainable practices and ethical manufacturing</span>
                    </li>
                    <li className="flex items-start">
                      <Leaf size={24} className="text-green-600 mr-2 flex-shrink-0" />
                      <span>Improve your health by using non-toxic, natural products</span>
                    </li>
                    <li className="flex items-start">
                      <Leaf size={24} className="text-green-600 mr-2 flex-shrink-0" />
                      <span>Contribute to a circular economy and reduce waste</span>
                    </li>
                  </ul>
                  <a href="#" className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Customer Favorites</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Eco-Friendly Backpack', rating: 4.8, reviews: 120, image: 'https://media.istockphoto.com/id/1394033413/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=612x612&w=0&k=20&c=MSrTLh8EAj7BnqEN-dLgKnBF5NpGgktUrwsYgz-zk6I=' },
                { name: 'Beeswax Food Wraps', rating: 4.9, reviews: 95, image: 'https://media.istockphoto.com/id/1137550851/photo/female-overcoat-in-modern-clothing-store.jpg?s=612x612&w=0&k=20&c=Oa8LYOo-0qCNmOcjryiPuRD8SoAcMrvPLbuHyMzjQrk=' },
                { name: 'Biodegradable Phone Case', rating: 4.7, reviews: 150, image: 'https://media.istockphoto.com/id/1080132360/photo/woman-mannequins-in-store-window.jpg?s=612x612&w=0&k=20&c=A1rsUNSeDzu-JSXfQLxY8j_JqnwcrvJPISO3hzRhFBM=' },
              ].map((product) => (
                <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                    </div>
                    <a href="#" className="text-green-600 hover:text-green-800 transition duration-300">View Details</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Eco-Community</h2>
            <p className="text-xl mb-8">Get exclusive offers, eco-living tips, and updates on new sustainable products.</p>
            <form className="max-w-md mx-auto flex">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-300 text-green-800" />
              <button type="submit" className="bg-green-800 px-6 py-2 rounded-r-full hover:bg-green-900 transition duration-300">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-300 transition duration-300">All Products</a></li>
                <li><a href="#" className="hover:text-green-300 transition duration-300">New Arrivals</a></li>
                <li><a href="#" className="hover:text-green-300 transition duration-300">Best Sellers</a></li>
                <li><a href="#" className="hover:text-green-300 transition duration-300">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-300 transition duration-300">Our Story</a></li>
                <li><a href="#" className="hover:text-green-300 transition duration-300">Sustainability</a></li>
                <li><a href="#" className="hover:text-green-300 transition duration-300">Eco Blog</a></li>
                <li><a href="#" className="hover:text-green-300 transition duration-300">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-300 transition duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-300 transition duration-300">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-green-300 transition duration-300">FAQ</a></li>
                <li><a href="#" className="hover:text-green-300 transition duration-300">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-300 transition duration-300">Facebook</a></li>
                <li><a href="#" className="hover:text-green-300 transition duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-green-300 transition duration-300">Twitter</a></li>
                <li><a href="#" className="hover:text-green-300 transition duration-300">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center">
            <p>&copy; 2023 EcoMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}