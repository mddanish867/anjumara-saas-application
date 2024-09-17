import { useState } from "react";
import Breadcrumb from "@/BreadCrum/Breadcrum";
import sql from "@/Data/sql.json";
import Pagination from "../../Pagination/Pagination";
import html2pdf from "html2pdf.js";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "../helper/decodedToke";
import { useLocation } from "react-router-dom";

// Define the types for SQL data
interface SQLQuestionAnswer {
  question: string;
  answer: string;
}

interface SQLData {
  Basic: SQLQuestionAnswer[];
  Intermediate: SQLQuestionAnswer[];
  Advanced: SQLQuestionAnswer[];
}

// Define the type for the props of TextBlock component
interface TextBlockProps {
  text: string;
}

function TextBlock({ text }: TextBlockProps) {
  return (
    <div className="relative">
      <p>{text}</p>
    </div>
  );
}

function Sql() {
  const navigate = useNavigate();
  const location = useLocation();

  const decodedToken = decodeToken();

  const [searchQuery, setSearchQuery] = useState<string>("");
  // const [generatedContent, setGeneratedContent] = useState<any>(null);
  // const [loading, setLoading] = useState<boolean>(false);

  // Cast the imported json data to the SQLData type
  const sqlData = sql as SQLData;

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Calculate the total number of pages
  const totalItems = Object.values(sqlData).flat().length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get the current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = Object.values(sqlData)
    .flat()
    .slice(startIndex, endIndex);

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    if (!decodedToken) {
      navigate("/signin");
    } else {
      const hiddenElement = document.getElementById("all-content-to-download");

      // Temporarily display the hidden content
      if (hiddenElement) hiddenElement.style.display = "block";

      const element = document.getElementById("all-content-to-download");
      html2pdf()
        .from(element)
        .set({
          margin: 1,
          filename: "sql-interview-preparation.pdf",
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        })
        .save()
        .then(() => {
          // Hide the content again after PDF generation
          if (hiddenElement) hiddenElement.style.display = "none";
        });
    }
  };

  // Function to render all questions
  const renderAllQuestions = () => {
    return Object.entries(sqlData).map(([level, questions], levelIndex) => (
      <div key={levelIndex}>
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          {level} SQL Interview Questions
        </h3>
        <div className="w-full space-y-4">
          {questions.map((item: SQLQuestionAnswer, index: number) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {item.question}
              </h4>
              <TextBlock text={item.answer} />
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const handleButtonClick = () => {
    if (decodedToken) {
      navigate(`${location.pathname}/texttosql`);
    } else {
      navigate("/signin");
    }
  };

  // // Function to handle the search and OpenAI API call
  const handleSearch = async () => {
    //   if (searchQuery.trim() === '') return;

    //   setLoading(true);
    //   try {
    //     const content = await generateSQLContent(searchQuery);
    //     setGeneratedContent(content);
    //   } catch (error) {
    //     console.error('Error generating SQL content:', error);
    //     setGeneratedContent(null);
    //   } finally {
    //     setLoading(false);
    //   }

   
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-20 md:px-8">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Content to be downloaded */}
      <div id="content-to-download">
        {/* Top Section: Title and Image */}
        <div className="w-full mt-8">
          {/* Header Image */}
          <img
            src="/sqlbaner.jpg"
            alt="SQL Banner"
            className="w-full h-64 object-cover rounded-md shadow-md"
          />
        </div>

        {/* SQL Interview Tips, Search Input, and Download Button */}
        <div className="mt-8 flex flex-col md:flex-row md:justify-between">
          <div className="md:flex-grow">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              SQL Interview Preparation Tips
            </h3>
            <p className="text-sm md:text-base lg:text-lg mb-4 text-gray-600 dark:text-gray-300">
              SQL interviews often focus on your ability to understand and write
              efficient queries. Be prepared to discuss database normalization,
              indexing, query optimization, and SQL joins. Practice writing
              queries that retrieve data from multiple tables and understand the
              implications of different SQL operations on performance.
            </p>

            <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg mt-8">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Want to Prepare with AI?
              </h4>
              <p className="text-sm md:text-base lg:text-lg mb-4 text-gray-700 dark:text-gray-300">
                Leverage cutting-edge AI tools to help you prepare efficiently
                for your SQL interviews. Generate practice questions, optimize
                queries, and receive personalized feedback based on your input.
                Whether you're looking for basic, intermediate, or advanced SQL
                practice, our AI-powered preparation assistant has got you
                covered.
              </p>
              <button
                onClick={handleButtonClick}
                className="bg-[#38bdf8] text-white px-4 py-2 rounded-lg hover:bg-[#32a7d8] transition duration-300 ease-in-out"
              >
                Start Preparing with AI
              </button>
            </div>

            <div className="mx-auto max-w-md mt-20">
              <form className="mt-6">
                <div className="relative max-w-lg">
                  <input
                    required
                    className="w-full rounded-full border bg-white dark:bg-gray-700 p-4 pe-32 text-sm font-medium text-gray-900 dark:text-gray-200 focus:outline-none focus:border-[#38bdf8]"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Common SQL interview questions..."
                  />

                  <button
                    onClick={handleSearch}
                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-[#38bdf8] px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={handleDownloadPDF}
              className="bg-[#38bdf8] text-white px-4 py-2 w-full md:w-40 rounded-lg hover:bg-[#32a7d8] transition duration-300 ease-in-out"
            >
              Download PDF
            </button>
          </div>
        </div>

        {/* Render Generated Content */}
        {/* {loading && <p>Loading...</p>}
        {generatedContent && (
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Generated SQL Content</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-2">SQL Query:</h4>
                <TextBlock text={generatedContent.sqlQuery} />
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-2">Optimized Query:</h4>
                <TextBlock text={generatedContent.optimizedQuery} />
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-2">Brute Force Query:</h4>
                <TextBlock text={generatedContent.bruteForceQuery} />
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-2">Explanation:</h4>
                <TextBlock text={generatedContent.explanation} />
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-2">Execution Order:</h4>
                <TextBlock text={generatedContent.executionOrder} />
              </div>
            </div>
          </div>
        )} */}

        {/* List of Interview Questions and Answers */}
        <div className="mt-20">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Common SQL Interview Questions
          </h3>
          <div className="w-full space-y-4">
            {paginatedData.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.question}
                </h4>
                <TextBlock text={item.answer} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hidden content for PDF download */}
      <div id="all-content-to-download" style={{ display: "none" }}>
        {renderAllQuestions()}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Sql;
