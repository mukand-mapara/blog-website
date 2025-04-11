import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Tag } from "lucide-react"
import { FeaturedPost } from "@/components/featured-post"
import { PostCard } from "@/components/post-card"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { SearchForm } from "@/components/search-form"
import { getFeaturedPost, getRecentPosts } from "@/lib/posts"

export default function Home() {
  const featuredPost = getFeaturedPost()
  const recentPosts = getRecentPosts(3)

  const categories = [
    { name: "Development", count: 12 },
    { name: "Design", count: 8 },
    { name: "Performance", count: 5 },
    { name: "Tutorials", count: 10 },
    { name: "News", count: 7 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to DevBlog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-6">
            Insights, tutorials, and news for modern web developers
          </p>
          <div className="relative w-full max-w-md">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Post</h2>
          <Link href="/blog" className="text-sm font-medium flex items-center text-primary">
            View all posts <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        <FeaturedPost post={featuredPost} />
      </section>

      {/* Recent Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/blog">View all posts</Link>
          </Button>
        </div>
      </section>

      {/* Categories and Newsletter */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Categories</CardTitle>
            <CardDescription>Browse posts by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={`/category/${category.name.toLowerCase()}`}
                    className="flex items-center justify-between py-2 hover:text-primary transition-colors"
                  >
                    <span className="flex items-center">
                      <Tag size={16} className="mr-2" />
                      {category.name}
                    </span>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <div className="lg:col-span-2">
          <NewsletterSignup />
        </div>
      </div>
    </div>
  )
}

