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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Check } from "lucide-react"
import { useState } from "react"

export function AddLeaseDialog() {
  const [isAddLeaseOpen, setIsAddLeaseOpen] = useState(false)

  return (
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
                <label htmlFor="property" className="text-right text-sm font-medium">
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
                <label htmlFor="unit" className="text-right text-sm font-medium">
                Unit
                </label>
                <Input id="unit" placeholder="Unit number" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="tenant" className="text-right text-sm font-medium">
                Tenant
                </label>
                <Select>
                <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select tenant" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="john">John Doe</SelectItem>
                    <SelectItem value="jane">Jane Smith</SelectItem>
                    <SelectItem value="bob">Bob Johnson</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="start-date" className="text-right text-sm font-medium">
                Start Date
                </label>
                <Input id="start-date" type="date" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="end-date" className="text-right text-sm font-medium">
                End Date
                </label>
                <Input id="end-date" type="date" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="rent" className="text-right text-sm font-medium">
                Monthly Rent
                </label>
                <Input id="rent" type="number" placeholder="0.00" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="deposit" className="text-right text-sm font-medium">
                Security Deposit
                </label>
                <Input id="deposit" type="number" placeholder="0.00" className="col-span-3" />
            </div>
            </div>
            <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
            </Button>
            <Button onClick={() => onOpenChange(false)}>
                <Check className="mr-2 h-4 w-4" />
                Add Lease
            </Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    </div>
  )
} 