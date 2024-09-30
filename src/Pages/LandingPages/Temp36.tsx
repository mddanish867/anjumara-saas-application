import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle } from "lucide-react"

export default function Temp36() {
  return (
    <div className="min-h-screen bg-[#F4F3FF]">
      {/* Notification Banner */}
      <div className="bg-[#7C5CFC] text-white text-center py-1 px-4">
        <p className="text-sm">
          🎉 Exciting news! Our team plans go live next week 🎉
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#7C5CFC"/>
              <path d="M15.5 9C15.5 10.933 13.933 12.5 12 12.5C10.067 12.5 8.5 10.933 8.5 9C8.5 7.067 10.067 5.5 12 5.5C13.933 5.5 15.5 7.067 15.5 9Z" fill="white"/>
            </svg>
            <span className="font-bold text-black">Userview</span>
          </div>
          <div className="hidden md:flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-gray-900">Solutions</a>
            <a href="#" className="hover:text-gray-900">Features</a>
            <a href="#" className="hover:text-gray-900">Customers</a>
            <a href="#" className="hover:text-gray-900">Security</a>
            <a href="#" className="hover:text-gray-900">Pricing</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Log In</a>
            <Button className="bg-[#1A1060] text-white hover:bg-[#2D1B8C]">Sign Up</Button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="text-center py-20">
          <h1 className="text-5xl font-bold text-[#1A1060] mb-4">
            Easy user interviews<br />for better products
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get quality user insights 12x faster and share them in minutes
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <Button className="bg-[#1A1060] text-white hover:bg-[#2D1B8C]">
              Upload Interview
            </Button>
            <Button variant="outline" className="border-[#1A1060] text-[#1A1060] hover:bg-[#F0EEFF]">
              Book Demo
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            Start your 14-day trial with 3 free uploads | No credit card required
          </p>
        </main>

        {/* Product Preview */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <Input className="flex-grow ml-2 bg-gray-100" placeholder="Userview" />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/3 bg-gray-100 h-32 rounded"></div>
            <div className="w-2/3">
              <h3 className="text-lg font-semibold mb-2">Customer Discovery: New Features</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat Button */}
      <Button className="fixed bottom-4 right-4 rounded-full w-12 h-12 bg-blue-500 hover:bg-blue-600">
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </div>
  )
}