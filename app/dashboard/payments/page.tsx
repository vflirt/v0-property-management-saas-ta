"use client"

import { useState } from "react"
import { Check, CreditCard, Download, MoreHorizontal, Plus, Search } from "lucide-react"

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
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Mock payment data
const payments = [
  {
    id: "PMT-001",
    date: "May 1, 2025",
    tenant: "James Wilson",
    property: "Oakwood Apartments",
    unit: "#105",
    amount: "$1,450",
    status: "Paid",
    method: "Credit Card",
  },
  {
    id: "PMT-002",
    date: "May 1, 2025",
    tenant: "Sarah Johnson",
    property: "Riverside Homes",
    unit: "#202",
    amount: "$1,650",
    status: "Paid",
    method: "Bank Transfer",
  },
  {
    id: "PMT-003",
    date: "May 1, 2025",
    tenant: "Michael Brown",
    property: "Pine Street Condos",
    unit: "#301",
    amount: "$1,800",
    status: "Paid",
    method: "Credit Card",
  },
  {
    id: "PMT-004",
    date: "May 1, 2025",
    tenant: "Emily Davis",
    property: "Maple Court",
    unit: "#A12",
    amount: "$1,550",
    status: "Paid",
    method: "Bank Transfer",
  },
  {
    id: "PMT-005",
    date: "May 1, 2025",
    tenant: "David Martinez",
    property: "Oakwood Apartments",
    unit: "#203",
    amount: "$1,400",
    status: "Paid",
    method: "Credit Card",
  },
  {
    id: "PMT-006",
    date: "Apr 1, 2025",
    tenant: "James Wilson",
    property: "Oakwood Apartments",
    unit: "#105",
    amount: "$1,450",
    status: "Paid",
    method: "Credit Card",
  },
  {
    id: "PMT-007",
    date: "Apr 1, 2025",
    tenant: "Sarah Johnson",
    property: "Riverside Homes",
    unit: "#202",
    amount: "$1,650",
    status: "Paid",
    method: "Bank Transfer",
  },
]

// Mock upcoming payments
const upcomingPayments = [
  {
    id: "PMT-008",
    dueDate: "Jun 1, 2025",
    tenant: "James Wilson",
    property: "Oakwood Apartments",
    unit: "#105",
    amount: "$1,450",
    status: "Upcoming",
  },
  {
    id: "PMT-009",
    dueDate: "Jun 1, 2025",
    tenant: "Sarah Johnson",
    property: "Riverside Homes",
    unit: "#202",
    amount: "$1,650",
    status: "Upcoming",
  },
  {
    id: "PMT-010",
    dueDate: "Jun 1, 2025",
    tenant: "Michael Brown",
    property: "Pine Street Condos",
    unit: "#301",
    amount: "$1,800",
    status: "Upcoming",
  },
  {
    id: "PMT-011",
    dueDate: "Jun 1, 2025",
    tenant: "Emily Davis",
    property: "Maple Court",
    unit: "#A12",
    amount: "$1,550",
    status: "Upcoming",
  },
  {
    id: "PMT-012",
    dueDate: "Jun 1, 2025",
    tenant: "David Martinez",
    property: "Oakwood Apartments",
    unit: "#203",
    amount: "$1,400",
    status: "Upcoming",
  },
]

