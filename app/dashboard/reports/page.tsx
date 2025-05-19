"use client"

import { useState } from "react"
import { Calendar, Download, FileText, MoreHorizontal, PieChart, BarChartIcon, Wrench } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart as RPieChart,
  Pie,
  Cell,
} from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for reports
const occupancyData = [
  { name: "Jan", rate: 92 },
  { name: "Feb", rate: 93 },
  { name: "Mar", rate: 95 },
  { name: "Apr", rate: 94 },
  { name: "May", rate: 92 },
  { name: "Jun", rate: 90 },
  { name: "Jul", rate: 91 },
  { name: "Aug", rate: 93 },
  { name: "Sep", rate: 94 },
  { name: "Oct", rate: 95 },
  { name: "Nov", rate: 94 },
  { name: "Dec", rate: 93 },
]

const revenueData = [
  { name: "Jan", revenue: 42500 },
  { name: "Feb", revenue: 43200 },
  { name: "Mar", revenue: 45000 },
  { name: "Apr", revenue: 44800 },
  { name: "May", revenue: 43500 },
  { name: "Jun", revenue: 42000 },
  { name: "Jul", revenue: 42800 },
  { name: "Aug", revenue: 43600 },
  { name: "Sep", revenue: 44500 },
  { name: "Oct", revenue: 45200 },
  { name: "Nov", revenue: 44800 },
  { name: "Dec", revenue: 44000 },
]

const expenseData = [
  { name: "Jan", expense: 12500 },
  { name: "Feb", expense: 13200 },
  { name: "Mar", expense: 14000 },
  { name: "Apr", expense: 13800 },
  { name: "May", expense: 13500 },
  { name: "Jun", expense: 14200 },
  { name: "Jul", expense: 13800 },
  { name: "Aug", expense: 13600 },
  { name: "Sep", expense: 14500 },
  { name: "Oct", expense: 15200 },
  { name: "Nov", expense: 14800 },
  { name: "Dec", expense: 14000 },
]

