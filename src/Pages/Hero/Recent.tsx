import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"

function Recent() {
  return (  
<section className="overflow-hidden bg-white sm:grid sm:grid-cols-2 sm:items-center">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
  <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-3xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let's build your
              <strong className="block font-extrabold text-gray-900">
                components from scrach{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Beautifully designed, expertly crafted components. The perfect starting point for your next project/interview. This will help you to prepare the machine code interview
              preprations!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Button                
                className="flex w-full py-3 text-sm font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-700 sm:w-auto"
              >
                Browse components <MoveRight className="ml-2"/>
              </Button>

              <Button   variant="outline"             
                className="flex w-full py-3 text-sm font-medium text-gary-700 shadow sm:w-auto"
              >
                Access source code <MoveRight className="ml-2"/>
              </Button>
            </div>
          </div>
        </div>
  </div>  
</section>
  )
}

export default Recent
