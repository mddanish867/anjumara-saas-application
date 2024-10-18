import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phrases = [
  "Building the future of web development",
  "Crafting seamless user experiences",
  "Innovating with cutting-edge technologies",
  "Transforming ideas into digital realities"
]

export default function AutoCompleteTextCard() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isCompleting, setIsCompleting] = useState(true)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (isCompleting) {
      if (displayedText.length < phrases[currentPhraseIndex].length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(phrases[currentPhraseIndex].slice(0, displayedText.length + 1))
        }, 50)
      } else {
        setIsCompleting(false)
        timeoutId = setTimeout(() => {
          setIsCompleting(true)
          setDisplayedText("")
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        }, 2000)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayedText, currentPhraseIndex, isCompleting])

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <motion.div
        className="bg-transparent rounded-xl S p-8  w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Our Mission</h2>
        <div className="h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentPhraseIndex}
              className="text-3xl font-bold text-gray-600 dark:text-gray-50 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {displayedText}
              <motion.span
                className="inline-block w-0.5 h-6 bg-blue-500 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="mt-8">
          <p className="text-gray-600 dark:text-gray-50 text-center">
            Join us in our journey to revolutionize the digital landscape.
          </p>
        </div>
      </motion.div>
    </div>
  )
}