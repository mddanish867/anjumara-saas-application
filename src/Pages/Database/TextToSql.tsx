import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked"; // Markdown parser to convert response
import hljs from "highlight.js"; // For syntax highlighting
import { Rings } from "react-loader-spinner";

function TextToSql() {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey || "");
  const [search, setSearch] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to run AI model and get response
  async function aiRun() {
    setLoading(true);
    setAiResponse("");

    const prompt = `
        The user query is: "${search}". 
        If the query is asking for a SQL query solution, follow these steps:
        1. Generate a brute-force SQL query to solve the problem and mark them down.
        2. Provide an explanation of the brute-force solution, including how it works.
        3. Explain the order of execution for the brute-force SQL query.
        4. Generate all possible optimized SQL solutions and mark them down.
        5. Provide a detailed explanation and order of execution for the optimizations.
        6. Generate related interview questions about SQL and databases for the query and mark them down.
        7. Generate additional SQL-related questions with explanations based on the original prompt.
        `;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      // Convert plain text response to HTML using `marked`
      const htmlResponse = await marked(text);
      setAiResponse(htmlResponse);
    } catch (error) {
      console.error("Error:", error);
      setAiResponse("An error occurred while generating the response.");
    } finally {
      setLoading(false);
    }
  }

  const handleChangeSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    aiRun();
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    alert("Copied");
  };

  // Function to find and dynamically render code blocks with a copy button
  const renderCodeBlocks = (htmlContent: string) => {
    const div = document.createElement("div");
    div.innerHTML = htmlContent;

    const codeBlocks = div.querySelectorAll("pre code");

    codeBlocks.forEach((codeBlock) => {
      // Typecast `codeBlock` to `HTMLElement` to access `innerText`
      const codeElement = codeBlock as HTMLElement;
      const pre = codeElement.closest("pre");
      const code = codeElement.innerText;

      // Create copy button
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
      copyButton.addEventListener("click", () => copyToClipboard(code));

      // Add copy button to code block
      pre?.classList.add(
        "relative",
        "bg-transparent",
        "text-gray-100",
        "p-4",
        "rounded-md"
      );
      pre?.appendChild(copyButton);

      // Apply syntax highlighting (optional)
      hljs.highlightBlock(codeElement);
    });

    return div.innerHTML;
  };

  return (
    <div className="container p-6 w-full mx-auto mt-20">
      <div className="flex mb-4">
        <input
          placeholder="Enter SQL-related query..."
          className="border border-[#38bdf8] p-2 flex-1 rounded-md"
          name="search"
          type="text"
          onChange={handleChangeSearch}
        />
        <button
          className="ml-4 bg-[#38bdf8] px-4 py-2 rounded-md"
          onClick={handleSearchClick}
          disabled={loading}
        >
          Search
        </button>
      </div>

      {loading && !aiResponse ? (
        <div className="flex items-center justify-center min-h-screen -mt-32">
          <Rings
            visible={true}
            height="180"
            width="180"
            color="#38bdf8"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="bg-transparent p-4 rounded-md">
          <div className="prose max-w-full">
            <h2 className="text-xl font-bold">
              Glad to help you here is your response!
            </h2>

            {/* Dynamically render API response */}
            <div
              dangerouslySetInnerHTML={{ __html: renderCodeBlocks(aiResponse) }}
              className="prose max-w-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TextToSql;
