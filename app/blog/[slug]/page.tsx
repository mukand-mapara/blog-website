import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, Tag, Share2, Bookmark, MessageSquare, ThumbsUp } from "lucide-react"
import { CommentSection } from "@/components/comment-section"
import { RelatedPosts } from "@/components/related-posts"
import { getPostBySlug, getRelatedPosts } from "@/lib/posts"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  // If the post doesn't exist, show 404
  if (!post) {
    notFound()
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(post.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href={`/category/${post.category.toLowerCase()}`} className="flex items-center">
              <Tag size={14} className="mr-1" />
              {post.category}
            </Link>
            <span>•</span>
            <span className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">Author</div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="ghost" size="icon" aria-label="Share">
                <Share2 size={18} />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Bookmark">
                <Bookmark size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full aspect-video"
            priority
          />
        </div>

        <div
          className="prose prose-lg max-w-none dark:prose-invert mb-12"
          dangerouslySetInnerHTML={{
            __html:
              post.content ||
              `
            <p>This is a placeholder content for the blog post. In a real application, this would be the full content of the article.</p>
            <p>The content would be stored in a database or CMS and retrieved based on the slug parameter.</p>
          `,
          }}
        />

        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <Link
                key={tag}
                href={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <ThumbsUp size={16} />
              <span>Like</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <MessageSquare size={16} />
              <span>Comment</span>
            </Button>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 size={16} />
            <span>Share</span>
          </Button>
        </div>

        <div className="bg-card rounded-lg p-6 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{post.author.name}</h3>
              <p className="text-sm text-muted-foreground">{post.author.bio || "Author at DevBlog"}</p>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            Follow
          </Button>
        </div>

        <CommentSection />
      </article>

      <Separator className="my-16" />

      <RelatedPosts posts={relatedPosts} />
    </div>
  )
}

