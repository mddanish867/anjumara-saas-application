import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Responsive design",
  "Customizable components",
  "Dark mode support",
  "Accessibility features",
  "Regular updates",
  "Community support",
];
const ChooseUs = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20"
      >
        <div>
          <img
            src="/soora.png"
            alt="UI Components"
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Our Components?
          </h2>
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
        <h2 className="text-4xl font-bold mb-8">Get Started in Minutes</h2>
        <div className="bg-indigo-200 text-gray-950 p-8 rounded-none ">
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
    </>
  );
};

export default ChooseUs;
