import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function LandingPageTransparent() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}>
      {/* <NavbarTransparent /> */}
      <main className="container mx-auto px-6 pt-32 pb-16 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Experience the Extraordinary
          </h1>
          <p className="text-xl md:text-2xl mb-12">
            Immerse yourself in a world of wonder and excitement
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="#"
              className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
            >
              Explore Now
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center"
        >
          <ChevronDown className="w-12 h-12 animate-bounce" />
        </motion.div>
      </main>
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Adventure Tours', 'Luxury Retreats', 'Cultural Experiences'].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 p-6 rounded-lg shadow-md"
              >
                <img
                  src={`/placeholder.svg?height=200&width=300&text=${service}`}
                  alt={service}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}