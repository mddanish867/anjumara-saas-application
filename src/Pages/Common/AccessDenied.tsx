import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"

export default function AccessDenied() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-red-100 p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex flex-col items-center justify-center">
          <XCircle className="h-24 w-24 text-red-500 mb-4" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Access Denied
          </h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Sorry, you don't have permission to access this page. Please contact your administrator if you believe this is an error.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <Button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#38bdf8] hover:bg-[#287494] md:py-4 md:text-lg md:px-10"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}