import type { Metadata } from "next"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getUnits, getProperties } from "@/lib/data"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Units | Property Management SaaS",
  description: "Manage your units",
}

// Loading component for units
function UnitsLoading() {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>Loading Units...</CardTitle>
        <CardDescription>Please wait while we fetch unit data</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Unit</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size</TableHead>
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
                    <div className="h-4 w-16 bg-muted animate-pulse rounded"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-24 bg-muted animate-pulse rounded"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-12 bg-muted animate-pulse rounded"></div>
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-16 bg-muted animate-pulse rounded"></div>
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

// Units list component
async function UnitsList() {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 1300))

  const units = await getUnits()
  const properties = await getProperties()

  // Create a map of property IDs to names for quick lookup
  const propertyMap = new Map<string, string>()
  properties.forEach((property) => {
    propertyMap.set(property.id, property.name)
  })

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>All Units</CardTitle>
        <CardDescription>Manage all your units across all properties</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Unit</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Rent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {units.map((unit) => (
              <TableRow key={unit.id}>
                <TableCell className="font-medium">{unit.unitNumber}</TableCell>
                <TableCell>{propertyMap.get(unit.propertyId) || unit.propertyId}</TableCell>
                <TableCell>{unit.type}</TableCell>
                <TableCell>{unit.squareFeet} sq ft</TableCell>
                <TableCell>${unit.rent}/mo</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      unit.status === "occupied" ? "default" : unit.status === "vacant" ? "outline" : "secondary"
                    }
                  >
                    {unit.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/dashboard/units/${unit.id}`}>View</Link>
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

// Filtered units list component
async function FilteredUnitsList({ status }: { status: string }) {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 1300))

  const allUnits = await getUnits()
  const units = allUnits.filter((unit) => unit.status === status)
  const properties = await getProperties()

  // Create a map of property IDs to names for quick lookup
  const propertyMap = new Map<string, string>()
  properties.forEach((property) => {
    propertyMap.set(property.id, property.name)
  })

  if (units.length === 0) {
    return (
      <Card>
        <CardHeader className="p-4">
          <CardTitle>{status.charAt(0).toUpperCase() + status.slice(1)} Units</CardTitle>
          <CardDescription>Manage your {status} units</CardDescription>
        </CardHeader>
        <CardContent className="p-4 text-center text-muted-foreground">No {status} units at this time.</CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>{status.charAt(0).toUpperCase() + status.slice(1)} Units</CardTitle>
        <CardDescription>Manage your {status} units</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Unit</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Rent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {units.map((unit) => (
              <TableRow key={unit.id}>
                <TableCell className="font-medium">{unit.unitNumber}</TableCell>
                <TableCell>{propertyMap.get(unit.propertyId) || unit.propertyId}</TableCell>
                <TableCell>{unit.type}</TableCell>
                <TableCell>{unit.squareFeet} sq ft</TableCell>
                <TableCell>${unit.rent}/mo</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      unit.status === "occupied" ? "default" : unit.status === "vacant" ? "outline" : "secondary"
                    }
                  >
                    {unit.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/dashboard/units/${unit.id}`}>View</Link>
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

export default function UnitsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Units</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Unit
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Input placeholder="Search units..." className="max-w-sm" />
        <Button variant="outline" size="sm">
          Search
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Units</TabsTrigger>
          <TabsTrigger value="occupied">Occupied</TabsTrigger>
          <TabsTrigger value="vacant">Vacant</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Suspense fallback={<UnitsLoading />}>
            <UnitsList />
          </Suspense>
        </TabsContent>
        <TabsContent value="occupied" className="space-y-4">
          <Suspense fallback={<UnitsLoading />}>
            <FilteredUnitsList status="occupied" />
          </Suspense>
        </TabsContent>
        <TabsContent value="vacant" className="space-y-4">
          <Suspense fallback={<UnitsLoading />}>
            <FilteredUnitsList status="vacant" />
          </Suspense>
        </TabsContent>
        <TabsContent value="maintenance" className="space-y-4">
          <Suspense fallback={<UnitsLoading />}>
            <FilteredUnitsList status="maintenance" />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  )
}
