import { Link, useLocation } from "react-router-dom";

function AllTemplates() {
  const location = useLocation();

  const navigation = [
    { name: "B12", link: `${location.pathname}/b12clone`, img: "/B12.png" },
    { name: "ZIP", link: `${location.pathname}/zip`, img: "/zip.png" },
    { name: "Jasper", link: `${location.pathname}/jasper`, img: "/jasper.png" },
    {
      name: "Jasper 2",
      link: `${location.pathname}/jasper2`,
      img: "/jasper2.png",
    },
    { name: "Stack", link: `${location.pathname}/stack`, img: "/stack.png" }, // Link corrected
    { name: "Aethik", link: `${location.pathname}/aethik`, img: "/aethik.png" },
    { name: "Temp 5", link: `${location.pathname}/temp5`, img: "/Temp5.jpg" },
    { name: "Temp 6", link: `${location.pathname}/temp6`, img: "/Temp61.png" },
    { name: "Temp 7", link: `${location.pathname}/temp7`, img: "/Temp6.jpg" },
    { name: "Temp 8", link: `${location.pathname}/temp8`, img: "/temp8.jpg" },
    { name: "Temp 9", link: `${location.pathname}/temp9`, img: "/Temp9.jpg" },
    {
      name: "Temp 10",
      link: `${location.pathname}/temp10`,
      img: "/Temp10.jpg",
    },
    {
      name: "Temp 11",
      link: `${location.pathname}/temp11`,
      img: "/Temp11.jpg",
    },
    {
      name: "Temp 12",
      link: `${location.pathname}/temp12`,
      img: "/Temp12.jpg",
    },
    { name: "Ecom 1", link: `${location.pathname}/ecom1`, img: "/Ecom1.png" },
    { name: "Ecom 2", link: `${location.pathname}/ecom2`, img: "/Ecom2.png" },
    { name: "Ecom 3", link: `${location.pathname}/ecom3`, img: "/Ecom3.png" },
    { name: "Ecom 4", link: `${location.pathname}/ecom4`, img: "/Ecom4.png" },
    { name: "Ecom 5", link: `${location.pathname}/ecom5`, img: "/Ecom5.png" },
    { name: "Ecom 6", link: `${location.pathname}/ecom6`, img: "/Ecom6.png" },
    { name: "Ecom 7", link: `${location.pathname}/ecom7`, img: "/Ecom7.png" },
    { name: "Ecom 8", link: `${location.pathname}/ecom8`, img: "/Ecom8.png" },
    { name: "Ecom 9", link: `${location.pathname}/ecom9`, img: "/Ecom9.png" },
    {
      name: "Ecom 10",
      link: `${location.pathname}/ecom10`,
      img: "/Ecom10.png",
    },
    {
      name: "Email Dashboard",
      link: `${location.pathname}/email-market-dashboard`,
      img: "/Email-market.png",
    },
    {
      name: "Email Temp",
      link: `${location.pathname}/email-market-temp`,
      img: "/Temp14.jpg",
    },
    {
      name: "Forum Temp",
      link: `${location.pathname}/forum-temp`,
      img: "/Temp15.jpg",
    },
    {
      name: "Community Temp",
      link: `${location.pathname}/community-temp`,
      img: "/temp16.jpg",
    },
    {
      name: "Bank Temp",
      link: `${location.pathname}/bank-temp`,
      img: "/bak-temp1.png",
    },
    {
      name: "Bank Temp2",
      link: `${location.pathname}/bank-temp2`,
      img: "/bank-temp2.png",
    },
    {
      name: "AI Temp",
      link: `${location.pathname}/ai-temp`,
      img: "/ai-temp.png",
    },
    {
      name: "Bank Temp3",
      link: `${location.pathname}/bank-temp3`,
      img: "/banktemp3.png",
    },
    {
      name: "Bank Temp4",
      link: `${location.pathname}/bank-temp4`,
      img: "/banktemp4.png",
    },
    {
      name: "Bank Temp5",
      link: `${location.pathname}/bank-temp5`,
      img: "/bank-temp5.png",
    },
    {
      name: "Bank Temp6",
      link: `${location.pathname}/bank-temp6`,
      img: "/bank-temp6.png",
    },
    {
      name: "Web Studio",
      link: `${location.pathname}/web-studio`,
      img: "/web-studio.png",
    },
    {
      name: "Web Studio",
      link: `${location.pathname}/ai-temp2`,
      img: "/ai-temp2.png",
    },
    {
      name: "Web Builder",
      link: `${location.pathname}/web-builder`,
      img: "/web-builder.png",
    },
    {
      name: "Web Builder2",
      link: `${location.pathname}/web-builder2`,
      img: "/web-builder2.png",
    },
    {
      name: "Host Web",
      link: `${location.pathname}/host-web`,
      img: "/host-web.png",
    },
    {
      name: "Code Review",
      link: `${location.pathname}/code-review`,
      img: "/code-review.png",
    },
    {
      name: "Flipkart Clone",
      link: `${location.pathname}/flipkart-clone`,
      img: "/flipkart-clone.png",
    },
    { name: "Temp22", link: `${location.pathname}/temp22`, img: "/temp22.png" },
    { name: "Temp24", link: `${location.pathname}/temp24`, img: "/Temp24.png" },
    { name: "Temp25", link: `${location.pathname}/temp25`, img: "/Temp25.png" },
    { name: "Temp26", link: `${location.pathname}/temp26`, img: "/Temp26.png" },
    { name: "Temp27", link: `${location.pathname}/temp27`, img: "/temp27.png" },
    { name: "Temp28", link: `${location.pathname}/temp28`, img: "/temp28.png" },
    { name: "Temp29", link: `${location.pathname}/temp29`, img: "/temp29.png" },
    { name: "Temp30", link: `${location.pathname}/temp30`, img: "/temp30.png" },
    { name: "Temp31", link: `${location.pathname}/temp31`, img: "/temp31.png" },
    { name: "Temp32", link: `${location.pathname}/temp32`, img: "/temp32.png" },
    { name: "Temp33", link: `${location.pathname}/temp33`, img: "/temp33.png" },
    { name: "Temp34", link: `${location.pathname}/temp34`, img: "/temp34.png" },
    { name: "Temp35", link: `${location.pathname}/temp35`, img: "/temp35.png" },
    { name: "Temp36", link: `${location.pathname}/temp36`, img: "/temp36.png" },
    { name: "Temp37", link: `${location.pathname}/temp37`, img: "/temp37.png" },
    { name: "Temp38", link: `${location.pathname}/temp38`, img: "/temp38.png" },
    { name: "Temp39", link: `${location.pathname}/temp39`, img: "/temp39.png" },
    { name: "Temp40", link: `${location.pathname}/temp40`, img: "/temp40.png" },
    { name: "Temp41", link: `${location.pathname}/temp41`, img: "/temp41.png" },
    { name: "Temp42", link: `${location.pathname}/temp42`, img: "/temp42.png" },
    { name: "Temp43", link: `${location.pathname}/temp43`, img: "/temp43.png" },
    { name: "Temp45", link: `${location.pathname}/temp45`, img: "/temp45.png" },
    { name: "Temp46", link: `${location.pathname}/temp46`, img: "/temp46.png" },
    { name: "Temp47", link: `${location.pathname}/temp47`, img: "/temp47.png" },

  ];

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-10">
        <div className="grid grid-cols-1 gap-y-8 lg:items-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                className="block rounded-xl border p-4 shadow-sm hover:border-[#38bdf8] hover:ring-1 hover:ring-[#38bdf8] focus:outline-none focus:ring"
                to={item.link}
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <img src={item.img} alt={item.name} className="w-full h-auto" />
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
  )
}

export default AllTemplates;
