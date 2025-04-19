"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function NewsletterSignup() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscribe to our newsletter</CardTitle>
        <CardDescription>Get the latest posts delivered right to your inbox</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
            <motion.div whileFocus={{ scale: 1.02 }} className="w-full">
              <Input type="email" placeholder="Enter your email" className="pl-9" required />
            </motion.div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit">Subscribe</Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  )
}
