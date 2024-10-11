import React, { useState } from 'react'
import { Search, ChevronDown, ArrowUp, Bell, Settings, Phone } from 'lucide-react'

const NavItem = ({ children, dropdown }: { children: React.ReactNode; dropdown?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <li className="relative text-white hover:text-gray-300 cursor-pointer">
      <div onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        {children}
        {dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </div>
      {isOpen && dropdown && (
        <div className="absolute top-full left-0 bg-gray-800 py-2 px-4 rounded shadow-lg">
          {dropdown}
        </div>
      )}
    </li>
  )
}

const NavDropdown = ({ title, items }: { title: string; items: string[] }) => (
  <NavItem dropdown={
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="whitespace-nowrap">{item}</li>
      ))}
    </ul>
  }>
    {title}
  </NavItem>
)

const TabButton = ({ children, active = false, onClick }: { children: React.ReactNode; active?: boolean; onClick: () => void }) => (
  <button
    className={`px-4 py-2 font-medium ${
      active ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
)

const EmailRow = ({ title, status, date, openRate }: { title: string; status: string; date: string; openRate: string }) => (
  <tr className="border-b border-gray-200">
    <td className="py-2 px-4">
      <input type="checkbox" className="mr-2" />
    </td>
    <td className="py-2 px-4">
      <h3 className="text-blue-600 font-medium">{title}</h3>
      <p className="text-sm text-gray-500">
        {status === 'Draft' && <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs mr-2">Draft</span>}
        {status === 'Scheduled' && <span className="bg-yellow-200 text-yellow-700 rounded-full px-2 py-1 text-xs mr-2">Scheduled</span>}
        {status === 'Sent' && <span className="bg-green-200 text-green-700 rounded-full px-2 py-1 text-xs mr-2">Sent</span>}
        {status === 'Archived' && <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs mr-2">Archived</span>}
        Updated {date} by John Desyllas
      </p>
    </td>
    <td className="py-2 px-4 text-right">{date}</td>
    <td className="py-2 px-4 text-right">{openRate}</td>
  </tr>
)

export default function EmailMarketDashboard() {
  const [activeTab, setActiveTab] = useState('Manage')
  const [emailType, setEmailType] = useState('All emails')
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false)
  const [isManageColumnsOpen, setIsManageColumnsOpen] = useState(false)
  const [columns, setColumns] = useState(['Title', 'Status', 'Date', 'Open Rate'])
  const [isExportModalOpen, setIsExportModalOpen] = useState(false)

  const emailTypes = ['All emails', 'Draft', 'Scheduled', 'Sent', 'Archived']

  const handleManageColumns = (column: string) => {
    if (columns.includes(column)) {
      setColumns(columns.filter(c => c !== column))
    } else {
      setColumns([...columns, column])
    }
  }

  const filteredEmails = [
    { title: "New email", status: "Draft", date: "May 17, 2023", openRate: "0%" },
    { title: "Test Email", status: "Sent", date: "May 17, 2023", openRate: "0%" },
    { title: "Upcoming Campaign", status: "Scheduled", date: "May 18, 2023", openRate: "N/A" },
    { title: "Old Newsletter", status: "Archived", date: "May 10, 2023", openRate: "25%" },
  ].filter(email => emailType === 'All emails' || email.status === emailType)

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-8 mb-4 lg:mb-0">
            <svg className="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <ul className="flex flex-wrap space-x-6">
              <NavDropdown title="Contacts" items={['List', 'Segments', 'Import']} />
              <NavDropdown title="Conversations" items={['Inbox', 'Chatflows', 'Templates']} />
              <NavDropdown title="Marketing" items={['Email', 'Ads', 'Social']} />
              <NavDropdown title="Sales" items={['Deals', 'Tasks', 'Documents']} />
              <NavDropdown title="Service" items={['Tickets', 'Knowledge Base', 'Customer Feedback']} />
              <NavDropdown title="Automation" items={['Workflows', 'Sequences', 'Bots']} />
              <NavDropdown title="Reports" items={['Analytics', 'Dashboards', 'Custom Reports']} />
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-400" />
            <ArrowUp className="h-5 w-5 text-gray-400" />
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zm-5-7v4h4v-4h-4z" />
            </svg>
            <Bell className="h-5 w-5 text-gray-400" />
            <Settings className="h-5 w-5 text-gray-400" />
            <Phone className="h-5 w-5 text-gray-400" />
            <img src="/placeholder.svg?height=32&width=32" alt="User" className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </nav>
      <main className="container mx-auto mt-8 px-4">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700 mb-4 lg:mb-0">Marketing Email</h1>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Create email
          </button>
        </div>
        <div className="mb-6">
          <div className="flex flex-wrap space-x-4 border-b border-gray-200">
            <TabButton active={activeTab === 'Manage'} onClick={() => setActiveTab('Manage')}>Manage</TabButton>
            <TabButton active={activeTab === 'Analyze'} onClick={() => setActiveTab('Analyze')}>Analyze</TabButton>
            <TabButton active={activeTab === 'Health'} onClick={() => setActiveTab('Health')}>Health</TabButton>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow">
          <div className="flex flex-wrap justify-between items-start p-4 border-b border-gray-200">
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <div className="flex space-x-2 mb-4">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded">List</button>
                <button className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded">Folders</button>
              </div>
              <div className="space-y-2">
                {emailTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setEmailType(type)}
                    className={`block w-full text-left px-4 py-2 rounded ${
                      emailType === type ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-3/4">
              <div className="flex flex-wrap items-center space-x-4 mb-4">
                <div className="relative mb-4 lg:mb-0">
                  <input
                    type="text"
                    placeholder="Search for emails"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <div className="relative mb-4 lg:mb-0">
                  <button
                    onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                    className="flex items-center text-blue-600"
                  >
                    <span className="mr-2 text-gray-600">Type:</span>
                    {emailType}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isTypeDropdownOpen && (
                    <div className="absolute top-full left-0 bg-white border border-gray-200 rounded shadow-lg z-10">
                      {emailTypes.map((type, index) => (
                        <button
                          key={index}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => {
                            setEmailType(type)
                            setIsTypeDropdownOpen(false)
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setIsManageColumnsOpen(true)}
                  className="text-blue-600 flex items-center mb-4 lg:mb-0"
                >
                  <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                  </svg>
                  Manage columns
                </button>
                <button
                  onClick={() => setIsExportModalOpen(true)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded"
                >
                  Export
                </button>
              </div>
              {activeTab === 'Manage' && (
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <input type="checkbox" className="mr-2" />
                        </th>
                        {columns.includes('Title') && (
                          <th className="py-2 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                          </th>
                        )}
                        {columns.includes('Status') && (
                          <th className="py-2 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        )}
                        {columns.includes('Date') && (
                          <th className="py-2 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Updated
                          </th>
                        )}
                        {columns.includes('Open Rate') && (
                          <th className="py-2 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Open Rate
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredEmails.map((email, index) => (
                        <EmailRow key={index} {...email} />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === 'Analyze' && (
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-4">Email Analytics</h2>
                  <p>Here you can view and analyze your email campaign performance.</p>
                  {/* Add analytics content here */}
                </div>
              )}
              {activeTab === 'Health' && (
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-4">Email Health</h2>
                  <p>Check the overall health and deliverability of your email campaigns.</p>
                  {/* Add health check content here */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <div className="flex items-start">
            <svg className="h-6 w-6 text-orange-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">Remove the HubSpot logo from your emails.</h3>
              <p className="text-gray-600">Unlock premium features with Marketing Hub Starter.</p>
            </div>
            <button className="ml-auto px-4 py-2 bg-gray-100 text-gray-700 rounded">Upgrade</button>
          </div>
        </div>
      </main>

      {isManageColumnsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold mb-4">Manage Columns</h3>
            {['Title', 'Status', 'Date', 'Open Rate'].map((column) => (
              <div key={column} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={column}
                  checked={columns.includes(column)}
                  onChange={() => handleManageColumns(column)}
                  className="mr-2"
                />
                <label htmlFor={column}>{column}</label>
              </div>
            ))}
            <button
              onClick={() => setIsManageColumnsOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isExportModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold mb-4">Export Options</h3>
            <p>Select the format for your export:</p>
            <div className="mt-4 space-y-2">
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                Export as CSV
              </button>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                Export as Excel
              </button>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                Export as PDF
              </button>
            </div>
            <button
              onClick={() => setIsExportModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}