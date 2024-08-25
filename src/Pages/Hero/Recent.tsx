import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"

function Recent() {
  return (  
<section className=" bg-white sm:grid sm:grid-cols-2 sm:items-center">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
  <div className="relative mx-auto max-w-screen-3xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-96 text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="w-full text-2xl font-bold sm:text-5xl">
            Beautifully crafted UI components,
              <strong className="block font-bold text-gray-900">
              ready for your next project.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              

              <Button   variant="link"             
                className="flex w-full py-3 text-sm font-medium text-gary-700 shadow sm:w-auto bg-transparent hover:outline-none text-blue-500"
              >
                Browse all components <MoveRight className="ml-2"/>
              </Button>
            </div>
          </div>
        </div>
  </div>  
</section>
  )
}

export default Recent

