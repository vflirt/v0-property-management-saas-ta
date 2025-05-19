"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Building,
  CreditCard,
  FileText,
  Home,
  Settings,
  Users,
  Bell,
  Wrench,
  FileBarChart,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
}

export function Sidebar({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)} {...props}>
      {items.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          size="sm"
          className={cn(
            "justify-start",
            pathname === item.href ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline",
          )}
          asChild
        >
          <Link href={item.href}>
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Link>
        </Button>
      ))}
    </nav>
  )
}

export function DashboardSidebar() {
  const items = [
    {
      href: "/dashboard",
      title: "Overview",
      icon: <Home className="h-4 w-4" />,
    },
    {
      href: "/dashboard/properties",
      title: "Properties",
      icon: <Building className="h-4 w-4" />,
    },
    {
      href: "/dashboard/tenants",
      title: "Tenants",
      icon: <Users className="h-4 w-4" />,
    },
    {
      href: "/dashboard/leases",
      title: "Leases",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      href: "/dashboard/billing",
      title: "Billing",
      icon: <CreditCard className="h-4 w-4" />,
    },
    {
      href: "/dashboard/payments",
      title: "Payments",
      icon: <CreditCard className="h-4 w-4" />,
    },
    {
      href: "/dashboard/maintenance",
      title: "Maintenance",
      icon: <Wrench className="h-4 w-4" />,
    },
    {
      href: "/dashboard/analytics",
      title: "Analytics",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      href: "/dashboard/reports",
      title: "Reports",
      icon: <FileBarChart className="h-4 w-4" />,
    },
    {
      href: "/dashboard/notifications",
      title: "Notifications",
      icon: <Bell className="h-4 w-4" />,
    },
    {
      href: "/dashboard/users",
      title: "Users",
      icon: <Users className="h-4 w-4" />,
    },
    {
      href: "/dashboard/settings",
      title: "Settings",
      icon: <Settings className="h-4 w-4" />,
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <Sidebar items={items} className="px-4 py-2" />
    </div>
  )
}
