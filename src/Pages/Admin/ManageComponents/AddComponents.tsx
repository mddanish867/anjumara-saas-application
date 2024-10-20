import { useAddComponentMutation } from "@/API/Components/componentApi";
import { decodeToken } from "@/Pages/helper/decodedToke";
import { useState } from "react";
import { Loader, PlusCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";


const AddComponents = () => {
  const decodedToken = decodeToken();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [implementationSteps, setImplementationSteps] = useState([""]);
  const [apiRequired, setApiRequired] = useState([""]);
  const [documentation, setDocumentation] = useState("");
  const [category, setCategory] = useState("");
  const [uploadImages, { isLoading }] =
    useAddComponentMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!files || files.length === 0) {
      toast.error("Please select at least one file.");
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

    Array.from(files).forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await uploadImages(formData);
      if (response.error) {
        toast.error(
          ("Component added successfully" + response.error) as string
        );
      } else {
        toast.success("Component added successfully");
      }

      // Clear state after successful upload
      setName("");
      setDescription("");
      setCode("");
      setFiles(null);
      setImplementationSteps([""]);
      setApiRequired([""]);
      setDocumentation("");
      setCategory("");
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Error adding component: " + "Unknown error");
    }
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

        <div>
          <Label htmlFor="files">Upload Images</Label>
          <Input
            id="files"
            type="file"
            multiple
            onChange={handleFileChange}
            disabled={isLoading}
          />
        </div>

        <Button type="submit" disabled={isLoading || !files}>
          {isLoading ? (
            <Loader className="animate-spin h-5 w-5 mr-2" />
          ) : (
            <PlusCircle className="h-5 w-5 mr-2" />
          )}
          {isLoading ? "Adding Component..." : "Add Component"}
        </Button>
      </form>      
    </div>
  );
};

export default AddComponents;
