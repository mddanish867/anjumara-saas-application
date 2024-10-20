

import { useState } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import AddTemplateForm from './Managetemplates/AddTemplateForm'
import EditTemplateForm from './Managetemplates/EditTemplateFormProps '
import DeleteTemplate from './Managetemplates/DeleteTemplate'
import AddComponents from './ManageComponents/AddComponents'
import DeleteComponent from './ManageComponents/DeleteComponent'

const docSections = [
  {
    title: 'Manage Templates',
    items: ['Add New Templates', 'Remove Templates'],
  },
  {
    title: 'Manage Components',
    items: ['Add New Components', 'Remove Components'],
  },
  {
    title: 'Manage Apis',
    items: ['Add New Apis', 'Remove Apis'],
  },
  {
    title: 'Manage Users',
    items: ['Remove Users', 'Summary', 'Sales'],
  },
]

export default function ManageApplication() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Add New Templates')
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
        className={`bg-white dark:bg-gray-950 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${activeSection === 'Remove Templates' ? 'w-[440px]' : 'w-64'} 
        fixed lg:relative lg:translate-x-0 z-10`}
        
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
      <main className="flex-grow p-6 overflow-y-auto border">
        <div className="w-full">
          <div className="flex  mb-6">
            <h1 className="md:text-xl font-bold text-lg text-gray-900 dark:text-gray-50">{activeSection}</h1>
            <button
              onClick={toggleSidebar}
              className="lg:hidden bg-white dark:bg-transparent p-2 rounded-md shadow-md"
            >
              {!isOpen &&  <Menu className="h-6 w-6 text-[#38bdf8]" />}
             
            </button>
          </div>
          <div className="prose max-w-none">
            {activeSection === "Add New Templates" && <AddTemplateForm/>}
            {activeSection === "Edit Templates" && <EditTemplateForm/>}
            {activeSection === "Remove Templates" && <DeleteTemplate setActiveSection={setActiveSection}/>}
            {activeSection === "Add New Components" && <AddComponents/>}
            {activeSection === "Remove Components" && <DeleteComponent setActiveSection={setActiveSection}/>}

          </div>
        </div>
      </main>
    </div>
  )
}