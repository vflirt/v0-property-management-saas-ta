import type { Metadata } from "next"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Tenants | Property Management SaaS",
  description: "Manage your tenants",
}

// Sample tenants data
const tenants = [
  {
    id: "tenant_1",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "(555) 111-2222",
    property: "Sunset Apartments",
    unit: "101",
    leaseEnd: "2024-12-31",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant_2",
    name: "Bob Williams",
    email: "bob.williams@example.com",
    phone: "(555) 222-3333",
    property: "Sunset Apartments",
    unit: "102",
    leaseEnd: "2024-10-15",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant_3",
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    phone: "(555) 333-4444",
    property: "Sunset Apartments",
    unit: "201",
    leaseEnd: "2025-01-31",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant_4",
    name: "Diana Miller",
    email: "diana.miller@example.com",
    phone: "(555) 444-5555",
    property: "Sunset Apartments",
    unit: "202",
    leaseEnd: "2024-11-30",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant_5",
    name: "Edward Wilson",
    email: "edward.wilson@example.com",
    phone: "(555) 555-6666",
    property: "Oakwood Residences",
    unit: "101",
    leaseEnd: "2024-08-31",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant_6",
    name: "Fiona Brown",
    email: "fiona.brown@example.com",
    phone: "(555) 666-7777",
    property: "Oakwood Residences",
    unit: "102",
    leaseEnd: "2024-09-30",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant_7",
    name: "George Taylor",
    email: "george.taylor@example.com",
    phone: "(555) 777-8888",
    property: "Riverside Condos",
    unit: "101",
    leaseEnd: "2024-07-31",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant_8",
    name: "Hannah Martinez",
    email: "hannah.martinez@example.com",
    phone: "(555) 888-9999",
    property: "Riverside Condos",
    unit: "102",
    leaseEnd: "2024-06-30",
    status: "Active",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TenantsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Tenants</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Tenant
        </Button>
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
                            <AvatarImage src={tenant.avatar || "/placeholder.svg"} alt={tenant.name} />
                            <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">
                              <Link href={`/dashboard/tenants/${tenant.id}`} className="hover:underline">
                                {tenant.name}
                              </Link>
                            </p>
                            <p className="text-sm text-muted-foreground">{tenant.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{tenant.property}</TableCell>
                      <TableCell>{tenant.unit}</TableCell>
                      <TableCell>{tenant.leaseEnd}</TableCell>
                      <TableCell>
                        <Badge variant={tenant.status === "Active" ? "default" : "secondary"}>{tenant.status}</Badge>
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
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Active Tenants</CardTitle>
              <CardDescription>Manage your active tenants</CardDescription>
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
                  {tenants
                    .filter((tenant) => tenant.status === "Active")
                    .map((tenant) => (
                      <TableRow key={tenant.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={tenant.avatar || "/placeholder.svg"} alt={tenant.name} />
                              <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">
                                <Link href={`/dashboard/tenants/${tenant.id}`} className="hover:underline">
                                  {tenant.name}
                                </Link>
                              </p>
                              <p className="text-sm text-muted-foreground">{tenant.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{tenant.property}</TableCell>
                        <TableCell>{tenant.unit}</TableCell>
                        <TableCell>{tenant.leaseEnd}</TableCell>
                        <TableCell>
                          <Badge variant="default">{tenant.status}</Badge>
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
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Pending Tenants</CardTitle>
              <CardDescription>Manage tenants with pending applications or approvals</CardDescription>
            </CardHeader>
            <CardContent className="p-4 text-center text-muted-foreground">
              No pending tenants at this time.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="former" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Former Tenants</CardTitle>
              <CardDescription>View records of former tenants</CardDescription>
            </CardHeader>
            <CardContent className="p-4 text-center text-muted-foreground">No former tenants at this time.</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
