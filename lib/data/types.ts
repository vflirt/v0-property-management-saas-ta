// User types
export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  role: "admin" | "landlord" | "tenant" | "maintenance"
  status: "active" | "inactive" | "pending"
  createdAt: string
  updatedAt: string
  lastLogin: string | null
  avatar: string
}

// Property types
export interface Property {
  id: string
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  type: "apartment" | "house" | "condo" | "commercial"
  totalUnits: number
  occupiedUnits: number
  image: string
  yearBuilt: number
  ownerId: string
  createdAt: string
  updatedAt: string
}

export interface PropertyStats {
  totalProperties: number
  totalUnits: number
  occupiedUnits: number
  vacantUnits: number
  occupancyRate: number
}

// Unit types
export interface Unit {
  id: string
  propertyId: string
  unitNumber: string
  type: "studio" | "1BR" | "2BR" | "3BR" | "4BR" | "commercial"
  status: "vacant" | "occupied" | "maintenance"
  bedrooms: number
  bathrooms: number
  squareFeet: number
  rent: number
  deposit: number
  features: string[]
  image: string
  createdAt: string
  updatedAt: string
}

export interface UnitStats {
  totalUnits: number
  occupiedUnits: number
  vacantUnits: number
  maintenanceUnits: number
  occupancyRate: number
}

// Tenant types
export interface Tenant {
  id: string
  userId: string
  firstName: string
  lastName: string
  email: string
  phone: string
  propertyId: string
  unitId: string
  status: "active" | "pending" | "former"
  leaseStart: string
  leaseEnd: string
  createdAt: string
  updatedAt: string
  avatar: string
}

export interface TenantStats {
  totalTenants: number
  activeTenants: number
  pendingTenants: number
  formerTenants: number
}

// Lease types
export interface Lease {
  id: string
  tenantId: string
  propertyId: string
  unitId: string
  startDate: string
  endDate: string
  rentAmount: number
  depositAmount: number
  status: "active" | "pending" | "expired"
  documents: string[]
  createdAt: string
  updatedAt: string
}

export interface LeaseStats {
  totalLeases: number
  activeLeases: number
  pendingLeases: number
  expiredLeases: number
  renewalsDue: number
}

// Payment types
export interface Payment {
  id: string
  tenantId: string
  leaseId: string
  amount: number
  type: "rent" | "deposit" | "fee" | "other"
  method: "credit" | "debit" | "bank" | "cash" | "check"
  status: "paid" | "pending" | "late"
  dueDate: string
  paidDate: string | null
  notes: string
  createdAt: string
  updatedAt: string
}

export interface PaymentStats {
  totalPayments: number
  paidPayments: number
  pendingPayments: number
  latePayments: number
  totalAmount: number
  paidAmount: number
  pendingAmount: number
  lateAmount: number
}

// Maintenance types
export interface MaintenanceRequest {
  id: string
  tenantId: string
  propertyId: string
  unitId: string
  title: string
  description: string
  category: "plumbing" | "electrical" | "appliance" | "structural" | "hvac" | "other"
  priority: "low" | "medium" | "high" | "emergency"
  status: "open" | "in-progress" | "completed"
  assignedTo: string | null
  images: string[]
  createdAt: string
  updatedAt: string
  completedAt: string | null
}

export interface MaintenanceStats {
  totalRequests: number
  openRequests: number
  inProgressRequests: number
  completedRequests: number
  priorityBreakdown: {
    low: number
    medium: number
    high: number
    emergency: number
  }
}
