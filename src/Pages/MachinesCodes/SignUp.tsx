import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignUp() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="container bg-transparent px-4 py-6">
      <h1
        className="text-3xl font-semibold cursor-pointer mb-6"
        onClick={handleClick}
      >
        Anjum<span className="text-[#38bdf8]">Ara</span>
      </h1>
      <main className="w-full flex flex-col items-center justify-center px-4 mt-14">
        <div className="max-w-sm w-full space-y-4">
          <div className="pb-4 text-center">
            <h3 className="text-xl font-semibold sm:text-3xl">
              Create your account
            </h3>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-[#38bdf8] shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#38bdf8] shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#38bdf8] shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-[#38bdf8] hover:bg-[#38bdf8] active:bg-[#38bdf8] rounded-lg duration-150">
              Create account
            </button>
          </form>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-[#38bdf8] hover:text-[#38bdf8]"
            >
              Log in
            </Link>
          </p>

          <div className="relative">
            <span className="block w-full h-px bg-transparent"></span>
            <p className="inline-block w-fit text-sm bg-transparent px-2 absolute -top-2 inset-x-0 mx-auto">
              Or continue with
            </p>
          </div>
          <div className="grid gap-y-4 sm:grid-cols-1 lg:grid-cols-2 px-1">
            <button className="w-full flex items-center justify-center py-2.5 border rounded-lg hover:bg-transparent duration-150 active:bg-transparent hover:border-[#38bdf8]">
              <FcGoogle className="text-2xl" />
            </button>

            <button className="w-full flex items-center justify-center py-2.5 border rounded-lg hover:bg-transparent duration-150 active:bg-transparent hover:border-[#38bdf8]">
              <FaGithub className="text-2xl" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
