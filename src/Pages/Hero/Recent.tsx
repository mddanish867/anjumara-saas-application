import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Define navigation with associated components
const navigation = [
  {
    name: "Frontend",
    link: "/frontend",
    img: "/frontendbanner.avif",
    description:
      "Frontend development involves creating the user interface and user experience elements of a web application. Master HTML, CSS, JavaScript, and modern frameworks like React or Angular to build responsive, interactive, and visually appealing web applications. Focus on accessibility, performance, and cross-browser compatibility.",
  },
  {
    name: "Backend",
    link: "/backend",
    img: "/backendbanner.jpeg",
    description:
      "Backend development focuses on server-side logic, databases, and APIs that power web applications. Learn server-side languages such as Node.js, Python, or Java, and master databases like SQL or NoSQL. Understand the importance of security, scalability, and performance in backend architecture.",
  },
  {
    name: "Azure",
    link: "/azure",
    img: "/azurebanner.png",
    description:
      "Azure is a cloud computing service offering infrastructure, platform, and software solutions by Microsoft. Gain expertise in deploying, managing, and scaling applications in the cloud. Learn about Azure services like virtual machines, storage, databases, and DevOps tools, and prepare for Azure certification exams.",
  },
  {
    name: "SQL",
    link: "/sql",
    img: "/sqlbaner.jpg",
    description:
      "SQL (Structured Query Language) is used for managing and manipulating relational databases. Learn how to write complex queries, optimize performance, and manage database transactions. Understand the concepts of normalization, indexing, and database design to ensure data integrity and efficiency.",
  },
  {
    name: "Git",
    link: "/git",
    img: "/gitbanner.png",
    description:
      "Dive deep into Git's version control capabilities, including tracking changes, committing code, and understanding the role of repositories. Master concepts like branching and merging to handle multiple development streams effectively. Learn about different branching strategies such as Git Flow, feature branching, and release branching. Understand how to manage and resolve conflicts that arise during merging, and when to use rebasing versus merging.",
  },
];

function Recent() {
  const [activeTab, setActiveTab] = useState(0); // Initialize with the first tab active
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/section");
  };

  const { name, link, img, description } = navigation[activeTab];

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8 mt-20">
      <div className="max-w-lg">
        <h1 className="text-3xl font-bold sm:text-5xl">
          Beautifully crafted UI components, ready for your next project.
        </h1>
        <p className="mt-2">
          Over 500+ professionally designed, fully responsive, expertly crafted
          component examples you can drop into your Tailwind projects and
          customize to your heart’s content.
        </p>
        <Button
          variant="link"
          className="text-start text-[#38bdf8] -ml-4 mt-4"
          onClick={handleClick}
        >
          Browse all questions <MoveRight className="ml-2" />
        </Button>
      </div>
      <div className="mt-6">
        <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto whitespace-nowrap">
          {navigation.map((item, idx) => (
            <li
              key={idx}
              className={`py-2 border-b-2 flex-shrink-0 cursor-pointer ${
                idx === activeTab
                  ? "border-[#38bdf8] text-[#38bdf8]"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-[#38bdf8]  active:bg-transparent font-medium">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        {/* Render the details of the active tab */}
        <div className="flex flex-col items-center text-center">
          <img
            src={img}
            alt={`${name} Banner`}
            className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 mb-4 rounded-full shadow-md object-contain"
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#38bdf8] mb-2">
            {name}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4">
            {description}
          </p>
          <Button
            variant="link"
            className="text-[#38bdf8]"
            onClick={() => navigate(link)}
          >
            Learn More <MoveRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Recent;
