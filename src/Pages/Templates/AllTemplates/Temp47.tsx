import { Search, BarChart, Zap, ChevronRight } from 'lucide-react';

const Temp47 = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif text-gold-500">Elegance SEO</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gold-500 hover:text-gold-500 transition duration-300">Home</a>
            <a href="#" className="text-gold-500 hover:text-gold-500 transition duration-300">Services</a>
            <a href="#" className="text-gold-500 hover:text-gold-500 transition duration-300">About</a>
            <a href="#" className="text-gold-500 hover:text-gold-500 transition duration-300">Contact</a>
          </nav>
          <button className="bg-gold-500 text-navy-900 px-4 py-2 rounded hover:bg-gold-600 transition duration-300 font-semibold">
            Consultation
          </button>
        </div>
      </header>

      <main>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900 text-gold-500">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
              Elevate Your Digital Presence
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Bespoke SEO strategies tailored to enhance your brand's online authority.
            </p>
            <a href="#" className="inline-flex items-center text-gold-500 font-semibold text-lg hover:text-gold-400 transition duration-300">
              Discover Our Expertise <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif mb-12 text-center text-navy-900">Our Bespoke Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <Search className="text-gold-500 w-12 h-12 mb-6 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-navy-900">Strategic Keyword Optimization</h3>
                <p className="text-gray-600">Crafting a targeted keyword strategy to elevate your brand's visibility.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <BarChart className="text-gold-500 w-12 h-12 mb-6 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-navy-900">Advanced Performance Analytics</h3>
                <p className="text-gray-600">Comprehensive analysis and reporting to guide strategic decisions.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300">
                <Zap className="text-gold-500 w-12 h-12 mb-6 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-navy-900">Precision On-Page Optimization</h3>
                <p className="text-gray-600">Refining your digital assets for maximum search engine impact.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-serif mb-6 text-navy-900">Elevate Your Brand's Digital Presence</h2>
            <p className="text-xl text-gray-600 mb-10">Let's craft a bespoke SEO strategy that resonates with your brand's unique voice.</p>
            <button className="bg-navy-900 text-white px-8 py-3 rounded text-lg hover:bg-navy-800 transition duration-300">
              Schedule Your Consultation
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-navy-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-serif mb-4 text-gold-500">Elegance SEO</h3>
              <p className="text-gray-400">Elevating brands through sophisticated SEO strategies.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-gold-500 transition duration-300">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold-500 transition duration-300">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold-500 transition duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold-500 transition duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">info@eleganceseo.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gold-500 transition duration-300">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-gold-500 transition duration-300">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-gold-500 transition duration-300">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 Elegance SEO. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Temp47;