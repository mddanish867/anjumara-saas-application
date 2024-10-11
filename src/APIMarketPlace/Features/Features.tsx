import Navbar from "../Navbar";

export default function Features() { 

    return (
     <>
     <Navbar/>
      <div className="bg-black text-orange-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">      
  
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-center mb-8">Key Features</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                title="Extensive API Catalog"
                description="Access a wide range of APIs for various purposes, from weather data to payment gateways."
              />
              <FeatureCard
                title="Seamless Integration"
                description="Easy-to-use SDKs and comprehensive documentation for quick implementation."
              />
              <FeatureCard
                title="Robust Analytics"
                description="Monitor your API usage, performance, and costs with our advanced analytics dashboard."
              />
              <FeatureCard
                title="Flexible Pricing"
                description="Choose from various pricing tiers or customize a plan that fits your specific needs."
              />
              <FeatureCard
                title="Reliable Support"
                description="Get assistance from our expert support team to resolve any issues quickly."
              />
              <FeatureCard
                title="Security & Compliance"
                description="Rest easy knowing that all our APIs adhere to industry-standard security protocols."
              />
            </div>
          </div>
        </div>
      </div>
     </>
    )
  }
  
  function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
      <div className="bg-gray-900 rounded-lg p-6">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-orange-200">{description}</p>
      </div>
    )
  }