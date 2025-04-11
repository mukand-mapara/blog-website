import Link from "next/link"
import { PostCard } from "@/components/post-card"
import type { Post } from "@/lib/posts"

interface RelatedPostsProps {
  posts?: Post[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  // Fallback data if no posts are provided
  const fallbackPosts = [
    {
      id: "2",
      title: "10 Tips for Better React Performance",
      excerpt: "Optimize your React applications with these proven techniques",
      coverImage: "/placeholder.svg?height=400&width=600",
      date: "2025-03-28",
      readTime: "8 min read",
      category: "Performance",
      author: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      slug: "10-tips-for-better-react-performance",
    },
    {
      id: "3",
      title: "Building a Design System with Tailwind CSS",
      excerpt: "Create a consistent and maintainable design system for your projects",
      coverImage: "/placeholder.svg?height=400&width=600",
      date: "2025-03-25",
      readTime: "6 min read",
      category: "Design",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      slug: "building-a-design-system-with-tailwind",
    },
    {
      id: "4",
      title: "Server Components vs. Client Components",
      excerpt: "Understanding the differences and when to use each type of component",
      coverImage: "/placeholder.svg?height=400&width=600",
      date: "2025-03-22",
      readTime: "7 min read",
      category: "Development",
      author: {
        name: "Mike Williams",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      slug: "server-components-vs-client-components",
    },
  ]

  const relatedPosts = posts || fallbackPosts

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Related Posts</h2>
        <Link href="/blog" className="text-sm font-medium text-primary">
          View all posts
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

