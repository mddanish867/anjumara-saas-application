import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export default function LandingPageSearch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200">
      {/* <NavbarWithSearch /> */}
      <main className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find What You're Looking For
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12">
            Powerful search to help you discover exactly what you need
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full py-4 px-6 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-lg"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition duration-300">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={`/placeholder.svg?height=200&width=300&text=Category ${item}`}
                alt={`Category ${item}`}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Category {item}</h3>
              <p className="text-gray-600">
                Explore our wide range of products in this category.
              </p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}