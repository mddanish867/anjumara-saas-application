import { useState } from "react";
import { Copy, Check } from "lucide-react";
// import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function APIDetails() {
  const [copiedCode, setCopiedCode] = useState("");

  const apiDetails = {
    name: "Weather Forecast API",
    description: "Get accurate weather forecasts for any location worldwide",
    category: "Weather",
    pricing: "$0.01 per request",
    documentation: "https://api.example.com/docs/weather-forecast",
    codeExamples: {
      curl: `curl -X GET "https://api.example.com/forecast?location=New York" \\
-H "Authorization: Bearer YOUR_API_KEY"`,
      javascript: `fetch('https://api.example.com/forecast?location=New York', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`,
      python: `import requests

url = "https://api.example.com/forecast"
params = {"location": "New York"}
headers = {"Authorization": "Bearer YOUR_API_KEY"}

response = requests.get(url, params=params, headers=headers)
data = response.json()
print(data)`,
    },
    faqs: [
      {
        question: "How often is the weather data updated?",
        answer:
          "Our weather data is updated every 15 minutes to ensure accuracy.",
      },
      {
        question: "What locations are supported?",
        answer:
          "We support weather forecasts for virtually any location worldwide, including cities, towns, and specific coordinates.",
      },
      {
        question: "What units are used for temperature and wind speed?",
        answer:
          "By default, we use Celsius for temperature and meters per second for wind speed. However, you can specify your preferred units in the API request.",
      },
    ],
  };

  const copyToClipboard = (code: string, language: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(""), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {apiDetails.name}
          </h1>
          <p className="text-gray-600 mb-4">{apiDetails.description}</p>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
              {apiDetails.category}
            </span>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
              {apiDetails.pricing}
            </span>
          </div>

          <Tabs defaultValue="curl" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            {Object.entries(apiDetails.codeExamples).map(([language, code]) => (
              <TabsContent key={language} value={language}>
                <div className="relative">
                  <pre className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                    <code className="text-sm text-white">{code}</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(code, language)}
                    className="absolute top-2 right-2 p-2 bg-gray-800 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    {copiedCode === language ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Documentation
            </h2>
            <a
              href={apiDetails.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View full documentation
            </a>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {apiDetails.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
