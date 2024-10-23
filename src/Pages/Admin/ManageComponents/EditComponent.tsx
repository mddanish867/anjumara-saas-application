import React, { useState, useEffect } from "react";
import { useUpdateComponentMutation, useGetComponentByIdQuery } from "@/API/Components/componentApi";
import { useSearchParams } from 'react-router-dom';
import { decodeToken } from "@/Pages/helper/decodedToke";
import { Loader, PlusCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { ComponentLoader } from "@/Pages/Common/ComponentLoader";

const EditTemplateForm = ({
  setActiveSection,
}: {
  setActiveSection: (section: string) => void;
}) => {
  const decodedToken = decodeToken();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [implementationSteps, setImplementationSteps] = useState([""]);
  const [apiRequired, setApiRequired] = useState([""]);
  const [documentation, setDocumentation] = useState("");
  const [category, setCategory] = useState("");
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);
  const [updateComponent, { isLoading }] = useUpdateComponentMutation();

  const [searchParams] = useSearchParams();
  const componentId = searchParams.get('componentId');
  const { data, isFetching } = useGetComponentByIdQuery(componentId ?? '');

  useEffect(() => {
    if (data?.component) {
      setName(data.component.name || "");
      setDescription(data.component.description || "");
      setCode(data.component.code || "");
      setImplementationSteps(
        data.component.implementationSteps ? 
        data.component.implementationSteps.split(',') : 
        [""]
      );
      setApiRequired(
        data.component.apiRequired ? 
        data.component.apiRequired.split(',') : 
        [""]
      );
      setDocumentation(data.component.documentation || "");
      setCategory(data.component.category || "");
      if (data.component.imageUrl) {
        setExistingImages(data.component.imageUrl.split(','));
      }
    }
  }, [data]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleRemoveExistingImage = (imageUrl: string) => {
    setExistingImages(prev => prev.filter(url => url !== imageUrl));
    setImagesToDelete(prev => [...prev, imageUrl]);
  };

  const handleAddStep = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    array: string[]
  ) => {
    setter([...array, ""]);
  };

  const handleRemoveStep = (
    index: number,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    array: string[]
  ) => {
    setter(array.filter((_, i) => i !== index));
  };

  const handleStepChange = (
    index: number,
    value: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    array: string[]
  ) => {
    const newArray = [...array];
    newArray[index] = value;
    setter(newArray);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if ((!files || files.length === 0) && existingImages.length === 0) {
      toast.error("Please select at least one file or keep existing images.");
      return;
    }

    if (!decodedToken?.userId) {
      toast.error("Invalid user session.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("code", code);
    formData.append("implementationSteps", JSON.stringify(implementationSteps));
    formData.append("apiRequired", JSON.stringify(apiRequired));
    formData.append("documentation", documentation);
    formData.append("userId", decodedToken.userId as string);
    formData.append("category", category);
    formData.append("existingImages", JSON.stringify(existingImages));
    formData.append("imagesToDelete", JSON.stringify(imagesToDelete));

    if (files) {
      Array.from(files).forEach((file) => {
        formData.append("images", file);
      });
    }

    try {
      const response = await updateComponent({ id: componentId, formData });
      if ('error' in response) {
        toast.error(("Component not updated! " + response.error) as string);
      } else {
        toast.success("Component updated successfully");
        setTimeout(() => {
          if (window.history.length > 1) {
            setActiveSection("Remove Components");
          }
        }, 2000);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Error updating component: " + "Unknown error");
    }
  };

  if (isFetching) {
    return <ComponentLoader />;
  }

  return (
    <div className="w-full min-h-screen border p-6 space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Component Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter component name"
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter component category"
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter component description"
            disabled={isLoading}
          />
        </div>

        <div>
          <Label htmlFor="code">Code</Label>
          <Textarea
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter component code"
            disabled={isLoading}
            className="font-mono"
            rows={10}
          />
        </div>

        <div>
          <Label>Implementation Steps</Label>
          {implementationSteps.map((step, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <Input
                value={step}
                onChange={(e) =>
                  handleStepChange(
                    index,
                    e.target.value,
                    setImplementationSteps,
                    implementationSteps
                  )
                }
                placeholder={`Step ${index + 1}`}
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() =>
                  handleRemoveStep(
                    index,
                    setImplementationSteps,
                    implementationSteps
                  )
                }
                disabled={isLoading}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              handleAddStep(setImplementationSteps, implementationSteps)
            }
            disabled={isLoading}
            className="mt-2"
          >
            <PlusCircle className="h-4 w-4 mr-2" /> Add Step
          </Button>
        </div>

        <div>
          <Label>API Required</Label>
          {apiRequired.map((api, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <Input
                value={api}
                onChange={(e) =>
                  handleStepChange(
                    index,
                    e.target.value,
                    setApiRequired,
                    apiRequired
                  )
                }
                placeholder={`API ${index + 1}`}
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() =>
                  handleRemoveStep(index, setApiRequired, apiRequired)
                }
                disabled={isLoading}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleAddStep(setApiRequired, apiRequired)}
            disabled={isLoading}
            className="mt-2"
          >
            <PlusCircle className="h-4 w-4 mr-2" /> Add API
          </Button>
        </div>

        <div>
          <Label htmlFor="documentation">Documentation</Label>
          <Textarea
            id="documentation"
            value={documentation}
            onChange={(e) => setDocumentation(e.target.value)}
            placeholder="Enter component documentation"
            disabled={isLoading}
            rows={5}
          />
        </div>

        <div className="space-y-4">
          <Label>Existing Images</Label>
          {existingImages.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {existingImages.map((imageUrl, index) => (
                <div key={index} className="relative group">
                  <img 
                    src={imageUrl} 
                    alt={`Component preview ${index + 1}`}
                    className="w-full h-40 object-cover rounded-lg border-2 border-gray-200"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleRemoveExistingImage(imageUrl)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
          
          <div>
            <Label htmlFor="images">Add New Images</Label>
            <Input
              id="images"
              type="file"
              onChange={handleFileChange}
              multiple
              disabled={isLoading}
              accept=".png,.jpg,.jpeg,.gif"
              className="mt-2"
            />
          </div>
        </div>

        <Button 
          type="submit" 
          disabled={isLoading || (!files && existingImages.length === 0)}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              Updating Component...
            </>
          ) : (
            "Save Component"
          )}
        </Button>
      </form>
    </div>
  );
};

export default EditTemplateForm;