import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const navigation = [
  {
    href: "javascript:void(0)",
    name: "Sign in",
  },
  {
    href: "javascript:void(0)",
    name: "Sign up",
  },
  {
    href: "javascript:void(0)",
    name: "Sign up validation",
  },
  {
    href: "javascript:void(0)",
    name: "Pagination",
  },
  {
    href: "javascript:void(0)",
    name: "Review System",
  },
];

function Recent() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8 mt-10 -ml-4">
      <div className="max-w-lg">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Beautifully crafted UI components, ready for your next project.
        </h1>
        <p className="text-gray-600 mt-2">
          Over 500+ professionally designed, fully responsive, expertly crafted
          component examples you can drop into your Tailwind projects and
          customize to your heart’s content.
        </p>
        <Button variant="link" className="text-start text-blue-500 -ml-4 mt-4">
          Brows all components <MoveRight className="ml-2" />
        </Button>
      </div>
      <div className="mt-6">
  <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto whitespace-nowrap">
    {navigation.map((item, idx) => (
      <li
        key={idx}
        className={`py-2 border-b-2 flex-shrink-0 ${
          idx == 0
            ? "border-blue-500 text-blue-500"
            : "border-transparent text-gray-500"
        }`}
      >
        <a
          href={item.href}
          className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-blue-500 hover:bg-gray-50 active:bg-gray-100 font-medium"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
}

export default Recent;
