import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    image: "/hero.png",
    title: "Product Title",
    price: 29.99,
    description: "Beautifully designed, expertly crafted components. The perfect starting point for your next project/interview. This will help you to prepare for the machine code interview preparations!",
    link: "#",
  },
  {
    image: "/banner2.png",
    title: "Product Title",
    price: 29.99,
    description: "Beautifully designed, expertly crafted components. The perfect starting point for your next project/interview. This will help you to prepare for the machine code interview preparations!",
    link: "#",
  },
  {
    image: "/price.png",
    title: "Product Title",
    price: 29.99,
    description: "Beautifully designed, expertly crafted components. The perfect starting point for your next project/interview. This will help you to prepare for the machine code interview preparations!",
    link: "#",
  },
];

function Template() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/section");
  };

  return (
    <>
      <span className="relative flex justify-between -mt-20">
        <span className="relative z-10 text-[#38bdf8] px-6 font-semibold text-start">
          Templates
        </span>
        <span
          className="flex z-10 text-[#38bdf8] px-6 font-semibold text-start cursor-pointer"
          onClick={handleClick}
        >
          All templates <MoveRight className="ml-2" />
        </span>
      </span>

      <div className="w-full px-8 py-10 flex flex-wrap justify-center gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white border rounded-md p-6 flex-1 min-w-[300px] max-w-[30%]"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Product Title and Price */}
            <div className="flex justify-between items-center mt-4 text-gray-600">
              <h2 className="text-md font-semibold">{product.title}</h2>
              <p>${product.price}</p>
            </div>

            {/* Product Description */}
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>

            {/* Learn More Link */}
            <a
              href={product.link}
              className="flex items-center mt-4 text-[#38bdf8] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <MoveRight className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Template;
