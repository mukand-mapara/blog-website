import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PostCard } from "@/components/post-card"
import { Pagination } from "@/components/pagination"
import { SearchForm } from "@/components/search-form"
import { Filter } from "lucide-react"
import { getAllPosts } from "@/lib/posts"

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string }
}) {
  const currentPage = Number(searchParams.page) || 1
  const selectedCategory = searchParams.category || "all"
  const posts = getAllPosts()

  const categories = ["All", "Development", "Design", "Performance", "Tutorials", "News", "Accessibility"]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">Explore our latest articles, tutorials, and insights</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="relative flex-1">
          <SearchForm />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter size={16} />
          <span>Filters</span>
        </Button>
      </div>

      <Tabs defaultValue={selectedCategory.toLowerCase()} className="mb-12">
        <TabsList className="mb-8 flex flex-wrap h-auto">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category.toLowerCase()} asChild>
              <Link href={`/blog?category=${category.toLowerCase()}`}>{category}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={selectedCategory.toLowerCase()}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Suspense fallback={<div>Loading posts...</div>}>
              {(selectedCategory === "all"
                ? posts
                : posts.filter((post) => post.category.toLowerCase() === selectedCategory)
              ).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </Suspense>
          </div>
        </TabsContent>
      </Tabs>

      <Pagination totalPages={5} currentPage={currentPage} />
    </div>
  )
}

