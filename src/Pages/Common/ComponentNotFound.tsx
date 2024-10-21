import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function ComponentNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="max-w-md w-full px-6 py-8 bg-transparent border rounded-lg">
        <div className="text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-yellow-500" />
          <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Not Found
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            We couldn't find the details you're looking for. It might have been
            removed or doesn't exist.
          </p>
        </div>
        <div className="mt-6 flex flex-col space-y-2">
          <Button onClick={() => navigate("/")} className="w-full">
            Go to Home
          </Button>
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="w-full"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
