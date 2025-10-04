"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LayoutDashboard, Receipt, CheckSquare, Users, Settings, LogOut } from "lucide-react"

interface NavbarProps {
  role: "employee" | "manager" | "admin"
  pendingCount?: number
}

export function Navbar({ role, pendingCount = 0 }: NavbarProps) {
  const pathname = usePathname()

  const getNavItems = () => {
    const baseItems = [{ href: `/${role}`, label: "Dashboard", icon: LayoutDashboard }]

    if (role === "employee") {
      baseItems.push({ href: `/${role}/expenses`, label: "My Expenses", icon: Receipt })
    }

    if (role === "manager") {
      baseItems.push(
        { href: `/${role}/approvals`, label: "Approvals", icon: CheckSquare, badge: pendingCount },
        { href: `/${role}/team`, label: "Team Expenses", icon: Receipt },
      )
    }

    if (role === "admin") {
      baseItems.push(
        { href: `/${role}/users`, label: "Users", icon: Users },
        { href: `/${role}/expenses`, label: "All Expenses", icon: Receipt },
        { href: `/${role}/flows`, label: "Approval Flows", icon: CheckSquare },
      )
    }

    baseItems.push({ href: `/${role}/settings`, label: "Settings", icon: Settings })

    return baseItems
  }

  const navItems = getNavItems()

  return (
    <nav className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href={`/${role}`} className="text-xl font-bold text-foreground">
              Xpenso
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <Button variant={isActive ? "secondary" : "ghost"} className="gap-2">
                      <Icon className="h-4 w-4" />
                      {item.label}
                      {item.badge && item.badge > 0 ? (
                        <Badge variant="destructive" className="ml-1">
                          {item.badge}
                        </Badge>
                      ) : null}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground capitalize hidden sm:inline">{role}</span>
            <Button variant="ghost" size="icon" onClick={() => (window.location.href = "/")}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
