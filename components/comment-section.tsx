"use client";

import type React from "react";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, Reply, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CommentSection() {
  const [comment, setComment] = useState("");

  const comments = [
    {
      id: "1",
      author: {
        name: "John Doe",
        avatar: "/John Doe.jpeg?height=100&width=100",
      },
      content:
        "This is a great article! I've been looking for a clear explanation of Next.js 15 features.",
      date: "2 hours ago",
      likes: 5,
      replies: [
        {
          id: "1-1",
          author: {
            name: "Jane Smith",
            avatar: "/Jane Smith.jpeg?height=100&width=100",
          },
          content:
            "I agree! The section about Server Components was particularly helpful.",
          date: "1 hour ago",
          likes: 2,
        },
      ],
    },
    {
      id: "2",
      author: {
        name: "Sarah Johnson",
        avatar: "/Sarah Johnson.jpeg?height=100&width=100",
      },
      content:
        "Thanks for sharing this! I'm excited to try out the new data fetching patterns in my next project.",
      date: "5 hours ago",
      likes: 3,
      replies: [],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the comment to a database
    alert("Comment submitted!");
    setComment("");
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Comments</h3>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage
              src="/placeholder.svg?height=100&width=100"
              alt="Your Avatar"
            />
            <AvatarFallback>YA</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mb-2"
            />
            <Button type="submit" disabled={!comment.trim()}>
              Post Comment
            </Button>
          </div>
        </div>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-6">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage
                  src={comment.author.avatar}
                  alt={comment.author.name}
                />
                <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{comment.author.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {comment.date}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Report</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="my-2">{comment.content}</p>
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Reply className="h-4 w-4" />
                    <span>Reply</span>
                  </Button>
                </div>

                {comment.replies.length > 0 && (
                  <div className="mt-4 ml-6 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={reply.author.avatar}
                            alt={reply.author.name}
                          />
                          <AvatarFallback>
                            {reply.author.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">
                                {reply.author.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {reply.date}
                              </p>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Report</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                          <p className="my-2">{reply.content}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            <ThumbsUp className="h-4 w-4" />
                            <span>{reply.likes}</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
