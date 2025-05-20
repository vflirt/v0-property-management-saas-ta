"use client"


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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Check } from "lucide-react";
import { useState } from "react";


export function AddTenantDialog() {
    const [isAddTenantOpen, setIsAddTenantOpen] = useState(false)
    
    return (<div className="flex items-center justify-between">
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
      </div>)
}
