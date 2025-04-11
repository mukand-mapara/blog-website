import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, Tag } from "lucide-react"

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

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <Link
          href={`/category/${post.category.toLowerCase()}`}
          className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full flex items-center"
        >
          <Tag size={12} className="mr-1" />
          {post.category}
        </Link>
      </div>
      <CardContent className="p-5 flex-1">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">{post.title}</h3>
        </Link>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-7 w-7">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-xs font-medium">{post.author.name}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center">
            <Calendar size={12} className="mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock size={12} className="mr-1" />
            {post.readTime}
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}

