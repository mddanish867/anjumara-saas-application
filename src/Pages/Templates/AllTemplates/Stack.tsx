
import {CircleArrowRight, Layers} from 'lucide-react';
export default function Stack() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Layers size={20} className="text-purple-800 h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">Stack</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Learn</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Company</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <button className="px-4 py-1 w-24 rounded-full border border-purple-500 text-purple-600 font-semibold hover:bg-gray-100">Login</button>
              <button className="px-4 py-2 flex rounded-full bg-purple-600 text-white hover:bg-purple-700"><CircleArrowRight className='mr-2' />Try Stack Free</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
            ✨ Affiliate Partners
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get paid for sharing Stack as<br />an affiliate partner.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Introduce your audience to Stack, the most popular Generative AI tool for<br />
            creators & businesses, to earn 30% recurring commissions.
          </p>
          <button className="px-8 py-3 rounded-full bg-purple-600 text-white text-lg font-medium hover:bg-purple-700">
            Apply now
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Already an affiliate? Login to your dashboard.
          </p>
        </div>

        {/* What is Stack's affiliate program? */}
        <div className="mt-24 flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What is Stack's<br />
              <span className="text-purple-600">affiliate program?</span>
            </h2>
            <p className="text-gray-600">
              Your customers, followers, and friends will appreciate learning how they can use AI to grow their business. When you refer them to Stack with your special link, we will pay you 30% of the subscription price paid.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Apply if you're a:</h3>
            <ul className="space-y-2">
              {['Content Creator', 'Entrepreneur', 'Course Educator', 'Freelancer', 'Professional Affiliate Marketer', 'Coach or Consultant'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}