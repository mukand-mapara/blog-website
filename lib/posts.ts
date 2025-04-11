// This file simulates a data layer that would typically connect to a database or CMS

interface Author {
  name: string;
  avatar: string;
  bio?: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
  author: Author;
  slug: string;
  tags?: string[];
  content?: string;
  views?: number;
  comments?: number;
  status?: "Published" | "Draft";
}

export interface Category {
  name: string;
  slug: string;
  count: number;
  description?: string;
}

// Mock data for posts
const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn how to build modern web applications with the latest version of Next.js",
    coverImage: "/next-js-apps.avif?height=600&width=1200",
    date: "2025-04-01",
    readTime: "5 min read",
    category: "Development",
    author: {
      name: "Jane Smith",
      avatar: "/Jane Smith.jpeg?height=100&width=100",
      bio: "Senior Frontend Developer with a passion for React and modern web technologies.",
    },
    slug: "getting-started-with-nextjs-15",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
    content: `
      <p>Next.js has evolved into one of the most popular React frameworks for building modern web applications. With the release of Next.js 15, developers now have access to even more powerful features and optimizations.</p>
      
      <h2>What's New in Next.js 15</h2>
      
      <p>Next.js 15 introduces several exciting features that enhance developer experience and application performance:</p>
      
      <ul>
        <li><strong>Improved Server Components</strong>: Enhanced support for React Server Components with better error handling and debugging tools.</li>
        <li><strong>Optimized Bundling</strong>: Smaller bundle sizes and faster page loads through advanced code splitting techniques.</li>
        <li><strong>Enhanced Image Optimization</strong>: Better image loading performance with more configuration options.</li>
        <li><strong>Simplified Data Fetching</strong>: New patterns for fetching data that reduce boilerplate code.</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <p>To create a new Next.js 15 project, you can use the following command:</p>
      
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      
      <p>This will set up a new Next.js project with the latest features and configurations. You'll be prompted to choose between the App Router and Pages Router - we recommend using the App Router for new projects.</p>
      
      <h2>Key Concepts</h2>
      
      <p>Before diving into development, it's important to understand some key concepts in Next.js 15:</p>
      
      <h3>1. App Router</h3>
      
      <p>The App Router uses a file-system based approach for defining routes. Each folder represents a route segment, and special files like <code>page.js</code>, <code>layout.js</code>, and <code>loading.js</code> define the UI for those routes.</p>
      
      <h3>2. Server Components</h3>
      
      <p>By default, components in the App Router are Server Components. These components render on the server, reducing the JavaScript sent to the client. For interactive components, you can use Client Components by adding the <code>'use client'</code> directive at the top of your file.</p>
      
      <h3>3. Data Fetching</h3>
      
      <p>Next.js 15 simplifies data fetching with async/await syntax directly in your components:</p>
      
      <pre><code>async function BlogPosts() {
  const posts = await fetchPosts();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Next.js 15 represents a significant step forward in React framework development. By embracing modern patterns like Server Components and providing powerful built-in features, it enables developers to build faster, more scalable web applications with less effort.</p>
      
      <p>In future articles, we'll explore more advanced topics like authentication, deployment strategies, and performance optimization techniques specific to Next.js 15.</p>
    `,
    views: 1245,
    comments: 23,
    status: "Published",
  },
  {
    id: "2",
    title: "10 Tips for Better React Performance",
    excerpt: "Optimize your React applications with these proven techniques",
    coverImage: "/react.png?height=900&width=600",
    date: "2025-03-28",
    readTime: "8 min read",
    category: "Performance",
    author: {
      name: "John Doe",
      avatar: "/John Doe.jpeg?height=100&width=100",
    },
    slug: "10-tips-for-better-react-performance",
    tags: ["React", "Performance", "JavaScript", "Optimization"],
    content: `
      <p>React applications can sometimes suffer from performance issues, especially as they grow in complexity. In this article, we'll explore 10 proven techniques to optimize your React applications and ensure they run smoothly.</p>
      
      <h2>1. Use Production Builds</h2>
      
      <p>Always use production builds for deployment. Development builds include extra warnings and development tools that slow down your application.</p>
      
      <h2>2. Implement Code Splitting</h2>
      
      <p>Code splitting allows you to split your code into smaller chunks that can be loaded on demand, reducing the initial load time of your application.</p>
      
      <pre><code>// Using dynamic imports with React.lazy
const LazyComponent = React.lazy(() => import('./LazyComponent'));</code></pre>
      
      <h2>3. Memoize Components</h2>
      
      <p>Use React.memo for functional components and PureComponent for class components to prevent unnecessary re-renders.</p>
      
      <h2>4. Use the Virtual List Pattern</h2>
      
      <p>When rendering large lists, only render items that are visible in the viewport using libraries like react-window or react-virtualized.</p>
      
      <h2>5. Optimize Context API Usage</h2>
      
      <p>Split your context into smaller, more focused contexts to prevent unnecessary re-renders when only part of the context changes.</p>
      
      <h2>6. Debounce Event Handlers</h2>
      
      <p>For events that fire frequently (like resize or scroll), use debouncing to limit how often your handlers are called.</p>
      
      <h2>7. Use Web Workers for CPU-Intensive Tasks</h2>
      
      <p>Move CPU-intensive operations to Web Workers to prevent blocking the main thread.</p>
      
      <h2>8. Optimize Images and Assets</h2>
      
      <p>Compress images and use modern formats like WebP. Consider using lazy loading for images below the fold.</p>
      
      <h2>9. Avoid Anonymous Functions in Render</h2>
      
      <p>Define functions outside the render method to prevent new function instances on each render.</p>
      
      <h2>10. Use the useCallback and useMemo Hooks</h2>
      
      <p>These hooks help prevent unnecessary calculations and function recreations during renders.</p>
      
      <h2>Conclusion</h2>
      
      <p>By implementing these techniques, you can significantly improve the performance of your React applications. Remember to measure performance before and after optimizations to ensure your changes are having the desired effect.</p>
    `,
    views: 982,
    comments: 17,
    status: "Published",
  },
  {
    id: "3",
    title: "Building a Design System with Tailwind CSS",
    excerpt:
      "Create a consistent and maintainable design system for your projects",
    coverImage: "/tailwind.jpeg?height=400&width=600",
    date: "2025-03-25",
    readTime: "6 min read",
    category: "Design",
    author: {
      name: "Sarah Johnson",
      avatar: "/Sarah Johnson.jpeg?height=100&width=100",
    },
    slug: "building-a-design-system-with-tailwind",
    tags: ["Tailwind CSS", "Design System", "CSS", "UI"],
    content: `
      <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. In this article, we'll explore how to build a comprehensive design system using Tailwind CSS.</p>
      
      <h2>Why Tailwind CSS?</h2>
      
      <p>Tailwind CSS provides a utility-first approach that makes it ideal for creating consistent, maintainable design systems. Its configuration system allows for easy customization while maintaining consistency across your project.</p>
      
      <h2>Setting Up Your Design System</h2>
      
      <h3>1. Define Your Design Tokens</h3>
      
      <p>Start by defining your design tokens - the fundamental values that make up your design system:</p>
      
      <pre><code>// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... other shades
        900: '#0c4a6e',
      },
      // ... other color categories
    },
    spacing: {
      // Define your spacing scale
    },
    borderRadius: {
      // Define your border radius scale
    },
    // ... other design tokens
  }
}</code></pre>
      
      <h3>2. Create Component Abstractions</h3>
      
      <p>Build reusable component abstractions that encapsulate design decisions:</p>
      
      <pre><code>// Button.jsx
function Button({ variant = 'primary', size = 'md', children, ...props }) {
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    // ... other variants
  };
  
  const sizes = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  return (
    <button
      className={\`rounded font-medium \${variants[variant]} \${sizes[size]}\`}
      {...props}
    >
      {children}
    </button>
  );
}</code></pre>
      
      <h3>3. Document Your System</h3>
      
      <p>Create documentation for your design system using tools like Storybook:</p>
      
      <pre><code>// Button.stories.jsx
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary Button</Button>;
export const Secondary = () => <Button variant="secondary">Secondary Button</Button>;</code></pre>
      
      <h2>Best Practices</h2>
      
      <ul>
        <li><strong>Consistency</strong>: Ensure consistent naming conventions across your design system.</li>
        <li><strong>Composition</strong>: Design components that can be composed together to create complex UIs.</li>
        <li><strong>Accessibility</strong>: Build accessibility into your components from the start.</li>
        <li><strong>Responsive Design</strong>: Ensure your components work well across different screen sizes.</li>
        <li><strong>Performance</strong>: Optimize your design system for performance by using Tailwind's purge option.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Building a design system with Tailwind CSS allows you to create consistent, maintainable user interfaces that can scale with your project. By defining clear design tokens, creating reusable component abstractions, and documenting your system, you can ensure that your design system remains a valuable asset for your team.</p>
    `,
    views: 756,
    comments: 12,
    status: "Published",
  },
  {
    id: "4",
    title: "Server Components vs. Client Components",
    excerpt:
      "Understanding the differences and when to use each type of component",
    coverImage: "/server-difference.png?height=400&width=600",
    date: "2025-03-22",
    readTime: "7 min read",
    category: "Development",
    author: {
      name: "Mike Williams",
      avatar: "/Mike Williams.jpeg?height=100&width=100",
    },
    slug: "server-components-vs-client-components",
    tags: ["React", "Server Components", "Next.js", "Performance"],
    content: `
      <p>With the introduction of React Server Components, developers now have more options for how to structure their applications. In this article, we'll explore the differences between Server Components and Client Components, and when to use each.</p>
      
      <h2>What Are Server Components?</h2>
      
      <p>Server Components are a new type of React component that runs only on the server. They allow you to access server-side resources directly, reduce the client-side JavaScript bundle, and improve performance.</p>
      
      <h2>What Are Client Components?</h2>
      
      <p>Client Components are the traditional React components that run on the client (browser). They're necessary for interactive features that require client-side state and event handling.</p>
      
      <h2>Key Differences</h2>
      
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Server Components</th>
            <th>Client Components</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rendering Location</td>
            <td>Server</td>
            <td>Client (Browser)</td>
          </tr>
          <tr>
            <td>Access to Backend Resources</td>
            <td>Direct access</td>
            <td>Requires API calls</td>
          </tr>
          <tr>
            <td>Bundle Size Impact</td>
            <td>Zero JavaScript sent to client</td>
            <td>Increases bundle size</td>
          </tr>
          <tr>
            <td>Interactivity</td>
            <td>No event handlers or state</td>
            <td>Full interactivity</td>
          </tr>
          <tr>
            <td>Hooks Support</td>
            <td>Limited (no useState, useEffect, etc.)</td>
            <td>Full hooks support</td>
          </tr>
        </tbody>
      </table>
      
      <h2>When to Use Server Components</h2>
      
      <p>Use Server Components when:</p>
      
      <ul>
        <li>Fetching data from a database or API</li>
        <li>Accessing server-only resources (file system, environment variables)</li>
        <li>Keeping sensitive information on the server (API keys, tokens)</li>
        <li>Rendering static or rarely changing content</li>
        <li>Rendering large dependencies that would impact client bundle size</li>
      </ul>
      
      <h2>When to Use Client Components</h2>
      
      <p>Use Client Components when:</p>
      
      <ul>
        <li>Adding interactivity and event listeners (onClick, onChange, etc.)</li>
        <li>Using state and lifecycle effects (useState, useEffect)</li>
        <li>Using browser-only APIs</li>
        <li>Using custom hooks that depend on state or effects</li>
        <li>Using React Class components</li>
      </ul>
      
      <h2>Using Both Together</h2>
      
      <p>In Next.js, you can use both Server and Client Components in the same application. By default, all components are Server Components, and you can opt into Client Components by adding the 'use client' directive at the top of your file:</p>
      
      <pre><code>'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Understanding the differences between Server Components and Client Components is crucial for building efficient React applications. By choosing the right type of component for each part of your application, you can optimize performance, improve user experience, and simplify your development process.</p>
    `,
    views: 845,
    comments: 19,
    status: "Published",
  },
  {
    id: "5",
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development",
    coverImage: "/Web Applications.jpeg?height=400&width=600",
    date: "2025-03-20",
    readTime: "10 min read",
    category: "News",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    slug: "the-future-of-web-development",
    tags: ["Web Development", "Trends", "Future Tech"],
    status: "Draft",
  },
  {
    id: "6",
    title: "Building Accessible Web Applications",
    excerpt:
      "Best practices for creating inclusive and accessible web experiences",
    coverImage: "/Web Applications.jpeg?height=400&width=600",
    date: "2025-03-18",
    readTime: "7 min read",
    category: "Accessibility",
    author: {
      name: "Emily Chen",
      avatar: "/Emily Chen.jpeg?height=100&width=100",
    },
    slug: "building-accessible-web-applications",
    tags: ["Accessibility", "Web Development", "Inclusive Design", "ARIA"],
    status: "Published",
  },
  {
    id: "7",
    title: "Introduction to TypeScript for React Developers",
    excerpt: "Learn how to leverage TypeScript in your React applications",
    coverImage: "/intro.png?height=400&width=600",
    date: "2025-03-15",
    readTime: "9 min read",
    category: "Development",
    author: {
      name: "David Kim",
      avatar: "/David Kim.jpeg?height=100&width=100",
    },
    slug: "introduction-to-typescript-for-react-developers",
    tags: ["TypeScript", "React", "JavaScript", "Development"],
    status: "Published",
  },
  {
    id: "8",
    title: "Mastering CSS Grid Layout",
    excerpt: "A comprehensive guide to creating complex layouts with CSS Grid",
    coverImage: "/css-layout.png?height=400&width=600",
    date: "2025-03-12",
    readTime: "8 min read",
    category: "Design",
    author: {
      name: "Lisa Wang",
      avatar: "/Lisa Wang.jpeg?height=100&width=100",
    },
    slug: "mastering-css-grid-layout",
    tags: ["CSS", "Grid Layout", "Web Design", "Responsive Design"],
    status: "Published",
  },
  {
    id: "9",
    title: "Building a Full-Stack Application with Next.js and Prisma",
    excerpt: "Step-by-step guide to creating a complete web application",
    coverImage: "/Full-stack-web.jpeg?height=400&width=600",
    date: "2025-03-10",
    readTime: "12 min read",
    category: "Tutorials",
    author: {
      name: "James Smith",
      avatar: "/James Smith.jpeg?height=100&width=100",
    },
    slug: "building-full-stack-application-nextjs-prisma",
    tags: ["Next.js", "Prisma", "Full-Stack", "Database", "ORM"],
    status: "Published",
  },
  {
    id: "10",
    title: "State Management in 2025: Beyond Redux",
    excerpt:
      "Exploring modern state management solutions for React applications",
    coverImage: "/redux.png?height=400&width=600",
    date: "2025-03-08",
    readTime: "7 min read",
    category: "Development",
    author: {
      name: "Rachel Green",
      avatar: "/Rachel Green.jpeg?height=100&width=100",
    },
    slug: "state-management-2025-beyond-redux",
    tags: ["React", "State Management", "Redux", "Context API", "Zustand"],
    status: "Published",
  },
];

// Get all posts (published only for public pages)
export function getAllPosts(includeUnpublished = false): Post[] {
  if (includeUnpublished) {
    return posts;
  }
  return posts.filter((post) => post.status !== "Draft");
}

// Get a post by slug
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug && post.status !== "Draft");
}

// Get posts by category
export function getPostsByCategory(category: string): Post[] {
  return posts.filter(
    (post) =>
      post.category.toLowerCase() === category.toLowerCase() &&
      post.status !== "Draft"
  );
}

// Get posts by tag
export function getPostsByTag(tag: string): Post[] {
  return posts.filter(
    (post) => post.tags?.includes(tag) && post.status !== "Draft"
  );
}

// Get featured post
export function getFeaturedPost(): Post {
  return posts.find((post) => post.status !== "Draft") || posts[0];
}

// Get recent posts
export function getRecentPosts(count = 3): Post[] {
  return posts.filter((post) => post.status !== "Draft").slice(0, count);
}

// Get related posts
export function getRelatedPosts(currentPostId: string, count = 3): Post[] {
  return posts
    .filter((post) => post.id !== currentPostId && post.status !== "Draft")
    .slice(0, count);
}

// Search posts
export function searchPosts(query: string): Post[] {
  const searchTerms = query
    .toLowerCase()
    .split(" ")
    .filter((term) => term.length > 0);

  if (searchTerms.length === 0) {
    return [];
  }

  return posts.filter((post) => {
    if (post.status === "Draft") return false;

    // Search in title, excerpt, content, category, and tags
    const title = post.title.toLowerCase();
    const excerpt = post.excerpt.toLowerCase();
    const content = post.content?.toLowerCase() || "";
    const category = post.category.toLowerCase();
    const tags = post.tags?.map((tag) => tag.toLowerCase()) || [];

    // Check if any search term is found in any field
    return searchTerms.some(
      (term) =>
        title.includes(term) ||
        excerpt.includes(term) ||
        content.includes(term) ||
        category.includes(term) ||
        tags.some((tag) => tag.includes(term))
    );
  });
}

// Get all categories
export function getAllCategories(): Category[] {
  const categoryCounts: Record<string, number> = {};

  posts.forEach((post) => {
    if (post.status !== "Draft") {
      if (categoryCounts[post.category]) {
        categoryCounts[post.category]++;
      } else {
        categoryCounts[post.category] = 1;
      }
    }
  });

  return Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    count,
    description: `Articles about ${name.toLowerCase()}`,
  }));
}

// Get all tags
export function getAllTags(): string[] {
  const tagsSet = new Set<string>();

  posts.forEach((post) => {
    if (post.status !== "Draft" && post.tags) {
      post.tags.forEach((tag) => tagsSet.add(tag));
    }
  });

  return Array.from(tagsSet);
}
