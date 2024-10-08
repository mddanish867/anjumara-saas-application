import { Link, useLocation } from "react-router-dom"

export default function AllComponents() {
  const location = useLocation()

  const navigation = [
    { name: "OTP Verification", link: `${location.pathname}/otp-verification`, img: "/otp-verification.png" },
    { name: "Register", link: `${location.pathname}/register`, img: "/register.png" },
    { name: "Login", link: `${location.pathname}/login`, img: "/login.png" },
    { name: "Ecommerce filter", link: `${location.pathname}/ecommerce-filter`, img: "/ecommerce-filter.png" },
    { name: "Ecommerce filter", link: `${location.pathname}/ecommerce-filter2`, img: "/ecommerce-filter2.png" },
    { name: "Ecommerce filter", link: `${location.pathname}/ecommerce-filter3`, img: "/ecommerce-filter3.png" },
    { name: "Login Form", link: `${location.pathname}/login-form`, img: "/login-form.png" },
    { name: "Multi Steps Form", link: `${location.pathname}/onboarding-wizard`, img: "/onboarding-wizard.png" },
{ name: "Code display", link: `${location.pathname}/displaycomponents`, img: "/onboarding-wizard.png" },

  ]

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