import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  

  return (
    <div className="container bg-transparent mb-4 px-4">
      <h1
        className="text-3xl font-semibold cursor-pointer mt-4 mb-4"
        onClick={() => navigate("/")}
      >
        Anjum<span className="text-start text-[#38bdf8]">Ara</span>
      </h1>
      <main className="w-full h-screen flex flex-col items-center justify-center -mt-12 mb-6 sm:mb-8 px-4">
        <div className="max-w-sm w-full space-y-4">
          <div className="pb-4 text-center">
          <p className="text-sm font-semibold mt-4">
          Reset your password
            </p>            
            <p className="text-sm mt-4">
              Enter your email and we'll send you a link to reset your password.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="font-medium">Email address</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#38bdf8] shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-[#38bdf8] hover:bg-[#38bdf8] active:bg-[#38bdf8] rounded-lg duration-150">
              Reset your password
            </button>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-[#38bdf8] hover:text-[#38bdf8]"
            >
              Get access →
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default ForgotPassword;
