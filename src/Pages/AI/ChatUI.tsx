import { useState, useEffect } from "react";
import { FiX, FiPlus } from "react-icons/fi"; 
import { AlignLeft, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked";
import toast from "react-hot-toast";
import { decodeToken } from "../helper/decodedToke";
import { useWebResponseMutation } from "@/API/ResponseAPI/webResponseAPI";

interface UserMessage {
  message: string;
  response: string; // Change responses to a single response
}

const FrontendCodeGeneration = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey || "");
  const [search, setSearch] = useState("");
  const [aiResponse, setAiResponse] = useState<string>("");
  const [userMessages, setUserMessages] = useState<UserMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentChatIndex, setCurrentChatIndex] = useState<number | null>(null);
  const [webResponseMutation] = useWebResponseMutation(); // Mutation hook

  useEffect(() => {
    const decodedToken = decodeToken();
    if (decodedToken) {
      setUserId(decodedToken.userId);
    }
  }, []);

  async function aiRun() {
    setLoading(true);
    setAiResponse("");
  
    const prompt = `Based on the requirement: "${search}", generate a list of typical components/pages that might be needed for this type of application.`;
  
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
  
      const text = await response.text();
  
      const htmlResponse = marked(text);
      
      // Ensure htmlResponse is a string
      if (typeof htmlResponse === 'string') {
        setAiResponse(htmlResponse);
  
        // Call the mutation to save the response to the database
      await saveWebResponse(htmlResponse);

        // Add the user message and AI response to the chat history
        setUserMessages((prev) => [
          ...prev,
          { message: search, response: htmlResponse }, // Store as an object
        ]);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = "An error occurred while generating the response.";
      setAiResponse(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      setSearch(""); // Clear the input field after generating the response
    }
  }

  // Mutation to save the web response in the database
  const saveWebResponse = async (aiResponse: string) => {
    try {
      // Call the mutation with the AI response and any additional data (like userId)
      await webResponseMutation({
        userId: userId,
        chatHeader:search.slice(0, 20),
        response: aiResponse,
        query: search,
      }).unwrap();
    } catch (error) {
      toast.error("Failed to save the response.");
      console.error("Save Error:", error);
    }
  };

  const handleNewChat = () => {
    setCurrentChatIndex(null);
    setSearch("");
    setAiResponse("");
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    aiRun();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Sidebar */}
      <div
        className={`transition-transform transform ${
          isSidebarOpen ? "translate-x-0 w-full" : "-translate-x-full"
        } fixed top-0 left-0 h-full bg-white dark:bg-gray-900 z-20 p-4 md:relative md:translate-x-0 md:w-1/4 md:border-r border-gray-300 dark:border-gray-700 md:block`}
        role="complementary"
      >
        <div className="flex justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-semibold">
              Aether<span className="text-[#38bdf8]">AI</span>
            </h1>
          </Link>

          {isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-full bg-[#38bdf8] text-white"
              aria-label="Close Sidebar"
            >
              <FiX className="w-6 h-6" />
            </button>
          )}
        </div>

        <div className="mt-4">
          <h2 className="flex justify-between items-center font-bold">
            User Messages
            <button
              onClick={handleNewChat}
              className="ml-2 p-1 rounded-full bg-[#38bdf8] text-white"
              aria-label="New Chat"
            >
              <FiPlus className="w-4 h-4" />
            </button>
          </h2>
          {userMessages.length > 0 ? (
            <ul className="space-y-2 mt-2">
              {userMessages.map((chat, index) => (
                <li key={index}>
                  <div
                    className={`p-2 mb-2 bg-transparent rounded shadow cursor-pointer ${
                      currentChatIndex === index ? 'bg-[#38bdf8] text-white' : ''
                    }`}
                    onClick={() => {
                      setCurrentChatIndex(index);
                      setAiResponse(chat.response); // Display the selected AI response
                    }}
                    role="button"
                    aria-pressed={currentChatIndex === index}
                  >
                    {chat.message}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No chat started...</p>
          )}
        </div>
      </div>

      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 p-2 rounded-full text-[#38bdf8] bg-transparent md:hidden"
          aria-label="Open Sidebar"
        >
          <AlignLeft className="w-6 h-6" />
        </button>
      )}

      <div className={`flex-1 flex flex-col p-4 transition-all duration-300 mt-14 md:mt-0 ${isSidebarOpen ? "hidden md:flex" : "flex"}`}>
        <div className="flex-1 overflow-auto mb-4">
          <div className="space-y-6">
          {userMessages.map((chat, index) => (
      <div key={index} className="flex flex-col">
        <div className=" text-gray-800 dark:text-green-100 p-6 mb-10 bg-gray-100 rounded-md dark:bg-gray-800">{chat.message}</div>
        <div 
          className="p-10 mb-4 rounded-lg  text-gray-800 dark:text-gray-200"
          dangerouslySetInnerHTML={{ __html: chat.response }} 
        />
      </div>
    ))}
          </div>
        </div>

        <div className="sticky bottom-0 left-0 flex justify-center items-center mt-4 bg-white dark:bg-gray-900 transition-colors z-10">
          <form className="w-full" onSubmit={handleSearchClick}>
            <div className="relative">
              <input
                className="w-full rounded-full border border-gray-300 bg-white p-4 pe-32 text-sm font-medium focus:outline-none focus:border-[#38bdf8] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                id="message"
                type="text"
                placeholder="Describe your application"
                value={search}
                onChange={handleChangeSearch}
                required
                aria-label="Search for application"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-[#38bdf8] px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                aria-label="Search"
              >
                {loading ? (
                   <Loader className="size-6 mr-2 animate-spin" />
                ) : (
                  "Search"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FrontendCodeGeneration;
