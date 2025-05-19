"use client"

import { useState } from "react"
import { Check, Clock, Edit, Filter, MoreHorizontal, Plus, Search, PenToolIcon as Tool, Wrench } from "lucide-react"

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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

// Mock maintenance request data
const maintenanceRequests = [
  {
    id: "MR-001",
    title: "Leaking Faucet",
    property: "Oakwood Apartments",
    unit: "#105",
    tenant: "James Wilson",
    priority: "Medium",
    status: "Open",
    dateSubmitted: "May 18, 2025",
    description: "The kitchen faucet is leaking and causing water damage to the cabinet below.",
    assignedTo: "Michael Davis",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "MR-002",
    title: "Broken Heater",
    property: "Riverside Homes",
    unit: "#202",
    tenant: "Sarah Johnson",
    priority: "High",
    status: "In Progress",
    dateSubmitted: "May 17, 2025",
    description: "The central heating system is not working. The unit is very cold.",
    assignedTo: "Michael Davis",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "MR-003",
    title: "Clogged Drain",
    property: "Pine Street Condos",
    unit: "#301",
    tenant: "Michael Brown",
    priority: "Low",
    status: "Open",
    dateSubmitted: "May 16, 2025",
    description: "The bathroom sink is draining very slowly.",
    assignedTo: null,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "MR-004",
    title: "Broken Window",
    property: "Maple Court",
    unit: "#A12",
    tenant: "Emily Davis",
    priority: "Medium",
    status: "In Progress",
    dateSubmitted: "May 15, 2025",
    description: "The window in the living room has a crack and doesn't close properly.",
    assignedTo: "Michael Davis",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "MR-005",
    title: "Electrical Issue",
    property: "Oakwood Apartments",
    unit: "#203",
    tenant: "David Martinez",
    priority: "High",
    status: "Open",
    dateSubmitted: "May 14, 2025",
    description: "Several outlets in the kitchen are not working.",
    assignedTo: null,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "MR-006",
    title: "Pest Control",
    property: "Riverside Homes",
    unit: "#105",
    tenant: "Jennifer Taylor",
    priority: "Medium",
    status: "Completed",
    dateSubmitted: "May 10, 2025",
    description: "There are ants in the kitchen and bathroom.",
    assignedTo: "Michael Davis",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "MR-007",
    title: "HVAC Maintenance",
    property: "Pine Street Condos",
    unit: "#302",
    tenant: "Robert Anderson",
    priority: "Low",
    status: "Completed",
    dateSubmitted: "May 8, 2025",
    description: "Annual HVAC system check and filter replacement.",
    assignedTo: "Michael Davis",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function MaintenancePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddRequestOpen, setIsAddRequestOpen] = useState(false)

  // Filter maintenance requests based on search term
  const filteredRequests = maintenanceRequests.filter(
    (request) =>
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Maintenance Requests</h2>
          <p className="text-muted-foreground">Manage and track maintenance requests for your properties</p>
        </div>

        <Dialog open={isAddRequestOpen} onOpenChange={setIsAddRequestOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Request
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create Maintenance Request</DialogTitle>
              <DialogDescription>Enter the details of the new maintenance request.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="request-title" className="text-right text-sm font-medium">
                  Title
                </label>
                <Input id="request-title" placeholder="Brief description of the issue" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="request-property" className="text-right text-sm font-medium">
                  Property
                </label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select property" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oakwood">Oakwood Apartments</SelectItem>
                    <SelectItem value="riverside">Riverside Homes</SelectItem>
                    <SelectItem value="pine">Pine Street Condos</SelectItem>
                    <SelectItem value="maple">Maple Court</SelectItem>
                    <SelectItem value="cedar">Cedar Heights</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="request-unit" className="text-right text-sm font-medium">
                  Unit
                </label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="101">#101</SelectItem>
                    <SelectItem value="102">#102</SelectItem>
                    <SelectItem value="103">#103</SelectItem>
                    <SelectItem value="104">#104</SelectItem>
                    <SelectItem value="105">#105</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="request-tenant" className="text-right text-sm font-medium">
                  Tenant
                </label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select tenant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="james">James Wilson</SelectItem>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="michael">Michael Brown</SelectItem>
                    <SelectItem value="emily">Emily Davis</SelectItem>
                    <SelectItem value="david">David Martinez</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="request-priority" className="text-right text-sm font-medium">
                  Priority
                </label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <label htmlFor="request-description" className="text-right text-sm font-medium">
                  Description
                </label>
                <Textarea
                  id="request-description"
                  placeholder="Detailed description of the maintenance issue"
                  className="col-span-3"
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="request-assign" className="text-right text-sm font-medium">
                  Assign To
                </label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select maintenance staff (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="michael">Michael Davis</SelectItem>
                    <SelectItem value="robert">Robert Johnson</SelectItem>
                    <SelectItem value="unassigned">Leave Unassigned</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddRequestOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddRequestOpen(false)}>
                <Check className="mr-2 h-4 w-4" />
                Create Request
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
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
                <DropdownMenuLabel className="font-normal">Priority</DropdownMenuLabel>
                <DropdownMenuItem className="flex items-center">
                  <input type="checkbox" className="mr-2" id="high-priority" />
                  <label htmlFor="high-priority">High</label>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center">
                  <input type="checkbox" className="mr-2" id="medium-priority" />
                  <label htmlFor="medium-priority">Medium</label>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center">
                  <input type="checkbox" className="mr-2" id="low-priority" />
                  <label htmlFor="low-priority">Low</label>
                </DropdownMenuItem>
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
                <Button size="sm" className="w-full mt-2">
                  Apply Filters
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search requests..."
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
              <CardTitle>All Maintenance Requests</CardTitle>
              <CardDescription>View and manage all maintenance requests across your properties</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Property / Unit</TableHead>
                    <TableHead>Tenant</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.title}</TableCell>
                      <TableCell>
                        {request.property}
                        <br />
                        <span className="text-sm text-muted-foreground">{request.unit}</span>
                      </TableCell>
                      <TableCell>{request.tenant}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            request.priority === "High"
                              ? "border-red-500 text-red-500"
                              : request.priority === "Medium"
                                ? "border-yellow-500 text-yellow-500"
                                : "border-green-500 text-green-500"
                          }
                        >
                          {request.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            request.status === "Open"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              : request.status === "In Progress"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          }
                        >
                          {request.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {request.assignedTo ? (
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.assignedTo} />
                              <AvatarFallback>{request.assignedTo.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{request.assignedTo}</span>
                          </div>
                        ) : (
                          <Badge variant="outline" className="border-gray-300 text-gray-500">
                            Unassigned
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit request
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {request.status === "Open" && (
                              <DropdownMenuItem>
                                <Clock className="mr-2 h-4 w-4" />
                                Mark as in progress
                              </DropdownMenuItem>
                            )}
                            {(request.status === "Open" || request.status === "In Progress") && (
                              <DropdownMenuItem>
                                <Check className="mr-2 h-4 w-4" />
                                Mark as completed
                              </DropdownMenuItem>
                            )}
                            {!request.assignedTo && (
                              <DropdownMenuItem>
                                <Tool className="mr-2 h-4 w-4" />
                                Assign maintenance staff
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="open" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Open Requests</CardTitle>
              <CardDescription>Maintenance requests that need attention</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Property / Unit</TableHead>
                    <TableHead>Tenant</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Date Submitted</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRequests
                    .filter((request) => request.status === "Open")
                    .map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>{request.title}</TableCell>
                        <TableCell>
                          {request.property}
                          <br />
                          <span className="text-sm text-muted-foreground">{request.unit}</span>
                        </TableCell>
                        <TableCell>{request.tenant}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              request.priority === "High"
                                ? "border-red-500 text-red-500"
                                : request.priority === "Medium"
                                  ? "border-yellow-500 text-yellow-500"
                                  : "border-green-500 text-green-500"
                            }
                          >
                            {request.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>{request.dateSubmitted}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit request
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Clock className="mr-2 h-4 w-4" />
                                Mark as in progress
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Check className="mr-2 h-4 w-4" />
                                Mark as completed
                              </DropdownMenuItem>
                              {!request.assignedTo && (
                                <DropdownMenuItem>
                                  <Tool className="mr-2 h-4 w-4" />
                                  Assign maintenance staff
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>

              {filteredRequests.filter((request) => request.status === "Open").length === 0 && (
                <div className="flex items-center justify-center p-8 text-center">
                  <div className="max-w-md">
                    <Wrench className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No Open Requests</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      There are currently no open maintenance requests. All requests are either in progress or
                      completed.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="in-progress" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>In Progress Requests</CardTitle>
              <CardDescription>Maintenance requests currently being worked on</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Property / Unit</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Date Submitted</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRequests
                    .filter((request) => request.status === "In Progress")
                    .map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>{request.title}</TableCell>
                        <TableCell>
                          {request.property}
                          <br />
                          <span className="text-sm text-muted-foreground">{request.unit}</span>
                        </TableCell>
                        <TableCell>
                          {request.assignedTo ? (
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.assignedTo} />
                                <AvatarFallback>{request.assignedTo.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span>{request.assignedTo}</span>
                            </div>
                          ) : (
                            <Badge variant="outline" className="border-gray-300 text-gray-500">
                              Unassigned
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              request.priority === "High"
                                ? "border-red-500 text-red-500"
                                : request.priority === "Medium"
                                  ? "border-yellow-500 text-yellow-500"
                                  : "border-green-500 text-green-500"
                            }
                          >
                            {request.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>{request.dateSubmitted}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>Add progress note</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Check className="mr-2 h-4 w-4" />
                                Mark as completed
                              </DropdownMenuItem>
                              {!request.assignedTo && (
                                <DropdownMenuItem>
                                  <Tool className="mr-2 h-4 w-4" />
                                  Assign maintenance staff
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>

              {filteredRequests.filter((request) => request.status === "In Progress").length === 0 && (
                <div className="flex items-center justify-center p-8 text-center">
                  <div className="max-w-md">
                    <Wrench className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No In-Progress Requests</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      There are currently no maintenance requests in progress.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Completed Requests</CardTitle>
              <CardDescription>Maintenance requests that have been resolved</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Property / Unit</TableHead>
                    <TableHead>Completed By</TableHead>
                    <TableHead>Date Submitted</TableHead>
                    <TableHead>Date Completed</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRequests
                    .filter((request) => request.status === "Completed")
                    .map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>{request.title}</TableCell>
                        <TableCell>
                          {request.property}
                          <br />
                          <span className="text-sm text-muted-foreground">{request.unit}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.assignedTo} />
                              <AvatarFallback>{request.assignedTo?.charAt(0) || "U"}</AvatarFallback>
                            </Avatar>
                            <span>{request.assignedTo || "Unassigned"}</span>
                          </div>
                        </TableCell>
                        <TableCell>{request.dateSubmitted}</TableCell>
                        <TableCell>{request.id === "MR-006" ? "May 12, 2025" : "May 10, 2025"}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>View completion report</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Reopen request</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>

              {filteredRequests.filter((request) => request.status === "Completed").length === 0 && (
                <div className="flex items-center justify-center p-8 text-center">
                  <div className="max-w-md">
                    <Wrench className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">No Completed Requests</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      There are currently no completed maintenance requests.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
