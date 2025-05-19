import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Building2, Calendar, Home, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Unit Details | Property Management SaaS",
  description: "View and manage unit details",
}

// Sample unit data
const unit = {
  id: "unit_1",
  number: "101",
  type: "1 Bedroom",
  area: "750 sq ft",
  rent: 1500,
  status: "Occupied",
  description: "Spacious 1 bedroom apartment with modern appliances, hardwood floors, and a balcony with a city view.",
  features: ["Hardwood Floors", "Stainless Steel Appliances", "Balcony", "Central AC", "In-unit Washer/Dryer"],
  bedrooms: 1,
  bathrooms: 1,
  floor: 1,
  property: {
    id: "prop_1",
    name: "Sunset Apartments",
    address: "123 Sunset Blvd, Los Angeles, CA 90001",
  },
  image: "/placeholder.svg?height=400&width=600",
}

// Sample tenant data
const tenant = {
  id: "tenant_1",
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  phone: "(555) 111-2222",
  moveInDate: "2023-01-01",
  avatar: "/placeholder.svg?height=40&width=40",
}

// Sample lease data
const lease = {
  id: "lease_1",
  startDate: "2023-01-01",
  endDate: "2024-12-31",
  rent: 1500,
  securityDeposit: 1500,
  status: "Active",
  paymentDue: 5, // Day of month
  lateFee: 50,
  renewalOption: true,
  renewalIncrease: 3, // Percentage
}

// Sample payment history
const payments = [
  {
    id: "payment_1",
    date: "2024-05-01",
    amount: 1500,
    type: "Rent",
    status: "Paid",
    method: "Bank Transfer",
  },
  {
    id: "payment_2",
    date: "2024-04-01",
    amount: 1500,
    type: "Rent",
    status: "Paid",
    method: "Credit Card",
  },
  {
    id: "payment_3",
    date: "2024-03-01",
    amount: 1500,
    type: "Rent",
    status: "Paid",
    method: "Bank Transfer",
  },
  {
    id: "payment_4",
    date: "2024-02-01",
    amount: 1500,
    type: "Rent",
    status: "Paid",
    method: "Bank Transfer",
  },
]

export default function UnitPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/properties">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to properties</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Unit {unit.number}</h1>
        <Badge className="ml-2">{unit.type}</Badge>
        <Badge variant={unit.status === "Occupied" ? "default" : "secondary"} className="ml-2">
          {unit.status}
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-5">
          <CardHeader className="p-4">
            <CardTitle>Unit Information</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Building2 className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Property</p>
                    <Link
                      href={`/dashboard/properties/${unit.property.id}`}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {unit.property.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">{unit.property.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Home className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Unit Details</p>
                    <p className="text-sm text-muted-foreground">{unit.area}</p>
                    <p className="text-sm text-muted-foreground">
                      {unit.bedrooms} bedroom, {unit.bathrooms} bathroom
                    </p>
                    <p className="text-sm text-muted-foreground">Floor {unit.floor}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Lease Information</p>
                    <p className="text-sm text-muted-foreground">${unit.rent}/month</p>
                    {unit.status === "Occupied" && (
                      <>
                        <p className="text-sm text-muted-foreground">Lease ends: {lease.endDate}</p>
                        <Badge variant="outline" className="mt-1">
                          {lease.status}
                        </Badge>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {unit.status === "Occupied" && (
                  <div className="flex items-start gap-2">
                    <User className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Current Tenant</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={tenant.avatar || "/placeholder.svg"} alt={tenant.name} />
                          <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <Link
                          href={`/dashboard/tenants/${tenant.id}`}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {tenant.name}
                        </Link>
                      </div>
                      <p className="text-sm text-muted-foreground">{tenant.email}</p>
                      <p className="text-sm text-muted-foreground">{tenant.phone}</p>
                      <p className="text-sm text-muted-foreground">Move-in date: {tenant.moveInDate}</p>
                    </div>
                  </div>
                )}
                <div>
                  <p className="font-medium">Features</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {unit.features.map((feature) => (
                      <Badge key={feature} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-medium">Description</p>
              <p className="mt-1 text-sm text-muted-foreground">{unit.description}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="p-4">
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-2">
            {unit.status === "Occupied" ? (
              <>
                <Button className="w-full" asChild>
                  <Link href={`/dashboard/properties/${unit.property.id}`}>View Property</Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link href={`/dashboard/leases/${lease.id}`}>View Lease</Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link href={`/dashboard/tenants/${tenant.id}`}>View Tenant</Link>
                </Button>
                <Button className="w-full" variant="outline">
                  Record Payment
                </Button>
                <Button className="w-full" variant="outline">
                  Create Maintenance Request
                </Button>
              </>
            ) : (
              <>
                <Button className="w-full" asChild>
                  <Link href={`/dashboard/properties/${unit.property.id}`}>View Property</Link>
                </Button>
                <Button className="w-full" variant="outline">
                  Add Tenant
                </Button>
                <Button className="w-full" variant="outline">
                  Create Lease
                </Button>
                <Button className="w-full" variant="outline">
                  Schedule Showing
                </Button>
                <Button className="w-full" variant="outline">
                  Mark as Unavailable
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {unit.status === "Occupied" && (
        <Tabs defaultValue="lease" className="mt-6">
          <TabsList>
            <TabsTrigger value="lease">Lease Details</TabsTrigger>
            <TabsTrigger value="payments">Payment History</TabsTrigger>
          </TabsList>

          <TabsContent value="lease" className="mt-4">
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <CardTitle>Lease Information</CardTitle>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/dashboard/leases/${lease.id}`}>View Full Lease</Link>
                  </Button>
                </div>
                <CardDescription>Current lease details for Unit {unit.number}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-medium">Lease Terms</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Start Date</p>
                        <p className="text-sm">{lease.startDate}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">End Date</p>
                        <p className="text-sm">{lease.endDate}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Status</p>
                        <Badge variant="outline">{lease.status}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Renewal Option</p>
                        <p className="text-sm">{lease.renewalOption ? "Yes" : "No"}</p>
                      </div>
                      {lease.renewalOption && (
                        <div className="flex justify-between">
                          <p className="text-sm text-muted-foreground">Renewal Increase</p>
                          <p className="text-sm">{lease.renewalIncrease}%</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Financial Details</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Monthly Rent</p>
                        <p className="text-sm">${lease.rent}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Security Deposit</p>
                        <p className="text-sm">${lease.securityDeposit}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Payment Due Date</p>
                        <p className="text-sm">{lease.paymentDue}th of each month</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Late Fee</p>
                        <p className="text-sm">${lease.lateFee}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="mt-4">
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <CardTitle>Payment History</CardTitle>
                  <Button size="sm">Record Payment</Button>
                </div>
                <CardDescription>Payment history for Unit {unit.number}</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>${payment.amount}</TableCell>
                        <TableCell>{payment.type}</TableCell>
                        <TableCell>
                          <Badge variant={payment.status === "Paid" ? "default" : "destructive"}>
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{payment.method}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View Receipt
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
      )}
    </div>
  )
}
