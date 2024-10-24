import { motion } from 'framer-motion'
import { Zap, Shield, Smile } from 'lucide-react'

export default function LandingPageAnimatedHamburger() {
  const features = [
    { icon: Zap, title: 'Lightning Fast', description: 'Experience blazing fast performance' },
    { icon: Shield, title: 'Secure', description: 'Your data is safe and protected' },
    { icon: Smile, title: 'User Friendly', description: 'Intuitive design for the best experience' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      {/* <NavbarAnimatedHamburger /> */}
      <main className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionize Your Workflow
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Streamline your processes and boost productivity
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
            >
              Start Free Trial
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <feature.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Product Demo"
                className="rounded-lg shadow-md mb-4"
              />
            </div>
            <div>
              <ul className="space-y-4">
                {[1, 2, 3].map((step) => (
                  <li key={step} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                      {step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Step {step}</h4>
                      <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}