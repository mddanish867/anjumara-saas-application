

import { useState } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

const docSections = [
  {
    title: 'Manage Templates',
    items: ['Add New Templates', 'Edit Templates', 'Remove Templates'],
  },
  {
    title: 'Manage Components',
    items: ['Add New Components', 'Edit Component', 'Remove Components'],
  },
  {
    title: 'Manage Apis',
    items: ['Add New Apis', 'Edit Api', 'Remove Apis'],
  },
  {
    title: 'Manage Users',
    items: ['Remove Users', 'Summary', 'Sales'],
  },
]

export default function ManageApplication() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Introduction')
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(item => item !== section)
        : [...prev, section]
    )
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex h-screen dark:bg-transparent mt-20">
      {/* Sidebar */}
      <aside
        className={`bg-white dark:bg-transparent w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed lg:relative lg:translate-x-0 z-10`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Admin Panel</h2>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X className="h-6 w-6 text-gray-600 dark:text-gray-50" />
          </button>
        </div>
        <nav className="flex-grow overflow-y-auto">
          {docSections.map((section) => (
            <div key={section.title} className="py-2">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-600dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span>{section.title}</span>
                {expandedSections.includes(section.title) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {expandedSections.includes(section.title) && (
                <ul className="ml-4">
                  {section.items.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => setActiveSection(item)}
                        className={`block w-full px-4 py-2 text-sm ${
                          activeSection === item
                            ? 'text-blue-600 bg-blue-50 dark:bg-gray-800'
                            : 'text-gray-600 hover:bg-transparent dark:bg-transparent'
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-grow p-6 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">{activeSection}</h1>
            <button
              onClick={toggleSidebar}
              className="lg:hidden bg-white dark:bg-transparent p-2 rounded-md shadow-md"
            >
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-50" />
            </button>
          </div>
          <div className="prose max-w-none">
            <p className="mb-4">
              This is the documentation for the {activeSection} section. Replace this content with your actual documentation.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Subsection 1</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Subsection 2</h2>
            <p className="mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}