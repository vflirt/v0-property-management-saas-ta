import type { Metadata } from "next"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Leases | Property Management SaaS",
  description: "Manage your leases",
}

// Sample leases data
const leases = [
  {
    id: "lease_1",
    tenant: "Alice Johnson",
    property: "Sunset Apartments",
    unit: "101",
    startDate: "2023-01-01",
    endDate: "2024-12-31",
    rent: 1500,
    status: "Active",
  },
  {
    id: "lease_2",
    tenant: "Bob Williams",
    property: "Sunset Apartments",
    unit: "102",
    startDate: "2023-04-15",
    endDate: "2024-10-15",
    rent: 1800,
    status: "Active",
  },
  {
    id: "lease_3",
    tenant: "Charlie Davis",
    property: "Sunset Apartments",
    unit: "201",
    startDate: "2023-02-01",
    endDate: "2025-01-31",
    rent: 1500,
    status: "Active",
  },
  {
    id: "lease_4",
    tenant: "Diana Miller",
    property: "Sunset Apartments",
    unit: "202",
    startDate: "2023-12-01",
    endDate: "2024-11-30",
    rent: 1800,
    status: "Active",
  },
  {
    id: "lease_5",
    tenant: "Edward Wilson",
    property: "Oakwood Residences",
    unit: "101",
    startDate: "2023-09-01",
    endDate: "2024-08-31",
    rent: 2000,
    status: "Active",
  },
  {
    id: "lease_6",
    tenant: "Fiona Brown",
    property: "Oakwood Residences",
    unit: "102",
    startDate: "2023-10-01",
    endDate: "2024-09-30",
    rent: 2200,
    status: "Active",
  },
  {
    id: "lease_7",
    tenant: "George Taylor",
    property: "Riverside Condos",
    unit: "101",
    startDate: "2023-08-01",
    endDate: "2024-07-31",
    rent: 2500,
    status: "Active",
  },
  {
    id: "lease_8",
    tenant: "Hannah Martinez",
    property: "Riverside Condos",
    unit: "102",
    startDate: "2023-07-01",
    endDate: "2024-06-30",
    rent: 2700,
    status: "Active",
  },
]

export default function LeasesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Leases</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Lease
        </Button>
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
                      <TableCell className="font-medium">{lease.tenant}</TableCell>
                      <TableCell>{lease.property}</TableCell>
                      <TableCell>{lease.unit}</TableCell>
                      <TableCell>{lease.startDate}</TableCell>
                      <TableCell>{lease.endDate}</TableCell>
                      <TableCell>${lease.rent}/mo</TableCell>
                      <TableCell>
                        <Badge variant={lease.status === "Active" ? "default" : "secondary"}>{lease.status}</Badge>
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
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Active Leases</CardTitle>
              <CardDescription>Manage your active leases</CardDescription>
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
                  {leases
                    .filter((lease) => lease.status === "Active")
                    .map((lease) => (
                      <TableRow key={lease.id}>
                        <TableCell className="font-medium">{lease.tenant}</TableCell>
                        <TableCell>{lease.property}</TableCell>
                        <TableCell>{lease.unit}</TableCell>
                        <TableCell>{lease.startDate}</TableCell>
                        <TableCell>{lease.endDate}</TableCell>
                        <TableCell>${lease.rent}/mo</TableCell>
                        <TableCell>
                          <Badge variant="default">{lease.status}</Badge>
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
        </TabsContent>
        <TabsContent value="expiring" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Expiring Soon</CardTitle>
              <CardDescription>Leases expiring in the next 90 days</CardDescription>
            </CardHeader>
            <CardContent className="p-4 text-center text-muted-foreground">
              No leases expiring soon at this time.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expired" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Expired Leases</CardTitle>
              <CardDescription>View records of expired leases</CardDescription>
            </CardHeader>
            <CardContent className="p-4 text-center text-muted-foreground">No expired leases at this time.</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
