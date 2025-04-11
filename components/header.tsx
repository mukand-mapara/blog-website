"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, Search, User, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Categories",
      path: "#",
      children: [
        {
          name: "Development",
          path: "/category/development",
          description: "Tutorials and guides for web developers",
        },
        {
          name: "Design",
          path: "/category/design",
          description: "UI/UX design principles and best practices",
        },
        {
          name: "Performance",
          path: "/category/performance",
          description: "Optimize your web applications",
        },
        {
          name: "Tutorials",
          path: "/category/tutorials",
          description: "Step-by-step guides for beginners and experts",
        },
      ],
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileSearchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(mobileSearchQuery.trim())}`);
      setIsSearchOpen(false);
      setMobileSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "hover:text-foreground/80",
                    pathname === route.path
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">DevBlog</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) =>
                route.children ? (
                  <NavigationMenuItem key={route.name}>
                    <NavigationMenuTrigger>{route.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {route.children.map((child) => (
                          <li key={child.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {child.name}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {child.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={route.name}>
                    <Link href={route.path} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {route.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {isSearchOpen ? (
              <div className="relative">
                <form onSubmit={handleMobileSearch}>
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    size={16}
                  />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="h-9 w-full rounded-md border border-input bg-background pl-10 pr-10 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={mobileSearchQuery}
                    onChange={(e) => setMobileSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close search</span>
                  </Button>
                </form>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
          </div>
          <ModeToggle />
          <Button size="sm" className="hidden md:flex">
            <Link href="/admin">Admin</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
