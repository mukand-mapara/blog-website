import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PostCard } from "@/components/post-card"
import { SearchForm } from "@/components/search-form"
import { Pagination } from "@/components/pagination"
import { searchPosts } from "@/lib/posts"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string }
}) {
  const query = searchParams.q || ""
  const currentPage = Number(searchParams.page) || 1
  const postsPerPage = 9

  // Search posts based on query
  const searchResults = query ? searchPosts(query) : []

  // Pagination
  const totalPages = Math.ceil(searchResults.length / postsPerPage)
  const displayPosts = searchResults.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Search Results</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-6">
          {query ? `Showing results for "${query}"` : "Enter a search term to find posts"}
        </p>
        <div className="w-full max-w-2xl">
          <SearchForm initialQuery={query} />
        </div>
      </div>

      {query ? (
        <>
          <h2 className="text-2xl font-bold mb-6">
            {searchResults.length > 0
              ? `Found ${searchResults.length} result${searchResults.length === 1 ? "" : "s"}`
              : "No results found"}
          </h2>

          <Suspense fallback={<div className="text-center py-12">Loading results...</div>}>
            {displayPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No posts found matching your search criteria.</p>
                <p className="text-muted-foreground mb-8">Try using different keywords or browsing our categories.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild>
                    <Link href="/blog">Browse All Posts</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">Return Home</Link>
                  </Button>
                </div>
              </div>
            )}
          </Suspense>

          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                basePath={`/search?q=${encodeURIComponent(query)}`}
              />
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-8">Enter a search term above to find posts.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link href="/blog">Browse All Posts</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