// Mock subscription payments for admin
const subscriptionPayments = [
  {
    id: "SUB-001",
    date: "May 1, 2025",
    customer: "John Doe",
    plan: "Professional",
    amount: "$79.00",
    status: "Paid",
    method: "Credit Card",
  },
  {
    id: "SUB-002",
    date: "May 1, 2025",
    customer: "Jane Smith",
    plan: "Enterprise",
    amount: "$199.00",
    status: "Paid",
    method: "Credit Card",
  },
  {
    id: "SUB-003",
    date: "May 1, 2025",
    customer: "Robert Johnson",
    plan: "Starter",
    amount: "$29.00",
    status: "Paid",
    method: "Bank Transfer",
  },
  {
    id: "SUB-004",
    date: "May 1, 2025",
    customer: "Lisa Williams",
    plan: "Professional",
    amount: "$79.00",
    status: "Paid",
    method: "Credit Card",
  },
  {
    id: "SUB-005",
    date: "May 1, 2025",
    customer: "David Smith",
    plan: "Professional",
    amount: "$79.00",
    status: "Paid",
    method: "Credit Card",
  },
]

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isRecordPaymentOpen, setIsRecordPaymentOpen] = useState(false)
  const [role, setRole] = useState<"landlord" | "admin">("landlord")

  // Filter payments based on search term
  const filteredPayments = payments.filter(
    (payment) =>
      payment.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Filter subscription payments based on search term
  const filteredSubscriptionPayments = subscriptionPayments.filter(
    (payment) =>
      payment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.plan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Payments</h2>
          <p className="text-muted-foreground">
            {role === "landlord" ? "Manage and track tenant payments" : "Manage and track subscription payments"}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Select value={role} onValueChange={(value) => setRole(value as any)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="landlord">Landlord View</SelectItem>
              <SelectItem value="admin">Admin View</SelectItem>
            </SelectContent>
          </Select>

          {role === "landlord" && (
            <Dialog open={isRecordPaymentOpen} onOpenChange={setIsRecordPaymentOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Record Payment
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Record New Payment</DialogTitle>
                  <DialogDescription>Enter the details of the payment to record.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="payment-tenant" className="text-right text-sm font-medium">
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
                    <label htmlFor="payment-property" className="text-right text-sm font-medium">
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
                    <label htmlFor="payment-unit" className="text-right text-sm font-medium">
                      Unit
                    </label>
                    <Input id="payment-unit" placeholder="Unit number" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="payment-amount" className="text-right text-sm font-medium">
                      Amount
                    </label>
                    <Input id="payment-amount" placeholder="$0.00" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="payment-date" className="text-right text-sm font-medium">
                      Date
                    </label>
                    <Input id="payment-date" type="date" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="payment-method" className="text-right text-sm font-medium">
                      Method
                    </label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit-card">Credit Card</SelectItem>
                        <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="check">Check</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="payment-notes" className="text-right text-sm font-medium">
                      Notes
                    </label>
                    <Input id="payment-notes" placeholder="Optional notes" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsRecordPaymentOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsRecordPaymentOpen(false)}>
                    <Check className="mr-2 h-4 w-4" />
                    Record Payment
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      {role === "landlord" ? (
        <LandlordPaymentsView
          payments={filteredPayments}
          upcomingPayments={upcomingPayments}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      ) : (
        <AdminPaymentsView
          subscriptionPayments={filteredSubscriptionPayments}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )}
    </div>
  )
}

interface LandlordPaymentsViewProps {
  payments: typeof payments
  upcomingPayments: typeof upcomingPayments
  searchTerm: string
  setSearchTerm: (term: string) => void
}

function LandlordPaymentsView({ payments, upcomingPayments, searchTerm, setSearchTerm }: LandlordPaymentsViewProps) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Collected (May)</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$7,850</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming (Jun)</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$7,850</div>
            <p className="text-xs text-muted-foreground">5 payments due</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Late Payments</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0</div>
            <p className="text-xs text-muted-foreground">0 late payments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground">All payments collected</p>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Payment Trends</CardTitle>
          <CardDescription>Monthly payment collection over the past 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <PaymentTrendsChart />
        </CardContent>
      </Card>

      <Tabs defaultValue="recent">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="recent">Recent Payments</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Payments</TabsTrigger>
          </TabsList>

          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search payments..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <TabsContent value="recent" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Payments</CardTitle>
              <CardDescription>View and manage recent tenant payments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Tenant</TableHead>
                    <TableHead>Property</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>{payment.tenant}</TableCell>
                      <TableCell>{payment.property}</TableCell>
                      <TableCell>{payment.unit}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>{payment.method}</TableCell>
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
                              <Download className="mr-2 h-4 w-4" />
                              Download receipt
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Send receipt to tenant</DropdownMenuItem>
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

        <TabsContent value="upcoming" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Payments</CardTitle>
              <CardDescription>View and manage upcoming tenant payments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Tenant</TableHead>
                    <TableHead>Property</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.dueDate}</TableCell>
                      <TableCell>{payment.tenant}</TableCell>
                      <TableCell>{payment.property}</TableCell>
                      <TableCell>{payment.unit}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                          {payment.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Send Reminder
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
    </>
  )
}

interface AdminPaymentsViewProps {
  subscriptionPayments: typeof subscriptionPayments
  searchTerm: string
  setSearchTerm: (term: string) => void
}

function AdminPaymentsView({ subscriptionPayments, searchTerm, setSearchTerm }: AdminPaymentsViewProps) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Recurring Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-muted-foreground">+12 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Revenue Per User</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$50.20</div>
            <p className="text-xs text-muted-foreground">+$2.40 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2%</div>
            <p className="text-xs text-muted-foreground">-0.3% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Revenue Breakdown</CardTitle>
          <CardDescription>Monthly revenue by subscription plan</CardDescription>
        </CardHeader>
        <CardContent>
          <SubscriptionRevenueChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Subscription Payments</CardTitle>
            <CardDescription>Recent subscription payments from customers</CardDescription>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search payments..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptionPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>{payment.customer}</TableCell>
                  <TableCell>{payment.plan}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>{payment.method}</TableCell>
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
                          <Download className="mr-2 h-4 w-4" />
                          Download invoice
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Renewals</CardTitle>
          <CardDescription>Subscriptions due for renewal in the next 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Current Period</TableHead>
                <TableHead>Renewal Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  customer: "John Doe",
                  plan: "Professional",
                  currentPeriod: "May 1 - Jun 1, 2025",
                  renewalDate: "Jun 1, 2025",
                  amount: "$79.00",
                },
                {
                  customer: "Jane Smith",
                  plan: "Enterprise",
                  currentPeriod: "May 1 - Jun 1, 2025",
                  renewalDate: "Jun 1, 2025",
                  amount: "$199.00",
                },
                {
                  customer: "Robert Johnson",
                  plan: "Starter",
                  currentPeriod: "May 1 - Jun 1, 2025",
                  renewalDate: "Jun 1, 2025",
                  amount: "$29.00",
                },
                {
                  customer: "Lisa Williams",
                  plan: "Professional",
                  currentPeriod: "May 10 - Jun 10, 2025",
                  renewalDate: "Jun 10, 2025",
                  amount: "$79.00",
                },
                {
                  customer: "David Smith",
                  plan: "Professional",
                  currentPeriod: "May 15 - Jun 15, 2025",
                  renewalDate: "Jun 15, 2025",
                  amount: "$79.00",
                },
              ].map((renewal, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{renewal.customer}</TableCell>
                  <TableCell>{renewal.plan}</TableCell>
                  <TableCell>{renewal.currentPeriod}</TableCell>
                  <TableCell>{renewal.renewalDate}</TableCell>
                  <TableCell>{renewal.amount}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Send Reminder
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}

// Chart Components
function PaymentTrendsChart() {
  const data = [
    { month: "Dec", amount: 6800 },
    { month: "Jan", amount: 7200 },
    { month: "Feb", amount: 6950 },
    { month: "Mar", amount: 7100 },
    { month: "Apr", amount: 6950 },
    { month: "May", amount: 7850 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
        <Tooltip formatter={(value) => [`$${value}`, "Amount"]} labelFormatter={(label) => `Month: ${label}`} />
        <Bar dataKey="amount" fill="hsl(var(--primary))" name="Monthly Payment Collection" />
      </BarChart>
    </ResponsiveContainer>
  )
}

function SubscriptionRevenueChart() {
  const data = [
    { month: "Dec", starter: 1450, professional: 6320, enterprise: 3980 },
    { month: "Jan", starter: 1520, professional: 6580, enterprise: 4120 },
    { month: "Feb", starter: 1610, professional: 6870, enterprise: 4350 },
    { month: "Mar", starter: 1740, professional: 7160, enterprise: 4580 },
    { month: "Apr", starter: 1850, professional: 7400, enterprise: 4790 },
    { month: "May", starter: 1970, professional: 7690, enterprise: 5120 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
        <Tooltip formatter={(value) => [`$${value}`, ""]} />
        <Legend />
        <Bar dataKey="starter" stackId="a" name="Starter" fill="hsl(217, 91%, 60%)" />
        <Bar dataKey="professional" stackId="a" name="Professional" fill="hsl(var(--primary))" />
        <Bar dataKey="enterprise" stackId="a" name="Enterprise" fill="hsl(142, 71%, 45%)" />
      </BarChart>
    </ResponsiveContainer>
  )
}
