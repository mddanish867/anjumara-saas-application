import { useState } from 'react'

export default function SurveyForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => setCurrentStep(Math.min(currentStep + 1, totalSteps))
  const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 1))

  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Customer Satisfaction Survey</h2>
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-indigo-700">Progress</span>
          <span className="text-sm font-medium text-indigo-700">{currentStep} of {totalSteps}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
        </div>
      </div>
      <form className="space-y-6">
        {currentStep === 1 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">How satisfied are you with our product?</label>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Not at all satisfied</span>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {value}
                  </button>
                ))}
              </div>
              <span className="text-xs text-gray-500">Very satisfied</span>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Which features do you value the most?</label>
            <div className="space-y-2">
              {['Ease of use', 'Performance', 'Design', 'Customer support', 'Price'].map((feature) => (
                <div key={feature} className="flex items-start">
                  <div className="flex items-center h-5">
                    <input type="checkbox" id={feature} name="features" value={feature} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor={feature} className="font-medium text-gray-700">{feature}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">How likely are you to recommend our product to others?</label>
            <select name="recommendation" className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="">Select an option</option>
              <option value="1">Not at all likely</option>
              <option value="2">Slightly likely</option>
              <option value="3">Moderately likely</option>
              <option value="4">Very likely</option>
              <option value="5">Extremely likely</option>
            </select>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">Do you have any additional feedback for us?</label>
            <textarea id="feedback" name="feedback" rows={4} className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
          </div>
        )}
        <div className="flex justify-between">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep} className="py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Previous
            </button>
          )}
          {currentStep < totalSteps ? (
            <button type="button" onClick={nextStep} className="py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Next
            </button>
          ) : (
            <button type="submit" className="py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  )
}