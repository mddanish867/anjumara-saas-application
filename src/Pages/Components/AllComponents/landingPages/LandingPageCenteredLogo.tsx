import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function LandingPageCenteredLogo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
      {/* <NavbarCenteredLogo /> */}
      <main className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Elevate Your Brand
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Create stunning designs that leave a lasting impression
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="#"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {['Branding', 'Web Design', 'Print'].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={`/placeholder.svg?height=200&width=300&text=${item}`}
                alt={item}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600 mb-4">
                Create stunning {item.toLowerCase()} that captivates your audience.
              </p>
              <a
                href="#"
                className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Our Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {['Discover', 'Design', 'Develop', 'Deliver'].map((step, index) => (
              <div key={index} className="mb-8 md:mb-0">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}