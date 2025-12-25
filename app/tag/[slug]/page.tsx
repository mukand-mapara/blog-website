import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/post-card";
import { SearchForm } from "@/components/search-form";
import { Pagination } from "@/components/pagination";
import { getPostsByTag, getAllTags } from "@/lib/posts";

export default async function TagPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const { page } = await searchParams;

  const currentPage = Number(page) || 1;
  const postsPerPage = 9;
  const allTags = getAllTags();

  const tagName = slug
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!allTags.includes(tagName)) {
    notFound();
  }

  const posts = getPostsByTag(tagName);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const displayPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tag: {tagName}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-6">
          Browse all articles tagged with "{tagName}"
        </p>
        <div className="w-full max-w-2xl">
          <SearchForm />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {allTags.slice(0, 10).map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                tag === tagName
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <Suspense
        fallback={<div className="text-center py-12">Loading posts...</div>}
      >
        {displayPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              No posts found with this tag.
            </p>
            <Button asChild>
              <Link href="/blog">View all posts</Link>
            </Button>
          </div>
        )}
      </Suspense>

      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            basePath={`/tag/${slug}`}
          />
        </div>
      )}
    </div>
  );
}
