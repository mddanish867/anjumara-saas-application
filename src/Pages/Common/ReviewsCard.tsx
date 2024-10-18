import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    description: "Absolutely love this product! It exceeded all my expectations and has become an essential part of my daily routine.",
    rating: 5,
    date: "2023-05-15"
  },
  {
    id: 2,
    name: "Bob Smith",
    description: "Great value for money. While it has some minor flaws, overall it's a solid product that does what it promises.",
    rating: 4,
    date: "2023-06-02"
  },
  {
    id: 3,
    name: "Carol Williams",
    description: "Decent product, but there's room for improvement. The customer service was excellent when I had questions.",
    rating: 3,
    date: "2023-06-20"
  }
]

export default function ReviewsCard() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-transparent border rounded-xl shadow-2xl overflow-hidden">
        <div className="p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">Customer Reviews</h2>
          <div className="relative h-[400px] sm:h-[350px] md:h-[300px]">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                  index === currentReview
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-gray-700 rounded-lg p-4 sm:p-6 h-full overflow-y-auto">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-0">{review.name}</h3>
                    <span className="text-gray-400 text-sm">{review.date}</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{review.description}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-500'
                        }`}
                        fill={i < review.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 sm:mt-6">
            <button
              onClick={prevReview}
              className="bg-[#38bdf8] hover:bg-[#30b9f4] text-white font-bold py-2 px-3 sm:px-4 rounded-full transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextReview}
              className="bg-[#38bdf8] hover:bg-[#30b9f4] text-white font-bold py-2 px-3 sm:px-4 rounded-full transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}