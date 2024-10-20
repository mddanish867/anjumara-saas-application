import { useState } from "react";
import { PlusCircle, X, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCreateTemplateMutation } from "@/API/Templates/templateApi"; // API hook import
import { decodeToken } from "../helper/decodedToke";
import toast from "react-hot-toast";

export default function AddTemplateForm() {
  const decodedToken = decodeToken(); // Decoding the userId
  const [addTemplate, { isLoading }] = useCreateTemplateMutation(); // Using the mutation hook

  // Form state variables
  const [templateName, setTemplateName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [techStack, setTechStack] = useState<string[]>([]);
  const [apiList, setApiList] = useState<string[]>([""]);
  const [screenshots, setScreenshots] = useState<File[]>([]);
  const [document, setDocument] = useState<File | null>(null);
  const [code, setCode] = useState<File | null>(null);

  // Handle tech stack input
  const handleTechStackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const techArray = e.target.value.split(',').map(tech => tech.trim());
    setTechStack(techArray);
  };

  // Handle API list input
  const handleApiChange = (index: number, value: string) => {
    const newApiList = [...apiList];
    newApiList[index] = value;
    setApiList(newApiList);
  };

  // Remove API from list
  const handleApiRemove = (index: number) => {
    const newApiList = apiList.filter((_, i) => i !== index);
    setApiList(newApiList);
  };

  // Handle screenshots input
  const handleScreenshotsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setScreenshots(Array.from(files)); // Convert FileList to Array
    }
  };

  // Handle document input
  const handleDocumentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setDocument(files[0]);
    }
  };

  // Handle code input
  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setCode(files[0]);
    }
  };

  // Form submit handler
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate required fields
    if (
      !templateName ||
      !description ||
      techStack.length === 0 ||
      apiList.some(api => !api) ||
      screenshots.length === 0 ||
      !document ||
      !code
    ) {
      toast.error("All fields are required");
      return;
    }

    // Prepare form data for submission
    const formData = new FormData();
    formData.append("userId", decodedToken?.userId as string); // Add userId from decoded token
    formData.append("name", templateName);
    formData.append("description", description);
    techStack.forEach(tech => formData.append("techStack", tech));
    apiList.forEach(api => formData.append("apiList", api));
    screenshots.forEach(screenshot => formData.append("screenshots", screenshot));
    if (document) formData.append("document", document);
    if (code) formData.append("code", code);

    // Call the mutation
    try {
      await addTemplate(formData).unwrap(); // Trigger the mutation
      toast.success('Template added successfully');
      resetForm(); // Reset the form after successful submission
    } catch (error) {
      toast.error('Error adding template: ' + error);
      console.error('Error adding template:', error);
    }
  };

  // Reset form after submission
  const resetForm = () => {
    setTemplateName("");
    setDescription("");
    setTechStack([]);
    setApiList([""]);
    setScreenshots([]);
    setDocument(null);
    setCode(null);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Add New Template</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="templateName">Template Name</Label>
            <Input
              id="templateName"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              placeholder="Enter template name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter template description"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="techStack">Tech Stack</Label>
            <Input
              id="techStack"
              value={techStack.join(', ')}
              onChange={handleTechStackChange}
              placeholder="e.g., React, Node.js, MongoDB"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="screenshots">Screenshots</Label>
            <Input
              id="screenshots"
              type="file"
              accept="image/*"
              multiple
              onChange={handleScreenshotsChange}
              required
            />
            {screenshots.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {screenshots.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Screenshot ${index + 1}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="document">Document</Label>
            <Input
              id="document"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleDocumentChange}
              required
            />
            {document && (
              <p className="text-sm text-gray-500 mt-1">
                Selected: {document.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="code">Code</Label>
            <Input
              id="code"
              type="file"
              accept=".zip,.rar,.7zip"
              onChange={handleCodeChange}
              required
            />
            {code && (
              <p className="text-sm text-gray-500 mt-1">
                Selected: {code.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>API List</Label>
            {apiList.map((api, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={api}
                  onChange={(e) => handleApiChange(index, e.target.value)}
                  placeholder="Enter API endpoint"
                  required
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleApiRemove(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setApiList([...apiList, ""])}
              className="mt-2"
            >
              <PlusCircle className="h-4 w-4" />
              Add API
            </Button>
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="animate-spin h-5 w-5" /> : "Add Template"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
