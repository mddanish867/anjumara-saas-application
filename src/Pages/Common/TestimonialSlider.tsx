import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day.",
    author: "Alice Johnson",
    title: "CEO, TechCorp"
  },
  {
    quote: "I can't imagine running my business without this tool. It's been a game-changer for our team's productivity.",
    author: "Bob Smith",
    title: "Founder, StartupX"
  },
  {
    quote: "The customer support is outstanding. They've gone above and beyond to ensure our success with the platform.",
    author: "Carol Davis",
    title: "CTO, InnovateNow"
  }
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="relative overflow-hidden">
        <h1 className='text-4xl font-extrabold mb-10'>What our customer says</h1>
        <motion.div
          className="flex"
          animate={{ x: `${-currentIndex * 100}%` }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-gray-50 mb-4">
                  "{testimonial.quote}"
                </p>
                <footer className="text-base md:text-lg text-gray-600 dark:text-gray-50">
                  <strong className="font-semibold text-gray-900 dark:text-gray-50 block">
                    {testimonial.author}
                  </strong>
                  {testimonial.title}
                </footer>
              </blockquote>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors duration-300",
              currentIndex === index ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}