import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  PlusCircle,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  FileText,
  MessageSquare,
  Tag,
} from "lucide-react";

export default function AdminPage() {
  const posts = [
    {
      id: "1",
      title: "Getting Started with Next.js 15",
      status: "Published",
      date: "2025-04-01",
      views: 1245,
      comments: 23,
    },
    {
      id: "2",
      title: "10 Tips for Better React Performance",
      status: "Published",
      date: "2025-03-28",
      views: 982,
      comments: 17,
    },
    {
      id: "3",
      title: "Building a Design System with Tailwind CSS",
      status: "Published",
      date: "2025-03-25",
      views: 756,
      comments: 12,
    },
    {
      id: "4",
      title: "The Future of Web Development",
      status: "Draft",
      date: "2025-03-20",
      views: 0,
      comments: 0,
    },
    {
      id: "5",
      title: "Understanding TypeScript Generics",
      status: "Draft",
      date: "2025-03-18",
      views: 0,
      comments: 0,
    },
  ];

  const stats = [
    { title: "Total Posts", value: "24", icon: FileText },
    { title: "Total Views", value: "12.5K", icon: Eye },
    { title: "Total Comments", value: "342", icon: MessageSquare },
    { title: "Categories", value: "8", icon: Tag },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your blog content and monitor performance
          </p>
        </div>
        <Button className="mt-4 md:mt-0" asChild>
          <Link href="/admin/create-post">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Post
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="posts" className="mb-8">
        <TabsList>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Posts</CardTitle>
              <CardDescription>Manage your blog posts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Views</TableHead>
                    <TableHead className="text-right">Comments</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">
                        {post.title}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            post.status === "Published"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {post.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell className="text-right">{post.views}</TableCell>
                      <TableCell className="text-right">
                        {post.comments}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/admin/edit-post/${post.id}`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Previous</Button>
              <Button variant="outline">Next</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="comments" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Comments</CardTitle>
              <CardDescription>Manage user comments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground">
                Comments management interface will be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="categories" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
              <CardDescription>Manage blog categories</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground">
                Categories management interface will be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>View blog performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Analytics dashboard will be displayed here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
