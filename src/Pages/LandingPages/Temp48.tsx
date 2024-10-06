import { FramerIcon } from 'lucide-react';

function Temp48() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default Temp48


const Header = () => {
    return (
      <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-transparent absolute w-full">
        <div className="flex items-center">
          <FramerIcon className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">Framer</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300 text-sm">Features</a>
          <a href="#" className="hover:text-gray-300 text-sm">Resources</a>
          <a href="#" className="hover:text-gray-300 text-sm">Support</a>
          <a href="#" className="hover:text-gray-300 text-sm">Updates</a>
          <a href="#" className="hover:text-gray-300 text-sm">Enterprise</a>
          <a href="#" className="hover:text-gray-300 text-sm">Pricing</a>
        </nav>
        <div className="hidden md:flex space-x-4 items-center">
          <button className="hover:text-gray-300 text-sm">Contact Sales</button>
          <button className="hover:text-gray-300 text-sm">Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition duration-300">Start for free</button>
        </div>
        <button className="md:hidden">Menu</button>
      </header>
    )
  }
  
  const Hero = () => {
    return (
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-12 md:py-24 bg-gradient-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase mb-4 text-purple-300">AI Tools</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Design better sites<br />with AI.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Enhance your website using Framer's AI-powered tools:
            Generate new pages with advanced localization, brand the tone
            of your translations dynamically rewrite text for better copy.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
            Start for free today
          </button>
        </div>
      </main>
    )
  }

  const Footer = () => {
    return (
      <footer className="bg-gray-900 bg-opacity-50 text-white py-3 px-6 md:px-12 absolute bottom-0 w-full">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex space-x-2 mb-2 md:mb-0">
            <button className="bg-gray-800 p-1 rounded text-xs">
              <span className="sr-only">Insert</span>
              I
            </button>
            <button className="bg-gray-800 p-1 rounded text-xs">
              <span className="sr-only">Layout</span>
              L
            </button>
            <button className="bg-gray-800 p-1 rounded text-xs">
              <span className="sr-only">Text</span>
              T
            </button>
            <button className="bg-gray-800 p-1 rounded text-xs">
              <span className="sr-only">CMS</span>
              C
            </button>
            <button className="bg-gray-800 p-1 rounded text-xs">
              <span className="sr-only">Actions</span>
              A
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="bg-gray-800 p-1 rounded-full w-6 h-6"></button>
            <button className="bg-gray-800 p-1 rounded-full w-6 h-6"></button>
            <button className="bg-gray-800 p-1 rounded-full w-6 h-6"></button>
            <button className="bg-gray-800 p-1 rounded-full w-6 h-6">
              <span className="sr-only">Settings</span>
              S
            </button>
            <button className="bg-gray-800 p-1 rounded-full w-6 h-6">
              <span className="sr-only">Play</span>
              ▶
            </button>
          </div>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition duration-300 mt-2 md:mt-0">
            Publish
          </button>
        </div>
      </footer>
    )
  }