import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked"; 
import hljs from "highlight.js"; 
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import { useSqlResponseMutation } from "@/API/ResponseAPI/sqlResponseApi";
import { decodeToken } from "../helper/decodedToke";
import { Search } from "lucide-react";
import Breadcrumb from "@/BreadCrum/Breadcrum";

function TextToSql() {
  const [userId, setUserId] = useState("");

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey || "");
  const [search, setSearch] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedCodeBlock, setCopiedCodeBlock] = useState<HTMLElement | null>(
    null
  ); // State for tracking the copied block

  const [sqlResponseMutation] = useSqlResponseMutation(); // Mutation hook

  useEffect(() => {
    const decodedToken = decodeToken();
    if (decodedToken) {
      setUserId(decodedToken.userId);
    }
  }, []);
  // Function to run AI model and get response
  async function aiRun() {
    setLoading(true);
    setAiResponse("");

    const prompt = `
        The user query is: "${search}". 
        If the query is asking for a SQL query solution, follow these steps:
        1. Generate a brute-force SQL query to solve the problem and mark them down.
        2. Provide an explanation of the brute-force solution step by step, including steps how it works.
        3. Explain the order of execution of the brute-force solution step by steps.
        4. Generate all possible optimized SQL solutions and mark them down one by one.
        5. Provide a detailed explanation of each possible optimized solution step by step and step by step order of execution of the each possible optimized solution.
        6. Generate related interview questions of SQL query asked and mark them down one by one.
        7. Follow the above six steps for the related interview questions of SQL query.`;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      // Convert plain text response to HTML using `marked`
      const htmlResponse = await marked(text);
      setAiResponse(htmlResponse);

      // Call the mutation to save the response to the database
      await saveSqlResponse(htmlResponse);
    } catch (error) {
      console.error("Error:", error);
      setAiResponse("An error occurred while generating the response.");
      toast.error("An error occurred while generating the response.");
    } finally {
      setLoading(false);
    }
  }

  // Mutation to save the SQL response in the database
  const saveSqlResponse = async (aiResponse: string) => {
    try {
      // Call the mutation with the AI response and any additional data (like userId)
      await sqlResponseMutation({
        userId: userId, // Replace with actual userId from your app logic
        response: aiResponse,
        query: search,
      }).unwrap();
    } catch (error) {
      toast.error("Failed to save the response.");
      console.error("Save Error:", error);
    }
  };

  const handleChangeSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    aiRun();
  };

  const copyToClipboard = async (code: string, button: HTMLElement) => {
    try {
      await navigator.clipboard.writeText(code); // Wait for the clipboard operation
      button.innerText = "Copied";
      setCopiedCodeBlock(button); // Track the copied button
      toast.success("Code copied to clipboard!"); // Optional: show toast on success
    } catch (error) {
      toast.error("Failed to copy to clipboard.");
    }
  };

  // Listen for clicks on the document to reset the "Copied" button text
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (copiedCodeBlock && !copiedCodeBlock.contains(e.target as Node)) {
        copiedCodeBlock.innerText = "Copy";
        setCopiedCodeBlock(null);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  // Function to find and dynamically render code blocks with a copy button
  const renderCodeBlocks = (htmlContent: string) => {
    const div = document.createElement("div");
    div.innerHTML = htmlContent;

    const codeBlocks = div.querySelectorAll("pre code");

    codeBlocks.forEach((codeBlock) => {
      const codeElement = codeBlock as HTMLElement;
      const pre = codeElement.closest("pre");
      const code = codeElement.innerText;

      const copyButton = document.createElement("button");
      copyButton.classList.add(
        "absolute",
        "top-2",
        "right-2",
        "text-sm",
        "bg-[#38bdf8]",
        "text-white",
        "py-1",
        "px-2",
        "rounded"
      );
      copyButton.innerText = "Copy";
      copyButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering the document click event
        copyToClipboard(code, copyButton);
      });

      pre?.classList.add(
        "relative",
        "bg-transparent",
        "text-gray-100",
        "p-4",
        "rounded-md"
      );
      pre?.appendChild(copyButton);

      hljs.highlightBlock(codeElement);
    });

    return div.innerHTML;
  };

  return (
    <div className="container p-6 w-full mx-auto mt-20">
       <Breadcrumb />
      
      <div className="mx-auto max-w-md mt-10">
        <form className="mt-6 ">
          <div className="relative max-w-lg ">
            <label className="sr-only" htmlFor="text">
              Search
            </label>

            <input
              className="w-full rounded-full border border-gray-300 dark:text-gray-500 bg-white p-4 pe-32 text-sm font-medium focus:outline-none focus:border-[#38bdf8]"
              name="search"
              type="text"
              placeholder="Search SQL practical interview questions..."
              disabled={loading}
              onChange={handleChangeSearch}
              required
            />

            <button
              onClick={handleSearchClick}
              disabled={loading}
              className={`absolute end-1 top-1/2 -translate-y-1/2 rounded-full  ${
                loading
                  ? "bg-white border border-[#38bdf8] hover:bg-white"
                  : "bg-[#38bdf8] hover:bg-[#30b7f1]"
              } px-5 py-3 text-sm font-medium text-white transition `}
            >
              {loading ? (
                <ColorRing
                  visible={true}
                  height="24"
                  width="24"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "#38bdf8",
                    "#38bdf8",
                    "#38bdf8",
                    "#38bdf8",
                    "#38bdf8",
                  ]}
                />
              ) : (
                "Search"
              )}
            </button>
          </div>
        </form>
      </div>

      {!loading && aiResponse && (
        <div className="bg-transparent p-4 rounded-md mt-10">
          <div className="prose max-w-full">
            <div
              dangerouslySetInnerHTML={{ __html: renderCodeBlocks(aiResponse) }}
              className="prose max-w-none mt-4 justify-items-start"
            />
          </div>
        </div>
      )}

      {!aiResponse && (
        <div className="flex flex-col items-center justify-center min-h-screen -mt-32 text-gray-300">
          {/* Icon */}
          <Search className="w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-16 lg:h-16 mb-4" />

          {/* Text */}
          <h1 className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[36px] text-center">
            Search for SQL interview questions!
          </h1>
        </div>
      )}
    </div>
  );
}

export default TextToSql;
