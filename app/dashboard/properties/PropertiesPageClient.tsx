"use client"

import { Plus, Check } from "lucide-react"
// import { Building, Check, Edit, MoreHorizontal, Plus, Search, Trash } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog" 

export default function PropertiesPageClient() {
  const [isAddPropertyOpen, setIsAddPropertyOpen] = useState(false)


  return (
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
  )
}
