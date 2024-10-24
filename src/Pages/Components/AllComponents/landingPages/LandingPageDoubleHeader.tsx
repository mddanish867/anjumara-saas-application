import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function LandingPageDoubleHeader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-teal-200">
      {/* <NavbarDoubleHeader /> */}
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Elevate Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Comprehensive solutions to take your company to the next level
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Business Growth"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {['Strategy', 'Execution', 'Growth'].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600">
                Our expert team will guide you through every step of the process.
              </p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}