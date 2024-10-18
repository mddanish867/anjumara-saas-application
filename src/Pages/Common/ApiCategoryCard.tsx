"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from "@/lib/utils"

const apiCategories = [
  { name: "Authentication", icon: "🔐", description: "Secure user authentication and authorization APIs" },
  { name: "Data Processing", icon: "📊", description: "APIs for processing and analyzing large datasets" },
  { name: "Machine Learning", icon: "🤖", description: "AI and machine learning model integration APIs" },
  { name: "Payment Gateway", icon: "💳", description: "Secure payment processing and transaction APIs" },
  { name: "Geolocation", icon: "🌍", description: "Location-based services and mapping APIs" }
]

export default function ApiCategoryCard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % apiCategories.length)
    }, 5000) // Change category every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent p-4">
      <motion.div
        className="relative w-full max-w-md"
        initial={{ rotateX: 25, rotateY: -25 }}
        animate={{ rotateX: 0, rotateY: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50 animate-pulse" />
        <div className="relative bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">API Categories</h2>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <div className="text-4xl mb-2">{apiCategories[currentIndex].icon}</div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{apiCategories[currentIndex].name}</h3>
                <p className="text-gray-300">{apiCategories[currentIndex].description}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-between">
              <GlowingButton onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + apiCategories.length) % apiCategories.length)}>
                Previous
              </GlowingButton>
              <GlowingButton onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % apiCategories.length)}>
                Next
              </GlowingButton>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-600 to-transparent opacity-25" />
        </div>
      </motion.div>
    </div>
  )
}

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline'
}

function GlowingButton({ children, variant = 'solid', className, ...props }: GlowingButtonProps) {
  return (
    <button
      className={cn(
        "relative px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200",
        variant === 'solid' 
          ? "bg-blue-500 text-white hover:bg-blue-600" 
          : "bg-transparent text-blue-400 border border-blue-400 hover:bg-blue-900",
        className
      )}     
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-lg bg-blue-600 blur opacity-25 group-hover:opacity-50 transition-opacity duration-200" />
    </button>
  )
}