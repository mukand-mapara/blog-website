import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <Skeleton className="h-12 w-64 mb-4" />
        <Skeleton className="h-6 w-96 mb-6" />
        <Skeleton className="h-10 w-full max-w-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-48 w-full rounded-md" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <div className="flex justify-between">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

