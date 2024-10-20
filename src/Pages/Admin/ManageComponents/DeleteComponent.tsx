import { useState } from 'react'
import { PlusCircle, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Template {
  id: string
  name: string
  description: string
  category: string
}

const ITEMS_PER_PAGE = 5

export default function DeleteComponent({ setActiveSection }: any) {
  const [templates, setTemplates] = useState<Template[]>([
    { id: '1', name: 'Template 1', description: 'Description 1', category: 'Web' },
    { id: '2', name: 'Template 2', description: 'Description 2', category: 'Mobile' },
    { id: '3', name: 'Template 3', description: 'Description 3', category: 'Desktop' },
    { id: '4', name: 'Template 4', description: 'Description 4', category: 'Web' },
    { id: '5', name: 'Template 5', description: 'Description 5', category: 'Mobile' },
    { id: '6', name: 'Template 6', description: 'Description 6', category: 'Desktop' },
    { id: '7', name: 'Template 7', description: 'Description 7', category: 'Web' },
  ])

  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all') // Set initial value to "all"

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'all' || template.category === filterCategory)
  )

  const totalPages = Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE)
  const paginatedTemplates = filteredTemplates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleAdd = () => {
    setActiveSection('Add New Components')
  }

  const handleEdit = (id: string) => {
    console.log('Edit template', id)
  }

  const handleDelete = (id: string) => {
    setTemplates(templates.filter(template => template.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Remove Component</h1>
        <Button onClick={handleAdd} className="w-full md:w-auto">
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Component
        </Button>
      </div>

      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Search templates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2"
        />
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-full md:w-1/4">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Web">Web</SelectItem>
            <SelectItem value="Mobile">Mobile</SelectItem>
            <SelectItem value="Desktop">Desktop</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedTemplates.length > 0 ? (
              paginatedTemplates.map((template) => (
                <TableRow key={template.id}>
                  <TableCell className="font-medium">{template.name}</TableCell>
                  <TableCell>{template.description}</TableCell>
                  <TableCell>{template.category}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(template.id)}>
                        <Pencil className="h-4 w-4 text-green-500" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(template.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No templates found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {Math.min(filteredTemplates.length, ITEMS_PER_PAGE)} of {filteredTemplates.length} results
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
