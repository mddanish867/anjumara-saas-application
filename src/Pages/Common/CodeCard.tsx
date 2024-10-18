import { useState } from 'react'
import { motion } from 'framer-motion'
import { ClipboardIcon, CheckIcon } from 'lucide-react'

const backendCode = `
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None

@app.post("/items/")
async def create_item(item: Item):
    return {"item_name": item.name, "item_price": item.price}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}
`

export default function CodeCard() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(backendCode.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <motion.div
        className="bg-white dark:bg-transparent rounded-lg shadow-lg overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-200 font-mono text-sm">main.py</span>
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
            {backendCode.split('\n').map((line, index) => (
              <div key={index} className="table-row">
                <span className="table-cell pr-4 text-gray-500 select-none">{index + 1}</span>
                <span className="table-cell">
                  {line.split(' ').map((part, i) => {
                    if (part.startsWith('from') || part.startsWith('import') || part.startsWith('class') || part.startsWith('def') || part.startsWith('async')) {
                      return <span key={i} className="text-purple-600">{part} </span>
                    } else if (part.includes(':') && !part.startsWith('"')) {
                      return <span key={i} className="text-blue-600">{part} </span>
                    } else if (part.startsWith('@')) {
                      return <span key={i} className="text-green-600">{part} </span>
                    } else if (part === 'return') {
                      return <span key={i} className="text-red-600">{part} </span>
                    } else {
                      return part + ' '
                    }
                  })}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </motion.div>
    </div>
  )
}