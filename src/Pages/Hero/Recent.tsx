import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Define navigation with associated components
const navigation = [
  { name: "Frontend", link: "/frontend", img: "/frontendbanner.avif", description: "Frontend development involves creating the user interface and user experience elements of a web application." },
  { name: "Backend", link: "/backend", img: "/backendbanner.jpeg", description: "Backend development focuses on server-side logic, databases, and APIs that power web applications." },
  { name: "Azure", link: "/azure", img: "/azurebanner.png", description: "Azure is a cloud computing service offering infrastructure, platform, and software solutions by Microsoft." },
  { name: "SQL", link: "/sql", img: "/sqlbaner.jpg", description: "SQL (Structured Query Language) is used for managing and manipulating relational databases." },
  { name: "Git", link: "/git", img: "/gitbanner.png", description: "Git is a version control system that allows developers to track changes and collaborate on projects efficiently." },
];

function Recent() {
  const [activeTab, setActiveTab] = useState(0); // Initialize with the first tab active
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/section");
  };

  const { name, link, img, description } = navigation[activeTab];

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8 mt-10 -ml-4">
      <div className="max-w-lg">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Beautifully crafted UI components, ready for your next project.
        </h1>
        <p className="text-gray-600 mt-2">
          Over 500+ professionally designed, fully responsive, expertly crafted
          component examples you can drop into your Tailwind projects and
          customize to your heart’s content.
        </p>
        <Button
          variant="link"
          className="text-start text-blue-500 -ml-4 mt-4"
          onClick={handleClick}
        >
          Browse all components <MoveRight className="ml-2" />
        </Button>
      </div>
      <div className="mt-6">
        <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto whitespace-nowrap">
          {navigation.map((item, idx) => (
            <li
              key={idx}
              className={`py-2 border-b-2 flex-shrink-0 cursor-pointer ${
                idx === activeTab
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-blue-500 hover:bg-gray-50 active:bg-gray-100 font-medium">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        {/* Render the details of the active tab */}
        <div className="flex flex-col items-center text-center">
          <img src={img} alt={`${name} Banner`} className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 mb-4 rounded-full shadow-md object-contain" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-2">{name}</h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4">{description}</p>
          <Button variant="link" className="text-blue-500" onClick={() => navigate(link)}>
            Learn More <MoveRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Recent;
