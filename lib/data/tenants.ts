import type { Tenant, TenantStats } from "@/lib/data/types"

// Sample tenant data
const tenants: Tenant[] = [
  {
    id: "tenant-001",
    userId: "user-101",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "555-123-4567",
    propertyId: "prop-001",
    unitId: "unit-001",
    status: "active",
    leaseStart: "2023-01-01T00:00:00Z",
    leaseEnd: "2024-01-01T00:00:00Z",
    createdAt: "2022-12-15T14:30:00Z",
    updatedAt: "2023-01-01T10:00:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "tenant-002",
    userId: "user-102",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "555-987-6543",
    propertyId: "prop-001",
    unitId: "unit-003",
    status: "active",
    leaseStart: "2023-02-01T00:00:00Z",
    leaseEnd: "2024-02-01T00:00:00Z",
    createdAt: "2023-01-20T11:15:00Z",
    updatedAt: "2023-02-01T09:30:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "tenant-003",
    userId: "user-103",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    phone: "555-456-7890",
    propertyId: "prop-002",
    unitId: "unit-004",
    status: "active",
    leaseStart: "2023-01-15T00:00:00Z",
    leaseEnd: "2024-01-15T00:00:00Z",
    createdAt: "2023-01-05T16:45:00Z",
    updatedAt: "2023-01-15T13:20:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "tenant-004",
    userId: "user-104",
    firstName: "Emily",
    lastName: "Williams",
    email: "emily.williams@example.com",
    phone: "555-789-0123",
    propertyId: "prop-003",
    unitId: "unit-006",
    status: "active",
    leaseStart: "2023-03-01T00:00:00Z",
    leaseEnd: "2024-03-01T00:00:00Z",
    createdAt: "2023-02-15T10:30:00Z",
    updatedAt: "2023-03-01T14:45:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "tenant-005",
    userId: "user-105",
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@example.com",
    phone: "555-234-5678",
    propertyId: "prop-003",
    unitId: "unit-007",
    status: "active",
    leaseStart: "2023-02-15T00:00:00Z",
    leaseEnd: "2024-02-15T00:00:00Z",
    createdAt: "2023-02-01T09:15:00Z",
    updatedAt: "2023-02-15T11:30:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "tenant-006",
    userId: "user-106",
    firstName: "Sarah",
    lastName: "Miller",
    email: "sarah.miller@example.com",
    phone: "555-345-6789",
    propertyId: "prop-004",
    unitId: "unit-008",
    status: "active",
    leaseStart: "2023-01-01T00:00:00Z",
    leaseEnd: "2025-01-01T00:00:00Z",
    createdAt: "2022-12-10T13:45:00Z",
    updatedAt: "2023-01-01T15:20:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "tenant-007",
    userId: "user-107",
    firstName: "Robert",
    lastName: "Davis",
    email: "robert.davis@example.com",
    phone: "555-456-7890",
    propertyId: "prop-005",
    unitId: "unit-010",
    status: "active",
    leaseStart: "2023-03-15T00:00:00Z",
    leaseEnd: "2024-03-15T00:00:00Z",
    createdAt: "2023-03-01T10:00:00Z",
    updatedAt: "2023-03-15T14:30:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "tenant-008",
    userId: "user-108",
    firstName: "Jennifer",
    lastName: "Wilson",
    email: "jennifer.wilson@example.com",
    phone: "555-567-8901",
    propertyId: "prop-001",
    unitId: "unit-001",
    status: "former",
    leaseStart: "2022-01-01T00:00:00Z",
    leaseEnd: "2022-12-31T00:00:00Z",
    createdAt: "2021-12-15T11:30:00Z",
    updatedAt: "2023-01-01T09:45:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "tenant-009",
    userId: "user-109",
    firstName: "Thomas",
    lastName: "Anderson",
    email: "thomas.anderson@example.com",
    phone: "555-678-9012",
    propertyId: "prop-002",
    unitId: "unit-005",
    status: "pending",
    leaseStart: "2023-06-01T00:00:00Z",
    leaseEnd: "2024-06-01T00:00:00Z",
    createdAt: "2023-05-15T14:00:00Z",
    updatedAt: "2023-05-15T14:00:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "tenant-010",
    userId: "user-110",
    firstName: "Lisa",
    lastName: "Taylor",
    email: "lisa.taylor@example.com",
    phone: "555-789-0123",
    propertyId: "prop-004",
    unitId: "unit-009",
    status: "pending",
    leaseStart: "2023-06-15T00:00:00Z",
    leaseEnd: "2025-06-15T00:00:00Z",
    createdAt: "2023-05-20T10:30:00Z",
    updatedAt: "2023-05-20T10:30:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
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

export function getTenantsByUnitId(unitId: string) {
  return tenants.filter((tenant) => tenant.unitId === unitId)
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
  }
}

export default tenants
