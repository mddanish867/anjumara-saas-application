import { useState } from "react"
import { PlusCircle, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

interface Template {
  id: string
  name: string
  description: string
  techStack: string[]
  screenshots: string[]
  documentUrl: string
  codeUrl: string
  apiList: string[]
}

export default function DeleteTemplate() {
  const [templates, setTemplates] = useState<Template[]>([
    {
      id: "1",
      name: "E-commerce Platform",
      description: "A full-featured e-commerce solution with product management, cart, and checkout.",
      techStack: ["React", "Node.js", "MongoDB"],
      screenshots: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
      documentUrl: "https://example.com/docs/ecommerce.pdf",
      codeUrl: "https://example.com/code/ecommerce.zip",
      apiList: ["/api/products", "/api/cart", "/api/orders"],
    },
    {
      id: "2",
      name: "Blog CMS",
      description: "A content management system for creating and managing blog posts.",
      techStack: ["Vue.js", "Express", "PostgreSQL"],
      screenshots: ["/placeholder.svg?height=100&width=100"],
      documentUrl: "https://example.com/docs/blog-cms.pdf",
      codeUrl: "https://example.com/code/blog-cms.zip",
      apiList: ["/api/posts", "/api/users", "/api/comments"],
    },
  ])

  const handleDelete = (id: string) => {
    setTemplates(templates.filter(template => template.id !== id))
  }

  return (
    <div className="min-h-screen w-full py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Templates</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Template
        </Button>
      </div>
      <div className="w-full border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Tech Stack</TableHead>
              <TableHead>Screenshots</TableHead>
              <TableHead>Document</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>API List</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {templates.map((template) => (
              <TableRow key={template.id}>
                <TableCell className="font-medium">{template.name}</TableCell>
                <TableCell>{template.description}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {template.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link">View Screenshots</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Screenshots</DialogTitle>
                        <DialogDescription>
                          Screenshots for {template.name}
                        </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[300px] w-full p-4">
                        <div className="grid grid-cols-2 gap-4">
                          {template.screenshots.map((screenshot, index) => (
                            <img
                              key={index}
                              src={screenshot}
                              alt={`Screenshot ${index + 1}`}
                              className="w-full h-auto rounded-lg"
                            />
                          ))}
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>
                  <a
                    href={template.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Document
                  </a>
                </TableCell>
                <TableCell>
                  <a
                    href={template.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Download Code
                  </a>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link">View API List</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>API List</DialogTitle>
                        <DialogDescription>
                          API endpoints for {template.name}
                        </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[200px] w-full p-4">
                        <ul className="list-disc pl-4">
                          {template.apiList.map((api, index) => (
                            <li key={index} className="mb-2">
                              {api}
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Pencil className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(template.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}