// ComponentDetails.jsx

import { useState } from 'react';
import { Home, ChevronRight, CodeXml, Eclipse } from 'lucide-react';

const ComponentDetails = () => {
  // Set the first image as the default selected image
  const [selectedImage, setSelectedImage] = useState('hero.png');

  const images = [
    { src: 'hero.png', thumb: 'hero.png', alt: 'Image 1' },
    { src: 'banner2.png', thumb: 'banner2.png', alt: 'Image 2' },
    { src: 'price.png', thumb: 'price.png', alt: 'Image 3' },
    { src: 'hero.png', thumb: 'hero.png', alt: 'Image 4' },
    { src: 'banner2.png', thumb: 'banner2.png', alt: 'Image 5' },
    { src: 'price.png', thumb: 'price.png', alt: 'Image 6' },
  ];

  const techStack = [
    { name: 'HTML5', icon: CodeXml },
    { name: 'CSS3', icon: Eclipse },
    { name: 'JavaScript', icon: CodeXml },
    { name: 'React.js', icon: CodeXml },
  ];

  return (
    <div className="p-6 mt-20">
      {/* Breadcrumb */}
      <nav className="text-gray-700 mb-4 flex items-center">
        <Home className="w-4 h-4 mr-1" />
        <a href="/" className="hover:underline">
          Home
        </a>
        <ChevronRight className="w-4 h-4 mx-1" />
        <a href="/components" className="hover:underline">
          Components
        </a>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="font-semibold">Component Name</span>
      </nav>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row mb-8">
        {/* Thumbnails */}
        <div className="md:w-1/4 flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-visible">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.thumb}
              alt={image.alt}
              className={`w-24 h-24 object-cover cursor-pointer border border-gray-200 hover:border-violet-500 ${
                selectedImage === image.src ? 'border-violet-500' : ''
              }`}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </div>
        {/* Large Image */}
        <div className="md:w-3/4 mt-4 md:mt-0 md:pl-4">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-auto border border-gray-200"
          />
        </div>
      </div>

      {/* Heading and Description */}
      <h1 className="text-3xl font-bold mb-4">Component Name</h1>
      <p className="text-gray-700 mb-6">
        This component is designed to provide users with an intuitive interface
        for building UI moments. It offers a variety of customizable options to
        enhance user experience and streamline the design process.
      </p>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
      <ul className="flex space-x-6 mb-6">
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <li key={tech.name} className="flex items-center space-x-2">
              <Icon className="w-6 h-6 text-violet-500" />
              <span>{tech.name}</span>
            </li>
          );
        })}
      </ul>

      {/* Enhancements */}
      <h2 className="text-2xl font-semibold mb-2">Enhancements</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Dark mode compatibility for improved accessibility.</li>
        <li>Responsive design optimized for all screen sizes.</li>
        <li>Performance optimizations for faster load times.</li>
      </ul>

      {/* Future Add-ons */}
      <h2 className="text-2xl font-semibold mb-2">Future Add-ons</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Integration with third-party APIs for extended functionality.</li>
        <li>Advanced user personalization and theme settings.</li>
      </ul>

      {/* Documentation */}
      <h2 className="text-2xl font-semibold mb-2">Documentation</h2>
      <p className="text-gray-700 mb-6">
        Refer to our{' '}
        <a href="/docs/component-name" className="text-violet-500 underline">
          comprehensive documentation
        </a>{' '}
        for setup instructions, customization guides, and troubleshooting tips.
      </p>

      {/* API Documentation */}
      <h2 className="text-2xl font-semibold mb-2">API Documentation</h2>
      <p className="text-gray-700">
        Explore the{' '}
        <a href="/api/component-name" className="text-violet-500 underline">
          API documentation
        </a>{' '}
        to learn about available endpoints, parameters, and example requests and
        responses.
      </p>
    </div>
  );
};

export default ComponentDetails;
