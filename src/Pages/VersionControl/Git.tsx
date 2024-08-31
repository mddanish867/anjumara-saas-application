import Breadcrumb from "@/BreadCrum/Breadcrum";

function Git() {
  return (
   <div className="mt-20">
    <Breadcrumb/>
     <a 
      href="/git-interview-preparation" 
      className="mt-20 flex flex-col md:flex-row items-center px-4 text-center md:text-left hover:bg-gray-50 rounded-lg transition duration-300 ease-in-out"
    >
      <img
        src="/gitbanner.png"
        alt="Git Banner"
        className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-4 md:mb-0 rounded-full shadow-md object-contain"
      />
      <div className="md:ml-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-2">Git Interview Preparation</h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">
          Prepare for Git interviews with a solid understanding of version control, branching, merging, and collaboration techniques.
        </p>
      </div>
    </a>
   </div>
  )
}

export default Git;
