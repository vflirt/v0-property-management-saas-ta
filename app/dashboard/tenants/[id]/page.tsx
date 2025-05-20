import Link from "next/link"
import { notFound } from "next/navigation"
import { User, Home, FileText, CreditCard, DollarSign, Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getTenantById,
  getUnitById,
  getPropertyById,
  getLeaseByTenantId,
  getPaymentsByTenantId,
  getMaintenanceRequestsByTenantId,
} from "@/lib/data"

export default async function TenantPage({ params }: { params: { id: string } }) {
  // Add a delay to simulate loading from a database
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const tenant = await getTenantById(params.id)

  if (!tenant) {
    notFound()
  }

  const unit = tenant.unitId ? await getUnitById(tenant.unitId) : null
  const property = unit && unit.propertyId ? await getPropertyById(unit.propertyId) : null
  const lease = await getLeaseByTenantId(tenant.id)
  const payments = await getPaymentsByTenantId(tenant.id)
  const maintenanceRequests = await getMaintenanceRequestsByTenantId(tenant.id)

  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{tenant.name}</h1>
        <p className="text-muted-foreground">
          {unit ? `Unit ${unit.unitNumber}, ${property?.name || "Unknown Property"}` : "No unit assigned"}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Information</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="text-sm">
                Email: <span className="font-medium">{tenant.email}</span>
              </div>
              <div className="text-sm">
                Phone: <span className="font-medium">{tenant.phone}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lease Information</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="text-sm">
                Status: <span className="font-medium">{tenant.status}</span>
              </div>
              {lease && (
                <>
                  <div className="text-sm">
                    Start: <span className="font-medium">{new Date(lease.startDate).toLocaleDateString()}</span>
                  </div>
                  <div className="text-sm">
                    End: <span className="font-medium">{new Date(lease.endDate).toLocaleDateString()}</span>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Payment Information</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="text-sm">
                Rent: <span className="font-medium">${tenant.rentAmount}/mo</span>
              </div>
              <div className="text-sm">
                Status: <span className="font-medium">{tenant.paymentStatus}</span>
              </div>
              <div className="text-sm">
                Last Payment:{" "}
                <span className="font-medium">
                  {payments.length > 0
                    ? `$${payments[0].amount} on ${new Date(payments[0].date).toLocaleDateString()}`
                    : "No payments recorded"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {property && (
              <Button asChild variant="outline" className="h-24 flex-col">
                <Link href={`/dashboard/properties/${property.id}`}>
                  <Building2 className="mb-2 h-5 w-5" />
                  <span>View Property</span>
                </Link>
              </Button>
            )}
            {unit && (
              <Button asChild variant="outline" className="h-24 flex-col">
                <Link href={`/dashboard/units/${unit.id}`}>
                  <Home className="mb-2 h-5 w-5" />
                  <span>View Unit</span>
                </Link>
              </Button>
            )}
            {lease && (
              <Button asChild variant="outline" className="h-24 flex-col">
                <Link href={`/dashboard/leases/${lease.id}`}>
                  <FileText className="mb-2 h-5 w-5" />
                  <span>View Lease</span>
                </Link>
              </Button>
            )}
            <Button variant="outline" className="h-24 flex-col">
              <CreditCard className="mb-2 h-5 w-5" />
              <span>Record Payment</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="payments">
        <TabsList>
          <TabsTrigger value="payments">Payment History</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="payments" className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
              <div>Date</div>
              <div>Amount</div>
              <div>Method</div>
              <div>Reference</div>
              <div>Status</div>
            </div>
            {payments.length > 0 ? (
              payments.map((payment) => (
                <div key={payment.id} className="grid grid-cols-5 px-4 py-3">
                  <div>{new Date(payment.date).toLocaleDateString()}</div>
                  <div>${payment.amount}</div>
                  <div>{payment.method}</div>
                  <div>{payment.reference || "N/A"}</div>
                  <div>{payment.status}</div>
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-center text-muted-foreground">No payment history found</div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
              <div>Date</div>
              <div>Title</div>
              <div>Category</div>
              <div>Priority</div>
              <div>Status</div>
            </div>
            {maintenanceRequests.length > 0 ? (
              maintenanceRequests.map((request) => (
                <div key={request.id} className="grid grid-cols-5 px-4 py-3">
                  <div>{new Date(request.createdAt).toLocaleDateString()}</div>
                  <div>{request.title}</div>
                  <div>{request.category}</div>
                  <div>{request.priority}</div>
                  <div>{request.status}</div>
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-center text-muted-foreground">No maintenance requests found</div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button asChild variant="outline" className="mr-2">
          <Link href="/dashboard/tenants">Back to Tenants</Link>
        </Button>
        <Button>Edit Tenant</Button>
      </div>
    </div>
  )
}
