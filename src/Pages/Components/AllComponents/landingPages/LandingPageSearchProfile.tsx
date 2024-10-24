import { motion } from 'framer-motion'
import { Search, User, Bell, Settings } from 'lucide-react'

export default function LandingPageSearchProfile() {
  const dashboardItems = [
    { icon: Search, title: 'Search', description: 'Find what you need quickly' },
    { icon: User, title: 'Profile', description: 'Manage your account information' },
    { icon: Bell, title: 'Notifications', description: 'Stay updated with alerts' },
    { icon: Settings, title: 'Settings', description: 'Customize your experience' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-200">
      {/* <NavbarSearchProfile /> */}
      <main className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Your Dashboard
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            Manage your account, search for content, and stay updated
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {dashboardItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <item.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Activity</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ul className="divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="py-4 flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Activity {item}</p>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </main>
    </div>
  )
}