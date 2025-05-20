import type { Metadata } from "next"
import PropertiesPageClient from "./PropertiesPageClient"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProperties } from "@/lib/data"
import { Suspense } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Properties | Property Management SaaS",
  description: "Manage your properties",
}

// Loading component for properties
function PropertiesLoading() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <Card key={i} className="overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video w-full bg-muted animate-pulse" />
            <CardHeader className="p-4">
              <CardTitle className="flex items-center justify-between">
                <span className="h-6 w-32 bg-muted animate-pulse rounded"></span>
                <Badge className="opacity-50">Loading...</Badge>
              </CardTitle>
              <CardDescription className="h-4 w-48 bg-muted animate-pulse rounded"></CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="h-4 w-16 bg-muted animate-pulse rounded"></span>
                </div>
                <div>
                  <span className="h-4 w-12 bg-muted animate-pulse rounded"></span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  )
}

// Properties list component
async function PropertiesList() {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const properties = await getProperties()

  return (
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
              <CardDescription>
                {property.address}, {property.city}, {property.state} {property.zipCode}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{property.units} Units</span>
                </div>
                <div>
                  <span className="font-medium">{Math.round(property.occupancyRate * 100)}%</span>
                  <span className="ml-1 text-sm text-muted-foreground">Occupied</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

// Filtered properties list component
async function FilteredPropertiesList({ type }: { type: string }) {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const allProperties = await getProperties()
  const properties = allProperties.filter((property) => {
    if (type === "apartments") return property.type === "apartment"
    if (type === "houses") return property.type === "house"
    if (type === "condos") return property.type === "condo"
    return true
  })

  if (properties.length === 0) {
    return <div className="text-center p-8 text-muted-foreground">No properties found in this category.</div>
  }

  return (
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
              <CardDescription>
                {property.address}, {property.city}, {property.state} {property.zipCode}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{property.units} Units</span>
                </div>
                <div>
                  <span className="font-medium">{Math.round(property.occupancyRate * 100)}%</span>
                  <span className="ml-1 text-sm text-muted-foreground">Occupied</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default function PropertiesPage() {
  return (
    <div className="flex flex-col gap-4">
      <PropertiesPageClient />
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Properties</TabsTrigger>
          <TabsTrigger value="apartments">Apartments</TabsTrigger>
          <TabsTrigger value="houses">Houses</TabsTrigger>
          <TabsTrigger value="condos">Condos</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Suspense fallback={<PropertiesLoading />}>
            <PropertiesList />
          </Suspense>
        </TabsContent>
        <TabsContent value="apartments" className="space-y-4">
          <Suspense fallback={<PropertiesLoading />}>
            <FilteredPropertiesList type="apartments" />
          </Suspense>
        </TabsContent>
        <TabsContent value="houses" className="space-y-4">
          <Suspense fallback={<PropertiesLoading />}>
            <FilteredPropertiesList type="houses" />
          </Suspense>
        </TabsContent>
        <TabsContent value="condos" className="space-y-4">
          <Suspense fallback={<PropertiesLoading />}>
            <FilteredPropertiesList type="condos" />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  )
}
