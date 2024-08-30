function Sql() {
  return (
    <a 
      href="/sql-interview-preparation" 
      className="mt-20 flex flex-col md:flex-row items-center px-4 text-center md:text-left hover:bg-gray-50 rounded-lg transition duration-300 ease-in-out"
    >
      <img
        src="/sqlbaner.jpg"
        alt="SQL Banner"
        className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-4 md:mb-0 rounded-full shadow-md object-contain"
      />
      <div className="md:ml-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-500 mb-2">SQL Interview Preparation</h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">
          Enhance your SQL skills with detailed knowledge of database design, query optimization, and advanced SQL concepts. Get ready to impress in your SQL interviews!
        </p>
      </div>
    </a>
  )
}

export default Sql;
