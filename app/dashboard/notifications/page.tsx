"use client"

import { useState } from "react"
import { Bell, Check, Clock, CreditCard, FileText, Filter, Home, MoreHorizontal, Search, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Mock notification data
const notifications = [
  {
    id: 1,
    title: "New Maintenance Request",
    description: "James Wilson submitted a new maintenance request for a leaking faucet.",
    type: "maintenance",
    date: "Today at 2:34 PM",
    read: false,
    property: "Oakwood Apartments",
    unit: "#105",
  },
  {
    id: 2,
    title: "Rent Payment Received",
    description: "Sarah Johnson has paid their rent for June 2025.",
    type: "payment",
    date: "Today at 10:15 AM",
    read: false,
    property: "Riverside Homes",
    unit: "#202",
  },
  {
    id: 3,
    title: "Lease Ending Soon",
    description: "Jennifer Taylor's lease is ending in 45 days. Consider sending a renewal offer.",
    type: "lease",
    date: "Yesterday at 4:52 PM",
    read: true,
    property: "Riverside Homes",
    unit: "#105",
  },
  {
    id: 4,
    title: "Maintenance Request Completed",
    description: "Michael Davis has completed the pest control maintenance request.",
    type: "maintenance",
    date: "May 18, 2025 at 9:30 AM",
    read: true,
    property: "Riverside Homes",
    unit: "#105",
  },
  {
    id: 5,
    title: "Late Rent Payment",
    description: "Michael Brown's rent payment is 5 days overdue.",
    type: "payment",
    date: "May 17, 2025 at 3:15 PM",
    read: true,
    property: "Pine Street Condos",
    unit: "#301",
  },
  {
    id: 6,
    title: "New Tenant Application",
    description: "A new tenant application has been submitted for Maple Court.",
    type: "application",
    date: "May 16, 2025 at 11:42 AM",
    read: true,
    property: "Maple Court",
    unit: null,
  },
  {
    id: 7,
    title: "Property Inspection Scheduled",
    description: "Annual property inspection scheduled for Cedar Heights on June 15, 2025.",
    type: "inspection",
    date: "May 15, 2025 at 2:30 PM",
    read: true,
    property: "Cedar Heights",
    unit: null,
  },
  {
    id: 8,
    title: "System Update",
    description: "PropertyPulse has been updated with new features. Check out what's new!",
    type: "system",
    date: "May 14, 2025 at 10:20 AM",
    read: true,
    property: null,
    unit: null,
  },
]

export default function NotificationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTab, setSelectedTab] = useState("all")

  // Filter notifications based on search term and selected tab
  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (notification.property && notification.property.toLowerCase().includes(searchTerm.toLowerCase()))

    if (selectedTab === "all") return matchesSearch
    if (selectedTab === "unread") return matchesSearch && !notification.read
    return matchesSearch && notification.type === selectedTab
  })

  const unreadCount = notifications.filter((notification) => !notification.read).length

  const markAllAsRead = () => {
    // In a real app, this would call an API to mark all notifications as read
    console.log("Marking all notifications as read")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
          <p className="text-muted-foreground">Stay updated with important alerts and notifications</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={markAllAsRead}>
            <Check className="mr-2 h-4 w-4" />
            Mark All as Read
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Options</DropdownMenuLabel>
              <DropdownMenuItem>Notification settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Clear all notifications</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setSelectedTab}>
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">
              All
              {unreadCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="payment">Payments</TabsTrigger>
            <TabsTrigger value="lease">Leases</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="font-normal">Property</DropdownMenuLabel>
                <DropdownMenuItem className="flex items-center">
                  <input type="checkbox" className="mr-2" id="oakwood" />
                  <label htmlFor="oakwood">Oakwood Apartments</label>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center">
                  <input type="checkbox" className="mr-2" id="riverside" />
                  <label htmlFor="riverside">Riverside Homes</label>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center">
                  <input type="checkbox" className="mr-2" id="pine" />
                  <label htmlFor="pine">Pine Street Condos</label>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="font-normal">Date Range</DropdownMenuLabel>
                <DropdownMenuItem className="flex items-center">
                  <input type="radio" name="date" className="mr-2" id="today" />
                  <label htmlFor="today">Today</label>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center">
                  <input type="radio" name="date" className="mr-2" id="week" />
                  <label htmlFor="week">This week</label>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center">
                  <input type="radio" name="date" className="mr-2" id="month" />
                  <label htmlFor="month">This month</label>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <Button size="sm" className="w-full mt-2">
                  Apply Filters
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search notifications..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>View all your recent notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 rounded-lg border p-4 ${
                        !notification.read ? "bg-primary/5" : ""
                      }`}
                    >
                      <div className="rounded-full bg-primary/10 p-2">
                        {notification.type === "maintenance" ? (
                          <Wrench className="h-5 w-5 text-primary" />
                        ) : notification.type === "payment" ? (
                          <CreditCard className="h-5 w-5 text-primary" />
                        ) : notification.type === "lease" ? (
                          <FileText className="h-5 w-5 text-primary" />
                        ) : notification.type === "inspection" ? (
                          <Home className="h-5 w-5 text-primary" />
                        ) : notification.type === "system" ? (
                          <Bell className="h-5 w-5 text-primary" />
                        ) : (
                          <Bell className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{notification.title}</h4>
                            <p className="text-sm">{notification.description}</p>
                          </div>
                          {!notification.read && <Badge className="ml-2 bg-primary">New</Badge>}
                        </div>
                        <div className="mt-2 flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {notification.date}
                          {notification.property && (
                            <>
                              <span className="mx-1">•</span>
                              <Home className="mr-1 h-3 w-3" />
                              {notification.property}
                              {notification.unit && ` ${notification.unit}`}
                            </>
                          )}
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          {!notification.read ? (
                            <DropdownMenuItem>
                              <Check className="mr-2 h-4 w-4" />
                              Mark as read
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                          )}
                          {notification.type === "maintenance" && (
                            <DropdownMenuItem>View maintenance request</DropdownMenuItem>
                          )}
                          {notification.type === "payment" && <DropdownMenuItem>View payment details</DropdownMenuItem>}
                          {notification.type === "lease" && <DropdownMenuItem>View lease</DropdownMenuItem>}
                          {notification.property && <DropdownMenuItem>View property</DropdownMenuItem>}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Delete notification</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center p-8 text-center">
                    <div className="max-w-md">
                      <Bell className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">No Notifications Found</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        No notifications match your search criteria. Try adjusting your search or filters.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unread" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Unread Notifications</CardTitle>
              <CardDescription>View your unread notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notification) => (
                    <div key={notification.id} className="flex items-start gap-4 rounded-lg border p-4 bg-primary/5">
                      <div className="rounded-full bg-primary/10 p-2">
                        {notification.type === "maintenance" ? (
                          <Wrench className="h-5 w-5 text-primary" />
                        ) : notification.type === "payment" ? (
                          <CreditCard className="h-5 w-5 text-primary" />
                        ) : notification.type === "lease" ? (
                          <FileText className="h-5 w-5 text-primary" />
                        ) : notification.type === "inspection" ? (
                          <Home className="h-5 w-5 text-primary" />
                        ) : notification.type === "system" ? (
                          <Bell className="h-5 w-5 text-primary" />
                        ) : (
                          <Bell className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{notification.title}</h4>
                            <p className="text-sm">{notification.description}</p>
                          </div>
                          <Badge className="ml-2 bg-primary">New</Badge>
                        </div>
                        <div className="mt-2 flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {notification.date}
                          {notification.property && (
                            <>
                              <span className="mx-1">•</span>
                              <Home className="mr-1 h-3 w-3" />
                              {notification.property}
                              {notification.unit && ` ${notification.unit}`}
                            </>
                          )}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Check className="h-4 w-4" />
                        <span className="sr-only">Mark as read</span>
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center p-8 text-center">
                    <div className="max-w-md">
                      <Bell className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">No Unread Notifications</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        You have no unread notifications. All caught up!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Notifications</CardTitle>
              <CardDescription>View notifications related to maintenance requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 rounded-lg border p-4 ${
                        !notification.read ? "bg-primary/5" : ""
                      }`}
                    >
                      <div className="rounded-full bg-primary/10 p-2">
                        <Wrench className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{notification.title}</h4>
                            <p className="text-sm">{notification.description}</p>
                          </div>
                          {!notification.read && <Badge className="ml-2 bg-primary">New</Badge>}
                        </div>
                        <div className="mt-2 flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {notification.date}
                          {notification.property && (
                            <>
                              <span className="mx-1">•</span>
                              <Home className="mr-1 h-3 w-3" />
                              {notification.property}
                              {notification.unit && ` ${notification.unit}`}
                            </>
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Request
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center p-8 text-center">
                    <div className="max-w-md">
                      <Wrench className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">No Maintenance Notifications</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        You have no maintenance-related notifications at this time.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Notifications</CardTitle>
              <CardDescription>View notifications related to payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 rounded-lg border p-4 ${
                        !notification.read ? "bg-primary/5" : ""
                      }`}
                    >
                      <div className="rounded-full bg-primary/10 p-2">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{notification.title}</h4>
                            <p className="text-sm">{notification.description}</p>
                          </div>
                          {!notification.read && <Badge className="ml-2 bg-primary">New</Badge>}
                        </div>
                        <div className="mt-2 flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {notification.date}
                          {notification.property && (
                            <>
                              <span className="mx-1">•</span>
                              <Home className="mr-1 h-3 w-3" />
                              {notification.property}
                              {notification.unit && ` ${notification.unit}`}
                            </>
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Payment
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center p-8 text-center">
                    <div className="max-w-md">
                      <CreditCard className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">No Payment Notifications</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        You have no payment-related notifications at this time.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lease" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Lease Notifications</CardTitle>
              <CardDescription>View notifications related to leases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 rounded-lg border p-4 ${
                        !notification.read ? "bg-primary/5" : ""
                      }`}
                    >
                      <div className="rounded-full bg-primary/10 p-2">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{notification.title}</h4>
                            <p className="text-sm">{notification.description}</p>
                          </div>
                          {!notification.read && <Badge className="ml-2 bg-primary">New</Badge>}
                        </div>
                        <div className="mt-2 flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {notification.date}
                          {notification.property && (
                            <>
                              <span className="mx-1">•</span>
                              <Home className="mr-1 h-3 w-3" />
                              {notification.property}
                              {notification.unit && ` ${notification.unit}`}
                            </>
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Lease
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center p-8 text-center">
                    <div className="max-w-md">
                      <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">No Lease Notifications</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        You have no lease-related notifications at this time.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
