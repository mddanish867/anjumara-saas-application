import { motion } from 'framer-motion'

export default function LandingPageAuth() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      {/* <NavbarWithAuth /> */}
      <main className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12">
            Discover amazing features and boost your productivity
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="#"
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20"
        >
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="Platform Preview"
            className="rounded-lg shadow-2xl mx-auto"
          />
        </motion.div>
      </main>
    </div>
  )
}