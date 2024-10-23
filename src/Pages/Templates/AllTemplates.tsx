import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

function AllTemplates() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const templates = [
    { name: "B12", link: `${location.pathname}/b12clone`, img: "/B12.png", category: "Landing Page" },
    { name: "ZIP", link: `${location.pathname}/zip`, img: "/zip.png", category: "Landing Page" },
    { name: "Jasper", link: `${location.pathname}/jasper`, img: "/jasper.png", category: "AI Tools" },
    { name: "Jasper 2", link: `${location.pathname}/jasper2`, img: "/jasper2.png", category: "AI Tools" },
    { name: "Stack", link: `${location.pathname}/stack`, img: "/stack.png", category: "Developer Tools" },
    { name: "Aethik", link: `${location.pathname}/aethik`, img: "/aethik.png", category: "Landing Page" },
    { name: "Temp 5", link: `${location.pathname}/temp5`, img: "/Temp5.jpg", category: "Miscellaneous" },
    { name: "Temp 6", link: `${location.pathname}/temp6`, img: "/Temp61.png", category: "Miscellaneous" },
    { name: "Temp 7", link: `${location.pathname}/temp7`, img: "/Temp6.jpg", category: "Miscellaneous" },
    { name: "Temp 8", link: `${location.pathname}/temp8`, img: "/temp8.jpg", category: "Miscellaneous" },
    { name: "Temp 9", link: `${location.pathname}/temp9`, img: "/Temp9.jpg", category: "Miscellaneous" },
    { name: "Temp 10", link: `${location.pathname}/temp10`, img: "/Temp10.jpg", category: "Miscellaneous" },
    { name: "Temp 11", link: `${location.pathname}/temp11`, img: "/Temp11.jpg", category: "Miscellaneous" },
    { name: "Temp 12", link: `${location.pathname}/temp12`, img: "/Temp12.jpg", category: "Miscellaneous" },
    { name: "Ecom 1", link: `${location.pathname}/ecom1`, img: "/Ecom1.png", category: "E-commerce" },
    { name: "Ecom 2", link: `${location.pathname}/ecom2`, img: "/Ecom2.png", category: "E-commerce" },
    { name: "Ecom 3", link: `${location.pathname}/ecom3`, img: "/Ecom3.png", category: "E-commerce" },
    { name: "Ecom 4", link: `${location.pathname}/ecom4`, img: "/Ecom4.png", category: "E-commerce" },
    { name: "Ecom 5", link: `${location.pathname}/ecom5`, img: "/Ecom5.png", category: "E-commerce" },
    { name: "Ecom 6", link: `${location.pathname}/ecom6`, img: "/Ecom6.png", category: "E-commerce" },
    { name: "Ecom 7", link: `${location.pathname}/ecom7`, img: "/Ecom7.png", category: "E-commerce" },
    { name: "Ecom 8", link: `${location.pathname}/ecom8`, img: "/Ecom8.png", category: "E-commerce" },
    { name: "Ecom 9", link: `${location.pathname}/ecom9`, img: "/Ecom9.png", category: "E-commerce" },
    { name: "Ecom 10", link: `${location.pathname}/ecom10`, img: "/Ecom10.png", category: "E-commerce" },
    { name: "Email Dashboard", link: `${location.pathname}/email-market-dashboard`, img: "/Email-market.png", category: "Email Marketing" },
    { name: "Email Temp", link: `${location.pathname}/email-market-temp`, img: "/Temp14.jpg", category: "Email Marketing" },
    { name: "Forum Temp", link: `${location.pathname}/forum-temp`, img: "/Temp15.jpg", category: "Community" },
    { name: "Community Temp", link: `${location.pathname}/community-temp`, img: "/temp16.jpg", category: "Community" },
    { name: "Bank Temp", link: `${location.pathname}/bank-temp`, img: "/bak-temp1.png", category: "Finance" },
    { name: "Bank Temp2", link: `${location.pathname}/bank-temp2`, img: "/bank-temp2.png", category: "Finance" },
    { name: "AI Temp", link: `${location.pathname}/ai-temp`, img: "/ai-temp.png", category: "AI Tools" },
    { name: "Bank Temp3", link: `${location.pathname}/bank-temp3`, img: "/banktemp3.png", category: "Finance" },
    { name: "Bank Temp4", link: `${location.pathname}/bank-temp4`, img: "/banktemp4.png", category: "Finance" },
    { name: "Bank Temp5", link: `${location.pathname}/bank-temp5`, img: "/bank-temp5.png", category: "Finance" },
    { name: "Bank Temp6", link: `${location.pathname}/bank-temp6`, img: "/bank-temp6.png", category: "Finance" },
    { name: "Web Studio", link: `${location.pathname}/web-studio`, img: "/web-studio.png", category: "Developer Tools" },
    { name: "AI Temp2", link: `${location.pathname}/ai-temp2`, img: "/ai-temp2.png", category: "AI Tools" },
    { name: "Web Builder", link: `${location.pathname}/web-builder`, img: "/web-builder.png", category: "Developer Tools" },
    { name: "Web Builder2", link: `${location.pathname}/web-builder2`, img: "/web-builder2.png", category: "Developer Tools" },
    { name: "Host Web", link: `${location.pathname}/host-web`, img: "/host-web.png", category: "Developer Tools" },
    { name: "Code Review", link: `${location.pathname}/code-review`, img: "/code-review.png", category: "Developer Tools" },
    { name: "Flipkart Clone", link: `${location.pathname}/flipkart-clone`, img: "/flipkart-clone.png", category: "E-commerce" },
    { name: "Temp22", link: `${location.pathname}/temp22`, img: "/temp22.png", category: "Miscellaneous" },
    { name: "Temp24", link: `${location.pathname}/temp24`, img: "/Temp24.png", category: "Miscellaneous" },
    { name: "Temp25", link: `${location.pathname}/temp25`, img: "/Temp25.png", category: "Miscellaneous" },
    { name: "Temp26", link: `${location.pathname}/temp26`, img: "/Temp26.png", category: "Miscellaneous" },
    { name: "Temp27", link: `${location.pathname}/temp27`, img: "/temp27.png", category: "Miscellaneous" },
    { name: "Temp28", link: `${location.pathname}/temp28`, img: "/temp28.png", category: "Miscellaneous" },
    { name: "Temp29", link: `${location.pathname}/temp29`, img: "/temp29.png", category: "Miscellaneous" },
    { name: "Temp30", link: `${location.pathname}/temp30`, img: "/temp30.png", category: "Miscellaneous" },
    { name: "Temp31", link: `${location.pathname}/temp31`, img: "/temp31.png", category: "Miscellaneous" },
    { name: "Temp32", link: `${location.pathname}/temp32`, img: "/temp32.png", category: "Miscellaneous" },
    { name: "Temp33", link: `${location.pathname}/temp33`, img: "/temp33.png", category: "Miscellaneous" },
    { name: "Temp34", link: `${location.pathname}/temp34`, img: "/temp34.png", category: "Miscellaneous" },
    { name: "Temp35", link: `${location.pathname}/temp35`, img: "/temp35.png", category: "Miscellaneous" },
    { name: "Temp36", link: `${location.pathname}/temp36`, img: "/temp36.png", category: "Miscellaneous" },
    { name: "Temp37", link: `${location.pathname}/temp37`, img: "/temp37.png", category: "Miscellaneous" },
    { name: "Temp38", link: `${location.pathname}/temp38`, img: "/temp38.png", category: "Miscellaneous" },
    { name: "Temp39", link: `${location.pathname}/temp39`, img: "/temp39.png", category: "Miscellaneous" },
    { name: "Temp40", link: `${location.pathname}/temp40`, img: "/temp40.png", category: "Miscellaneous" },
    { name: "Temp41", link: `${location.pathname}/temp41`, img: "/temp41.png", category: "Miscellaneous" },
    { name: "Temp42", link: `${location.pathname}/temp42`, img: "/temp42.png", category: "Miscellaneous" },
    { name: "Temp43", link: `${location.pathname}/temp43`, img: "/temp43.png", category: "Miscellaneous" },
    { name: "Temp45", link: `${location.pathname}/temp45`, img: "/temp45.png", category: "Miscellaneous" },
    { name: "Temp46", link: `${location.pathname}/temp46`, img: "/temp46.png", category: "Miscellaneous" },
    { name: "Temp47", link: `${location.pathname}/temp47`, img: "/temp47.png", category: "Miscellaneous" },
    { name: "Temp48", link: `${location.pathname}/temp48`, img: "/temp48.png", category: "Miscellaneous" },
    { name: "Temp49", link: `${location.pathname}/temp49`, img: "/temp49.png", category: "Miscellaneous" },
  ];

  const filteredTemplates = useMemo(() => {
    return templates.filter(template =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [templates, searchTerm]);

  const categories = useMemo(() => {
    return Array.from(new Set(templates.map(template => template.category)));
  }, [templates]);

  return (
    <section className="bg-transparent min-h-screen mt-24">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200 sm:text-4xl mb-4">
            Template Library
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
            Explore our diverse collection of pre-built templates to jumpstart your web development projects. From e-commerce to AI tools, find the perfect starting point for your next website.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[#38bdf8]"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {categories.map(category => {
          const categoryTemplates = filteredTemplates.filter(template => template.category === category);
          if (categoryTemplates.length === 0) return null;

          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold  mb-6">{category}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoryTemplates.map((template) => (
                  <Link
                    key={template.name}
                    className="block bg-transparent rounded-xl border border-gray-200 shadow-sm hover:border-[#38bdf8] hover:ring-1 hover:ring-[#26b0eb] focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    to={template.link}
                  >
                    <div className="p-4">
                      <div className="aspect-w-16 aspect-h-9 mb-4">
                        <img
                          src={template.img}
                          alt={template.name}
                          className="object-cover rounded-lg w-full h-full"
                        />
                      </div>
                      <h3 className="font-bold text-lg  mb-2">{template.name}</h3>
                      <p className="text-sm ">
                        {template.category}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AllTemplates;