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
        <div className="fixed inset-x-0 top-16 z-[999] px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <Command className="rounded-lg border shadow-lg bg-background">
              <div className="flex items-center border-b px-3">
                <CommandInput
                  placeholder="Type to search..."
                  value={query}
                  onValueChange={setQuery}
                  className="h-14 text-lg flex-1 border-0 focus:ring-0 focus:outline-none bg-transparent placeholder:text-muted-foreground"
                />
              </div>
              <CommandList className="max-h-[300px] overflow-y-auto py-2">
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  {filteredSuggestions.map((item) => (
                    <CommandItem
                      key={item}
                      onSelect={() => {
                        setQuery(item);
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-accent"
                    >
                      {item}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </div>
      )}
    </div>
  );
}