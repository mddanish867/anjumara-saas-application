import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

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
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Code Sample</h2>
        <button
          onClick={handleCopy}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-5 h-5 mr-2" />
              Copy to Clipboard
            </>
          )}
        </button>
      </div>
      <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
        <code className="text-sm">{codeString}</code>
      </pre>
    </div>
  );
};

export default CodeDisplayComponent;