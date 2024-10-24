export default function EventRegistrationForm() {
    return (
      <div className="w-full mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Event Registration</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" id="firstName" name="firstName" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" id="lastName" name="lastName" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Event</label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input type="radio" id="conference" name="event" value="conference" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label htmlFor="conference" className="ml-3 block text-sm font-medium text-gray-700">Conference</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="workshop" name="event" value="workshop" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label htmlFor="workshop" className="ml-3 block text-sm font-medium text-gray-700">Workshop</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="networking" name="event" value="networking" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                <label htmlFor="networking" className="ml-3 block text-sm font-medium text-gray-700">Networking Event</label>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Dietary Requirements</label>
            <div className="mt-2 space-y-2">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input type="checkbox" id="vegetarian" name="dietary" value="vegetarian" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="vegetarian" className="font-medium text-gray-700">Vegetarian</label>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input type="checkbox" id="vegan" name="dietary" value="vegan" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="vegan" className="font-medium text-gray-700">Vegan</label>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input type="checkbox" id="glutenFree" name="dietary" value="glutenFree" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="glutenFree" className="font-medium text-gray-700">Gluten-free</label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">Special Requests</label>
            <textarea id="specialRequests" name="specialRequests" rows={3} className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Register
            </button>
          </div>
        </form>
      </div>
    )
  }