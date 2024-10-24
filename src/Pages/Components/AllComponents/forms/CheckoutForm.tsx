import { useState } from 'react'

export default function CheckoutForm() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className={`w-1/3 text-center ${step >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}>Billing</div>
          <div className={`w-1/3 text-center ${step >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}>Shipping</div>
          <div className={`w-1/3 text-center ${step >= 3 ? 'text-indigo-600' : 'text-gray-400'}`}>Payment</div>
        </div>
        <div className="flex mt-2">
          <div className={`w-1/3 border-t-2 ${step >= 1 ? 'border-indigo-600' : 'border-gray-300'}`}></div>
          <div className={`w-1/3 border-t-2 ${step >= 2 ? 'border-indigo-600' : 'border-gray-300'}`}></div>
          <div className={`w-1/3 border-t-2 ${step >= 3 ? 'border-indigo-600' : 'border-gray-300'}`}></div>
        </div>
      </div>
      <form className="space-y-6">
        {step === 1 && (
          <>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" id="address" name="address" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" id="city" name="city" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div>
              <label htmlFor="card" className="block text-sm font-medium text-gray-700">Card Number</label>
              <input type="text" id="card" name="card" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                <input type="text" id="cvv" name="cvv" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
            </div>
          </>
        )}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Previous
            </button>
          )}
          {step < 3 ? (
            <button type="button" onClick={nextStep} className="py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Next
            </button>
          ) : (
            <button type="submit" className="py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Place Order
            </button>
          )}
        </div>
      </form>
    </div>
  )
}