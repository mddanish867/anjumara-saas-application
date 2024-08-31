import Breadcrumb from "@/BreadCrum/Breadcrum";

function Sql() {
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-500 mb-2">
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
          className="w-full px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300 ease-in-out">
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
        <ul className="space-y-4">
          <li>
            <h4 className="font-semibold text-gray-700">
              1. What is a Primary Key?
            </h4>
            <p className="text-gray-600">
              A primary key is a unique identifier for a record in a table. It
              ensures that each record is unique and not null. A table can have
              only one primary key.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-gray-700">
              2. What is a JOIN in SQL?
            </h4>
            <p className="text-gray-600">
              A JOIN clause is used to combine rows from two or more tables,
              based on a related column between them. Common types of joins are
              INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-gray-700">
              3. What is the difference between DELETE and TRUNCATE?
            </h4>
            <p className="text-gray-600">
              DELETE removes rows from a table based on a condition and can be
              rolled back. TRUNCATE removes all rows from a table without
              logging individual row deletions and cannot be rolled back.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-gray-700">
              4. What is normalization? Explain its types.
            </h4>
            <p className="text-gray-600">
              Normalization is the process of organizing data to minimize
              redundancy. The types of normalization include 1NF, 2NF, 3NF, and
              BCNF, each with specific rules to reduce data redundancy and
              improve data integrity.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sql;
