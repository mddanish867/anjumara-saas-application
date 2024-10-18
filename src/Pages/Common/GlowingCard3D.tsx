"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

export default function GlowingCard3D() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent p-4">
      <motion.div
        className="relative w-full max-w-sm"
        initial={{ rotateX: 25, rotateY: -25 }}
        whileHover={{ rotateX: 0, rotateY: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50 animate-pulse" />
        <div className="relative bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Welcome to Our 3D World</h2>
            <p className="text-gray-300 mb-6">Experience the future of web design with our innovative 3D card. Hover to explore!</p>
            <div className="flex space-x-4">
              <GlowingButton>Explore</GlowingButton>
              <GlowingButton variant="outline">Learn More</GlowingButton>
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