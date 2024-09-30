import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Temp38() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <nav className="flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center">
          <svg className="w-6 h-6 text-indigo-600 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
          </svg>
          <span className="text-xl font-semibold text-gray-800">GradeWrite.AI</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Share on Facebook</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Feedback</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">How It Works</a>
        </div>
        <div className="hidden md:block">
          <button className="text-gray-600 hover:text-gray-800">Log In →</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 absolute top-16 right-0 w-48 shadow-lg rounded-lg">
          <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">Share on Facebook</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">Pricing</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">Feedback</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">How It Works</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">Log In →</a>
        </div>
      )}

      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          The ultimate AI assistant<br />for grading assignments.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Grade assignments 10x faster and provide personalized writing feedback. GradeWrite
          streamlines grading process with bulk-grading, auto-checkers, AI re-grades, custom
          rubrics, and much more.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300">
          Get Started for Free
        </button>
      </main>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex space-x-4">
              <span className="text-blue-600">← Original</span>
              <span className="text-gray-600">● Corrected</span>
              <span className="text-blue-600">← Back to Home</span>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">Carlos Hernandez</h3>
                <p className="text-sm text-gray-500">Created: 27 seconds ago</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">Regrade</button>
                <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">Approve</button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <h4 className="font-semibold">AI Grade</h4>
                <p className="text-3xl font-bold text-indigo-600">A</p>
              </div>
              <div>
                <h4 className="font-semibold">Word Count</h4>
                <p className="text-3xl font-bold">877</p>
              </div>
              <div>
                <h4 className="font-semibold">Relevancy</h4>
                <p className="text-3xl font-bold">95</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-semibold mb-2">Greek Mythology and Its Profound Influence on Western Philosophy</h3>
              <p className="text-sm text-gray-600">
                Greek mythology, with its pantheon of gods, epic heroes, and timeless stories, has left an indelible mark on
                the development of Western philosophy. The captivating narratives of ancient Greece's myths have sparked profound
                philosophical inquiries, inspiring thinkers and scholars throughout history. In this essay, we will explore how the
                vivid tapestry of Greek mythology has shaped and influenced Western philosophy, examining how these ancient tales
                have illuminated fundamental questions about existence, morality, and the human condition...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}