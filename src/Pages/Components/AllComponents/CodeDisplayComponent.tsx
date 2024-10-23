import { useState } from 'react';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('javascript', js);

const codeString = `
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);


  const validateEmail = (email:any) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password:any) => {
    // Add your password validation logic here (e.g., minimum length, complexity)
    return password.length >= 6;
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setFormSubmitted(true);
    setEmailError('');
    setPasswordError('');

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    }
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
    }

    if (validateEmail(email) && validatePassword(password)) {
      // Here you would typically make an API call to your backend to authenticate the user.
      console.log('Form submitted:', { email, password });
      //After successful login, redirect to another page
      //window.location.href = "/dashboard"; //Replace with your dashboard route.
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950">
      <div className="bg-white p-8 rounded shadow-sm w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {formSubmitted && emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {formSubmitted && passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-500"
                >
                  Remember me
                </label>
              </div>
  
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
          {/* Add a "Forgot Password?" link here if needed */}
        </form>
        <div className="text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </Link>
            </p>
          </div>
      </div>
    </div>
  );
};

export default LoginForm;
`;

export default function Component() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="mb-4 flex justify-between items-center px-4 sm:px-6">
        <h2 className="text-md font-medium text-gray-800 dark:text-gray-400">LoginForm.tsx</h2>
        <button
          onClick={handleCopy}
          className="flex items-center px-4 py-2 text-black dark:text-gray-400 transition-colors"
        >
          {copied ? (
            <>
              <ClipboardCheck className="w-5 h-5 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Clipboard className="w-5 h-5 mr-2" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="rounded-md overflow-hidden">
        <SyntaxHighlighter 
          language="javascript" 
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1rem',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}