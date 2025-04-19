"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Tag } from "lucide-react"
import { fadeIn } from "@/lib/animations"

interface Author {
  name: string
  avatar: string
}

interface Post {
  id: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  readTime: string
  category: string
  author: Author
  slug: string
}

interface FeaturedPostProps {
  post: Post
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Card className="overflow-hidden">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="relative h-64 md:h-full">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <CardContent className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
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
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">{post.title}</h3>
              </Link>
              <p className="text-muted-foreground mb-6">{post.excerpt}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild>
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}
