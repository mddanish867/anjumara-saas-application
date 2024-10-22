import { useState } from "react";
import { Loader2 } from "lucide-react";
import {
  PlusCircle,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  useGetComponentsQuery,
  useDeleteComponentMutation,
} from "@/API/Components/componentApi";
import { LoadingSkeleton } from "@/Pages/Common/LoadingSkelton";
import CodeCard from "@/Pages/Common/CodeCard";
import ComponentNotFound from "@/Pages/Common/ComponentNotFound";
import { useNavigate } from "react-router-dom";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
  implementationSteps: string;
  apiRequired: string;
  documentation: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

const ITEMS_PER_PAGE = 5;

export default function DeleteComponent({
  setActiveSection,
}: {
  setActiveSection: (section: string) => void;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [componentToDelete, setComponentToDelete] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const { data, isLoading, error } = useGetComponentsQuery(undefined);
  const [deleteComponent] = useDeleteComponentMutation();

  // Handle loading and error states
  if (isLoading) {
    return (
      <div>
        <LoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <ComponentNotFound />
      </div>
    );
  }

  // Extract components from the API response
  const templates: Template[] = Array.isArray(data?.components)
    ? data.components
    : [];

  // Filter templates based on search term and category
  const filteredTemplates = templates.filter(
    (template) =>
      template?.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory === "all" || template?.category === filterCategory)
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE)
  );
  const paginatedTemplates = filteredTemplates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleAdd = () => {
    setActiveSection("Add New Components");
  };

  const handleEdit = (id: string) => {   
    navigate(`/manage-application/edit-component?componentId=${id}`);   
  }
  const handleDelete = (id: string) => {
    navigate(`${location.pathname}?componentId=${id}`);
    setComponentToDelete(id); // Set the component to be deleted
    setShowDeleteConfirm(true); // Show the delete confirmation alert
  };

  const confirmDelete = async () => {
    setLoading(true); // Start loading
    try {
      if (componentToDelete) {
        await deleteComponent(componentToDelete); // Perform the delete mutation
        setShowDeleteConfirm(false); // Close the dialog after deletion
      }
    } catch (error) {
      console.error("Error deleting component:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleImageClick = (url: any) => {
    setSelectedImage(url); // Set the clicked image URL
  };

  const handleCloseDialog = () => {
    setSelectedImage(null); // Clear the selected image on dialog close
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Button className="ml-auto" onClick={handleAdd}>
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
              <TableHead>Code</TableHead>
              <TableHead>Implementation Steps</TableHead>
              <TableHead>API Required</TableHead>
              <TableHead>Documentation</TableHead>
              <TableHead>Image URL</TableHead>
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link">View Code</Button>
                      </DialogTrigger>
                      <DialogContent className="w-full max-w-none">
                        <DialogHeader>
                          <DialogTitle>Code</DialogTitle>
                          <DialogDescription>
                            Code for {template.name}
                          </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="h-[80vh] w-full p-4">
                          <CodeCard
                            backendCode={template.code}
                            name={template.name}
                          />
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link">View Steps</Button>
                      </DialogTrigger>
                      <DialogContent className="w-full max-w-none">
                        <DialogHeader>
                          <DialogTitle>Implementation Steps</DialogTitle>
                          <DialogDescription>
                            Steps for {template.name}
                          </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="h-[300px] w-full p-4">
                          <pre>{template.implementationSteps}</pre>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link">View API</Button>
                      </DialogTrigger>
                      <DialogContent className="w-full max-w-none">
                        <DialogHeader>
                          <DialogTitle>API Required</DialogTitle>
                          <DialogDescription>
                            APIs for {template.name}
                          </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="h-[300px] w-full p-4">
                          <pre>{template.apiRequired}</pre>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link">View Docs</Button>
                      </DialogTrigger>
                      <DialogContent className="w-full max-w-none">
                        <DialogHeader>
                          <DialogTitle>Documentation</DialogTitle>
                          <DialogDescription>
                            Documentation for {template.name}
                          </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="h-[300px] w-full p-4">
                          <pre>{template.documentation}</pre>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link">View Image</Button>
                      </DialogTrigger>
                      <DialogContent className="w-full max-w-none">
                        <DialogHeader>
                          <DialogTitle>Image</DialogTitle>
                          <DialogDescription>
                            Image for {template.name}
                          </DialogDescription>
                        </DialogHeader>
                        <>
                          <ScrollArea className="h-[80vh] w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {template.imageUrl.split(",").map((url, index) => (
                              <img
                                key={index}
                                src={url.trim()} // Trim any whitespace
                                alt={`Image for ${template.name} ${index + 1}`} // Unique alt text for accessibility
                                className="w-full h-auto cursor-pointer mb-2 rounded" // Add margin for spacing and styling
                                onClick={() => handleImageClick(url.trim())} // Open image on click
                              />
                            ))}
                          </ScrollArea>

                          {/* Dialog to show the selected image in full width */}
                          {selectedImage && (
                            <Dialog
                              open={!!selectedImage}
                              onOpenChange={handleCloseDialog}
                            >
                              <DialogContent className="container w-full max-w-full">
                                <img
                                  src={selectedImage}
                                  alt="Selected"
                                  className="w-full h-full" // Full width for selected image
                                />
                                <button
                                  onClick={handleCloseDialog}
                                  className="mt-4"
                                >
                                  Close
                                </button>
                              </DialogContent>
                            </Dialog>
                          )}
                        </>
                      </DialogContent>
                    </Dialog>
                  </TableCell>

                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(template.id)}
                      >
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
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center">
                  No templates found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {Math.min(filteredTemplates.length, ITEMS_PER_PAGE)} of{" "}
          {filteredTemplates.length} results
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {/* Delete Confirmation Dialog */}
      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this component?
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2 mt-4">
            <Button
              variant="ghost"
              onClick={() => setShowDeleteConfirm(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> // Loading spinner
              ) : (
                "Delete"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
