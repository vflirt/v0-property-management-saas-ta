"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AreaChart,
  BarChart,
  LineChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

// Sample data for charts
const revenueData = [
  { name: "Jan", total: 12000 },
  { name: "Feb", total: 14000 },
  { name: "Mar", total: 13500 },
  { name: "Apr", total: 15000 },
  { name: "May", total: 16500 },
  { name: "Jun", total: 17500 },
  { name: "Jul", total: 19000 },
  { name: "Aug", total: 18500 },
  { name: "Sep", total: 20000 },
  { name: "Oct", total: 21500 },
  { name: "Nov", total: 23000 },
  { name: "Dec", total: 24500 },
]

const occupancyData = [
  { name: "Jan", rate: 92 },
  { name: "Feb", rate: 93 },
  { name: "Mar", rate: 95 },
  { name: "Apr", rate: 94 },
  { name: "May", rate: 96 },
  { name: "Jun", rate: 97 },
  { name: "Jul", rate: 98 },
  { name: "Aug", rate: 97 },
  { name: "Sep", rate: 96 },
  { name: "Oct", rate: 95 },
  { name: "Nov", rate: 94 },
  { name: "Dec", rate: 93 },
]

const maintenanceData = [
  { name: "Jan", count: 24 },
  { name: "Feb", count: 18 },
  { name: "Mar", count: 22 },
  { name: "Apr", count: 15 },
  { name: "May", count: 19 },
  { name: "Jun", count: 14 },
  { name: "Jul", count: 12 },
  { name: "Aug", count: 16 },
  { name: "Sep", count: 20 },
  { name: "Oct", count: 23 },
  { name: "Nov", count: 25 },
  { name: "Dec", count: 21 },
]

export default function AnalyticsPageClient() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$214,500</div>
                <p className="text-xs text-muted-foreground">+12.5% from last year</p>
                <div className="h-[80px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={revenueData}
                      margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 0,
                      }}
                    >
                      <Line type="monotone" dataKey="total" stroke="#0284c7" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Occupancy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">95.2%</div>
                <p className="text-xs text-muted-foreground">+2.1% from last year</p>
                <div className="h-[80px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={occupancyData}
                      margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 0,
                      }}
                    >
                      <Area type="monotone" dataKey="rate" stroke="#0284c7" fill="#0284c720" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Maintenance Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">229</div>
                <p className="text-xs text-muted-foreground">-5.2% from last year</p>
                <div className="h-[80px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={maintenanceData}
                      margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 0,
                      }}
                    >
                      <Bar dataKey="count" fill="#0284c7" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={revenueData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="total" fill="#0284c7" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Occupancy Trends</CardTitle>
                <CardDescription>Monthly occupancy rates for the current year</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={occupancyData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="rate" stroke="#0284c7" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
    </div>
  )
}
