import { Skeleton } from "@/components/ui/skeleton"

export function ComponentLoader() {
  return (
    <div className="flex flex-col space-y-4 w-full h-full min-h-screen p-4">
      <Skeleton className="h-[30vh] w-full rounded-xl" />
      <div className="space-y-4 flex-grow">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-8 w-1/2" />
      </div>
      <div className="space-y-2 mt-auto">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  )
}