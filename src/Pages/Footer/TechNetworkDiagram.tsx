import { Atom, Cloud, Code2, Cog, Database } from "lucide-react";
import { motion } from "framer-motion";

const logos = [
  { name: "stripe", content: "stripe", x: "10%", y: "30%" },
  {
    name: "react",
    content: <Atom className="w-6 h-6 text-blue-400" />,
    x: "5%",
    y: "70%",
  },
  {
    name: "mongodb",
    content: <Code2 className="w-6 h-6 text-violet-400" />
    ,
    x: "50%",
    y: "10%",
  },
  {
    name: "salesforce",
    content: <Cloud className="w-6 h-6 text-[#38bdf8]" />,
    x: "80%",
    y: "30%",
  },
  {
    name: "segment",
    content: <Database className="w-6 h-6 text-orange-400" />,
    x: "90%",
    y: "70%",
  },
];

const connections = [
  { start: "stripe", end: "mongodb", color: "bg-blue-400" },
  { start: "stripe", end: "salesforce", color: "bg-green-400" },
  { start: "react", end: "mongodb", color: "bg-green-400" },
  { start: "salesforce", end: "segment", color: "bg-orange-400" },
  { start: "salesforce", end: "mongodb", color: "bg-green-400" },
];

export default function TechNetworkDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full max-w-4xl mx-auto p-4"
    >
      <div className="relative aspect-[4/3] bg-white">
        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-gray-100" />
          ))}
        </div>

        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full">
          {connections.map(({ start, end, color }, index) => {
            const startLogo = logos.find((l) => l.name === start);
            const endLogo = logos.find((l) => l.name === end);
            return (
              <path
                key={index}
                d={`M ${startLogo?.x} ${startLogo?.y} Q 50% 50%, ${endLogo?.x} ${endLogo?.y}`}
                fill="none"
                className={`${color} stroke-current`}
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* Logos */}
        {logos.map(({ name, content, x, y }) => (
          <div
            key={name}
            className="absolute w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: x, top: y }}
          >
            {typeof content === "string" ? content : content}
          </div>
        ))}

        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
          <Cog className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      {/* Text */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">All the data.</h2>
        <p className="text-2xl text-gray-600">Connect with content,</p>
      </div>
    </motion.div>
  );
}
