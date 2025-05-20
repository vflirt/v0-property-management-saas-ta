"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Building, CreditCard, FileText, Home, LayoutDashboard, LogOut, Settings, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface DashboardSidebarProps {
  role: "landlord" | "tenant" | "maintenance" | "manager" | "admin"
}

export function DashboardSidebar({ role }: DashboardSidebarProps) {
  const pathname = usePathname()

  // Define navigation items based on role
  const navigationItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      roles: ["landlord", "tenant", "maintenance", "manager", "admin"],
    },
    {
      title: "Properties",
      href: "/dashboard/properties",
      icon: Building,
      roles: ["landlord", "maintenance", "manager", "admin"],
    },
    {
      title: "Tenants",
      href: "/dashboard/tenants",
      icon: Users,
      roles: ["landlord", "manager", "admin"],
    },
    {
      title: "Leases",
      href: "/dashboard/leases",
      icon: FileText,
      roles: ["landlord", "manager", "admin"],
    },
    {
      title: "Maintenance",
      href: "/dashboard/maintenance",
      icon: Settings,
      roles: ["landlord", "tenant", "maintenance", "manager"],
    },
    {
      title: "Payments",
      href: "/dashboard/payments",
      icon: CreditCard,
      roles: ["landlord", "tenant", "manager", "admin"],
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: CreditCard,
      roles: ["landlord", "manager"],
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
      roles: ["landlord", "manager", "admin"],
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: Users,
      roles: ["admin"],
    },
  ]

  // Filter navigation items based on role
  const filteredNavItems = navigationItems.filter((item) => item.roles.includes(role))

  return (
    <Sidebar>
      <SidebarHeader className="border-b py-4">
        <Link href="/dashboard" className="flex items-center px-4">
          <Building className="h-6 w-6 text-primary mr-2" />
          <span className="font-bold text-xl">PropertyPulse</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2 py-4">
        <SidebarMenu>
          {filteredNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Home className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/logout">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
