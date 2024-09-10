import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    image: "/bannerimg.png",
    title: "Product Title",
    price: 29.99,
    description: "This is a great product with amazing features.",
    link: "#",
  },
  {
    image: "/bannerimg.png",
    title: "Product Title",
    price: 29.99,
    description: "This is a great product with amazing features.",
    link: "#",
  },
  {
    image: "/bannerimg.png",
    title: "Product Title",
    price: 29.99,
    description: "This is a great product with amazing features.",
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
        <span className="flex z-10 text-[#38bdf8] px-6 font-semibold text-start cursor-pointer" onClick={handleClick}>
          All templates <MoveRight className="ml-2" />
        </span>
      </span>

      <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8 -mt-10">
        <div className="container mx-auto py-10">
          <div className="flex flex-wrap gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative bg-white shadow-lg rounded-lg p-6 flex-1 min-w-[300px] max-w-[33%]"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg"
                />

                {/* Product Title */}
                <div className="flex justify-between items-center mt-4">
                  {/* Product Title */}
                  <h2 className="text-lg font-bold">{product.title}</h2>

                  {/* Product Price */}
                  <p className="text-gray-700">${product.price}</p>
                </div>

                {/* Product Description */}
                <p className="text-gray-600 text-sm">{product.description}</p>

                {/* Learn More Link */}
                <a
                  href={product.link}
                  className="flex mt-4 text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More <MoveRight className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <li>
                <a href="#" className="group relative block">
                  <img
                    src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />
                </a>
              </li>

              <li>
                <a href="#" className="group relative block">
                  <img
                    src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />
                </a>
              </li>

              <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <a href="#" className="group relative block">
                  <img
                    src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Template;
