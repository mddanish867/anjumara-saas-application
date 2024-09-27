import { useState } from "react";
import {
  Menu,
  Globe,
  Search,
  HelpCircle,
  ChevronDown,
  Plus,
} from "lucide-react";

export default function Temp8() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-600 text-white">
      {/* Navigation */}
      <nav className="bg-blue-700 flex items-center justify-between p-4 lg:px-8">
        <div className="flex items-center space-x-4">
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-2">
            <Globe className="h-6 w-6" />
            <span className="font-semibold">English</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Search className="h-6 w-6" />
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Login
          </a>
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-blue-600 px-4 py-8 lg:px-8 hidden sm:block">
        <div className="max-w-6xl mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold mb-2">ActiveCampaign &gt;</h2>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="hover:underline">
                  Features
                </a>
                <a href="#" className="hover:underline">
                  Solutions
                </a>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
                <a href="#" className="hover:underline">
                  Request demo
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-4 py-2 rounded text-black"
              />
              <button className="bg-green-400 text-blue-900 font-semibold px-6 py-2 rounded">
                Try it free &gt;
              </button>
            </div>
          </div>
        </div>
      </footer>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-700 p-4">
          <a href="#" className="block py-2">
            Features
          </a>
          <a href="#" className="block py-2">
            Solutions
          </a>
          <a href="#" className="block py-2">
            Pricing
          </a>
          <a href="#" className="block py-2">
            Request demo
          </a>
          <a href="#" className="block py-2">
            Contact
          </a>
          <a href="#" className="block py-2">
            Login
          </a>
        </div>
      )}

      {/* Main Content */}
      <main className="px-4 py-8 lg:px-8 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-2/3">
              <h2 className="text-xl mb-4">LIMITED TIME OFFER</h2>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Sign-up for ActiveCampaign today & get an additional $500+ in
                value <span className="text-green-400">for free</span>
              </h1>
              <p className="text-xl mb-6">
                This month only, Conversations comes free with new
                ActiveCampaign accounts. Live chat, email, and a unified inbox{" "}
                <b>— all free for a year.</b>
              </p>
              <form className="mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-grow px-4 py-2 h-14 rounded text-black"
                  />
                  <button className="bg-green-400 h-14 text-blue-900 font-semibold px-6 py-2 rounded">
                    Try it free
                  </button>
                </div>
              </form>
              <p className="text-sm">
                Offer ends 4/30/2020. Valid on Plus plans & above.{" "}
                <a href="#" className="underline">
                  Full details.
                </a>
              </p>
            </div>
            <div className="hidden lg:block lg:w-1/3">
              <div className="bg-white text-blue-900 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2 font-semibold">
                  <span className="mr-2 text-blue-600">💬</span>
                  Contact submits Conversation chat form
                </div>
              </div>
              <div className="bg-white text-blue-900 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2 font-semibold">
                  <span className="mr-2 text-blue-600">💲</span>
                  Create deal: New lead
                </div>
              </div>
              <div className="flex justify-center">
                <Plus className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Help Button */}
      <div className="fixed bottom-4 right-4 bg-blue-800 p-3 rounded-full">
        <HelpCircle className="h-6 w-6" />
      </div>
    </div>
  );
}
