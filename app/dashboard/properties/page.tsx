import type { Metadata } from "next"
import Link from "next/link"
import { Building2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Properties | Property Management SaaS",
  description: "Manage your properties",
}

// Sample properties data
const properties = [
  {
    id: "prop_1",
    name: "Sunset Apartments",
    address: "123 Sunset Blvd, Los Angeles, CA 90001",
    type: "Apartment Complex",
    units: 24,
    occupancyRate: 92,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "prop_2",
    name: "Oakwood Residences",
    address: "456 Oak St, San Francisco, CA 94102",
    type: "Apartment Complex",
    units: 36,
    occupancyRate: 88,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "prop_3",
    name: "Riverside Condos",
    address: "789 River Rd, San Diego, CA 92101",
    type: "Condominium",
    units: 18,
    occupancyRate: 100,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "prop_4",
    name: "Pine Street Homes",
    address: "101 Pine St, Sacramento, CA 95814",
    type: "Single Family",
    units: 5,
    occupancyRate: 80,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "prop_5",
    name: "Marina Bay Towers",
    address: "202 Marina Blvd, Oakland, CA 94612",
    type: "Apartment Complex",
    units: 48,
    occupancyRate: 94,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "prop_6",
    name: "Highland Park Residences",
    address: "303 Highland Ave, San Jose, CA 95110",
    type: "Apartment Complex",
    units: 30,
    occupancyRate: 90,
    image: "/placeholder.svg?height=100&width=200",
  },
]

export default function PropertiesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Properties</TabsTrigger>
          <TabsTrigger value="apartments">Apartments</TabsTrigger>
          <TabsTrigger value="houses">Houses</TabsTrigger>
          <TabsTrigger value="condos">Condos</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <Link key={property.id} href={`/dashboard/properties/${property.id}`}>
                <Card className="overflow-hidden transition-all hover:shadow-md">
                  <div
                    className="aspect-video w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${property.image})` }}
                  />
                  <CardHeader className="p-4">
                    <CardTitle className="flex items-center justify-between">
                      <span>{property.name}</span>
                      <Badge>{property.type}</Badge>
                    </CardTitle>
                    <CardDescription>{property.address}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{property.units} Units</span>
                      </div>
                      <div>
                        <span className="font-medium">{property.occupancyRate}%</span>
                        <span className="ml-1 text-sm text-muted-foreground">Occupied</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="apartments" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {properties
              .filter((property) => property.type === "Apartment Complex")
              .map((property) => (
                <Link key={property.id} href={`/dashboard/properties/${property.id}`}>
                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <div
                      className="aspect-video w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${property.image})` }}
                    />
                    <CardHeader className="p-4">
                      <CardTitle className="flex items-center justify-between">
                        <span>{property.name}</span>
                        <Badge>{property.type}</Badge>
                      </CardTitle>
                      <CardDescription>{property.address}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{property.units} Units</span>
                        </div>
                        <div>
                          <span className="font-medium">{property.occupancyRate}%</span>
                          <span className="ml-1 text-sm text-muted-foreground">Occupied</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="houses" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {properties
              .filter((property) => property.type === "Single Family")
              .map((property) => (
                <Link key={property.id} href={`/dashboard/properties/${property.id}`}>
                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <div
                      className="aspect-video w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${property.image})` }}
                    />
                    <CardHeader className="p-4">
                      <CardTitle className="flex items-center justify-between">
                        <span>{property.name}</span>
                        <Badge>{property.type}</Badge>
                      </CardTitle>
                      <CardDescription>{property.address}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{property.units} Units</span>
                        </div>
                        <div>
                          <span className="font-medium">{property.occupancyRate}%</span>
                          <span className="ml-1 text-sm text-muted-foreground">Occupied</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="condos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {properties
              .filter((property) => property.type === "Condominium")
              .map((property) => (
                <Link key={property.id} href={`/dashboard/properties/${property.id}`}>
                  <Card className="overflow-hidden transition-all hover:shadow-md">
                    <div
                      className="aspect-video w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${property.image})` }}
                    />
                    <CardHeader className="p-4">
                      <CardTitle className="flex items-center justify-between">
                        <span>{property.name}</span>
                        <Badge>{property.type}</Badge>
                      </CardTitle>
                      <CardDescription>{property.address}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{property.units} Units</span>
                        </div>
                        <div>
                          <span className="font-medium">{property.occupancyRate}%</span>
                          <span className="ml-1 text-sm text-muted-foreground">Occupied</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
