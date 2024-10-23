import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

// Render Starts
const Star = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute dark:bg-orange-100 bg-red-700 rounded-full opacity-70"
    style={{
      width: "3px",
      height: "3px",
      ...style,
      animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
    }}
  />
);
export default function AllComponents() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [stars, setStars] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setStars(newStars);
  }, []);

  const categories = [
    {
      name: "Authentication",
      components: [
        {
          name: "OTP Verification",
          link: `${location.pathname}/otp-verification`,
          img: "/otp-verification.png",
          description:
            "Secure OTP verification component for user authentication.",
        },
        {
          name: "Register",
          link: `${location.pathname}/register`,
          img: "/register.png",
          description:
            "User-friendly registration form for new account creation.",
        },
        {
          name: "Login",
          link: `${location.pathname}/login`,
          img: "/login.png",
          description: "Sleek login form for existing user authentication.",
        },
        {
          name: "Login Form",
          link: `${location.pathname}/login-form`,
          img: "/login-form.png",
          description: "Alternative login form design with enhanced features.",
        },
      ],
    },
    {
      name: "E-commerce",
      components: [
        {
          name: "Ecommerce Filter 1",
          link: `${location.pathname}/ecommerce-filter`,
          img: "/ecommerce-filter.png",
          description:
            "Advanced product filtering system for e-commerce platforms.",
        },
        {
          name: "Ecommerce Filter 2",
          link: `${location.pathname}/ecommerce-filter2`,
          img: "/ecommerce-filter2.png",
          description: "Alternative design for product filtering and sorting.",
        },
        {
          name: "Ecommerce Filter 3",
          link: `${location.pathname}/ecommerce-filter3`,
          img: "/ecommerce-filter3.png",
          description: "Responsive and intuitive product filter component.",
        },
      ],
    },
    {
      name: "Forms",
      components: [
        {
          name: "Multi Steps Form",
          link: `${location.pathname}/onboarding-wizard`,
          img: "/onboarding-wizard.png",
          description: "Step-by-step form wizard for complex data collection.",
        },
      ],
    },
    {
      name: "Utility",
      components: [
        {
          name: "Code Display",
          link: `${location.pathname}/display-components`,
          img: "/display-components.png",
          description:
            "Component for displaying and highlighting code snippets.",
        },
      ],
    },
  ];

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      components: category.components.filter((component) =>
        component.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.components.length > 0);

  return (
    <section className="bg-transparent min-h-screen mt-24">
      {stars.map((style, index) => (
        <Star key={index} style={style} />
      ))}
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
        <section className="flex items-center justify-center bg-grid-white/[0.2] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-orange-500 dark:text-orange-200 mb-6">
              Beautifully crafted{" "}
              <span className="text-[#38bdf8]">Component Library</span>{" "}
            </h1>
            <p className="text-sm md:text-2xl text-orange-500 dark:text-orange-200 mb-8">
              Explore our collection of pre-built, customizable components to
              accelerate <br /> your web development process. From
              authentication forms to e-commerce filters, <br />
              find the perfect building blocks for your next project.
            </p>
            <div className="mb-8 mt-12">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search new components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[#38bdf8]"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#38bdf8]" />
              </div>
            </div>
          </motion.div>
        </section>
        <Link to="/component-details"><span>More</span></Link>
        {filteredCategories.map((category) => (
          <div key={category.name} className="mb-12">
            <h2 className="text-2xl font-semibold  mb-6">{category.name}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.components.map((component) => (
                <Link
                  key={component.name}
                  className="block bg-transparent rounded-xl border border-gray-200 shadow-sm hover:border-[#38bdf8] hover:ring-1 hover:ring-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  to={component.link}
                >
                  <div className="p-4">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      <img
                        src={component.img}
                        alt={component.name}
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </div>
                    <h3 className="font-bold text-lg  mb-2">
                      {component.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {component.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        
      </div>
    </section>
  );
}
