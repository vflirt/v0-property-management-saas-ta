"use client"

import type React from "react"

import { useState } from "react"

import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

// Mock user data - in a real app, this would come from authentication
const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "landlord",
  avatar: "/placeholder.svg?height=32&width=32",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // In a real app, you would determine the role from authentication
  const [role, setRole] = useState<"landlord" | "tenant" | "maintenance" | "manager" | "admin">("landlord")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <DashboardHeader user={mockUser} />
        <div className="flex flex-1">
          <DashboardSidebar role={role} />
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
