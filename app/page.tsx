"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Tag } from "lucide-react"
import { FeaturedPost } from "@/components/featured-post"
import { PostCard } from "@/components/post-card"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { SearchForm } from "@/components/search-form"
import { getFeaturedPost, getRecentPosts } from "@/lib/posts"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import { AnimatedContainer } from "@/components/animated-container"

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
      <AnimatedContainer>
        <section className="mb-16">
          <div className="flex flex-col items-center text-center mb-8">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to DevBlog
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Insights, tutorials, and news for modern web developers
            </motion.p>
            <motion.div
              className="relative w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SearchForm />
            </motion.div>
          </div>
        </section>
      </AnimatedContainer>

      {/* Featured Post */}
      <AnimatedContainer delay={0.2}>
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Post</h2>
            <Link href="/blog" className="text-sm font-medium flex items-center text-primary">
              View all posts <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          <FeaturedPost post={featuredPost} />
        </section>
      </AnimatedContainer>

      {/* Recent Posts */}
      <section className="mb-16">
        <AnimatedContainer>
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        </AnimatedContainer>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {recentPosts.map((post, index) => (
            <AnimatedContainer key={post.id} delay={0.1 * index}>
              <PostCard post={post} />
            </AnimatedContainer>
          ))}
        </motion.div>

        <AnimatedContainer delay={0.4}>
          <div className="flex justify-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <Link href="/blog">View all posts</Link>
              </Button>
            </motion.div>
          </div>
        </AnimatedContainer>
      </section>

      {/* Categories and Newsletter */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        <AnimatedContainer delay={0.2}>
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Categories</CardTitle>
              <CardDescription>Browse posts by category</CardDescription>
            </CardHeader>
            <CardContent>
              <motion.ul className="space-y-2" variants={staggerChildren} initial="hidden" animate="visible">
                {categories.map((category, index) => (
                  <motion.li key={category.name} variants={fadeInUp} transition={{ delay: 0.1 * index }}>
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
                  </motion.li>
                ))}
              </motion.ul>
            </CardContent>
          </Card>
        </AnimatedContainer>

        <AnimatedContainer delay={0.3} className="lg:col-span-2">
          <NewsletterSignup />
        </AnimatedContainer>
      </motion.div>
    </div>
  )
}
