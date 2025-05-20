"use client"

import Link from "next/link"
import { Building2, Plus, Check } from "lucide-react"
// import { Building, Check, Edit, MoreHorizontal, Plus, Search, Trash } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { getProperties } from "@/lib/data"
import { useState, Suspense } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog" 


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

export default function PropertiesPageClient() {
  const [isAddPropertyOpen, setIsAddPropertyOpen] = useState(false)


  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
        <Dialog open={isAddPropertyOpen} onOpenChange={setIsAddPropertyOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Property
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Property</DialogTitle>
              <DialogDescription>Enter the details of the new property to add to your portfolio.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="property-name" className="text-right text-sm font-medium">
                  Name
                </label>
                <Input id="property-name" placeholder="Property name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="property-address" className="text-right text-sm font-medium">
                  Address
                </label>
                <Input id="property-address" placeholder="Full address" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="property-type" className="text-right text-sm font-medium">
                  Type
                </label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment Building</SelectItem>
                    <SelectItem value="townhouse">Townhouses</SelectItem>
                    <SelectItem value="condo">Condominium</SelectItem>
                    <SelectItem value="single-family">Single Family Homes</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="property-units" className="text-right text-sm font-medium">
                  Units
                </label>
                <Input id="property-units" type="number" placeholder="Number of units" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="property-manager" className="text-right text-sm font-medium">
                  Manager
                </label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Assign a property manager" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Smith</SelectItem>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="michael">Michael Brown</SelectItem>
                    <SelectItem value="none">No Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddPropertyOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddPropertyOpen(false)}>
                <Check className="mr-2 h-4 w-4" />
                Add Property
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>





      </div>

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
