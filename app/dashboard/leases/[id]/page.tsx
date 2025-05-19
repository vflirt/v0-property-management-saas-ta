import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Lease Details | Property Management",
  description: "View and manage lease details",
}

// Sample lease data
const lease = {
  id: "lease-1",
  startDate: "2023-01-01",
  endDate: "2023-12-31",
  monthlyRent: 1200,
  securityDeposit: 1200,
  status: "Active",
  paymentDay: 1,
  lateFeeAmount: 50,
  lateFeeAfterDays: 5,
  renewalOption: "Yes",
  specialTerms: "No pets allowed. No smoking.",
  createdDate: "2022-12-15",
  signedDate: "2022-12-20",
}

// Sample property and unit data
const property = {
  id: "prop-1",
  name: "Sunset Apartments",
  address: "123 Main Street, Anytown, CA 90210",
}

const unit = {
  id: "unit-1",
  number: "101",
  type: "1 Bedroom",
  rent: 1200,
}

// Sample tenant data
const tenant = {
  id: "tenant-1",
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  phone: "(555) 111-2222",
  avatar: "/placeholder.svg?height=40&width=40",
}

// Sample payment history
const paymentHistory = [
  {
    id: "payment-1",
    date: "2023-05-01",
    amount: 1200,
    type: "Rent",
    status: "Paid",
  },
  {
    id: "payment-2",
    date: "2023-04-01",
    amount: 1200,
    type: "Rent",
    status: "Paid",
  },
  {
    id: "payment-3",
    date: "2023-03-01",
    amount: 1200,
    type: "Rent",
    status: "Paid",
  },
  {
    id: "payment-4",
    date: "2023-02-01",
    amount: 1200,
    type: "Rent",
    status: "Paid",
  },
  {
    id: "payment-5",
    date: "2023-01-01",
    amount: 2400,
    type: "Rent + Security Deposit",
    status: "Paid",
  },
]

// Sample lease clauses
const leaseClauses = [
  {
    title: "Term of Lease",
    content: "This lease begins on January 1, 2023 and ends on December 31, 2023.",
  },
  {
    title: "Rent",
    content: "Tenant agrees to pay $1,200 per month, due on the 1st of each month.",
  },
  {
    title: "Security Deposit",
    content: "Tenant has paid a security deposit of $1,200 to be held during the term of the lease.",
  },
  {
    title: "Late Fees",
    content: "A late fee of $50 will be charged if rent is not received within 5 days of the due date.",
  },
  {
    title: "Utilities",
    content: "Tenant is responsible for all utilities including electricity, gas, water, internet, and trash removal.",
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

export default function LeasePage({ params }: { params: { id: string } }) {
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
              Created on {lease.createdDate} • Signed on {lease.signedDate}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Lease Period</p>
                  <p>
                    {lease.startDate} to {lease.endDate}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Monthly Rent</p>
                  <p>${lease.monthlyRent}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Security Deposit</p>
                  <p>${lease.securityDeposit}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Payment Due Day</p>
                  <p>{lease.paymentDay}st of each month</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Late Fee</p>
                  <p>
                    ${lease.lateFeeAmount} after {lease.lateFeeAfterDays} days
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Renewal Option</p>
                  <p>{lease.renewalOption}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Special Terms</p>
                  <p className="text-sm">{lease.specialTerms}</p>
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
          <Card>
            <CardHeader>
              <CardTitle>Tenant Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={tenant.avatar || "/placeholder.svg"} alt={tenant.name} />
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

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" asChild>
                <Link href={`/dashboard/properties/${property.id}`}>View Property</Link>
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link href={`/dashboard/units/${unit.id}`}>View Unit</Link>
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link href={`/dashboard/tenants/${tenant.id}`}>View Tenant</Link>
              </Button>
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
