'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronDown, MessageSquare, Zap, Mail, Phone, Video, Calendar, MoreHorizontal } from "lucide-react"
import {Link} from "react-router-dom"

export default function HubSpotLanding() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const dropdownItems = {
    products: ['Marketing Hub', 'Sales Hub', 'Service Hub', 'CMS Hub', 'Operations Hub'],
    solutions: ['By Role', 'By Industry', 'By Need', 'Integrations'],
    resources: ['Blog', 'Ebooks', 'Courses', 'Customer Stories', 'Support']
  }

  return (
    <div className=" min-h-screen bg-[#FFF7F1]">
      <header className="bg-white py-4 px-6 flex items-center justify-between" ref={dropdownRef}>
        <div className="flex items-center space-x-8">
          <span className='text-teal-500 font-semibold'>Email Marketing</span>
          <nav className="hidden lg:flex space-x-6">
            {['Products', 'Solutions', 'Resources'].map((item) => (
              <div key={item} className="relative">
                <button
                  onClick={() => toggleDropdown(item.toLowerCase())}
                  className="text-gray-700 hover:text-gray-900 flex items-center"
                >
                  {item} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === item.toLowerCase() && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {dropdownItems[item.toLowerCase() as keyof typeof dropdownItems].map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="" className="text-gray-700 hover:text-gray-900">Pricing</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden lg:inline-flex text-[#FF5C35] hover:text-[#FF5C35] hover:bg-[#FFF7F1]">Get a demo</Button>
          <Button className="bg-[#FF5C35] hover:bg-[#FF5C35]/90 text-white">Get started free</Button>
        </div>
      </header>

      <main className="md:container px-4 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[55%] xl:w-[60%]">
            <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wider">HUBSPOT CUSTOMER PLATFORM</h2>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#2E475D] mb-6 leading-tight">Grow better with HubSpot</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Software that's powerful, not overpowering. Seamlessly connect your data, teams, and customers on one AI-powered customer platform that grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-[#FF5C35] hover:bg-[#FF5C35]/90 text-white text-lg py-6 px-8">Get a demo</Button>
              <Button size="lg" variant="outline" className="text-[#FF5C35] border-[#FF5C35] hover:bg-[#FFF7F1] text-lg py-6 px-8">Get started free</Button>
            </div>
            <p className="mt-4 text-sm text-gray-500">Get a demo of our premium software, or get started with free tools.</p>
          </div>
          <div className="lg:w-[45%] xl:w-[40%] space-y-4 relative">
            <img src="https://img.freepik.com/free-photo/e-mail-global-communications-connection-social-networking-concept_53876-123795.jpg?size=626&ext=jpg&ga=GA1.1.1752490079.1727444996&semt=ais_hybrid" alt="Decorative stars" width={50} height={50} className="absolute -top-8 -left-8" />
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-[#2E475D]">Your Weekly Activity</h3>
              <div className="flex justify-between">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00A4BD]">17</p>
                  <p className="text-xs text-gray-500">EMAILS</p>
                  <p className="text-xs text-[#00A4BD]">▲ 4</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00A4BD]">25</p>
                  <p className="text-xs text-gray-500">CALLS</p>
                  <p className="text-xs text-[#00A4BD]">▲ 7</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00A4BD]">15</p>
                  <p className="text-xs text-gray-500">MEETINGS</p>
                  <p className="text-xs text-[#00A4BD]">▲ 2</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center mb-2">
                <div className="bg-[#00A4BD] rounded-full p-1.5 mr-2">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#2E475D]">AI Chatbot</h3>
              </div>
              <p className="text-sm text-gray-600">
                👋 Want to chat? I'm an AI chatbot here to help you find your way.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-[#FF5C35] rounded-full p-1.5 mr-2">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2E475D]">Repurpose your content with content remix</h3>
                </div>
                <div className="bg-[#EEEEF9] text-[#6B6CFF] text-xs font-semibold py-0.5 px-1.5 rounded">
                  HubSpot AI
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-[#2E475D]">Contacts</h3>
                <span className="text-[#00A4BD] text-sm">Actions ▼</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src="https://img.freepik.com/free-photo/e-mail-global-communications-connection-social-networking-concept_53876-123795.jpg?size=626&ext=jpg&ga=GA1.1.1752490079.1727444996&semt=ais_hybrid" alt="Contact avatar" width={32} height={32} className="rounded-full mr-2" />
                  <div>
                    <p className="font-semibold text-sm text-[#2E475D]">Aisha Saah</p>
                    <p className="text-xs text-gray-500">aisha@company.com</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <Mail className="h-4 w-4 text-[#FF5C35]" />
                  <Phone className="h-4 w-4 text-[#FF5C35]" />
                  <Video className="h-4 w-4 text-[#FF5C35]" />
                  <MessageSquare className="h-4 w-4 text-[#FF5C35]" />
                  <Calendar className="h-4 w-4 text-[#FF5C35]" />
                  <MoreHorizontal className="h-4 w-4 text-[#FF5C35]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg">
            216,000+ customers in over 135 countries grow their businesses with EmailMarketing
          </p>
        </div>
      </footer>
    </div>
  )
}