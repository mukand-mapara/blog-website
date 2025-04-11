import { Suspense } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { PostCard } from "@/components/post-card"
import { SearchForm } from "@/components/search-form"
import { Pagination } from "@/components/pagination"
import { getPostsByCategory, getAllCategories } from "@/lib/posts"

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { page?: string }
}) {
  const currentPage = Number(searchParams.page) || 1
  const postsPerPage = 9
  const categories = getAllCategories()

  // Check if category exists
  const category = categories.find((cat) => cat.slug === params.slug)

  if (!category) {
    notFound()
  }

  const posts = getPostsByCategory(category.name)
  const totalPages = Math.ceil(posts.length / postsPerPage)
  const displayPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-6">
          {category.description || `Browse all articles in the ${category.name} category`}
        </p>
        <div className="w-full max-w-2xl">
          <SearchForm />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                cat.slug === params.slug
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-12">Loading posts...</div>}>
        {displayPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No posts found in this category.</p>
            <Button asChild>
              <Link href="/blog">View all posts</Link>
            </Button>
          </div>
        )}
      </Suspense>

      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination totalPages={totalPages} currentPage={currentPage} basePath={`/category/${params.slug}`} />
        </div>
      )}
    </div>
  )
}