const maintenanceData = [
  { name: "Plumbing", value: 35 },
  { name: "Electrical", value: 25 },
  { name: "HVAC", value: 20 },
  { name: "Appliances", value: 10 },
  { name: "Other", value: 10 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

const propertyPerformanceData = [
  {
    name: "Oakwood Apartments",
    occupancy: 92,
    revenue: 24500,
    expenses: 8200,
    profit: 16300,
    roi: 8.2,
  },
  {
    name: "Riverside Homes",
    occupancy: 94,
    revenue: 19200,
    expenses: 6800,
    profit: 12400,
    roi: 7.8,
  },
  {
    name: "Pine Street Condos",
    occupancy: 100,
    revenue: 18000,
    expenses: 5500,
    profit: 12500,
    roi: 9.6,
  },
  {
    name: "Maple Court",
    occupancy: 88,
    revenue: 12800,
    expenses: 4200,
    profit: 8600,
    roi: 6.9,
  },
  {
    name: "Cedar Heights",
    occupancy: 89,
    revenue: 19800,
    expenses: 7100,
    profit: 12700,
    roi: 7.5,
  },
]

const savedReports = [
  {
    id: 1,
    name: "Monthly Financial Summary",
    description: "Financial performance across all properties",
    type: "Financial",
    lastGenerated: "May 1, 2025",
  },
  {
    id: 2,
    name: "Occupancy Report",
    description: "Occupancy rates and trends by property",
    type: "Occupancy",
    lastGenerated: "May 1, 2025",
  },
  {
    id: 3,
    name: "Maintenance Analysis",
    description: "Breakdown of maintenance requests and costs",
    type: "Maintenance",
    lastGenerated: "Apr 15, 2025",
  },
  {
    id: 4,
    name: "Property Performance Comparison",
    description: "Side-by-side comparison of property metrics",
    type: "Performance",
    lastGenerated: "Apr 1, 2025",
  },
  {
    id: 5,
    name: "Annual ROI Analysis",
    description: "Return on investment analysis by property",
    type: "Financial",
    lastGenerated: "Jan 15, 2025",
  },
]

export default function ReportsPage() {
  const [timeframe, setTimeframe] = useState("year")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Reports & Analytics</h2>
          <p className="text-muted-foreground">View and generate reports for your properties</p>
        </div>

        <div className="flex items-center gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Last 30 Days</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last 12 Months</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>

          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="occupancy">Occupancy</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="saved">Saved Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Occupancy Rate</CardTitle>
                <CardDescription>Average occupancy rate across all properties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={occupancyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[80, 100]} />
                      <Tooltip formatter={(value) => [`${value}%`, "Occupancy Rate"]} />
                      <Legend />
                      <Line type="monotone" dataKey="rate" stroke="#3b82f6" strokeWidth={2} name="Occupancy Rate %" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue vs Expenses</CardTitle>
                <CardDescription>Monthly revenue and expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={revenueData.map((item, index) => ({
                        name: item.name,
                        revenue: item.revenue,
                        expense: expenseData[index].expense,
                        profit: item.revenue - expenseData[index].expense,
                      }))}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, ""]} />
                      <Legend />
                      <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
                      <Bar dataKey="expense" fill="#ef4444" name="Expenses" />
                      <Bar dataKey="profit" fill="#10b981" name="Profit" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Requests</CardTitle>
                <CardDescription>Breakdown by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RPieChart>
                      <Pie
                        data={maintenanceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {maintenanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} requests`, ""]} />
                    </RPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Property Performance</CardTitle>
                <CardDescription>Key metrics by property</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={propertyPerformanceData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={150} />
                      <Tooltip
                        formatter={(value, name) => {
                          if (name === "occupancy") return [`${value}%`, "Occupancy"]
                          if (name === "roi") return [`${value}%`, "ROI"]
                          return [`$${value.toLocaleString()}`, name.charAt(0).toUpperCase() + name.slice(1)]
                        }}
                      />
                      <Legend />
                      <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
                      <Bar dataKey="profit" fill="#10b981" name="Profit" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>Revenue, expenses, and profit trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={revenueData.map((item, index) => ({
                      name: item.name,
                      revenue: item.revenue,
                      expense: expenseData[index].expense,
                      profit: item.revenue - expenseData[index].expense,
                    }))}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, ""]} />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} name="Revenue" />
                    <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} name="Expenses" />
                    <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} name="Profit" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Property</CardTitle>
                <CardDescription>Monthly revenue breakdown by property</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={propertyPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, ""]} />
                      <Legend />
                      <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ROI Analysis</CardTitle>
                <CardDescription>Return on investment by property</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={propertyPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, "ROI"]} />
                      <Legend />
                      <Bar dataKey="roi" fill="#8884d8" name="ROI %" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="occupancy" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Occupancy Trends</CardTitle>
              <CardDescription>Occupancy rates over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={occupancyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, "Occupancy Rate"]} />
                    <Legend />
                    <Line type="monotone" dataKey="rate" stroke="#3b82f6" strokeWidth={2} name="Occupancy Rate %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Occupancy by Property</CardTitle>
              <CardDescription>Current occupancy rates across properties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={propertyPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, "Occupancy Rate"]} />
                    <Legend />
                    <Bar dataKey="occupancy" fill="#3b82f6" name="Occupancy %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Requests by Type</CardTitle>
                <CardDescription>Breakdown of maintenance request categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RPieChart>
                      <Pie
                        data={maintenanceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {maintenanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} requests`, ""]} />
                    </RPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maintenance Costs</CardTitle>
                <CardDescription>Monthly maintenance expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { month: "Jan", cost: 3200 },
                        { month: "Feb", cost: 2800 },
                        { month: "Mar", cost: 3500 },
                        { month: "Apr", cost: 2900 },
                        { month: "May", cost: 3100 },
                        { month: "Jun", cost: 3800 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Cost"]} />
                      <Legend />
                      <Bar dataKey="cost" fill="#ef4444" name="Maintenance Cost" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Maintenance Requests by Property</CardTitle>
              <CardDescription>Number of maintenance requests by property</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { name: "Oakwood Apartments", requests: 12, avgCost: 320 },
                      { name: "Riverside Homes", requests: 8, avgCost: 410 },
                      { name: "Pine Street Condos", requests: 5, avgCost: 280 },
                      { name: "Maple Court", requests: 7, avgCost: 350 },
                      { name: "Cedar Heights", requests: 10, avgCost: 290 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="requests" fill="#3b82f6" name="Number of Requests" />
                    <Bar yAxisId="right" dataKey="avgCost" fill="#ef4444" name="Avg. Cost per Request ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Saved Reports</CardTitle>
              <CardDescription>Access your saved and scheduled reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {savedReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-md bg-primary/10 p-2">
                        {report.type === "Financial" ? (
                          <BarChartIcon className="h-5 w-5 text-primary" />
                        ) : report.type === "Occupancy" ? (
                          <PieChart className="h-5 w-5 text-primary" />
                        ) : report.type === "Maintenance" ? (
                          <Wrench className="h-5 w-5 text-primary" />
                        ) : (
                          <FileText className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold">{report.name}</h4>
                        <p className="text-sm text-muted-foreground">{report.description}</p>
                        <div className="mt-1 flex items-center text-xs text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          Last generated: {report.lastGenerated}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View report</DropdownMenuItem>
                          <DropdownMenuItem>Generate new</DropdownMenuItem>
                          <DropdownMenuItem>Schedule</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
