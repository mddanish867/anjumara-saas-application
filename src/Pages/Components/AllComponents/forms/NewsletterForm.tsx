export default function NewsletterForm() {
    return (
      <div className="w-full max-w-4xl mx-auto mt-10 p-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Subscribe to Our Newsletter</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-purple-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-500 focus:ring-white">
              Subscribe
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-white opacity-75">Stay updated with our latest news and offers!</p>
      </div>
    )
  }