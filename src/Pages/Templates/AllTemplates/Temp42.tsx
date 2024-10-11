import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-600 to-black">
      <header className="p-4 relative z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            ConvertFlow
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/login">Login</NavLink>
            <Link
              to="/register"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Try it for free
            </Link>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 p-4 absolute top-16 left-0 right-0 z-20">
          <div className="flex flex-col space-y-2">
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/login">Login</NavLink>
            <Link
              to="/register"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 text-center"
            >
              Try it for free
            </Link>
          </div>
        </div>
      )}
      <main className="flex-grow">{children}</main>
      <footer className="bg-black text-white p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ConvertFlow</h3>
            <p>Empowering your business with AI</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#">Twitter</Link>
              </li>
              <li>
                <Link to="#">LinkedIn</Link>
              </li>
              <li>
                <Link to="#">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-white hover:text-blue-200 transition duration-300"
    >
      {children}
    </Link>
  );
}

// Aboute Us
function About() {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
      <div className="bg-transparent rounded-lg shadow-lg p-6">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Team"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              At ConvertFlow, we're on a mission to democratize artificial
              intelligence and make it accessible to businesses of all sizes. We
              believe that AI has the power to transform industries and drive
              innovation, and we're committed to providing the tools and
              expertise to make that happen.
            </p>
            <p>
              Our team of experts combines deep knowledge in machine learning,
              data science, and software engineering to create cutting-edge AI
              solutions that solve real-world problems. We're passionate about
              pushing the boundaries of what's possible with AI and helping our
              clients achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// FAQ
function FAQ() {
  const faqs = [
    {
      question: "What is ConvertFlow AI?",
      answer:
        "ConvertFlow AI is a powerful artificial intelligence platform that helps businesses automate tasks, analyze data, and make informed decisions.",
    },
    {
      question: "How does pricing work?",
      answer:
        "We offer flexible pricing plans based on your needs. You can choose from our Basic, Pro, or Enterprise plans, each with different features and API call limits.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a 14-day free trial for new users to test our platform and see how it can benefit their business.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer email support for all plans, with priority support for Pro users and dedicated 24/7 support for Enterprise customers.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-transparent text-white">
      <h1 className="text-4xl font-bold text-white mb-8">
        Frequently Asked Questions
      </h1>
      <div className=" rounded-lg shadow-lg p-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 pb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
}

// Pricing
function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      features: ["5 AI models", "1000 API calls/month", "Email support"],
    },
    {
      name: "Pro",
      price: "$99",
      features: [
        "15 AI models",
        "10,000 API calls/month",
        "Priority support",
        "Custom integrations",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited AI models",
        "Unlimited API calls",
        "24/7 dedicated support",
        "On-premise deployment",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Pricing Plans
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-4xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-6 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="mb-2">
                  ✓ {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-center"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Product
function Product() {
  return (
    <div className="container mx-auto px-4 py-12 bg-transparent text-white">
      <h1 className="text-4xl font-bold text-white mb-8">Our Product</h1>
      <div className=" rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">ConvertFlow AI</h2>
        <p className="mb-4">
          ConvertFlow AI is a cutting-edge solution that leverages artificial
          intelligence to streamline your workflow and boost productivity. Our
          platform offers:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Advanced natural language processing</li>
          <li>Automated data analysis</li>
          <li>Intelligent decision-making assistance</li>
          <li>Customizable AI models</li>
        </ul>
        <p>
          With ConvertFlow AI, you can transform your business processes and
          stay ahead of the competition in the digital age.
        </p>
      </div>
    </div>
  );
}

// Register
function Register() {
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

// Login
function Login() {
  return (
    <div className="md:container min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />

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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-100"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-100">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Temp42() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-blue-600 to-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get started for free</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create your free account and start building your first funnel for
            free. No credit card required.
          </p>
          <div className="max-w-md mx-auto">
            <form className="bg-transparent bg-opacity-10 rounded-lg p-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-transparent border border-white border-opacity-50 text-white placeholder-white placeholder-opacity-75 focus:outline-none focus:border-opacity-100"
              />
            </form>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition duration-300">
              Get started →
            </button>
            <p className="mt-4 text-sm opacity-75">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="container bg-transparent text-white py-20">
        <div className="container mx-auto px-4 mt-32">
          <h2 className="text-3xl font-bold text-center mb-12 ">
            AI-Generated Content Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-transparent p-6 rounded-lg shadow-md">
                <img
                  src={`/placeholder.svg?height=200&width=300`}
                  alt={`AI Generated Content ${i}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 ">
                  AI-Generated Example {i}
                </h3>
                <p className="text-gray-600">
                  Experience the power of our AI-driven content generation,
                  tailored to your specific needs and preferences.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 mt-10">
          <h2 className="text-3xl font-bold text-center mb-12 ">
            Trusted by Industry Leaders
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`/placeholder.svg?height=50&width=150`}
                alt={`Company Logo ${i}`}
                width={150}
                height={50}
                className="h-12 object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container bg-transparent text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 ">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className=" p-6 rounded-lg shadow-md">
                <p className="mb-4 ">
                  "ConvertFlow has revolutionized our content creation process.
                  The AI-generated content is incredibly accurate and saves us
                  hours of work."
                </p>
                <div className="flex items-center">
                  <img
                    src={`/placeholder.svg?height=50&width=50`}
                    alt={`Customer ${i}`}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold ">Customer Name</h4>
                    <p className="text-sm ">Company {i}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Register />
      <Login />
      <div className="md:container">
        <Product />
        <Pricing />
        <About />
        <FAQ />
      </div>
    </Layout>
  );
}
