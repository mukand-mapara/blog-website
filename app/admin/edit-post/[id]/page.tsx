"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import {
  ArrowLeft,
  ImageIcon,
  LinkIcon,
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Code,
} from "lucide-react";
import { getAllPosts } from "@/lib/posts";

export default function EditPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("published");
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(true);

  const categories = [
    "Development",
    "Design",
    "Performance",
    "Tutorials",
    "News",
    "Accessibility",
  ];

  // Fetch post data when component mounts
  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Find the post by ID
        const posts = getAllPosts();
        const post = posts.find((p) => p.id === params.id);

        if (post) {
          setTitle(post.title);
          setExcerpt(post.excerpt);
          setCategory(post.category);
          setTags(post.tags?.join(", ") || "");
          // In a real app, you would fetch the full content from an API
          setContent(
            post.content ||
              "This is the full content of the post that would be loaded from a database."
          );
          setStatus("published"); // Assuming the post is published
        } else {
          toast({
            title: "Error",
            description: "Post not found",
            variant: "destructive",
          });
          router.push("/admin");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        toast({
          title: "Error",
          description: "Failed to load post data",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real app, you would update the post in the database
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Success",
        description: "Post updated successfully!",
      });
      router.push("/admin");
    }, 1000);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button variant="ghost" asChild className="mr-4">
            <Link href="/admin">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Loading...</h1>
        </div>
        <div className="h-96 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">
            Loading post data...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" asChild className="mr-4">
          <Link href="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Edit Post</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Content</Label>
                <Tabs defaultValue="write">
                  <TabsList>
                    <TabsTrigger
                      value="write"
                      onClick={() => setPreview(false)}
                    >
                      Write
                    </TabsTrigger>
                    <TabsTrigger
                      value="preview"
                      onClick={() => setPreview(true)}
                    >
                      Preview
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {!preview ? (
                <>
                  <div className="bg-muted p-2 rounded-md flex flex-wrap gap-2 mb-2">
                    <Button type="button" variant="ghost" size="sm">
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm">
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm">
                      <Heading1 className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm">
                      <Heading2 className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm">
                      <List className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm">
                      <ListOrdered className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm">
                      <Code className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm">
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm">
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <Textarea
                    placeholder="Write your post content here..."
                    className="min-h-[400px]"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </>
              ) : (
                <Card>
                  <CardContent className="p-6 min-h-[400px] prose dark:prose-invert max-w-none">
                    {content ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content.replace(/\n/g, "<br/>"),
                        }}
                      />
                    ) : (
                      <p className="text-muted-foreground">
                        Preview will appear here
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={category.toLowerCase()}
                    onValueChange={setCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    placeholder="Enter tags separated by commas"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Brief summary of your post"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="featuredImage">Featured Image</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-md p-6 text-center">
                    <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop an image here, or click to browse
                    </p>
                    <Input id="featuredImage" type="file" className="hidden" />
                    <Button type="button" variant="secondary" size="sm">
                      Browse
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1" disabled={loading}>
                {loading ? "Updating..." : "Update Post"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                asChild
              >
                <Link href="/admin">Cancel</Link>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
