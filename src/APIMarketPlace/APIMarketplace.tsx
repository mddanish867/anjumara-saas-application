import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function APIMarketplace() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/soora-api/register");
  };

  const handleAllAPIs = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/soora-api/all-apis");
  };

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      {/* Features Grid */}
      <section className="py-20 px-4 md:px-8 relative bg-black bg-grid-white/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black "></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-200 mb-12">
            Why Choose Our Marketplace?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Wide Selection", "Easy Integration", "Secure & Reliable"].map(
              (feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-transparent bg-opacity-50 p-6 rounded-lg backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature}
                  </h3>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Popular APIs */}
      <section className="py-20 px-4 md:px-8 bg-black bg-grid-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-200 mb-12">
            Popular APIs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Payment API",
              "Weather API",
              "Social Media API",
              "E-commerce API",
              "Machine Learning API",
              "Geolocation API",
            ].map((api, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-transparent bg-opacity-50 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{api}</h3>
                <p className="text-white mb-4">
                  Integrate powerful {api.toLowerCase()} functionality into your
                  applications.
                </p>
                <Button
                  variant="outline"
                  className="bg-transparent text-white border-orange-200 hover:bg-orange-400 hover:border-none hover:text-white"
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 relative bg-black bg-grid-white/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-200 mb-6">
            Ready to Supercharge Your Development?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of developers using our API marketplace to build
            amazing applications.
          </p>
          <Button
            onClick={handleRegister}
            size="lg"
            className="bg-transparent border border-orange-200 hover:bg-orange-400 hover:border-n text-white"
          >
            Sign Up Now
          </Button>
        </motion.div>
      </section>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-black bg-grid-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-orange-200 mb-6">
            API Marketplace
          </h1>
          <p className="text-sm md:text-2xl text-orange-200 mb-8">
            Discover, Connect, and Innovate with APIs
          </p>
          <Button
            onClick={handleAllAPIs}
            size="lg"
            className="bg-transparent border border-orange-200 hover:bg-orange-400 hover:border-none text-white"
          >
            Explore APIs
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
