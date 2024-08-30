function Azure() {
  return (
    <a 
      href="/azure-interview-preparation" 
      className="mt-20 flex flex-col md:flex-row items-center px-4 text-center md:text-left hover:bg-blue-50 rounded-lg transition duration-300 ease-in-out"
    >
      <img
        src="/azurebanner.png"
        alt="Azure Banner"
        className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-4 md:mb-0 rounded-full shadow-md object-contain"
      />
      <div className="md:ml-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-2">Azure Interview Preparation</h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">
          Prepare for your Azure interviews with in-depth knowledge of cloud computing, DevOps practices, and the latest Azure services. Master key concepts and ace your interview!
        </p>
      </div>
    </a>
  )
}

export default Azure;
