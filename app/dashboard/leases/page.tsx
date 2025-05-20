"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { Plus, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getLeases, getTenants } from "@/lib/data"
import { Suspense, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export const metadata: Metadata = {
  title: "Leases | Property Management SaaS",
  description: "Manage your leases",
}

// Loading component for leases
function LeasesLoading() {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>Loading Leases...</CardTitle>
        <CardDescription>Please wait while we fetch lease data</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Rent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="h-4 w-24 bg-muted animate-pulse rounded"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-24 bg-muted animate-pulse rounded"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-12 bg-muted animate-pulse rounded"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-20 bg-muted animate-pulse rounded"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-20 bg-muted animate-pulse rounded"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-16 bg-muted animate-pulse rounded"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-6 w-16 bg-muted animate-pulse rounded"></div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="h-8 w-16 bg-muted animate-pulse rounded ml-auto"></div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

// Helper function to get tenant name
async function getTenantName(tenantId: string): Promise<string> {
  const tenants = await getTenants()
  const tenant = tenants.find((t) => t.id === tenantId)
  return tenant ? `${tenant.firstName} ${tenant.lastName}` : "Unknown Tenant"
}

// Leases list component
async function LeasesList() {
  const leases = await getLeases()
  const tenants = await getTenants()

  // Create a map of tenant IDs to names for quick lookup
  const tenantMap = new Map<string, string>()
  tenants.forEach((tenant) => {
    tenantMap.set(tenant.id, `${tenant.firstName} ${tenant.lastName}`)
  })

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>All Leases</CardTitle>
        <CardDescription>Manage all your leases across all properties</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Rent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leases.map((lease) => (
              <TableRow key={lease.id}>
                <TableCell className="font-medium">{tenantMap.get(lease.tenantId) || "Unknown Tenant"}</TableCell>
                <TableCell>{lease.propertyId}</TableCell>
                <TableCell>{lease.unitId}</TableCell>
                <TableCell>{new Date(lease.startDate).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(lease.endDate).toLocaleDateString()}</TableCell>
                <TableCell>${lease.rentAmount}/mo</TableCell>
                <TableCell>
                  <Badge variant={lease.status === "active" ? "default" : "secondary"}>{lease.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/dashboard/leases/${lease.id}`}>View</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

// Filtered leases list component
async function FilteredLeasesList({ status }: { status: string }) {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const allLeases = await getLeases()
  const leases = allLeases.filter((lease) => lease.status === status)
  const tenants = await getTenants()

  // Create a map of tenant IDs to names for quick lookup
  const tenantMap = new Map<string, string>()
  tenants.forEach((tenant) => {
    tenantMap.set(tenant.id, `${tenant.firstName} ${tenant.lastName}`)
  })

  if (leases.length === 0) {
    return (
      <Card>
        <CardHeader className="p-4">
          <CardTitle>{status.charAt(0).toUpperCase() + status.slice(1)} Leases</CardTitle>
          <CardDescription>Manage your {status} leases</CardDescription>
        </CardHeader>
        <CardContent className="p-4 text-center text-muted-foreground">No {status} leases at this time.</CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>{status.charAt(0).toUpperCase() + status.slice(1)} Leases</CardTitle>
        <CardDescription>Manage your {status} leases</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Rent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leases.map((lease) => (
              <TableRow key={lease.id}>
                <TableCell className="font-medium">{tenantMap.get(lease.tenantId) || "Unknown Tenant"}</TableCell>
                <TableCell>{lease.propertyId}</TableCell>
                <TableCell>{lease.unitId}</TableCell>
                <TableCell>{new Date(lease.startDate).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(lease.endDate).toLocaleDateString()}</TableCell>
                <TableCell>${lease.rentAmount}/mo</TableCell>
                <TableCell>
                  <Badge variant={lease.status === "active" ? "default" : "secondary"}>{lease.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/dashboard/leases/${lease.id}`}>View</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

// Expiring leases list component
async function ExpiringLeasesList() {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const allLeases = await getLeases()
  const tenants = await getTenants()

  // Create a map of tenant IDs to names for quick lookup
  const tenantMap = new Map<string, string>()
  tenants.forEach((tenant) => {
    tenantMap.set(tenant.id, `${tenant.firstName} ${tenant.lastName}`)
  })

  // Get leases expiring in the next 90 days
  const today = new Date()
  const ninetyDaysFromNow = new Date(today)
  ninetyDaysFromNow.setDate(today.getDate() + 90)

  const expiringLeases = allLeases.filter((lease) => {
    const endDate = new Date(lease.endDate)
    return lease.status === "active" && endDate >= today && endDate <= ninetyDaysFromNow
  })

  if (expiringLeases.length === 0) {
    return (
      <Card>
        <CardHeader className="p-4">
          <CardTitle>Expiring Soon</CardTitle>
          <CardDescription>Leases expiring in the next 90 days</CardDescription>
        </CardHeader>
        <CardContent className="p-4 text-center text-muted-foreground">
          No leases expiring soon at this time.
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>Expiring Soon</CardTitle>
        <CardDescription>Leases expiring in the next 90 days</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Rent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expiringLeases.map((lease) => (
              <TableRow key={lease.id}>
                <TableCell className="font-medium">{tenantMap.get(lease.tenantId) || "Unknown Tenant"}</TableCell>
                <TableCell>{lease.propertyId}</TableCell>
                <TableCell>{lease.unitId}</TableCell>
                <TableCell>{new Date(lease.startDate).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(lease.endDate).toLocaleDateString()}</TableCell>
                <TableCell>${lease.rentAmount}/mo</TableCell>
                <TableCell>
                  <Badge variant="warning">Expiring</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/dashboard/leases/${lease.id}`}>View</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default function LeasesPage() {
  const [isAddLeaseOpen, setIsAddLeaseOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Leases</h1>
        <Dialog open={isAddLeaseOpen} onOpenChange={setIsAddLeaseOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Lease
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Lease</DialogTitle>
              <DialogDescription>Enter the details of the new lease agreement.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="lease-tenant" className="text-right text-sm font-medium">
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
                <label htmlFor="lease-property" className="text-right text-sm font-medium">
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
                <label htmlFor="lease-unit" className="text-right text-sm font-medium">
                  Unit
                </label>
                <Input id="lease-unit" placeholder="Unit number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="lease-start" className="text-right text-sm font-medium">
                  Start Date
                </label>
                <Input id="lease-start" type="date" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="lease-end" className="text-right text-sm font-medium">
                  End Date
                </label>
                <Input id="lease-end" type="date" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="lease-rent" className="text-right text-sm font-medium">
                  Monthly Rent
                </label>
                <Input id="lease-rent" placeholder="$0.00" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="lease-deposit" className="text-right text-sm font-medium">
                  Security Deposit
                </label>
                <Input id="lease-deposit" placeholder="$0.00" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddLeaseOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddLeaseOpen(false)}>
                <Check className="mr-2 h-4 w-4" />
                Add Lease
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2">
        <Input placeholder="Search leases..." className="max-w-sm" />
        <Button variant="outline" size="sm">
          Search
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Leases</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Suspense fallback={<LeasesLoading />}>
            <LeasesList />
          </Suspense>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Suspense fallback={<LeasesLoading />}>
            <FilteredLeasesList status="active" />
          </Suspense>
        </TabsContent>
        <TabsContent value="expiring" className="space-y-4">
          <Suspense fallback={<LeasesLoading />}>
            <ExpiringLeasesList />
          </Suspense>
        </TabsContent>
        <TabsContent value="expired" className="space-y-4">
          <Suspense fallback={<LeasesLoading />}>
            <FilteredLeasesList status="expired" />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  )
}
