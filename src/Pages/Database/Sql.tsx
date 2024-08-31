import { useState } from 'react';
import Breadcrumb from "@/BreadCrum/Breadcrum";
import sql from "@/Data/sql.json";
import Pagination from '../../Pagination/Pagination';

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
      <p className="text-gray-800">{text}</p>
    </div>
  );
}

function Sql() {
  // Cast the imported json data to the SQLData type
  const sqlData = sql as SQLData;

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 15;

  // Calculate the total number of pages
  const totalItems = Object.values(sqlData).flat().length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get the current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = Object.values(sqlData).flat().slice(startIndex, endIndex);

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-20 md:px-8">
      {/* Breadcrumb */}
      <Breadcrumb />
      {/* Top Section: Title and Image */}
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="/sqlbaner.jpg"
          alt="SQL Banner"
          className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-4 md:mb-0 rounded-full shadow-md object-contain"
        />
        <div className="md:ml-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#38bdf8] mb-2">
            SQL Interview Preparation
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg">
            Enhance your SQL skills with detailed knowledge of database design,
            query optimization, and advanced SQL concepts. Get ready to impress
            in your SQL interviews!
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="mt-8 flex">
        <input
          type="text"
          placeholder="Search interview questions..."
          className="w-full px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
        />
        <button className="bg-[#38bdf8] text-white px-4 py-2 rounded-r-lg hover:bg-[#38bdf8] transition duration-300 ease-in-out">
          Search
        </button>
      </div>

      {/* SQL Interview Tips */}
      <div className="mt-8">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          SQL Interview Preparation Tips
        </h3>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4">
          SQL interviews often focus on your ability to understand and write
          efficient queries. Be prepared to discuss database normalization,
          indexing, query optimization, and SQL joins. Practice writing queries
          that retrieve data from multiple tables and understand the
          implications of different SQL operations on performance.
        </p>
      </div>

      {/* List of Interview Questions and Answers */}
      <div className="mt-8">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Common SQL Interview Questions
        </h3>
        <div className="w-full space-y-4">
          {paginatedData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {item.question}
              </h4>
              <TextBlock text={item.answer} />
            </div>
          ))}
        </div>
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
