"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { SearchForm } from "@/components/search-form";
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
import { Menu, Search, User } from "lucide-react";
import { fadeInDown } from "@/lib/animations";

export function Header() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        scrolled && "shadow-sm"
      )}
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
    >
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

        <motion.div
          className="mr-4 hidden md:flex"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <motion.span
              className="font-bold text-xl"
              whileHover={{ scale: 1.05 }}
            >
              DevBlog
            </motion.span>
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
                          <motion.li
                            key={child.path}
                            whileHover={{
                              scale: 1.02,
                              backgroundColor: "rgba(var(--accent), 0.2)",
                            }}
                          >
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
                          </motion.li>
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
        </motion.div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <AnimatePresence>
              {isSearchOpen ? (
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SearchForm inHeader={true} placeholder="Search..." />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <span className="sr-only">Close search</span>
                    &times;
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <ModeToggle />
          {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>
          </motion.div> */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" className="hidden md:flex">
              <Link href="/admin">Admin</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
