import { useState, useRef, useEffect, forwardRef } from "react";
import { ChevronDown, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

export default function Temp40() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (title: string) => {
    setActiveMegaMenu(title);
  };

  const handleMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  return (
    <div className="min-h-screen bg-[#F4F1FF] text-gray-800">
      <nav className="relative flex items-center justify-between px-4 py-4 md:px-8 lg:px-16">
        <div className="flex items-center">
          <span className="ml-2 text-xl font-bold">HeyGen</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <NavItem
            title="Use Cases"
            onMouseEnter={handleMouseEnter}
            ref={(el: HTMLDivElement | null) =>
              (navItemRefs.current["Use Cases"] = el)
            }
          />
          <NavItem
            title="Features"
            onMouseEnter={handleMouseEnter}
            ref={(el: HTMLDivElement | null) =>
              (navItemRefs.current["Features"] = el)
            }
          />
          <NavItem
            title="Resources"
            onMouseEnter={handleMouseEnter}
            ref={(el: HTMLDivElement | null) =>
              (navItemRefs.current["Resources"] = el)
            }
          />
          <Link to="/pricing" className="text-sm font-medium">
            Pricing
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact-sales" className="text-sm font-medium">
            Contact Sales
          </Link>
          <button className="bg-[#7559FF] text-white px-4 py-2 rounded-full text-sm font-medium">
            Get started
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MoreVertical className="h-6 w-6" />
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white p-4 absolute top-16 right-4 rounded-lg shadow-lg z-50">
          <NavItem title="Use Cases" mobile onMouseEnter={handleMouseEnter} />
          <NavItem title="Features" mobile onMouseEnter={handleMouseEnter} />
          <NavItem title="Resources" mobile onMouseEnter={handleMouseEnter} />
          <Link to="/pricing" className="block py-2 text-sm font-medium">
            Pricing
          </Link>
          <Link to="/contact-sales" className="block py-2 text-sm font-medium">
            Contact Sales
          </Link>
          <button className="mt-2 w-full bg-[#7559FF] text-white px-4 py-2 rounded-full text-sm font-medium">
            Get started
          </button>
        </div>
      )}

      {activeMegaMenu && (
        <div
          className="absolute left-0 w-full bg-white shadow-lg z-40"
          ref={megaMenuRef}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4 py-6">
            <MegaMenu title={activeMegaMenu} />
          </div>
        </div>
      )}

      <main className="px-4 py-12 md:px-8 lg:px-16 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="text-[#7559FF]">AI-powered video</span>
          <br />
          creations at scale
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Effortlessly produce studio quality videos
          <br />
          with AI-generated avatars and voices.
        </p>
        <button className="bg-[#7559FF] text-white px-6 py-3 rounded-full text-lg font-medium mb-4">
          Get started for free →
        </button>
        <p className="text-sm text-gray-600">No credit card needed</p>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <img src="/placeholder.svg" alt="NVIDIA" className="h-8" />
          <img src="/placeholder.svg" alt="Pattern" className="h-8" />
          <img src="/placeholder.svg" alt="Salesforce" className="h-8" />
          <img src="/placeholder.svg" alt="Volvo" className="h-8" />
          <img src="/placeholder.svg" alt="Accenture" className="h-8" />
          <img src="/placeholder.svg" alt="Amazon" className="h-8" />
        </div>

        <div className="mt-16 bg-[#7559FF] rounded-lg p-4 md:p-8 max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg">
            <div className="flex items-center justify-center text-white">
              Video Demo Placeholder
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const NavItem = forwardRef(
  (
    {
      title,
      mobile = false,
      onMouseEnter,
    }: {
      title: string;
      mobile?: boolean;
      onMouseEnter: (title: string) => void;
    },
    ref: React.Ref<HTMLDivElement> // Accepting ref as the second parameter
  ) => {
    return (
      <div
        className={`relative ${mobile ? "py-2" : ""}`}
        onMouseEnter={() => onMouseEnter(title)}
        ref={ref} // Forward the ref to this div
      >
        <button className="flex items-center text-sm font-medium">
          {title}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </div>
    );
  }
);


function MegaMenu({ title }: { title: string }) {
  const menuItems = {
    "Use Cases": [
      {
        title: "Marketing",
        items: ["Social Media", "Content Marketing", "Email Campaigns"],
      },
      {
        title: "Education",
        items: ["Online Courses", "Tutorials", "Webinars"],
      },
      {
        title: "Business",
        items: ["Sales Pitches", "Product Demos", "Internal Communications"],
      },
    ],
    Features: [
      {
        title: "AI Avatars",
        items: ["Customization", "Lip Sync", "Expressions"],
      },
      {
        title: "Voice Generation",
        items: ["Multi-language", "Voice Cloning", "Text-to-Speech"],
      },
      {
        title: "Video Editor",
        items: ["Templates", "Transitions", "Backgrounds"],
      },
    ],
    Resources: [
      { title: "Learn", items: ["Blog", "Tutorials", "FAQ"] },
      { title: "Community", items: ["Forum", "Events", "Showcase"] },
      {
        title: "Support",
        items: ["Documentation", "API Reference", "Contact Us"],
      },
    ],
  };

  return (
    <div className="flex justify-start space-x-12">
      {menuItems[title as keyof typeof menuItems].map((section, index) => (
        <div key={index} className="flex flex-col items-start">
          <h3 className="font-semibold text-sm mb-2">{section.title}</h3>
          <ul className="space-y-1">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-[#7559FF]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
