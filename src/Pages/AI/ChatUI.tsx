import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing menu and close icons

const ChatUI = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen mt-20 bg-white dark:bg-gray-900 transition-colors">
      {/* Left Side: Chat History */}
      <div className={`transition-transform ${isSidebarOpen ? 'w-9/10' : 'w-1/4'} border-r border-gray-300 dark:border-gray-700 p-4 fixed md:relative top-0 left-0 h-full bg-white dark:bg-gray-900 z-20`}>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Aether<span className="text-[#38bdf8]">AI</span>
          </h1>
          <button onClick={toggleSidebar} className="md:hidden p-2 rounded-full bg-[#38bdf8] text-white">
            {isSidebarOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
        <ul className="mt-4 space-y-2">
          {/* Example chat items */}
          <li className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700">Chat Item 1</li>
          <li className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700">Chat Item 2</li>
          <li className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700">Chat Item 3</li>
        </ul>
      </div>

      {/* Right Side: Chat Interface */}
      <div className={`flex-1 flex flex-col p-4 transition-all duration-300 ${isSidebarOpen ? 'ml-9/10' : 'ml-1/4'} md:ml-0`}>
        <div className="flex-1 overflow-auto mb-4">
          <div className="space-y-4">
            {/* Example chat messages */}
            <div className="text-left">
              <p className="bg-blue-100 p-2 rounded dark:bg-blue-500 dark:text-white">User message goes here.</p>
            </div>
            <div className="text-right">
              <p className="bg-green-100 p-2 rounded dark:bg-green-600 dark:text-white">AI response goes here.</p>
            </div>
            {/* Add more messages as needed */}
          </div>
        </div>

        {/* Sticky Input Area */}
        <div className="sticky bottom-0 left-0 flex justify-center items-center mt-4 bg-white dark:bg-gray-900 transition-colors z-10">
          <form className="w-full">
            <div className="relative">
              <label className="sr-only" htmlFor="message">Message</label>

              <input
                className="w-full rounded-full border border-gray-300 bg-white p-4 pe-32 text-sm font-medium focus:outline-none focus:border-[#38bdf8] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                id="message"
                type="text"
                placeholder="Message AetherAI"
              />

              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-[#38bdf8] px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
