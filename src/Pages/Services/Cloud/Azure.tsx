import Breadcrumb from "@/BreadCrum/Breadcrum";

function Azure() {
  return (
    <div className="container mt-20">
      <Breadcrumb />
      <a
        href="/azure-interview-preparation"
        className="mt-20 flex flex-col md:flex-row items-center px-4 text-center md:text-left hover:bg-blue-100 dark:hover:bg-blue-800 rounded-lg transition duration-300 ease-in-out"
      >
        <img
          src="/azurebanner.png"
          alt="Azure Banner"
          className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-4 md:mb-0 rounded-full shadow-md object-contain"
        />
        <div className="md:ml-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#38bdf8] dark:text-[#38bdf8] mb-2">
            Azure Interview Preparation
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300">
            Prepare for your Azure interviews with in-depth knowledge of cloud
            computing, DevOps practices, and the latest Azure services. Master
            key concepts and ace your interview!
          </p>
        </div>
      </a>
    </div>
  );
}

export default Azure;
