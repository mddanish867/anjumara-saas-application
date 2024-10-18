import { useState } from "react"
import { PlusCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AddTemplateForm() {
  const [apiList, setApiList] = useState<string[]>([])
  const [screenshots, setScreenshots] = useState<File[]>([])

  const handleApiAdd = () => {
    setApiList([...apiList, ""])
  }

  const handleApiChange = (index: number, value: string) => {
    const newApiList = [...apiList]
    newApiList[index] = value
    setApiList(newApiList)
  }

  const handleApiRemove = (index: number) => {
    const newApiList = apiList.filter((_, i) => i !== index)
    setApiList(newApiList)
  }

  const handleScreenshotsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setScreenshots(Array.from(event.target.files))
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Add New Template</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="templateName">Template Name</Label>
            <Input id="templateName" placeholder="Enter template name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter template description" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="techStack">Tech Stack</Label>
            <Input id="techStack" placeholder="e.g., React, Node.js, MongoDB" required />
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
            <Input id="document" type="file" accept=".pdf,.doc,.docx" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="code">Code</Label>
            <Input id="code" type="file" accept=".zip,.rar,.7zip" required />
          </div>

          <div className="space-y-2">
            <Label>API List</Label>
            {apiList.map((api, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={api}
                  onChange={(e) => handleApiChange(index, e.target.value)}
                  placeholder="Enter API endpoint"
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
            <Button type="button" variant="outline" onClick={handleApiAdd}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add API
            </Button>
          </div>

          <Button type="submit" className="w-full">
            Create Template
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}