"use client"

import { useState } from "react"
import {
  ArrowUpDown,
  Building,
  CreditCard,
  DollarSign,
  FileText,
  Home,
  MoreHorizontal,
  Plus,
  Settings,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StatCard } from "@/components/dashboard/stat-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export default function DashboardPage() {
  const [role, setRole] = useState<"landlord" | "tenant" | "maintenance" | "manager" | "admin">("landlord")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your properties.</p>
        </div>

        <div className="flex items-center gap-2">
          <Select value={role} onValueChange={(value) => setRole(value as any)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="landlord">Landlord View</SelectItem>
              <SelectItem value="tenant">Tenant View</SelectItem>
              <SelectItem value="maintenance">Maintenance View</SelectItem>
              <SelectItem value="manager">Manager View</SelectItem>
              <SelectItem value="admin">Admin View</SelectItem>
            </SelectContent>
          </Select>

          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Property
          </Button>
        </div>
      </div>

      {/* Render different dashboard based on role */}
      {role === "landlord" && <LandlordDashboard />}
      {role === "tenant" && <TenantDashboard />}
      {role === "maintenance" && <MaintenanceDashboard />}
      {role === "manager" && <ManagerDashboard />}
      {role === "admin" && <AdminDashboard />}
    </div>
  )
}

function LandlordDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Properties" value="12" icon={Building} trend={{ value: 8, isPositive: true }} />
        <StatCard title="Total Units" value="48" icon={Home} trend={{ value: 12, isPositive: true }} />
        <StatCard title="Monthly Revenue" value="$24,500" icon={DollarSign} trend={{ value: 4.3, isPositive: true }} />
        <StatCard title="Occupancy Rate" value="92%" icon={Users} trend={{ value: 2.1, isPositive: false }} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the past year</CardDescription>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Payments</CardTitle>
            <CardDescription>Next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { property: "Oakwood Apartments", date: "May 25, 2025", amount: "$8,200" },
                  { property: "Riverside Homes", date: "May 28, 2025", amount: "$6,500" },
                  { property: "Pine Street Condos", date: "June 1, 2025", amount: "$5,800" },
                  { property: "Maple Court", date: "June 5, 2025", amount: "$4,000" },
                ].map((payment, i) => (
                  <TableRow key={i}>
                    <TableCell>{payment.property}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell className="text-right">{payment.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Maintenance Requests</CardTitle>
            <CardDescription>Recent maintenance tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Issue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { property: "Oakwood #203", issue: "Leaking faucet", status: "Pending" },
                  { property: "Riverside #105", issue: "Broken AC", status: "In Progress" },
                  { property: "Pine St #302", issue: "Electrical issue", status: "Scheduled" },
                  { property: "Maple Ct #B12", issue: "Clogged drain", status: "Completed" },
                ].map((ticket, i) => (
                  <TableRow key={i}>
                    <TableCell>{ticket.property}</TableCell>
                    <TableCell>{ticket.issue}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          ticket.status === "Completed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : ticket.status === "In Progress"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              : ticket.status === "Scheduled"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {ticket.status}
                      </span>
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
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Assign technician</DropdownMenuItem>
                          <DropdownMenuItem>Update status</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>AI Revenue Prediction</CardTitle>
            <CardDescription>Projected revenue for next 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <RevenuePredictionChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function TenantDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Current Rent" value="$1,450" icon={DollarSign} description="Due on the 1st of each month" />
        <StatCard title="Lease Ends" value="Dec 31, 2025" icon={FileText} description="8 months remaining" />
        <StatCard title="Open Requests" value="2" icon={Settings} trend={{ value: 1, isPositive: false }} />
        <StatCard title="Last Payment" value="May 1, 2025" icon={CreditCard} description="Payment successful" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Maintenance Requests</CardTitle>
            <CardDescription>Your recent maintenance tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Issue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { date: "May 15, 2025", issue: "Bathroom sink leaking", status: "In Progress" },
                  { date: "May 10, 2025", issue: "Bedroom light fixture", status: "Scheduled" },
                  { date: "Apr 28, 2025", issue: "Refrigerator not cooling", status: "Completed" },
                  { date: "Apr 15, 2025", issue: "Window lock broken", status: "Completed" },
                ].map((ticket, i) => (
                  <TableRow key={i}>
                    <TableCell>{ticket.date}</TableCell>
                    <TableCell>{ticket.issue}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          ticket.status === "Completed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : ticket.status === "In Progress"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              : ticket.status === "Scheduled"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>Your recent payments</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { date: "May 1, 2025", description: "Monthly Rent", amount: "$1,450" },
                  { date: "Apr 1, 2025", description: "Monthly Rent", amount: "$1,450" },
                  { date: "Mar 1, 2025", description: "Monthly Rent", amount: "$1,450" },
                  { date: "Feb 1, 2025", description: "Monthly Rent", amount: "$1,450" },
                  { date: "Jan 1, 2025", description: "Monthly Rent", amount: "$1,450" },
                ].map((payment, i) => (
                  <TableRow key={i}>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{payment.description}</TableCell>
                    <TableCell className="text-right">{payment.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Payments</CardTitle>
          <CardDescription>Your scheduled payments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Due Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { date: "Jun 1, 2025", description: "Monthly Rent", status: "Upcoming", amount: "$1,450" },
                { date: "Jul 1, 2025", description: "Monthly Rent", status: "Upcoming", amount: "$1,450" },
                { date: "Aug 1, 2025", description: "Monthly Rent", status: "Upcoming", amount: "$1,450" },
              ].map((payment, i) => (
                <TableRow key={i}>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>{payment.description}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      {payment.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">{payment.amount}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Pay Now
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function MaintenanceDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Open Tickets" value="18" icon={Settings} trend={{ value: 12, isPositive: false }} />
        <StatCard title="In Progress" value="7" icon={ArrowUpDown} trend={{ value: 3, isPositive: true }} />
        <StatCard title="Completed (30d)" value="42" icon={CheckCircle} trend={{ value: 8, isPositive: true }} />
        <StatCard title="Avg. Resolution Time" value="2.3 days" icon={Clock} trend={{ value: 0.5, isPositive: true }} />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Maintenance Tickets</CardTitle>
            <CardDescription>All active maintenance requests</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tickets</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Ticket
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket ID</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Reported</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "MT-1234",
                  property: "Oakwood #203",
                  issue: "Leaking faucet",
                  reported: "May 18, 2025",
                  priority: "Medium",
                  status: "Pending",
                },
                {
                  id: "MT-1233",
                  property: "Riverside #105",
                  issue: "Broken AC",
                  reported: "May 17, 2025",
                  priority: "High",
                  status: "In Progress",
                },
                {
                  id: "MT-1232",
                  property: "Pine St #302",
                  issue: "Electrical issue",
                  reported: "May 16, 2025",
                  priority: "High",
                  status: "Scheduled",
                },
                {
                  id: "MT-1231",
                  property: "Maple Ct #B12",
                  issue: "Clogged drain",
                  reported: "May 15, 2025",
                  priority: "Low",
                  status: "Completed",
                },
                {
                  id: "MT-1230",
                  property: "Oakwood #105",
                  issue: "Broken window",
                  reported: "May 14, 2025",
                  priority: "Medium",
                  status: "In Progress",
                },
                {
                  id: "MT-1229",
                  property: "Riverside #202",
                  issue: "Heating not working",
                  reported: "May 13, 2025",
                  priority: "High",
                  status: "Scheduled",
                },
              ].map((ticket, i) => (
                <TableRow key={i}>
                  <TableCell>{ticket.id}</TableCell>
                  <TableCell>{ticket.property}</TableCell>
                  <TableCell>{ticket.issue}</TableCell>
                  <TableCell>{ticket.reported}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        ticket.priority === "High"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          : ticket.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      }`}
                    >
                      {ticket.priority}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        ticket.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : ticket.status === "In Progress"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            : ticket.status === "Scheduled"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {ticket.status}
                    </span>
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
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Update status</DropdownMenuItem>
                        <DropdownMenuItem>Assign technician</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Mark as completed</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ticket Resolution Time</CardTitle>
            <CardDescription>Average days to resolve by priority</CardDescription>
          </CardHeader>
          <CardContent>
            <MaintenanceResolutionChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Scheduled Visits</CardTitle>
            <CardDescription>Next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Issue</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { date: "May 20, 2025", time: "9:00 AM", property: "Riverside #105", issue: "Broken AC" },
                  { date: "May 21, 2025", time: "11:30 AM", property: "Pine St #302", issue: "Electrical issue" },
                  { date: "May 22, 2025", time: "2:00 PM", property: "Oakwood #105", issue: "Broken window" },
                  { date: "May 23, 2025", time: "10:00 AM", property: "Riverside #202", issue: "Heating not working" },
                ].map((visit, i) => (
                  <TableRow key={i}>
                    <TableCell>{visit.date}</TableCell>
                    <TableCell>{visit.time}</TableCell>
                    <TableCell>{visit.property}</TableCell>
                    <TableCell>{visit.issue}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ManagerDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Properties Managed" value="8" icon={Building} trend={{ value: 2, isPositive: true }} />
        <StatCard title="Total Units" value="32" icon={Home} trend={{ value: 6, isPositive: true }} />
        <StatCard title="Occupancy Rate" value="94%" icon={Users} trend={{ value: 3, isPositive: true }} />
        <StatCard title="Open Maintenance" value="12" icon={Settings} trend={{ value: 2, isPositive: false }} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Property Performance</CardTitle>
            <CardDescription>Revenue by property (last 6 months)</CardDescription>
          </CardHeader>
          <CardContent>
            <PropertyPerformanceChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Lease Expirations</CardTitle>
            <CardDescription>Next 90 days</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Unit</TableHead>
                  <TableHead>Tenant</TableHead>
                  <TableHead>Expires</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { property: "Oakwood", unit: "#105", tenant: "James Wilson", expires: "Jun 15, 2025" },
                  { property: "Riverside", unit: "#202", tenant: "Sarah Johnson", expires: "Jun 30, 2025" },
                  { property: "Pine Street", unit: "#301", tenant: "Michael Brown", expires: "Jul 15, 2025" },
                  { property: "Maple Court", unit: "#A12", tenant: "Emily Davis", expires: "Aug 1, 2025" },
                ].map((lease, i) => (
                  <TableRow key={i}>
                    <TableCell>{lease.property}</TableCell>
                    <TableCell>{lease.unit}</TableCell>
                    <TableCell>{lease.tenant}</TableCell>
                    <TableCell>{lease.expires}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        Renew
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Tenant Communications</CardTitle>
            <CardDescription>Last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Tenant</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    date: "May 18, 2025",
                    tenant: "James Wilson",
                    property: "Oakwood #105",
                    subject: "Parking question",
                  },
                  {
                    date: "May 17, 2025",
                    tenant: "Sarah Johnson",
                    property: "Riverside #202",
                    subject: "Lease renewal",
                  },
                  {
                    date: "May 16, 2025",
                    tenant: "Michael Brown",
                    property: "Pine St #301",
                    subject: "Noise complaint",
                  },
                  {
                    date: "May 15, 2025",
                    tenant: "Emily Davis",
                    property: "Maple Ct #A12",
                    subject: "Maintenance request",
                  },
                ].map((comm, i) => (
                  <TableRow key={i}>
                    <TableCell>{comm.date}</TableCell>
                    <TableCell>{comm.tenant}</TableCell>
                    <TableCell>{comm.property}</TableCell>
                    <TableCell>{comm.subject}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Your scheduled tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Task</TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { date: "May 20, 2025", task: "Property inspection", property: "Oakwood", priority: "High" },
                  { date: "May 22, 2025", task: "Lease signing", property: "Riverside", priority: "Medium" },
                  { date: "May 25, 2025", task: "Vendor meeting", property: "Pine Street", priority: "Medium" },
                  { date: "May 28, 2025", task: "Tenant screening", property: "Maple Court", priority: "High" },
                ].map((task, i) => (
                  <TableRow key={i}>
                    <TableCell>{task.date}</TableCell>
                    <TableCell>{task.task}</TableCell>
                    <TableCell>{task.property}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          task.priority === "High"
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Complete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Users" value="248" icon={Users} trend={{ value: 12, isPositive: true }} />
        <StatCard title="Monthly Revenue" value="$42,500" icon={DollarSign} trend={{ value: 8.3, isPositive: true }} />
        <StatCard title="Active Properties" value="86" icon={Building} trend={{ value: 5, isPositive: true }} />
        <StatCard title="MRR" value="$12,450" icon={CreditCard} trend={{ value: 3.2, isPositive: true }} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Platform revenue for the past year</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminRevenueChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>New users by role</CardDescription>
          </CardHeader>
          <CardContent>
            <UserGrowthChart />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="support">Support Tickets</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
              <CardDescription>Recently registered users</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Robert Johnson",
                      email: "robert@example.com",
                      role: "Landlord",
                      joined: "May 18, 2025",
                      status: "Active",
                    },
                    {
                      name: "Lisa Williams",
                      email: "lisa@example.com",
                      role: "Manager",
                      joined: "May 17, 2025",
                      status: "Active",
                    },
                    {
                      name: "David Smith",
                      email: "david@example.com",
                      role: "Landlord",
                      joined: "May 16, 2025",
                      status: "Pending",
                    },
                    {
                      name: "Jennifer Brown",
                      email: "jennifer@example.com",
                      role: "Tenant",
                      joined: "May 15, 2025",
                      status: "Active",
                    },
                    {
                      name: "Michael Davis",
                      email: "michael@example.com",
                      role: "Maintenance",
                      joined: "May 14, 2025",
                      status: "Active",
                    },
                  ].map((user, i) => (
                    <TableRow key={i}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.joined}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                        >
                          {user.status}
                        </span>
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
                            <DropdownMenuItem>View profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit user</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Suspend user</DropdownMenuItem>
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

        <TabsContent value="subscriptions" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Active Subscriptions</CardTitle>
              <CardDescription>Current subscription plans</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Started</TableHead>
                    <TableHead>Next Billing</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      customer: "Robert Johnson",
                      plan: "Professional",
                      started: "Jan 15, 2025",
                      nextBilling: "Jun 15, 2025",
                      amount: "$79/mo",
                    },
                    {
                      customer: "Lisa Williams",
                      plan: "Enterprise",
                      started: "Feb 10, 2025",
                      nextBilling: "Jun 10, 2025",
                      amount: "$199/mo",
                    },
                    {
                      customer: "David Smith",
                      plan: "Starter",
                      started: "Mar 5, 2025",
                      nextBilling: "Jun 5, 2025",
                      amount: "$29/mo",
                    },
                    {
                      customer: "Jennifer Brown",
                      plan: "Professional",
                      started: "Apr 20, 2025",
                      nextBilling: "Jun 20, 2025",
                      amount: "$79/mo",
                    },
                    {
                      customer: "Michael Davis",
                      plan: "Professional",
                      started: "May 1, 2025",
                      nextBilling: "Jun 1, 2025",
                      amount: "$79/mo",
                    },
                  ].map((sub, i) => (
                    <TableRow key={i}>
                      <TableCell>{sub.customer}</TableCell>
                      <TableCell>{sub.plan}</TableCell>
                      <TableCell>{sub.started}</TableCell>
                      <TableCell>{sub.nextBilling}</TableCell>
                      <TableCell>{sub.amount}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Manage
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>Recent customer support requests</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "T-1234",
                      customer: "Robert Johnson",
                      subject: "Billing issue",
                      submitted: "May 18, 2025",
                      status: "Open",
                    },
                    {
                      id: "T-1233",
                      customer: "Lisa Williams",
                      subject: "Feature request",
                      submitted: "May 17, 2025",
                      status: "In Progress",
                    },
                    {
                      id: "T-1232",
                      customer: "David Smith",
                      subject: "Account access",
                      submitted: "May 16, 2025",
                      status: "Open",
                    },
                    {
                      id: "T-1231",
                      customer: "Jennifer Brown",
                      subject: "Integration help",
                      submitted: "May 15, 2025",
                      status: "Closed",
                    },
                    {
                      id: "T-1230",
                      customer: "Michael Davis",
                      subject: "API documentation",
                      submitted: "May 14, 2025",
                      status: "Closed",
                    },
                  ].map((ticket, i) => (
                    <TableRow key={i}>
                      <TableCell>{ticket.id}</TableCell>
                      <TableCell>{ticket.customer}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>{ticket.submitted}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            ticket.status === "Closed"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : ticket.status === "In Progress"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Chart Components
function RevenueChart() {
  const data = [
    { month: "Jan", revenue: 18500 },
    { month: "Feb", revenue: 19200 },
    { month: "Mar", revenue: 20100 },
    { month: "Apr", revenue: 21300 },
    { month: "May", revenue: 22500 },
    { month: "Jun", revenue: 23100 },
    { month: "Jul", revenue: 23800 },
    { month: "Aug", revenue: 24200 },
    { month: "Sep", revenue: 24000 },
    { month: "Oct", revenue: 23500 },
    { month: "Nov", revenue: 24100 },
    { month: "Dec", revenue: 24500 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
        <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} labelFormatter={(label) => `Month: ${label}`} />
        <Bar dataKey="revenue" fill="hsl(var(--primary))" />
      </BarChart>
    </ResponsiveContainer>
  )
}

function RevenuePredictionChart() {
  const data = [
    { month: "Jun", actual: 24500, predicted: 24500 },
    { month: "Jul", actual: null, predicted: 25200 },
    { month: "Aug", actual: null, predicted: 26100 },
    { month: "Sep", actual: null, predicted: 27300 },
    { month: "Oct", actual: null, predicted: 28200 },
    { month: "Nov", actual: null, predicted: 29100 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
        <Tooltip
          formatter={(value) => [`$${value}`, value === null ? "Predicted" : "Actual"]}
          labelFormatter={(label) => `Month: ${label}`}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="actual"
          stroke="hsl(var(--primary))"
          strokeWidth={3}
          name="Actual"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="predicted"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth={3}
          strokeDasharray="5 5"
          name="AI Predicted"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

function PropertyPerformanceChart() {
  const data = [
    { month: "Jan", oakwood: 8500, riverside: 6200, pineStreet: 5800, mapleCourt: 4000 },
    { month: "Feb", oakwood: 8700, riverside: 6300, pineStreet: 5900, mapleCourt: 4100 },
    { month: "Mar", oakwood: 8600, riverside: 6500, pineStreet: 6000, mapleCourt: 4200 },
    { month: "Apr", oakwood: 8800, riverside: 6400, pineStreet: 6100, mapleCourt: 4000 },
    { month: "May", oakwood: 8900, riverside: 6600, pineStreet: 6200, mapleCourt: 4300 },
    { month: "Jun", oakwood: 9100, riverside: 6700, pineStreet: 6300, mapleCourt: 4400 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
        <Tooltip formatter={(value) => [`$${value}`, ""]} />
        <Legend />
        <Line
          type="monotone"
          dataKey="oakwood"
          name="Oakwood Apartments"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
        />
        <Line type="monotone" dataKey="riverside" name="Riverside Homes" stroke="hsl(217, 91%, 60%)" strokeWidth={2} />
        <Line
          type="monotone"
          dataKey="pineStreet"
          name="Pine Street Condos"
          stroke="hsl(142, 71%, 45%)"
          strokeWidth={2}
        />
        <Line type="monotone" dataKey="mapleCourt" name="Maple Court" stroke="hsl(47, 94%, 68%)" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

function MaintenanceResolutionChart() {
  const data = [
    { priority: "Low", days: 3.2 },
    { priority: "Medium", days: 2.3 },
    { priority: "High", days: 1.1 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="priority" />
        <YAxis tickFormatter={(value) => `${value} days`} />
        <Tooltip formatter={(value) => [`${value} days`, "Resolution Time"]} />
        <Bar dataKey="days" fill="hsl(var(--primary))" />
      </BarChart>
    </ResponsiveContainer>
  )
}

function AdminRevenueChart() {
  const data = [
    { month: "Jan", mrr: 8500, oneTime: 2000 },
    { month: "Feb", mrr: 9200, oneTime: 2500 },
    { month: "Mar", mrr: 10100, oneTime: 3000 },
    { month: "Apr", mrr: 10800, oneTime: 2800 },
    { month: "May", mrr: 11500, oneTime: 3200 },
    { month: "Jun", mrr: 12000, oneTime: 3500 },
    { month: "Jul", mrr: 12300, oneTime: 3200 },
    { month: "Aug", mrr: 12200, oneTime: 3000 },
    { month: "Sep", mrr: 12000, oneTime: 3300 },
    { month: "Oct", mrr: 11800, oneTime: 3500 },
    { month: "Nov", mrr: 12100, oneTime: 3800 },
    { month: "Dec", mrr: 12450, oneTime: 4200 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
        <Tooltip formatter={(value) => [`$${value}`, ""]} />
        <Legend />
        <Bar dataKey="mrr" stackId="a" name="Monthly Recurring" fill="hsl(var(--primary))" />
        <Bar dataKey="oneTime" stackId="a" name="One-time Payments" fill="hsl(217, 91%, 60%)" />
      </BarChart>
    </ResponsiveContainer>
  )
}

function UserGrowthChart() {
  const data = [
    { month: "Jan", landlords: 12, managers: 8, tenants: 45, maintenance: 5 },
    { month: "Feb", landlords: 15, managers: 10, tenants: 52, maintenance: 6 },
    { month: "Mar", landlords: 18, managers: 12, tenants: 58, maintenance: 7 },
    { month: "Apr", landlords: 22, managers: 15, tenants: 65, maintenance: 8 },
    { month: "May", landlords: 25, managers: 18, tenants: 72, maintenance: 10 },
    { month: "Jun", landlords: 28, managers: 20, tenants: 80, maintenance: 12 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="landlords" name="Landlords" stroke="hsl(var(--primary))" strokeWidth={2} />
        <Line type="monotone" dataKey="managers" name="Managers" stroke="hsl(217, 91%, 60%)" strokeWidth={2} />
        <Line type="monotone" dataKey="tenants" name="Tenants" stroke="hsl(142, 71%, 45%)" strokeWidth={2} />
        <Line type="monotone" dataKey="maintenance" name="Maintenance" stroke="hsl(47, 94%, 68%)" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
