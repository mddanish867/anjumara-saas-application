import { useState } from 'react';
import { Clipboard, ClipboardCheck, } from 'lucide-react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('javascript', js);

const codeString = `import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from 'cookie';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allowedOrigins = [
  'http://localhost:3000',
  'https://anjumara-saas-application.vercel.app',
];
export default async function handler(req, res) {

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', ''); // Or handle unauthorized origins
  }
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  } 

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    //Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check if the user is verified
    if (!user.isVerified) {
      return res.status(401).json({ message: "Account is not verified." });
    }

    
  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  // Set the token in cookies
  // res.setHeader('Set-Cookie', cookie.serialize('token', token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
  //   //maxAge: 3600, // 1 hour
  //   sameSite: 'strict',
  //   path: '/'
  // }));

  res.setHeader('Set-Cookie', cookie.serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // true in production, false in development
    sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'strict', // Adjust according to your needs
    path: '/',
  }));

  // Return the response
  return res.status(200).json({
    message: 'Logged in successfully',
    token: token,
    success: true,    
  });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}`;

const CodeDisplayComponent = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Code Sample</h2>
        <button
          onClick={handleCopy}
          className="flex items-center px-4 py-2 text-black transition-colors"
        >
          {copied ? (
            <>
              <ClipboardCheck className="w-5 h-5 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Clipboard className="w-5 h-5 mr-2" />
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
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeDisplayComponent;