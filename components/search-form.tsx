"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface SearchFormProps {
  initialQuery?: string
  className?: string
  placeholder?: string
  inHeader?: boolean
}

export function SearchForm({
  initialQuery = "",
  className = "",
  placeholder = "Search articles...",
  inHeader = false,
}: SearchFormProps) {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`relative w-full ${className}`}>
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
        size={inHeader ? 16 : 18}
      />
      <Input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`w-full pl-10 ${inHeader ? "h-9" : "pr-16"}`}
      />
      {!inHeader && (
        <Button type="submit" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
          Search
        </Button>
      )}
    </form>
  )
}

