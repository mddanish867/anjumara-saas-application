import { useState } from "react";
import { PlusIcon, MinusIcon } from "lucide-react"; 

const AccordionItem = ({ title, content, isOpen, onToggle }: any) => {
  return (
    <div className="border-b">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={onToggle}
      >
        <h2 className="font-semibold text-lg">{title}</h2>
        <span className="flex items-center">
          {isOpen ? (
            <MinusIcon className="h-5 w-5 text-gray-600 dark:text-gray-200" />
          ) : (
            <PlusIcon className="h-5 w-5 text-gray-600 dark:text-gray-200" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 text-gray-600 dark:text-gray-200">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const QandA = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  mx-auto mt-12">
      <AccordionItem
        title="Is this component free to use?"
        content="Yes, this component is free to use in both personal and commercial projects."
        isOpen={openIndex === 0}
        onToggle={() => toggleAccordion(0)}
      />
      <AccordionItem
        title="Can I get help implementing the API with this component?"
        content="While we don't provide direct implementation support, we have comprehensive documentation and examples to guide you through the process. For specific issues, you can refer to our community forums or open an issue on our GitHub repository."
        isOpen={openIndex === 1}
        onToggle={() => toggleAccordion(1)}
      />
      <AccordionItem
        title="Is this component customizable?"
        content="The component is built with Tailwind CSS, making it highly customizable. You can easily modify the styles to match your project's design system."
        isOpen={openIndex === 2}
        onToggle={() => toggleAccordion(2)}
      />
    </div>
  );
};

export default QandA;
