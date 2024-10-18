import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const feedbackOptions = [
  { value: 1, label: "Very Dissatisfied" },
  { value: 2, label: "Dissatisfied" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Satisfied" },
  { value: 5, label: "Very Satisfied" },
];

export default function FeedbackCard() {
  const [rating, setRating] = useState(3);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the feedback to your server
    console.log("Feedback submitted:", rating);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            How was your experience?
          </h2>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                  {feedbackOptions.map((option) => (
                    <span
                      key={option.value}
                      className={cn(
                        "text-sm font-medium",
                        rating >= option.value
                          ? "text-purple-600"
                          : "text-gray-400"
                      )}
                    >
                      {option.value}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-center text-lg font-semibold mb-6 text-gray-700">
                {
                  feedbackOptions.find((option) => option.value === rating)
                    ?.label
                }
              </p>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Additional Comments
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
                  rows={4}
                  placeholder="Please share any additional feedback..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Submit Feedback
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <svg
                className="w-16 h-16 mx-auto text-green-500 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Thank you for your feedback!
              </h3>
              <p className="text-gray-600">
                Your input helps us improve our service.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
