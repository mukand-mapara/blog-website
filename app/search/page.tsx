"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import { PostCard } from "@/components/post-card"
import { SearchForm } from "@/components/search-form"
import { getAllPosts } from "@/lib/posts"
import { staggerChildren } from "@/lib/animations"
import { AnimatedContainer } from "@/components/animated-container"
import { useSearchParams } from "next/navigation"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const posts = getAllPosts()

  // Filter posts based on search query
  const filteredPosts = query
    ? posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          post.category.toLowerCase().includes(query.toLowerCase()),
      )
    : []

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedContainer>
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Search Results
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {query ? `Showing results for "${query}"` : "Enter a search term to find posts"}
          </motion.p>
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SearchForm initialQuery={query} />
          </motion.div>
        </div>
      </AnimatedContainer>

      {query ? (
        <AnimatedContainer delay={0.4}>
          <h2 className="text-2xl font-bold mb-6">
            {filteredPosts.length > 0
              ? `Found ${filteredPosts.length} result${filteredPosts.length === 1 ? "" : "s"}`
              : "No results found"}
          </h2>

          <Suspense fallback={<div>Loading results...</div>}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {filteredPosts.map((post, index) => (
                <AnimatedContainer key={post.id} delay={0.1 * index}>
                  <PostCard post={post} />
                </AnimatedContainer>
              ))}
            </motion.div>
          </Suspense>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-muted-foreground mb-4">No posts found matching your search criteria.</p>
              <p className="text-muted-foreground">Try using different keywords or browsing our categories.</p>
            </motion.div>
          )}
        </AnimatedContainer>
      ) : (
        <AnimatedContainer delay={0.4}>
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-muted-foreground">Enter a search term above to find posts.</p>
          </motion.div>
        </AnimatedContainer>
      )}
    </div>
  )
}
