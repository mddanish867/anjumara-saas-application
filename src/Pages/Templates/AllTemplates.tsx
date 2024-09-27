import { Link, useLocation } from "react-router-dom";

function AllTemplates() {
  const location = useLocation();

  const navigation = [
    { name: "B12", link: `${location.pathname}/b12clone`, img: "/B12.png" },
    { name: "ZIP", link: `${location.pathname}/zip`, img: "/zip.png" },
    { name: "Jasper", link: `${location.pathname}/jasper`, img: "/jasper.png" },
    { name: "Jasper 2", link: `${location.pathname}/jasper2`, img: "/jasper2.png" },
    { name: "Stack", link: `${location.pathname}/stack`, img: "/stack.png" }, // Link corrected
    { name: "Aethik", link: `${location.pathname}/aethik`, img: "/aethik.png" },
    { name: "Temp 5", link: `${location.pathname}/temp5`, img: "/Temp5.jpg" },
    { name: "Temp 6", link: `${location.pathname}/temp6`, img: "/Temp6.jpg" },
    { name: "Temp 7", link: `${location.pathname}/temp7`, img: "/Temp6.jpg" },
    { name: "Temp 8", link: `${location.pathname}/temp8`, img: "/temp8.jpg" },
    { name: "Temp 9", link: `${location.pathname}/temp9`, img: "/Temp9.jpg" },
    { name: "Temp 10", link: `${location.pathname}/temp10`, img: "/Temp10.jpg" },
    { name: "Temp 11", link: `${location.pathname}/temp11`, img: "/Temp11.jpg" },
    { name: "Temp 12", link: `${location.pathname}/temp12`, img: "/Temp12.jpg" },

  ];

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-10">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Explore our new Templates
            </h2>

            <p className="mt-4">
              Prepare effectively for your next interview with a structured and
              personalized approach. Our "Find Your Interview Path" guide helps
              you navigate through essential topics and skills tailored to your
              target role. Whether you're focusing on software engineering, data
              science, or any other field, discover a clear roadmap for
              mastering core concepts, practicing problem-solving techniques,
              and acing your interviews.
            </p>

            <Link
              to="#"
              className="mt-8 inline-block rounded bg-[#38bdf8] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#38bdf8] focus:outline-none focus:ring focus:ring-[#38bdf8]"
            >
              Get Started Today
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                className="block rounded-xl border  p-4 shadow-sm hover:border-[#38bdf8] hover:ring-1 hover:ring-[#38bdf8] focus:outline-none focus:ring"
                to={item.link}
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <img src={item.img} alt={item.name} />
                </span>

                <h2 className="mt-2 font-bold text-center">{item.name}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllTemplates;
