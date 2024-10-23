import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CopyIcon, CheckIcon } from "lucide-react";
import QandA from "../Common/Q&A";
import CodeDisplayComponent from "./AllComponents/CodeDisplayComponent";
import LoginForm from "./AllComponents/LoginForm";

function ComponentDetails() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl mt-20">
      

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">LoginForm</h1>
      </div>

      <div className="mb-8">
        <p className="text-lg">
          This login form component provides a clean and user-friendly interface
          for user authentication. It includes input validation, error handling,
          and can be easily integrated with various authentication systems.
        </p>
      </div>

      <Tabs defaultValue="preview" className="mb-8">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          {/* Replace this with your actual login form component */}
         <LoginForm/>
        </TabsContent>
        <TabsContent value="code">
          <pre className="bg-transparent p-4 rounded-md overflow-x-auto">
            <CodeDisplayComponent/>
          </pre>
        </TabsContent>
      </Tabs>

      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="implementation">
          <AccordionTrigger>How to Implement</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Install the necessary dependencies:</li>
              <div className="bg-transparent p-2 rounded-md flex justify-between items-center">
                <code>npm install react react-dom tailwindcss</code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    copyToClipboard("npm install react react-dom tailwindcss")
                  }
                >
                  {copied ? (
                    <CheckIcon className="h-4 w-4" />
                  ) : (
                    <CopyIcon className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <li>Import the component into your project:</li>
              <code className="bg-transparent p-2 rounded-md block">
                import LoginForm from './path/to/LoginForm';
              </code>
              <li>Use the component in your React application:</li>
              <code className="bg-transparent p-2 rounded-md block">
                {"<LoginForm onSubmit={handleLogin} />"}
              </code>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="api">
          <AccordionTrigger>API Required</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              To make this component functional, you'll need an authentication
              API with the following endpoint:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>POST /api/login - For user authentication</li>
            </ul>
            <p className="mt-2">Example API call:</p>
            <pre className="bg-transparent p-2 rounded-md overflow-x-auto">
              {`fetch('/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123',
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
            </pre>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="documentation">
          <AccordionTrigger>Documentation</AccordionTrigger>
          <AccordionContent>
            <h3 className="text-xl font-semibold mb-2">Props</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <code>onSubmit</code> (function): Callback function called when
                the form is submitted
              </li>
              <li>
                <code>initialEmail</code> (string, optional): Initial value for
                the email input
              </li>
              <li>
                <code>loading</code> (boolean, optional): Whether the form is in
                a loading state
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Usage</h3>
            <pre className="bg-transparent p-2 rounded-md overflow-x-auto mb-4">
              {`import LoginForm from './LoginForm';

function App() {
  const handleLogin = (email, password) => {
    // Handle login logic
  };

  return (
    <LoginForm
      onSubmit={handleLogin}
      initialEmail="user@example.com"
      loading={false}
    />
  );
}`}
            </pre>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
        
          <QandA/>
       
      </div>
    </div>
  );
}

export default ComponentDetails;
