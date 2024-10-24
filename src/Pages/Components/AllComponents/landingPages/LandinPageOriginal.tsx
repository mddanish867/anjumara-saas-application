
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

export default function LandingPageOriginal() {
  const features = [
    "Responsive design",
    "Customizable components",
    "Dark mode support",
    "Accessibility features",
    "Regular updates",
    "Community support"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          {/* Put your navbar here */}
        </div>
      </header>
      <main className="container mx-auto px-6 pt-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Beautiful UIs with Ease
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            A collection of reusable components for your next project
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out inline-flex items-center"
            >
              View on GitHub
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="UI Components"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Components?</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <Check className="w-6 h-6 text-green-500 mr-2" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Get Started in Minutes</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <pre className="text-left overflow-x-auto">
              <code className="language-bash">
                {`# Install the package
npm install @your-ui-library/react

# Import and use components
import { Button } from '@your-ui-library/react'

function App() {
  return <Button>Click me</Button>
}`}
              </code>
            </pre>
          </div>
        </motion.div>
      </main>
    </div>
  )
}