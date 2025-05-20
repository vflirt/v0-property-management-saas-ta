import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Download, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getLeaseById, getTenantById, getUnitById, getPropertyById } from "@/lib/data"

export const metadata: Metadata = {
  title: "Lease Details | Property Management",
  description: "View and manage lease details",
}

export default async function LeasePage({ params }: { params: { id: string } }) {
  // Add a delay to simulate loading from a database
  await new Promise((resolve) => setTimeout(resolve, 1300))

  const lease = await getLeaseById(params.id)

  if (!lease) {
    notFound()
  }

  const tenant = lease.tenantId ? await getTenantById(lease.tenantId) : null
  const unit = lease.unitId ? await getUnitById(lease.unitId) : null
  const property = unit && unit.propertyId ? await getPropertyById(unit.propertyId) : null

  // Sample payment history - in a real app, this would come from the database
  const paymentHistory = [
    {
      id: "payment-1",
      date: "2023-05-01",
      amount: lease.rentAmount,
      type: "Rent",
      status: "Paid",
    },
    {
      id: "payment-2",
      date: "2023-04-01",
      amount: lease.rentAmount,
      type: "Rent",
      status: "Paid",
    },
    {
      id: "payment-3",
      date: "2023-03-01",
      amount: lease.rentAmount,
      type: "Rent",
      status: "Paid",
    },
    {
      id: "payment-4",
      date: "2023-02-01",
      amount: lease.rentAmount,
      type: "Rent",
      status: "Paid",
    },
    {
      id: "payment-5",
      date: "2023-01-01",
      amount: lease.rentAmount * 2,
      type: "Rent + Security Deposit",
      status: "Paid",
    },
  ]

  // Sample lease clauses
  const leaseClauses = [
    {
      title: "Term of Lease",
      content: `This lease begins on ${new Date(lease.startDate).toLocaleDateString()} and ends on ${new Date(lease.endDate).toLocaleDateString()}.`,
    },
    {
      title: "Rent",
      content: `Tenant agrees to pay $${lease.rentAmount} per month, due on the 1st of each month.`,
    },
    {
      title: "Security Deposit",
      content: `Tenant has paid a security deposit of $${lease.securityDeposit} to be held during the term of the lease.`,
    },
    {
      title: "Late Fees",
      content: "A late fee of $50 will be charged if rent is not received within 5 days of the due date.",
    },
    {
      title: "Utilities",
      content:
        "Tenant is responsible for all utilities including electricity, gas, water, internet, and trash removal.",
    },
    {
      title: "Maintenance",
      content:
        "Tenant agrees to maintain the premises in a clean and sanitary condition and report any maintenance issues promptly.",
    },
    {
      title: "Alterations",
      content:
        "Tenant shall not make alterations, additions, or improvements to the premises without prior written consent from the landlord.",
    },
    {
      title: "Entry by Landlord",
      content:
        "Landlord may enter the premises with 24-hour notice for inspections, repairs, or to show the property to prospective tenants.",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/leases">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Lease Agreement</h1>
        <Badge>{lease.status}</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Lease Information</CardTitle>
            <CardDescription>
              Created on {new Date(lease.createdAt || lease.startDate).toLocaleDateString()} • Signed on{" "}
              {new Date(lease.signedDate || lease.startDate).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Lease Period</p>
                  <p>
                    {new Date(lease.startDate).toLocaleDateString()} to {new Date(lease.endDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Monthly Rent</p>
                  <p>${lease.rentAmount}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Security Deposit</p>
                  <p>${lease.securityDeposit}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Payment Due Day</p>
                  <p>{lease.paymentDay || 1}st of each month</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Late Fee</p>
                  <p>
                    ${lease.lateFeeAmount || 50} after {lease.lateFeeAfterDays || 5} days
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Renewal Option</p>
                  <p>{lease.renewalOption ? "Yes" : "No"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Special Terms</p>
                  <p className="text-sm">{lease.specialTerms || "No special terms"}</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-4">
          {tenant && (
            <Card>
              <CardHeader>
                <CardTitle>Tenant Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={tenant.avatar || "/placeholder.svg?height=40&width=40"} alt={tenant.name} />
                    <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Name</p>
                    <p>{tenant.name}</p>
                  </div>
                </div>
                <div className="space-y-4 mt-4">
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p>{tenant.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p>{tenant.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {property && (
                <Button className="w-full" asChild>
                  <Link href={`/dashboard/properties/${property.id}`}>View Property</Link>
                </Button>
              )}
              {unit && (
                <Button className="w-full" variant="outline" asChild>
                  <Link href={`/dashboard/units/${unit.id}`}>View Unit</Link>
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
                Renew Lease
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
