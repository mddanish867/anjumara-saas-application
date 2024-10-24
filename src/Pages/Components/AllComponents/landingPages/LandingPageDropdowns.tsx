import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function LandingPageDropdowns() {
  const plans = [
    { name: 'Basic', price: '$9.99', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Pro', price: '$19.99', features: ['All Basic features', 'Feature 4', 'Feature 5', 'Feature 6'] },
    { name: 'Enterprise', price: '$49.99', features: ['All Pro features', 'Feature 7', 'Feature 8', 'Feature 9', 'Feature 10'] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      {/* <NavbarDropdowns /> */}
      <main className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            Flexible options to suit your needs and budget
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1  md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-purple-600 mb-6">{plan.price}</p>
              <ul className="text-left mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Choose Plan
              </button>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Reliability', 'Flexibility', 'Support'].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-gray-600">
                  We pride ourselves on our {item.toLowerCase()} to ensure your satisfaction.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}