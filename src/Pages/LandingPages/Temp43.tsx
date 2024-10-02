import React from 'react';
import { Menu, X, Github } from 'lucide-react';

const Temp43 = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/api/placeholder/40/40" alt="CodeRabbit Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-semibold">CodeRabbit</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Sign In</a>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</a>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden">
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">Features</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">Pricing</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">Documentation</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">Blog</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100">Sign In</a>
            <a href="#" className="block py-2 px-4 text-sm bg-blue-600 text-white hover:bg-blue-700">Get Started</a>
          </div>
        )}
      </header>

      <main>
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">AI-Powered Code Reviews</h1>
              <p className="text-xl mb-8">Improve code quality and save time with automated code reviews powered by artificial intelligence.</p>
              <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">Start Free Trial</a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Github size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect Repository</h3>
                <p className="text-gray-600">Link your GitHub repository to CodeRabbit.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <img src="/api/placeholder/32/32" alt="AI Icon" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-gray-600">Our AI analyzes your code for improvements.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <img src="/api/placeholder/32/32" alt="Feedback Icon" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Receive Feedback</h3>
                <p className="text-gray-600">Get actionable insights to improve your code.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Automated Code Reviews', 'Language Support', 'Customizable Rules', 'Integration with CI/CD', 'Team Collaboration', 'Performance Insights'].map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to improve your code quality?</h2>
            <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">Get Started Now</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CodeRabbit</h3>
              <p className="text-gray-400">AI-powered code reviews for better software development.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 CodeRabbit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Temp43;