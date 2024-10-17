import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Command, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList 
} from "@/components/ui/command";

const suggestions = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "Redux",
];

export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && event.target instanceof Node && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative" ref={searchRef}>
      <Button
        variant="secondary"
        className="font-semibold bg-transparent hover:bg-transparent text-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Search size={20} />
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 sm:w-96 bg-background rounded-md shadow-lg z-50">
          <Command>
            <CommandInput
              placeholder="Type to search..."
              value={query}
              onValueChange={setQuery}
              className="border-none focus:ring-0"
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {filteredSuggestions.map((item) => (
                  <CommandItem
                    key={item}
                    onSelect={() => {
                      setQuery(item);
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
}