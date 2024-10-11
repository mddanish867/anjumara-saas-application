
const Footer = () => {
  return (
    <>
      <footer className="bg-black bg-grid-white/[0.2] text-white py-8 px-4 md:px-8 relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">SOORA - API Marketplace</h3>
            <p className="text-gray-400">Empowering developers since {new Date().getFullYear()}</p>
          </div>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-blue-400">About</a>
            <a href="#" className="hover:text-blue-400">Blog</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
            <a href="#" className="hover:text-blue-400">Terms</a>
          </nav>
        </div>
      </footer>
    </>
  )
}

export default Footer
