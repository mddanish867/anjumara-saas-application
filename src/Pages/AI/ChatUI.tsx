import { useState, useEffect } from "react"
import { FiX, FiPlus } from "react-icons/fi"
import { AlignLeft, Loader, Send, Check, Copy } from "lucide-react"
import { Link } from "react-router-dom"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { marked } from "marked"
import toast from "react-hot-toast"
import { decodeToken } from "../helper/decodedToke"
import { useWebResponseMutation } from "@/API/ResponseAPI/webResponseAPI"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import he from "he"

SyntaxHighlighter.registerLanguage('jsx', jsx)

interface UserMessage {
  message: string
  response: string
}

export default function FrontendCodeGeneration() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [userId, setUserId] = useState("")
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  const genAI = new GoogleGenerativeAI(apiKey || "")
  const [search, setSearch] = useState("")
  const [aiResponse, setAiResponse] = useState<string>("")
  const [userMessages, setUserMessages] = useState<UserMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [currentChatIndex, setCurrentChatIndex] = useState<number | null>(null)
  const [webResponseMutation] = useWebResponseMutation()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  useEffect(() => {
    const decodedToken = decodeToken()
    if (decodedToken) {
      setUserId(decodedToken.userId)
    }
  }, [])

  async function aiRun() {
    setLoading(true)
    setAiResponse("")

    const prompt = `Generate a React component with Tailwind CSS classes for the following UI: "${search}"`

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" })
      const result = await model.generateContent(prompt)
      const response = await result.response

      const text = await response.text()

      const htmlResponse = marked(text)

      if (typeof htmlResponse === 'string') {
        setAiResponse(htmlResponse)

        await saveWebResponse(htmlResponse)

        setUserMessages((prev) => [
          ...prev,
          { message: search, response: htmlResponse },
        ])
      } else {
        throw new Error("Unexpected response format")
      }
    } catch (error) {
      console.error("Error:", error)
      const errorMessage = "An error occurred while generating the response."
      setAiResponse(errorMessage)
      toast.error(errorMessage)
    } finally {
      setLoading(false)
      setSearch("")
    }
  }

  const saveWebResponse = async (aiResponse: string) => {
    try {
      await webResponseMutation({
        userId: userId,
        chatHeader: search.slice(0, 20),
        response: aiResponse,
        query: search,
      }).unwrap()
    } catch (error) {
      toast.error("Failed to save the response.")
      console.error("Save Error:", error)
    }
  }

  const handleNewChat = () => {
    setCurrentChatIndex(null)
    setSearch("")
    setAiResponse("")
  }

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault()
    aiRun()
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleCopy = (text: string, index: number) => {
    const generatedCode = he.decode(text);
    navigator.clipboard.writeText(generatedCode).then(() => {
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    })
  }

  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors">
      {/* Sidebar */}
      <div
        className={`transition-transform transform ${
          isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full"
        } fixed top-0 left-0 h-full bg-white dark:bg-gray-900 z-20 p-4 md:relative md:translate-x-0 md:w-64 md:border-r border-gray-300 dark:border-gray-700`}
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
            <button
              onClick={handleNewChat}
              className="ml-2 p-1 rounded-full bg-[#38bdf8] text-white"
              aria-label="New Chat"
            >
              <FiPlus className="w-4 h-4" />
            </button>
          </h2>
          {userMessages.length > 0 ? (
            <ul className="space-y-2 mt-2 overflow-auto h-[75vh]">
              {userMessages.map((chat, index) => (
                <li key={index}>
                  <div
                    className={`p-2 mb-2 bg-transparent rounded shadow cursor-pointer ${
                      currentChatIndex === index ? 'bg-[#38bdf8] text-white' : ''
                    }`}
                    onClick={() => {
                      setCurrentChatIndex(index)
                      setAiResponse(chat.response)
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

      {/* Main content */}
      <div className="flex-1 flex flex-col p-4 overflow-auto">
        <div className="flex-1 w-full mb-4 space-y-6">
          {userMessages.map((chat, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-gray-800 dark:text-green-100 p-6 mb-4 bg-gray-100 rounded-md dark:bg-gray-800 break-words">
                {chat.message}
              </div>
              <div className="relative p-6 mb-4 rounded-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 break-words">
                <SyntaxHighlighter
                  language="jsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: '1rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                  }}
                >
                  {he.decode(chat.response)}
                </SyntaxHighlighter>
                <button
                  onClick={() => handleCopy(chat.response, index)}
                  className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="Copy to Clipboard"
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
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
                {loading && !aiResponse ? (
                  <Loader className="size-4 mr-2 animate-spin" />
                ) : (
                  <Send className="size-4"/>
                )}
              </button>
            </div>
          </form>
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
    </div>
  )
}