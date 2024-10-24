import { motion } from 'framer-motion'
import { ShoppingCart, Truck, CreditCard, Headphones } from 'lucide-react'

export default function LandingPageMegaMenu() {
  const features = [
    { icon: ShoppingCart, title: 'Wide Selection', description: 'Browse through thousands of products' },
    { icon: Truck, title: 'Fast Delivery', description: 'Get your items delivered in no time' },
    { icon: CreditCard, title: 'Secure Payments', description: 'Shop with confidence using our secure platform' },
    { icon: Headphones, title: '24/7 Support', description: 'Our customer service team is always here to help' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200">
      {/* <NavbarMegaMenu /> */}
      <main className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your One-Stop Shop
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            Discover amazing products from all categories in one place
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <feature.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 p-4 rounded-lg">
                <img
                  src={`/placeholder.svg?height=200&width=300&text=Product ${item}`}
                  alt={`Product ${item}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Product {item}</h3>
                <p className="text-gray-600 mb-4">
                  High-quality product with amazing features.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}