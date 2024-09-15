import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from 'marked'; // Markdown parser to convert response
import hljs from 'highlight.js'; // For syntax highlighting
import { Rings } from "react-loader-spinner";
import toast from "react-hot-toast";

function TextToSql() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey || '');
    const [search, setSearch] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [copiedCodeBlock, setCopiedCodeBlock] = useState<HTMLElement | null>(null); // State for tracking the copied block

    // Function to run AI model and get response
    async function aiRun() {
        setLoading(true);
        setAiResponse('');

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
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = await response.text();

            // Convert plain text response to HTML using `marked`
            const htmlResponse = await marked(text);
            setAiResponse(htmlResponse);
        } catch (error) {
            console.error('Error:', error);
            setAiResponse('An error occurred while generating the response.');
            toast.error("An error occurred while generating the response.");
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

        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [copiedCodeBlock]);

   // Function to find and dynamically render code blocks with a copy button
const renderCodeBlocks = (htmlContent: string) => {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;

    const codeBlocks = div.querySelectorAll('pre code');

    codeBlocks.forEach((codeBlock) => {
        // Typecast `codeBlock` to `HTMLElement` to access `innerText`
        const codeElement = codeBlock as HTMLElement;
        const pre = codeElement.closest('pre');
        const code = codeElement.innerText;

        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.classList.add('absolute', 'top-2', 'right-2', 'text-sm', 'bg-[#38bdf8]', 'text-white', 'py-1', 'px-2', 'rounded');
        copyButton.innerText = 'Copy';
        copyButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the document click event
            copyToClipboard(code, copyButton);
        });

        // Add copy button to code block
        pre?.classList.add('relative', 'bg-transparent', 'text-gray-100', 'p-4', 'rounded-md');
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
                    className="border border-[#38bdf8] p-2 flex-1 rounded-md outline-none bg-transparent"
                    name="search"
                    type="text"
                    disabled={loading}
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
                <div className='flex items-center justify-center min-h-screen -mt-32'>
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
                        <h2 className="text-xl font-bold">Glad to help you here is your response!</h2>

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
