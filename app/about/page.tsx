import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NewsletterSignup } from "@/components/newsletter-signup";
import {
  ArrowRight,
  Award,
  BarChart,
  BookOpen,
  Calendar,
  MessageSquare,
  Users,
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jane Smith",
      role: "Founder & Lead Editor",
      image: "/Jane Smith.jpeg?height=300&width=300",
      bio: "Jane is a senior developer with over 10 years of experience in web development. She founded DevBlog to share practical insights and help developers stay updated with the latest trends.",
      expertise: ["React", "Next.js", "Web Performance"],
    },
    {
      name: "John Doe",
      role: "Senior Writer",
      image: "/John Doe.jpeg?height=300&width=300",
      bio: "John specializes in frontend development and UI/UX design. He loves creating tutorials that break down complex concepts into easy-to-understand guides.",
      expertise: ["UI/UX", "CSS", "JavaScript"],
    },
    {
      name: "Sarah Johnson",
      role: "Technical Editor",
      image: "/Sarah Johnson.jpeg?height=300&width=300",
      bio: "Sarah has a background in computer science and works as a full-stack developer. She ensures all technical content on DevBlog is accurate and up-to-date.",
      expertise: ["TypeScript", "Node.js", "Databases"],
    },
    {
      name: "Mike Williams",
      role: "Content Strategist",
      image: "/Mike Williams.jpeg?height=300&width=300",
      bio: "Mike helps shape the content direction of DevBlog, identifying trending topics and ensuring we cover what developers need to know.",
      expertise: ["Content Strategy", "SEO", "Analytics"],
    },
  ];

  const stats = [
    {
      value: "50K+",
      label: "Monthly Readers",
      icon: Users,
    },
    {
      value: "200+",
      label: "Articles Published",
      icon: BookOpen,
    },
    {
      value: "15K+",
      label: "Newsletter Subscribers",
      icon: MessageSquare,
    },
    {
      value: "4",
      label: "Years Online",
      icon: Calendar,
    },
  ];

  const testimonials = [
    {
      quote:
        "DevBlog has been an invaluable resource for staying up-to-date with modern web development practices.",
      author: "Alex Chen",
      title: "Senior Frontend Developer at TechCorp",
    },
    {
      quote:
        "The tutorials are clear, concise, and always relevant to what's happening in the industry right now.",
      author: "Maria Rodriguez",
      title: "Full Stack Developer",
    },
    {
      quote:
        "I've learned more from DevBlog in the past year than from any other technical resource.",
      author: "David Kim",
      title: "Junior Developer at StartupX",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About DevBlog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            We're a team of passionate developers and writers dedicated to
            providing high-quality content for the modern web development
            community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/blog">Explore Our Content</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              At DevBlog, we believe that knowledge should be accessible to
              everyone. Our mission is to demystify web development and provide
              practical, actionable insights that help developers at all levels
              improve their skills and stay current with industry trends.
            </p>
            <p className="text-muted-foreground">
              Whether you're just starting your coding journey or you're a
              seasoned professional, our goal is to be your trusted resource for
              learning and growth in the ever-evolving world of web development.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/Team-collaboration.jpg?height=600&width=800"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16 bg-card rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          DevBlog by the Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passionate people behind DevBlog who work tirelessly to bring
            you the best content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-muted-foreground mb-3">{member.role}</p>
                <p className="text-sm mb-3">{member.bio}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* History & Values */}
      <section className="mb-16">
        <Tabs defaultValue="history" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="history">Our History</TabsTrigger>
            <TabsTrigger value="values">Our Values</TabsTrigger>
          </TabsList>
          <TabsContent value="history" className="mt-6 space-y-4">
            <div className="relative pl-8 pb-8 border-l border-muted">
              <div className="absolute left-0 top-0 w-6 h-6 -translate-x-1/2 rounded-full p-4 bg-primary flex items-center justify-center text-primary-foreground text-xs">
                2021
              </div>
              <h3 className="text-xl font-bold mb-2">The Beginning</h3>
              <p className="text-muted-foreground">
                DevBlog was founded by Jane Smith with a simple WordPress site
                and a passion for sharing coding knowledge. The first post,
                "Getting Started with React Hooks," received unexpected
                attention and set the stage for what was to come.
              </p>
            </div>
            <div className="relative pl-8 pb-8 border-l border-muted">
              <div className="absolute left-0 top-0 w-6 h-6 -translate-x-1/2 p-4 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs">
                2022
              </div>
              <h3 className="text-xl font-bold mb-2">Growing the Team</h3>
              <p className="text-muted-foreground">
                As readership grew, John and Sarah joined the team, bringing
                their expertise in UI/UX and backend development. The blog
                expanded to cover a wider range of topics and launched a weekly
                newsletter.
              </p>
            </div>
            <div className="relative pl-8 pb-8 border-l border-muted">
              <div className="absolute left-0 top-0 w-6 h-6 -translate-x-1/2 p-4 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs">
                2023
              </div>
              <h3 className="text-xl font-bold mb-2">Platform Expansion</h3>
              <p className="text-muted-foreground">
                DevBlog moved to a custom platform built with Next.js, allowing
                for better performance and user experience. Mike joined to help
                with content strategy, and monthly readership surpassed 30,000.
              </p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 -translate-x-1/2 p-4 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs">
                2024
              </div>
              <h3 className="text-xl font-bold mb-2">Today and Beyond</h3>
              <p className="text-muted-foreground">
                Today, DevBlog serves over 50,000 monthly readers and continues
                to grow. We've expanded our content to include video tutorials,
                interactive code examples, and community features. The future is
                bright as we continue to evolve and serve the developer
                community.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="values" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">
                  Quality Over Quantity
                </h3>
                <p className="text-muted-foreground">
                  We believe in publishing well-researched, thoroughly tested,
                  and clearly explained content. We'd rather publish one
                  excellent article than five mediocre ones.
                </p>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Practical Utility</h3>
                <p className="text-muted-foreground">
                  Our content focuses on practical applications and real-world
                  scenarios. We aim to provide information you can immediately
                  apply to your projects.
                </p>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We strive to make our content accessible to developers of all
                  skill levels and backgrounds. We explain concepts clearly
                  without assuming prior knowledge.
                </p>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Community Focus</h3>
                <p className="text-muted-foreground">
                  We value our community of readers and actively seek feedback
                  to improve our content and address the topics that matter most
                  to you.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">What Our Readers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feedback from our community of developers around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-muted/30">
              <CardContent className="p-6">
                <div className="mb-4 text-4xl text-primary">"</div>
                <p className="mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Best Developer Blog</h3>
            <p className="text-muted-foreground">
              Web Development Awards, 2023
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <BarChart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Top 10 Tech Resources</h3>
            <p className="text-muted-foreground">
              Developer's Choice Awards, 2022
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Excellence in Education</h3>
            <p className="text-muted-foreground">Tech Education Summit, 2023</p>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Call to Action */}
      <section className="mb-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Stay updated with the latest articles, tutorials, and insights from
          our team.
        </p>
        <div className="max-w-md mx-auto mb-8">
          <NewsletterSignup />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Browse Articles</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
