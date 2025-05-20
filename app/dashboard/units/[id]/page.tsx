import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Building2, Calendar, Home, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getUnitById, getPropertyById, getTenantsByUnitId, getLeaseByUnitId, getPaymentsByUnitId } from "@/lib/data"

export const metadata: Metadata = {
  title: "Unit Details | Property Management SaaS",
  description: "View and manage unit details",
}

export default async function UnitPage({ params }: { params: { id: string } }) {
  // Add a delay to simulate loading from a database
  await new Promise((resolve) => setTimeout(resolve, 1100))

  const unit = await getUnitById(params.id)

  if (!unit) {
    notFound()
  }

  const property = unit.propertyId ? await getPropertyById(unit.propertyId) : null
  const tenants = await getTenantsByUnitId(unit.id)
  const tenant = tenants.length > 0 ? tenants[0] : null
  const lease = await getLeaseByUnitId(unit.id)
  const payments = await getPaymentsByUnitId(unit.id)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/properties">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to properties</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Unit {unit.unitNumber}</h1>
        <Badge className="ml-2">{unit.type}</Badge>
        <Badge variant={unit.status === "occupied" ? "default" : "secondary"} className="ml-2">
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
                    {property ? (
                      <Link
                        href={`/dashboard/properties/${property.id}`}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {property.name}
                      </Link>
                    ) : (
                      <p className="text-sm text-muted-foreground">No property assigned</p>
                    )}
                    {property && (
                      <p className="text-sm text-muted-foreground">
                        {property.address}, {property.city}, {property.state} {property.zipCode}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Home className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Unit Details</p>
                    <p className="text-sm text-muted-foreground">{unit.squareFeet} sq ft</p>
                    <p className="text-sm text-muted-foreground">
                      {unit.bedrooms} bedroom, {unit.bathrooms} bathroom
                    </p>
                    <p className="text-sm text-muted-foreground">Floor {unit.floor || 1}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Lease Information</p>
                    <p className="text-sm text-muted-foreground">${unit.rent}/month</p>
                    {unit.status === "occupied" && lease && (
                      <>
                        <p className="text-sm text-muted-foreground">
                          Lease ends: {new Date(lease.endDate).toLocaleDateString()}
                        </p>
                        <Badge variant="outline" className="mt-1">
                          {lease.status}
                        </Badge>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {unit.status === "occupied" && tenant && (
                  <div className="flex items-start gap-2">
                    <User className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Current Tenant</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={tenant.avatar || "/placeholder.svg?height=40&width=40"} alt={tenant.name} />
                          <AvatarFallback>{tenant.firstName.charAt(0)}</AvatarFallback>
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
                      <p className="text-sm text-muted-foreground">
                        Move-in date: {tenant.moveInDate ? new Date(tenant.moveInDate).toLocaleDateString() : "Unknown"}
                      </p>
                    </div>
                  </div>
                )}
                <div>
                  <p className="font-medium">Features</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {unit.features && unit.features.length > 0 ? (
                      unit.features.map((feature) => (
                        <Badge key={feature} variant="outline">
                          {feature}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">No features listed</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-medium">Description</p>
              <p className="mt-1 text-sm text-muted-foreground">{unit.description || "No description available"}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="p-4">
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-2">
            {unit.status === "occupied" ? (
              <>
                {property && (
                  <Button className="w-full" asChild>
                    <Link href={`/dashboard/properties/${property.id}`}>View Property</Link>
                  </Button>
                )}
                {lease && (
                  <Button className="w-full" variant="outline" asChild>
                    <Link href={`/dashboard/leases/${lease.id}`}>View Lease</Link>
                  </Button>
                )}
                {tenant && (
                  <Button className="w-full" variant="outline" asChild>
                    <Link href={`/dashboard/tenants/${tenant.id}`}>View Tenant</Link>
                  </Button>
                )}
                <Button className="w-full" variant="outline">
                  Record Payment
                </Button>
                <Button className="w-full" variant="outline">
                  Create Maintenance Request
                </Button>
              </>
            ) : (
              <>
                {property && (
                  <Button className="w-full" asChild>
                    <Link href={`/dashboard/properties/${property.id}`}>View Property</Link>
                  </Button>
                )}
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

      {unit.status === "occupied" && lease && (
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
                <CardDescription>Current lease details for Unit {unit.unitNumber}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-medium">Lease Terms</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Start Date</p>
                        <p className="text-sm">{new Date(lease.startDate).toLocaleDateString()}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">End Date</p>
                        <p className="text-sm">{new Date(lease.endDate).toLocaleDateString()}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Status</p>
                        <Badge variant="outline">{lease.status}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Renewal Option</p>
                        <p className="text-sm">{lease.renewalOption ? "Yes" : "No"}</p>
                      </div>
                      {lease.renewalOption && lease.renewalIncrease && (
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
                        <p className="text-sm">${lease.rentAmount}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Security Deposit</p>
                        <p className="text-sm">${lease.securityDeposit}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Payment Due Date</p>
                        <p className="text-sm">{lease.paymentDay || 1}th of each month</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-muted-foreground">Late Fee</p>
                        <p className="text-sm">${lease.lateFeeAmount || 50}</p>
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
                <CardDescription>Payment history for Unit {unit.unitNumber}</CardDescription>
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
                    {payments.length > 0 ? (
                      payments.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
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
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground">
                          No payment history found
                        </TableCell>
                      </TableRow>
                    )}
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
