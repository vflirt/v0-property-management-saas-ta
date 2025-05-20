import Link from "next/link"
import { notFound } from "next/navigation"
import { Home, Users, Wrench, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getPropertyById,
  getUnitsByPropertyId,
  getTenantsByPropertyId,
  getLeasesByPropertyId,
  getMaintenanceRequestsByPropertyId,
} from "@/lib/data"

export default async function PropertyPage({ params }: { params: { id: string } }) {

  const property = await getPropertyById(params.id)

  if (!property) {
    notFound()
  }

  const units = await getUnitsByPropertyId(property.id)
  const tenants = await getTenantsByPropertyId(property.id)
  const leases = await getLeasesByPropertyId(property.id)
  const maintenanceRequests = await getMaintenanceRequestsByPropertyId(property.id)

  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{property.name}</h1>
        <p className="text-muted-foreground">
          {property.address}, {property.city}, {property.state} {property.zipCode}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Units</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{property.units}</div>
            <p className="text-xs text-muted-foreground">
              {units.filter((unit) => unit.status === "Occupied").length} occupied
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{property.occupancyRate}%</div>
            <p className="text-xs text-muted-foreground">{tenants.length} active tenants</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rent Collected</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${property.rentCollected?.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">${property.rentOutstanding?.toLocaleString()} outstanding</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{property.maintenanceRequests}</div>
            <p className="text-xs text-muted-foreground">
              {maintenanceRequests.filter((req) => req.status === "Open").length} open requests
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="units">
        <TabsList>
          <TabsTrigger value="units">Units</TabsTrigger>
          <TabsTrigger value="tenants">Tenants</TabsTrigger>
          <TabsTrigger value="leases">Leases</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="units" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {units.map((unit) => (
              <Card key={unit.id}>
                <CardHeader>
                  <CardTitle>{unit.unitNumber}</CardTitle>
                  <CardDescription>
                    {unit.type} - {unit.bedrooms} BR / {unit.bathrooms} BA
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm">
                      Status: <span className="font-medium">{unit.status}</span>
                    </div>
                    <div className="text-sm">
                      Rent: <span className="font-medium">${unit.rent}/mo</span>
                    </div>
                    <div className="text-sm">
                      Size: <span className="font-medium">{unit.squareFeet} sq ft</span>
                    </div>
                    <div className="text-sm">
                      Maintenance: <span className="font-medium">{unit.maintenanceRequests}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/units/${unit.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tenants" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tenants.map((tenant) => (
              <Card key={tenant.id}>
                <CardHeader>
                  <CardTitle>{tenant.name}</CardTitle>
                  <CardDescription>
                    Unit: {units.find((u) => u.id === tenant.unitId)?.unitNumber || "None"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="text-sm">
                      Email: <span className="font-medium">{tenant.email}</span>
                    </div>
                    <div className="text-sm">
                      Phone: <span className="font-medium">{tenant.phone}</span>
                    </div>
                    <div className="text-sm">
                      Status: <span className="font-medium">{tenant.status}</span>
                    </div>
                    <div className="text-sm">
                      Payment: <span className="font-medium">{tenant.paymentStatus}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/tenants/${tenant.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="leases" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {leases.map((lease) => (
              <Card key={lease.id}>
                <CardHeader>
                  <CardTitle>Lease #{lease.id.split("-")[1] || lease.id}</CardTitle>
                  <CardDescription>
                    Unit: {units.find((u) => u.id === lease.unitId)?.unitNumber || "None"} | Tenant:{" "}
                    {tenants.find((t) => t.id === lease.tenantId)?.name || "None"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="text-sm">
                      Start: <span className="font-medium">{new Date(lease.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="text-sm">
                      End: <span className="font-medium">{new Date(lease.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="text-sm">
                      Rent: <span className="font-medium">${lease.rentAmount}/mo</span>
                    </div>
                    <div className="text-sm">
                      Status: <span className="font-medium">{lease.status}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/leases/${lease.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {maintenanceRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <CardTitle>{request.title}</CardTitle>
                  <CardDescription>
                    Unit: {units.find((u) => u.id === request.unitId)?.unitNumber || "None"} | Priority:{" "}
                    {request.priority}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="text-sm">
                      Status: <span className="font-medium">{request.status}</span>
                    </div>
                    <div className="text-sm">
                      Category: <span className="font-medium">{request.category}</span>
                    </div>
                    <div className="text-sm">
                      Created: <span className="font-medium">{new Date(request.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="text-sm">
                      Est. Cost: <span className="font-medium">${request.estimatedCost}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/maintenance/${request.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button asChild variant="outline" className="mr-2">
          <Link href="/dashboard/properties">Back to Properties</Link>
        </Button>
        <Button>Edit Property</Button>
      </div>
    </div>
  )
}
