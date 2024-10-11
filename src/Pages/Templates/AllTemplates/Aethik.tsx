import { ChevronRight ,Layers} from 'lucide-react'

export default function Aethik() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <div className="flex justify-center pt-6 px-4">
        <nav className="bg-white shadow-lg rounded-full px-6 py-2 flex items-center justify-between w-full max-w-6xl">
          <div className="flex items-center">
            <div className="flex items-center">
            <Layers size={20} className="text-purple-800 h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">Jasper</span>
            </div>
            <div className="hidden lg:flex items-center space-x-6 ml-10">
              <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Learn</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Company</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 text-sm font-medium">Login</button>
            <button className="px-4 py-2 rounded-full bg-[#7e22ce] text-white hover:bg-purple-800 text-sm font-medium">Try Jasper Free</button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
            ✨ Affiliate Partners
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Get paid for sharing Jasper as<br />an affiliate partner.
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Introduce your audience to Jasper, the most popular Generative AI tool for<br />
            creators & businesses, to earn 30% recurring commissions.
          </p>
          <button className="px-8 py-4 rounded-full bg-[#7e22ce] text-white text-lg font-medium hover:bg-purple-800 flex items-center justify-center mx-auto">
            Apply now
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
          <p className="mt-4 text-sm text-gray-400">
            Already an affiliate? Login to your dashboard.
          </p>
        </div>

        {/* What is Jasper's affiliate program? */}
        <div className="mt-32 flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-1/2 pr-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              What is Jasper's<br />
              <span className="text-[#7e22ce]">affiliate program?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Your customers, followers, and friends will appreciate learning how they can use AI to grow their business. When you refer them to Jasper with your special link, we will pay you 30% of the subscription price paid.
            </p>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Apply if you're a:</h3>
            <ul className="space-y-4">
              {['Content Creator', 'Entrepreneur', 'Course Educator', 'Freelancer', 'Professional Affiliate Marketer', 'Coach or Consultant'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}