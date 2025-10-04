"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock authentication - redirect based on email
    if (email.includes("admin")) {
      window.location.href = "/admin"
    } else if (email.includes("manager")) {
      window.location.href = "/manager"
    } else {
      window.location.href = "/employee"
    }
  }

  return (
    <Card className="border-border shadow-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold">Login</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-input"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-input"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Login
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link href="/signup" className="text-primary hover:underline">
            Sign up as Admin
          </Link>
        </div>
        <div className="mt-6 p-3 bg-muted rounded-md text-xs text-muted-foreground">
          <p className="font-medium mb-1">Demo accounts:</p>
          <p>• admin@company.com (password: admin123)</p>
          <p>• manager@company.com (password: manager123)</p>
          <p>• employee@company.com (password: employee123)</p>
        </div>
      </CardContent>
    </Card>
  )
}
