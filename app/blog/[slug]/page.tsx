"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, Tag, Share2, Bookmark, MessageSquare, ThumbsUp } from "lucide-react"
import { CommentSection } from "@/components/comment-section"
import { RelatedPosts } from "@/components/related-posts"
import { getPostBySlug, getRelatedPosts } from "@/lib/posts"
import { fadeIn, fadeInUp, slideInLeft } from "@/lib/animations"
import { AnimatedContainer } from "@/components/animated-container"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation";


export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  // If the post doesn't exist, redirect to 404
  if (!post) {
    router.push("/404")
    return null
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(post.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <motion.div className="mb-8" initial="hidden" animate="visible" variants={fadeIn}>
          <motion.div className="flex items-center gap-2 text-sm text-muted-foreground mb-4" variants={slideInLeft}>
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
          </motion.div>

          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" variants={fadeInUp}>
            {post.title}
          </motion.h1>

          <motion.p className="text-xl text-muted-foreground mb-6" variants={fadeInUp}>
            {post.excerpt}
          </motion.p>

          <motion.div className="flex items-center justify-between mb-8" variants={fadeInUp}>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">Author</div>
              </div>
            </div>

            <div className="flex gap-2">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" aria-label="Share">
                  <Share2 size={18} />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" aria-label="Bookmark">
                  <Bookmark size={18} />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <AnimatedContainer variants={fadeIn} delay={0.2}>
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
        </AnimatedContainer>

        <AnimatedContainer variants={fadeInUp} delay={0.3}>
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
        </AnimatedContainer>

        <AnimatedContainer variants={fadeInUp} delay={0.4}>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    href={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors"
                  >
                    {tag}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedContainer>

        <Separator className="my-8" />

        <AnimatedContainer variants={fadeInUp} delay={0.5}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="flex items-center gap-2">
                  <ThumbsUp size={16} />
                  <span>Like</span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="flex items-center gap-2">
                  <MessageSquare size={16} />
                  <span>Comment</span>
                </Button>
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 size={16} />
                <span>Share</span>
              </Button>
            </motion.div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer variants={fadeInUp} delay={0.6}>
          <div className="bg-card rounded-lg p-6 mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{post.author.name}</h3>
                <p className="text-sm text-muted-foreground">{post.author.bio || "Author at DevBlog"}</p>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="w-full">
                Follow
              </Button>
            </motion.div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer variants={fadeInUp} delay={0.7}>
          <CommentSection />
        </AnimatedContainer>
      </article>

      <Separator className="my-16" />

      <AnimatedContainer variants={fadeInUp} delay={0.8}>
        <RelatedPosts posts={relatedPosts} />
      </AnimatedContainer>
    </div>
  )
}
