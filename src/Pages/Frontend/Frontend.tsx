import Breadcrumb from "@/BreadCrum/Breadcrum";

function Frontend() {
  return (
    <div className="mt-20">
      <Breadcrumb/>
      <a
        href="/frontend-interview-preparation"
        className="mt-20 flex flex-col md:flex-row items-center px-4 text-center md:text-left hover:bg-gray-50 rounded-lg transition duration-300 ease-in-out"
      >
        <img
          src="/frontendbanner.avif"
          alt="Frontend Banner"
          className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-4 md:mb-0 rounded-full shadow-md object-contain"
        />
        <div className="md:ml-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#38bdf8] mb-2">
            Frontend Interview Preparation
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            Prepare for frontend interviews by mastering HTML, CSS, JavaScript,
            and modern frameworks. Enhance your skills in building responsive
            and interactive user interfaces.
          </p>
        </div>
      </a>
    </div>
  );
}

export default Frontend;
