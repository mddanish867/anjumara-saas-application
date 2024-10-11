import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Temp41() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesShowcase />
        <AboutUs />
        <TeamMembers />
        <Testimonials />
        <CaseStudies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About ConsultCo</h3>
            <p className="text-gray-400">
              We are a leading consultancy firm dedicated to helping businesses
              achieve their full potential through expert advice and tailored
              solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">123 Consulting Street</p>
            <p className="text-gray-400 mb-2">Business City, BZ 12345</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@consultco.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ConsultCo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the form data to your backend
    // For this example, we'll simulate an API call with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message. We will get back to you soon!"
      );
      setFormState({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className={`bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitMessage && (
                <motion.p
                  className="text-green-600 ml-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {submitMessage}
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const caseStudies = [
    {
      title: "E-commerce Growth Strategy",
      client: "OnlineShop Inc.",
      description:
        "Implemented a digital transformation strategy that resulted in a 200% increase in online sales.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Financial Restructuring",
      client: "Global Manufacturing Co.",
      description:
        "Optimized financial operations, leading to a 30% reduction in operational costs.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Market Expansion Plan",
      client: "Tech Innovators LLC",
      description:
        "Developed a market entry strategy that facilitated successful expansion into three new countries.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.client}</p>
                <p className="text-gray-700">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      company: "Tech Innovators Inc.",
      quote:
        "ConsultCo transformed our business strategy, leading to a 50% increase in revenue within six months.",
    },
    {
      id: 2,
      name: "Bob Smith",
      company: "Global Solutions LLC",
      quote:
        "The insights provided by ConsultCo were invaluable. They truly understand the market and deliver results.",
    },
    {
      id: 3,
      name: "Carol Davis",
      company: "Future Enterprises",
      quote:
        "Working with ConsultCo was a game-changer for our company. Their expertise is unmatched in the industry.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="text-xl sm:text-2xl mb-4">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-sm">{testimonials[currentIndex].company}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function TeamMembers() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jane Smith",
      role: "Lead Consultant",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mike Johnson",
      role: "Financial Advisor",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Brown",
      role: "Marketing Specialist",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              About Our Consultancy
            </h2>
            <p className="text-gray-600 mb-6">
              At ConsultCo, we pride ourselves on delivering top-tier consulting
              services to businesses of all sizes. With our team of experienced
              professionals and a track record of success, we're committed to
              helping our clients achieve their goals and overcome challenges in
              today's competitive landscape.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Over 10 years of industry experience</li>
              <li>A team of certified experts across various domains</li>
              <li>Tailored solutions for each client's unique needs</li>
              <li>Proven track record of successful projects</li>
            </ul>
            <a
              href="#contact"
              className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesShowcase() {
  const services = [
    {
      title: "Strategy Consulting",
      description: "Develop winning strategies to drive your business forward.",
      icon: "📊",
    },
    {
      title: "Financial Advisory",
      description: "Optimize your financial performance and decision-making.",
      icon: "💰",
    },
    {
      title: "Digital Transformation",
      description: "Leverage technology to revolutionize your operations.",
      icon: "🚀",
    },
    {
      title: "Market Research",
      description: "Gain valuable insights to stay ahead of the competition.",
      icon: "🔍",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary h-screen flex items-center">
      <div className="md:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empower Your Business with Expert Consulting
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Unlock your potential with our strategic insights and tailored
            solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="/contact"
              className="bg-white text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">ConsultCo</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {["Home", "Services", "About", "Portfolio", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-gray-700 hover:text-primary">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
