import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import AddTemplateForm from "./Managetemplates/AddTemplateForm";
import DeleteTemplate from "./Managetemplates/DeleteTemplate";
import AddComponents from "./ManageComponents/AddComponents";
import DeleteComponent from "./ManageComponents/DeleteComponent";
import EditComponent from "./ManageComponents/EditComponent";
import EditTemplateForm from "./Managetemplates/EditTemplateForm";

const docSections = [
  {
    title: "Manage Templates",
    items: ["Add New Templates", "Edit Template", "Remove Templates"],
  },
  {
    title: "Manage Components",
    items: ["Add New Components", "Edit Component", "Remove Components"],
  },
  {
    title: "Manage Apis",
    items: ["Add New Apis", "Remove Apis"],
  },
  {
    title: "Manage Users",
    items: ["Remove Users", "Summary", "Sales"],
  },
];

export default function ManageApplication() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("add-new-templates");
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/").pop() || "add-new-templates";
    setActiveSection(path);
  }, [location]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (item: string) => {
    const path = item.toLowerCase().replace(/\s+/g, "-");
    navigate(`/manage-application/${path}`);
    setActiveSection(path);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-transparent mt-16 lg:mt-20">
      {/* Sidebar */}
      <aside
        className={`bg-white dark:bg-gray-950 w-full lg:w-64 xl:w-72 flex-shrink-0 overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? "h-screen fixed inset-0 z-50" : "h-0 lg:h-auto"
        } lg:relative lg:translate-x-0`}
      >
        <div className="sticky top-0 z-10 bg-transparent border-b dark:border-gray-800 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
            Admin Panel
          </h2>
          <button onClick={toggleSidebar} className="lg:hidden p-2">
            <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        <nav className="p-4">
          {docSections.map((section) => (
            <div key={section.title} className="mb-4">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-150 ease-in-out"
              >
                <span className="font-medium">{section.title}</span>
                {expandedSections.includes(section.title) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {expandedSections.includes(section.title) && (
                <ul className="mt-2 ml-4 space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/manage-application/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`block px-4 py-2 text-sm rounded-md ${
                          activeSection === item.toLowerCase().replace(/\s+/g, "-")
                            ? "text-blue-600 bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                        onClick={() => handleNavigation(item)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-grow p-4 lg:p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-50">
              {activeSection.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
            </h1>
            <button
              onClick={toggleSidebar}
              className="lg:hidden bg-transparent  p-2 rounded-md shadow-md"
            >
              {!isOpen && <Menu className="h-6 w-6 text-[#38bdf8] " />}
              
            </button>
          </div>
          <div className="prose max-w-none dark:prose-invert">
            {activeSection === "add-new-templates" && <AddTemplateForm />}
            {activeSection === "edit-templates" && <EditTemplateForm />}
            {activeSection === "remove-templates" && (
              <DeleteTemplate setActiveSection={handleNavigation} />
            )}
            {activeSection === "add-new-components" && (
              <AddComponents setActiveSection={handleNavigation} />
            )}
            {activeSection === "remove-components" && (
              <DeleteComponent setActiveSection={handleNavigation} />
            )}
            {activeSection === "edit-component" && <EditComponent setActiveSection={handleNavigation} />}
          </div>
        </div>
      </main>
    </div>
  );
}