import { Check,} from "lucide-react";
import Navbar from "../Navbar";
  

const plans = [
    {
      name: 'Basic',
      price: '$29',
      features: [
        'Access to 100 API calls/day',
        'Basic analytics',
        'Email support',
        '1 API key',
      ],
    },
    {
      name: 'Pro',
      price: '$99',
      features: [
        'Access to 1000 API calls/day',
        'Advanced analytics',
        'Priority email support',
        '5 API keys',
        'Custom integrations',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited API calls',
        'Real-time analytics',
        '24/7 phone support',
        'Unlimited API keys',
        'Custom integrations',
        'Dedicated account manager',
      ],
    },
  ]
const Pricing = () => {

  return (
    <>    
    <Navbar/>
       <div className="bg-black  min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-orange-200">
            Choose your Plane
          </h2>
          <p className="mt-4 text-xl text-white">
            Choose the perfect plan for your API needs
          </p>
        </div>

        <div className="mt-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-black border border-orange-200 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-semibold text-center text-orange-200">{plan.name}</h3>
                  <p className="mt-4 text-4xl text-center font-bold text-orange-200">{plan.price}</p>
                  {plan.name !== 'Enterprise' && (
                    <p className="mt-1 text-center text-sm text-white">per month</p>
                  )}
                  <ul className="mt-8 space-y-4 text-white">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="flex-shrink-0 w-5 h-5 text-green-300" />
                        <span className="ml-3">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-8 bg-transparent">
                  <button
                    type="button"
                    className="w-full bg-orange-300 text-black rounded-md py-2 px-4 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 focus:ring-offset-gray-900 transition-colors duration-200"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
    </>
  )
}

export default Pricing
