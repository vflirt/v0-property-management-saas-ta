"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { Plus, Check } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getTenants, getProperties } from "@/lib/data"
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

// Loading component for tenants
function TenantsLoading() {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>Loading Tenants...</CardTitle>
        <CardDescription>Please wait while we fetch tenant data</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Lease End</TableHead>
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
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-muted animate-pulse"></div>
                      <div>
                        <p className="h-4 w-24 bg-muted animate-pulse rounded"></p>
                        <p className="h-3 w-32 bg-muted animate-pulse rounded mt-1"></p>
                      </div>
                    </div>
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

// Tenants list component
async function TenantsList() {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 1200))

  const [tenants, properties] = await Promise.all([getTenants(), getProperties()])

  // Create a map of property IDs to names for easier lookup
  const propertyMap = properties.reduce(
    (map, property) => {
      map[property.id] = property.name
      return map
    },
    {} as Record<string, string>,
  )

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>All Tenants</CardTitle>
        <CardDescription>Manage all your tenants across all properties</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Lease End</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tenants.map((tenant) => (
              <TableRow key={tenant.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={tenant.avatar || "/placeholder.svg"}
                        alt={`${tenant.firstName} ${tenant.lastName}`}
                      />
                      <AvatarFallback>
                        {tenant.firstName.charAt(0)}
                        {tenant.lastName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">
                        <Link href={`/dashboard/tenants/${tenant.id}`} className="hover:underline">
                          {tenant.firstName} {tenant.lastName}
                        </Link>
                      </p>
                      <p className="text-sm text-muted-foreground">{tenant.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Link href={`/dashboard/properties/${tenant.propertyId}`} className="hover:underline">
                    {propertyMap[tenant.propertyId] || tenant.propertyId}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/dashboard/units/${tenant.unitId}`} className="hover:underline">
                    {tenant.unitId}
                  </Link>
                </TableCell>
                <TableCell>{new Date(tenant.leaseEnd).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      tenant.status === "active" ? "default" : tenant.status === "pending" ? "outline" : "secondary"
                    }
                  >
                    {tenant.status.charAt(0).toUpperCase() + tenant.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/dashboard/tenants/${tenant.id}`}>View</Link>
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

// Filtered tenants list component
async function FilteredTenantsList({ status }: { status: string }) {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 1200))

  const [allTenants, properties] = await Promise.all([getTenants(), getProperties()])
  const tenants = allTenants.filter((tenant) => tenant.status === status)

  // Create a map of property IDs to names for easier lookup
  const propertyMap = properties.reduce(
    (map, property) => {
      map[property.id] = property.name
      return map
    },
    {} as Record<string, string>,
  )

  if (tenants.length === 0) {
    return (
      <Card>
        <CardHeader className="p-4">
          <CardTitle>{status.charAt(0).toUpperCase() + status.slice(1)} Tenants</CardTitle>
          <CardDescription>Manage your {status} tenants</CardDescription>
        </CardHeader>
        <CardContent className="p-4 text-center text-muted-foreground">No {status} tenants at this time.</CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>{status.charAt(0).toUpperCase() + status.slice(1)} Tenants</CardTitle>
        <CardDescription>Manage your {status} tenants</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Lease End</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tenants.map((tenant) => (
              <TableRow key={tenant.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={tenant.avatar || "/placeholder.svg"}
                        alt={`${tenant.firstName} ${tenant.lastName}`}
                      />
                      <AvatarFallback>
                        {tenant.firstName.charAt(0)}
                        {tenant.lastName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">
                        <Link href={`/dashboard/tenants/${tenant.id}`} className="hover:underline">
                          {tenant.firstName} {tenant.lastName}
                        </Link>
                      </p>
                      <p className="text-sm text-muted-foreground">{tenant.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Link href={`/dashboard/properties/${tenant.propertyId}`} className="hover:underline">
                    {propertyMap[tenant.propertyId] || tenant.propertyId}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/dashboard/units/${tenant.unitId}`} className="hover:underline">
                    {tenant.unitId}
                  </Link>
                </TableCell>
                <TableCell>{new Date(tenant.leaseEnd).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      tenant.status === "active" ? "default" : tenant.status === "pending" ? "outline" : "secondary"
                    }
                  >
                    {tenant.status.charAt(0).toUpperCase() + tenant.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/dashboard/tenants/${tenant.id}`}>View</Link>
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

export default function TenantsPage() {
  const [isAddTenantOpen, setIsAddTenantOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Tenants</h1>
        <Dialog open={isAddTenantOpen} onOpenChange={setIsAddTenantOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Tenant
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Tenant</DialogTitle>
              <DialogDescription>Enter the details of the new tenant to add to your property.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="tenant-name" className="text-right text-sm font-medium">
                  Name
                </label>
                <Input id="tenant-name" placeholder="Full name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="tenant-email" className="text-right text-sm font-medium">
                  Email
                </label>
                <Input id="tenant-email" type="email" placeholder="Email address" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="tenant-phone" className="text-right text-sm font-medium">
                  Phone
                </label>
                <Input id="tenant-phone" placeholder="Phone number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="tenant-property" className="text-right text-sm font-medium">
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
                <label htmlFor="tenant-unit" className="text-right text-sm font-medium">
                  Unit
                </label>
                <Input id="tenant-unit" placeholder="Unit number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="tenant-lease-end" className="text-right text-sm font-medium">
                  Lease End
                </label>
                <Input id="tenant-lease-end" type="date" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddTenantOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddTenantOpen(false)}>
                <Check className="mr-2 h-4 w-4" />
                Add Tenant
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2">
        <Input placeholder="Search tenants..." className="max-w-sm" />
        <Button variant="outline" size="sm">
          Search
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Tenants</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="former">Former</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Suspense fallback={<TenantsLoading />}>
            <TenantsList />
          </Suspense>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Suspense fallback={<TenantsLoading />}>
            <FilteredTenantsList status="active" />
          </Suspense>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <Suspense fallback={<TenantsLoading />}>
            <FilteredTenantsList status="pending" />
          </Suspense>
        </TabsContent>
        <TabsContent value="former" className="space-y-4">
          <Suspense fallback={<TenantsLoading />}>
            <FilteredTenantsList status="former" />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  )
}
