import type { Tenant, TenantStats } from "./types"

// Sample tenant data
const tenants: Tenant[] = [
  {
    id: "tenant-001",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
    leaseId: "lease-001",
    unitId: "unit-001",
    propertyId: "prop-001",
    moveInDate: "2023-02-01T00:00:00Z",
    leaseEndDate: "2024-01-31T23:59:59Z",
    rentAmount: 1800,
    status: "active",
    paymentStatus: "current",
    createdAt: "2023-01-20T14:30:00Z",
    updatedAt: "2023-04-21T11:45:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant-002",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "555-987-6543",
    leaseId: "lease-002",
    unitId: "unit-002",
    propertyId: "prop-001",
    moveInDate: "2023-03-15T00:00:00Z",
    leaseEndDate: "2024-03-14T23:59:59Z",
    rentAmount: 2200,
    status: "active",
    paymentStatus: "late",
    createdAt: "2023-03-01T10:15:00Z",
    updatedAt: "2023-05-10T09:30:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant-003",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    phone: "555-456-7890",
    leaseId: "lease-003",
    unitId: "unit-004",
    propertyId: "prop-002",
    moveInDate: "2023-01-10T00:00:00Z",
    leaseEndDate: "2023-12-31T23:59:59Z",
    rentAmount: 2600,
    status: "active",
    paymentStatus: "current",
    createdAt: "2022-12-15T13:45:00Z",
    updatedAt: "2023-05-05T14:20:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant-004",
    firstName: "Emily",
    lastName: "Williams",
    email: "emily.williams@example.com",
    phone: "555-789-0123",
    leaseId: "lease-004",
    unitId: "unit-005",
    propertyId: "prop-002",
    moveInDate: "2023-04-01T00:00:00Z",
    leaseEndDate: "2024-03-31T23:59:59Z",
    rentAmount: 3200,
    status: "active",
    paymentStatus: "current",
    createdAt: "2023-03-15T11:30:00Z",
    updatedAt: "2023-05-12T10:45:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant-005",
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@example.com",
    phone: "555-234-5678",
    leaseId: "lease-005",
    unitId: "unit-006",
    propertyId: "prop-003",
    moveInDate: "2023-02-15T00:00:00Z",
    leaseEndDate: "2024-02-14T23:59:59Z",
    rentAmount: 2500,
    status: "active",
    paymentStatus: "current",
    createdAt: "2023-02-01T09:45:00Z",
    updatedAt: "2023-04-28T15:30:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant-006",
    firstName: "Sarah",
    lastName: "Miller",
    email: "sarah.miller@example.com",
    phone: "555-345-6789",
    leaseId: "lease-006",
    unitId: "unit-007",
    propertyId: "prop-004",
    moveInDate: "2023-03-01T00:00:00Z",
    leaseEndDate: "2024-02-29T23:59:59Z",
    rentAmount: 4000,
    status: "active",
    paymentStatus: "delinquent",
    createdAt: "2023-02-15T14:20:00Z",
    updatedAt: "2023-05-15T13:10:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant-007",
    firstName: "Robert",
    lastName: "Davis",
    email: "robert.davis@example.com",
    phone: "555-567-8901",
    leaseId: "lease-007",
    unitId: "unit-008",
    propertyId: "prop-005",
    moveInDate: "2023-01-15T00:00:00Z",
    leaseEndDate: "2024-01-14T23:59:59Z",
    rentAmount: 1900,
    status: "active",
    paymentStatus: "current",
    createdAt: "2023-01-02T10:30:00Z",
    updatedAt: "2023-05-10T11:45:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant-008",
    firstName: "Jennifer",
    lastName: "Wilson",
    email: "jennifer.wilson@example.com",
    phone: "555-678-9012",
    leaseId: "lease-008",
    unitId: "unit-001",
    propertyId: "prop-001",
    moveInDate: "2022-06-01T00:00:00Z",
    leaseEndDate: "2023-01-31T23:59:59Z",
    rentAmount: 1750,
    status: "past",
    paymentStatus: "current",
    createdAt: "2022-05-15T13:15:00Z",
    updatedAt: "2023-02-01T09:30:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant-009",
    firstName: "Thomas",
    lastName: "Anderson",
    email: "thomas.anderson@example.com",
    phone: "555-789-1234",
    leaseId: "lease-009",
    unitId: "unit-003",
    propertyId: "prop-001",
    moveInDate: "2023-06-01T00:00:00Z",
    leaseEndDate: "2024-05-31T23:59:59Z",
    rentAmount: 1500,
    status: "pending",
    paymentStatus: "current",
    createdAt: "2023-05-10T11:45:00Z",
    updatedAt: "2023-05-15T14:30:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "tenant-010",
    firstName: "Lisa",
    lastName: "Taylor",
    email: "lisa.taylor@example.com",
    phone: "555-890-1234",
    leaseId: "lease-010",
    unitId: "unit-009",
    propertyId: "prop-006",
    moveInDate: "2023-07-01T00:00:00Z",
    leaseEndDate: "2024-06-30T23:59:59Z",
    rentAmount: 2200,
    status: "pending",
    paymentStatus: "current",
    createdAt: "2023-05-15T10:30:00Z",
    updatedAt: "2023-05-18T13:45:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

// Function to get all tenants
export function getTenants() {
  return tenants
}

// Function to get a tenant by ID
export function getTenantById(id: string) {
  return tenants.find((tenant) => tenant.id === id)
}

// Function to get tenants by property ID
export function getTenantsByPropertyId(propertyId: string) {
  return tenants.filter((tenant) => tenant.propertyId === propertyId)
}

// Function to get tenants by unit ID
export function getTenantsByUnitId(unitId: string): Tenant[] {
  return tenants.filter((tenant) => tenant.unitId === unitId)
}

// Function to calculate tenant retention rate
export function calculateTenantRetentionRate(tenants: Tenant[]): number {
  const activeTenants = tenants.filter((tenant) => tenant.status === "active").length
  const pastTenants = tenants.filter((tenant) => tenant.status === "past").length

  if (activeTenants + pastTenants === 0) return 0
  return activeTenants / (activeTenants + pastTenants)
}

// Function to get tenants with late payments
export function getTenantsWithLatePayments(tenants: Tenant[]): Tenant[] {
  return tenants.filter(
    (tenant) =>
      tenant.status === "active" && (tenant.paymentStatus === "late" || tenant.paymentStatus === "delinquent"),
  )
}

// Function to get tenant stats
export function getTenantStats(): TenantStats {
  const totalTenants = tenants.length
  const activeTenants = tenants.filter((tenant) => tenant.status === "active").length
  const pendingTenants = tenants.filter((tenant) => tenant.status === "pending").length
  const formerTenants = tenants.filter((tenant) => tenant.status === "former").length

  return {
    totalTenants,
    activeTenants,
    pendingTenants,
    formerTenants,
    retentionRate: calculateTenantRetentionRate(tenants),
    averageRent:
      activeTenants > 0
        ? tenants.filter((t) => t.status === "active").reduce((sum, t) => sum + t.rentAmount, 0) / activeTenants
        : 0,
  }
}

export default tenants
