import { Link } from "react-router-dom";

function Section() {
  const navigation = [
    { name: "Frontend", link: "/frontend", img: "/frontendbanner.avif" },
    { name: "Backend", link: "/backend", img: "/backendbanner.jpeg" },
    { name: "Azure", link: "/azure", img: "/azurebanner.png" },
    { name: "SQL", link: "/sql", img: "/sqlbaner.jpg" },
    { name: "Git", link: "/git", img: "/gitbanner.png" },
  ];

  return (
    <>  
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-10">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Find your career path
              </h2>

              <p className="mt-4 text-gray-600">
              Prepare effectively for your next interview with a structured and personalized approach. Our "Find Your Interview Path" guide helps you navigate through essential topics and skills tailored to your target role. Whether you're focusing on software engineering, data science, or any other field, discover a clear roadmap for mastering core concepts, practicing problem-solving techniques, and acing your interviews.
              </p>

              <Link
                to="#"
                className="mt-8 inline-block rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-bluee-500"
              >
                Get Started Today
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  to={item.link}
                >
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                    <img src={item.img}></img>
                  </span>

                  <h2 className="mt-2 font-bold text-center">{item.name}</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;