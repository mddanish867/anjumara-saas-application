import { Link } from "react-router-dom";

export default function Register() {
    return (
      <div className="md:container min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 to-black text-white py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full gap-y-8  p-8 rounded-lg border border-muted-foreground shadow">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6 rounded-md" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
  
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="bg-transparent rounded-md  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-100 text-gray-100  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            <div className="rounded-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-transparent rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-100 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="rounded-md">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="bg-transparent rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-100 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div className="rounded-md">
              <label htmlFor="password-confirm" className="sr-only">
                Confirm password
              </label>
              <input
                id="password-confirm"
                name="password-confirm"
                type="password"
                autoComplete="new-password"
                required
                className="bg-transparent rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-100 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Confirm password"
              />
            </div>
  
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="text-center mt-10">
            <p className="text-sm text-gray-100">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }