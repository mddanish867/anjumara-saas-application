import { useState } from 'react';
import { CodeXml, Eclipse } from 'lucide-react';

const TemplateDetails = () => {
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
      {/* Image Section */}
      <div className="flex flex-col-reverse md:flex-row mb-8">
        {/* Thumbnails */}
        <div className="md:w-1/4 flex md:flex-col md:space-y-2 space-x-2 md:space-x-0 overflow-x-auto md:overflow-visible md:ml-6">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.thumb}
              alt={image.alt}
              className={`w-24 h-24 object-cover cursor-pointer border border-gray-200 hover:border-[#38bdf8] ${
                selectedImage === image.src ? 'border-[#38bdf8]' : ''
              }`}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </div>
        {/* Large Image */}
        <div className="md:w-3/4 mb-4 md:mb-0 md:pl-4">
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
              <Icon className="w-6 h-6 text-[#38bdf8]" />
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
        <a href="/docs/component-name" className="text-[#38bdf8] underline">
          comprehensive documentation
        </a>{' '}
        for setup instructions, customization guides, and troubleshooting tips.
      </p>

      {/* API Documentation */}
      <h2 className="text-2xl font-semibold mb-2">API Documentation</h2>
      <p className="text-gray-700">
        Explore the{' '}
        <a href="/api/component-name" className="text-[#38bdf8] underline">
          API documentation
        </a>{' '}
        to learn about available endpoints, parameters, and example requests and
        responses.
      </p>
    </div>
  );
};

export default TemplateDetails;
