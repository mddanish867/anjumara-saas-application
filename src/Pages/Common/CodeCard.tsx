import { useState } from 'react'
import { ClipboardIcon, CheckIcon } from 'lucide-react'

export default function CodeCard({ backendCode, name, className = '' }: { backendCode: string, name: string, className?: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(backendCode.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`w-full ${className} p-0 sm:p-4`}>
      <div className="bg-white dark:bg-transparent rounded-none sm:rounded-lg shadow-lg overflow-hidden w-full">
        <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-200 font-mono text-sm">{name}.tsx</span>
          <button
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <CheckIcon className="w-5 h-5" />
            ) : (
              <ClipboardIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm md:text-base">
          <code className="language-python">
            {backendCode.split('\n').map((line: string, index: number) => (
              <div key={index} className="table-row">
                <span className="table-cell pr-4 text-gray-500 select-none">{index + 1}</span>
                <span className="table-cell">
                  {line.split(' ').map((part: string, i: number) => {
                    if (part.startsWith('from') || part.startsWith('import') || part.startsWith('class') || part.startsWith('def') || part.startsWith('async')) {
                      return <span key={i} className="text-purple-600 font-bold">{part} </span>
                    } else if (part.includes(':') && !part.startsWith('"')) {
                      return <span key={i} className="text-blue-600 font-bold">{part} </span>
                    } else if (part.startsWith('@')) {
                      return <span key={i} className="text-green-600 font-bold">{part} </span>
                    } else if (part === 'return' || part === 'True' || part === 'False' || part === 'None') {
                      return <span key={i} className="text-red-600 font-bold">{part} </span>
                    } else if ((part)) {
                      return <span key={i} className="text-yellow-600">{part} </span>
                    } else if (part.startsWith('"') || part.startsWith("'")) {
                      return <span key={i} className="text-green-400">{part} </span>
                    } else {
                      return part + ' '
                    }
                  })}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}