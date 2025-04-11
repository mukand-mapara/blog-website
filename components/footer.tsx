import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">DevBlog</h3>
            <p className="text-muted-foreground">
              Insights, tutorials, and news for modern web developers.
            </p>
            <div className="flex">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/mukand-mapara/"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com/mukand-mapara"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/development"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href="/category/design"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  href="/category/performance"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Performance
                </Link>
              </li>
              <li>
                <Link
                  href="/category/tutorials"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/category/news"
                  className="text-muted-foreground hover:text-foreground"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" />
              <Button type="submit">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} DevBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
