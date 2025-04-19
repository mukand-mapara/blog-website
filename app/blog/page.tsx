"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation"; // ✅ important

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostCard } from "@/components/post-card";
import { Pagination } from "@/components/pagination";
import { SearchForm } from "@/components/search-form";
import { Filter } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { staggerChildren } from "@/lib/animations";
import { AnimatedContainer } from "@/components/animated-container";

export default function BlogPage() {
  const searchParams = useSearchParams(); // ✅ fix
  const currentPage = Number(searchParams.get("page")) || 1;
  const selectedCategory = searchParams.get("category") || "all";
  const posts = getAllPosts();

  const categories = [
    "All",
    "Development",
    "Design",
    "Performance",
    "Tutorials",
    "News",
    "Accessibility",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedContainer>
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our latest articles, tutorials, and insights
          </p>
        </div>
      </AnimatedContainer>

      <AnimatedContainer delay={0.1}>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative flex-1">
            <SearchForm />
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              <span>Filters</span>
            </Button>
          </motion.div>
        </div>
      </AnimatedContainer>

      <AnimatedContainer delay={0.2}>
        <Tabs defaultValue={selectedCategory.toLowerCase()} className="mb-12">
          <TabsList className="mb-8 flex flex-wrap h-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <TabsTrigger value={category.toLowerCase()} asChild>
                  <Link href={`/blog?category=${category.toLowerCase()}`}>
                    {category}
                  </Link>
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>
          <TabsContent value={selectedCategory.toLowerCase()}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              <Suspense fallback={<div>Loading posts...</div>}>
                {(selectedCategory === "all"
                  ? posts
                  : posts.filter(
                      (post) => post.category.toLowerCase() === selectedCategory
                    )
                ).map((post, index) => (
                  <AnimatedContainer key={post.id} delay={0.1 * index}>
                    <PostCard post={post} />
                  </AnimatedContainer>
                ))}
              </Suspense>
            </motion.div>
          </TabsContent>
        </Tabs>
      </AnimatedContainer>

      <AnimatedContainer delay={0.4}>
        <Pagination totalPages={5} currentPage={currentPage} />
      </AnimatedContainer>
    </div>
  );
}
