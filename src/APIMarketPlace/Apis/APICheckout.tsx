import Navbar from "../Navbar";

export default function APICheckout() {
    return (
      <>
      <Navbar/>
      <div className="container min-h-screen mx-auto px-4 py-8 bg-black">
        <h1 className="text-3xl font-bold mb-6 text-orange-200">Purchase API: Weather API</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-white ">
            <h2 className="text-2xl font-semibold mb-4">API Details</h2>
            <p className="mb-2"><strong>Name:</strong> Weather API</p>
            <p className="mb-2"><strong>Category:</strong> Weather</p>
            <p className="mb-2"><strong>Description:</strong> Get real-time weather data for any location worldwide.</p>
            <p className="mb-4"><strong>Provider:</strong> WeatherCo Inc.</p>
            <h3 className="text-xl font-semibold mb-2">Pricing Plans</h3>
            <ul className="list-disc list-inside mb-4 ">
              <li>Free: Up to 1,000 calls/month</li>
              <li>Basic: $29/month for up to 10,000 calls</li>
              <li>Pro: $99/month for up to 100,000 calls</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Select Plan</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2">Choose a plan:</label>
                <select className="w-full p-2 border border-orange-200 rounded bg-transparent text-white">
                  <option className="bg-black">Free</option>
                  <option className="bg-black">Basic ($29/month)</option>
                  <option className="bg-black">Pro ($99/month)</option>
                </select>
              </div>
              <div>
                <label htmlFor="paymentMethod" className="block mb-2">Payment Method:</label>
                <select id="paymentMethod" className="w-full p-2 border rounded border-orange-200 bg-transparent text-white">
                  <option className="bg-black">Credit Card</option>
                  <option className="bg-black">PayPal</option>
                </select>
              </div>
              <button  type="submit" className="w-full bg-black text-white border border-orange-200 hover:bg-orange-300 hover:text-black p-2 rounded">
                Purchase API Access
              </button>
            </form>
          </div>
        </div>
      </div>
      </>
    )
  }