"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
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

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(false);

  const categories = [
    "Development",
    "Design",
    "Performance",
    "Tutorials",
    "News",
    "Accessibility",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the post to a database
    alert("Post saved successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" asChild className="mr-4">
          <Link href="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Create New Post</h1>
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
                  <Select defaultValue="draft">
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
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem
                          key={category}
                          value={category.toLowerCase()}
                        >
                          {category}
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
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Brief summary of your post"
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
              <Button type="submit" className="flex-1">
                Publish
              </Button>
              <Button type="button" variant="outline" className="flex-1">
                Save Draft
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
