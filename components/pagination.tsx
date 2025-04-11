import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  totalPages: number
  currentPage: number
  basePath?: string
}

export function Pagination({ totalPages, currentPage, basePath = "" }: PaginationProps) {
  // Generate an array of page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // If we have fewer pages than the max, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always include first page
      pages.push(1)

      // Calculate start and end of page range
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if we're at the beginning or end
      if (currentPage <= 2) {
        end = 4
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 3
      }

      // Add ellipsis if needed
      if (start > 2) {
        pages.push(-1) // -1 represents ellipsis
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push(-2) // -2 represents ellipsis
      }

      // Always include last page
      if (totalPages > 1) {
        pages.push(totalPages)
      }
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  // Helper to generate the URL for a page
  const getPageUrl = (page: number) => {
    if (page === 1) {
      return basePath || "?"
    }
    return `${basePath ? basePath : ""}?page=${page}`
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="icon" disabled={currentPage === 1} asChild={currentPage !== 1}>
        {currentPage !== 1 ? (
          <Link href={getPageUrl(currentPage - 1)}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Link>
        ) : (
          <span>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </span>
        )}
      </Button>

      {pageNumbers.map((page, index) => {
        if (page < 0) {
          // Render ellipsis
          return (
            <span key={`ellipsis-${index}`} className="px-2">
              &hellip;
            </span>
          )
        }

        return (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            asChild={currentPage !== page}
          >
            {currentPage !== page ? (
              <Link href={getPageUrl(page)}>
                {page}
                <span className="sr-only">Page {page}</span>
              </Link>
            ) : (
              <span>
                {page}
                <span className="sr-only">Page {page}</span>
              </span>
            )}
          </Button>
        )
      })}

      <Button variant="outline" size="icon" disabled={currentPage === totalPages} asChild={currentPage !== totalPages}>
        {currentPage !== totalPages ? (
          <Link href={getPageUrl(currentPage + 1)}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Link>
        ) : (
          <span>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </span>
        )}
      </Button>
    </div>
  )
}

