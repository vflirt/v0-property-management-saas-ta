import type { Lease, LeaseStats } from "@/lib/data/types"

// Sample lease data
const leases: Lease[] = [
  {
    id: "lease-001",
    tenantId: "tenant-001",
    propertyId: "prop-001",
    unitId: "unit-001",
    startDate: "2023-01-01T00:00:00Z",
    endDate: "2024-01-01T00:00:00Z",
    rentAmount: 1500,
    depositAmount: 1500,
    status: "active",
    documents: ["lease-001-agreement.pdf", "lease-001-addendum.pdf"],
    createdAt: "2022-12-15T14:30:00Z",
    updatedAt: "2023-01-01T10:00:00Z",
  },
  {
    id: "lease-002",
    tenantId: "tenant-002",
    propertyId: "prop-001",
    unitId: "unit-003",
    startDate: "2023-02-01T00:00:00Z",
    endDate: "2024-02-01T00:00:00Z",
    rentAmount: 1200,
    depositAmount: 1200,
    status: "active",
    documents: ["lease-002-agreement.pdf"],
    createdAt: "2023-01-20T11:15:00Z",
    updatedAt: "2023-02-01T09:30:00Z",
  },
  {
    id: "lease-003",
    tenantId: "tenant-003",
    propertyId: "prop-002",
    unitId: "unit-004",
    startDate: "2023-01-15T00:00:00Z",
    endDate: "2024-01-15T00:00:00Z",
    rentAmount: 2500,
    depositAmount: 2500,
    status: "active",
    documents: ["lease-003-agreement.pdf", "lease-003-pet-addendum.pdf"],
    createdAt: "2023-01-05T16:45:00Z",
    updatedAt: "2023-01-15T13:20:00Z",
  },
  {
    id: "lease-004",
    tenantId: "tenant-004",
    propertyId: "prop-003",
    unitId: "unit-006",
    startDate: "2023-03-01T00:00:00Z",
    endDate: "2024-03-01T00:00:00Z",
    rentAmount: 2800,
    depositAmount: 2800,
    status: "active",
    documents: ["lease-004-agreement.pdf"],
    createdAt: "2023-02-15T10:30:00Z",
    updatedAt: "2023-03-01T14:45:00Z",
  },
  {
    id: "lease-005",
    tenantId: "tenant-005",
    propertyId: "prop-003",
    unitId: "unit-007",
    startDate: "2023-02-15T00:00:00Z",
    endDate: "2024-02-15T00:00:00Z",
    rentAmount: 2200,
    depositAmount: 2200,
    status: "active",
    documents: ["lease-005-agreement.pdf"],
    createdAt: "2023-02-01T09:15:00Z",
    updatedAt: "2023-02-15T11:30:00Z",
  },
  {
    id: "lease-006",
    tenantId: "tenant-006",
    propertyId: "prop-004",
    unitId: "unit-008",
    startDate: "2023-01-01T00:00:00Z",
    endDate: "2025-01-01T00:00:00Z",
    rentAmount: 3500,
    depositAmount: 7000,
    status: "active",
    documents: ["lease-006-commercial-agreement.pdf", "lease-006-terms.pdf"],
    createdAt: "2022-12-10T13:45:00Z",
    updatedAt: "2023-01-01T15:20:00Z",
  },
  {
    id: "lease-007",
    tenantId: "tenant-007",
    propertyId: "prop-005",
    unitId: "unit-010",
    startDate: "2023-03-15T00:00:00Z",
    endDate: "2024-03-15T00:00:00Z",
    rentAmount: 1700,
    depositAmount: 1700,
    status: "active",
    documents: ["lease-007-agreement.pdf"],
    createdAt: "2023-03-01T10:00:00Z",
    updatedAt: "2023-03-15T14:30:00Z",
  },
  {
    id: "lease-008",
    tenantId: "tenant-008",
    propertyId: "prop-001",
    unitId: "unit-001",
    startDate: "2022-01-01T00:00:00Z",
    endDate: "2022-12-31T00:00:00Z",
    rentAmount: 1400,
    depositAmount: 1400,
    status: "expired",
    documents: ["lease-008-agreement.pdf"],
    createdAt: "2021-12-15T11:30:00Z",
    updatedAt: "2023-01-01T09:45:00Z",
  },
  {
    id: "lease-009",
    tenantId: "tenant-009",
    propertyId: "prop-002",
    unitId: "unit-005",
    startDate: "2023-06-01T00:00:00Z",
    endDate: "2024-06-01T00:00:00Z",
    rentAmount: 3200,
    depositAmount: 3200,
    status: "pending",
    documents: ["lease-009-agreement.pdf"],
    createdAt: "2023-05-15T14:00:00Z",
    updatedAt: "2023-05-15T14:00:00Z",
  },
  {
    id: "lease-010",
    tenantId: "tenant-010",
    propertyId: "prop-004",
    unitId: "unit-009",
    startDate: "2023-06-15T00:00:00Z",
    endDate: "2025-06-15T00:00:00Z",
    rentAmount: 5200,
    depositAmount: 10400,
    status: "pending",
    documents: ["lease-010-commercial-agreement.pdf"],
    createdAt: "2023-05-20T10:30:00Z",
    updatedAt: "2023-05-20T10:30:00Z",
  },
]

// Function to get all leases
export function getLeases() {
  // Add a delay to simulate loading from a database
  return new Promise<Lease[]>((resolve) => {
    setTimeout(() => resolve([...leases]), 1500)
  })
}

// Function to get a lease by ID
export function getLeaseById(id: string) {
  // Add a delay to simulate loading from a database
  return new Promise<Lease | undefined>((resolve) => {
    setTimeout(() => resolve(leases.find((lease) => lease.id === id)), 1300)
  })
}

// Function to get leases by property ID
export function getLeasesByPropertyId(propertyId: string) {
  // Add a delay to simulate loading from a database
  return new Promise<Lease[]>((resolve) => {
    setTimeout(() => resolve(leases.filter((lease) => lease.propertyId === propertyId)), 1400)
  })
}

// Function to get leases by tenant ID
export function getLeasesByTenantId(tenantId: string) {
  // Add a delay to simulate loading from a database
  return new Promise<Lease[]>((resolve) => {
    setTimeout(() => resolve(leases.filter((lease) => lease.tenantId === tenantId)), 1350)
  })
}

// Function to get leases by tenant ID
export function getLeaseByTenantId(tenantId: string) {
  // Add a delay to simulate loading from a database
  return new Promise<Lease | undefined>((resolve) => {
    setTimeout(() => {
      // First try to find an active lease
      let lease = leases.find((lease) => lease.tenantId === tenantId && lease.status === "active")

      resolve(lease)
    }, 1200)
  })
}

// Function to get a lease by tenant ID (returns the first one found)
export function getFirstLeaseByTenantId(tenantId: string) {
  // Add a delay to simulate loading from a database
  return new Promise<Lease | undefined>((resolve) => {
    setTimeout(() => resolve(leases.find((lease) => lease.tenantId === tenantId)), 1250)
  })
}

// Function to get a lease by unit ID (returns the first active one found)
export function getLeasesByUnitId(unitId: string) {
  // Add a delay to simulate loading from a database
  return new Promise<Lease | undefined>((resolve) => {
    setTimeout(() => resolve(leases.find((lease) => lease.unitId === unitId)), 1250)
  })
}

// Function to get a lease by unit ID (returns the first active one found)
export function getLeaseByUnitId(unitId: string) {
  // Add a delay to simulate loading from a database
  return new Promise<Lease | undefined>((resolve) => {
    setTimeout(() => {
      // First try to find an active lease
      let lease = leases.find((lease) => lease.unitId === unitId && lease.status === "active")

      resolve(lease)
    }, 1200)
  })
}



// Function to get lease stats
export function getLeaseStats(): Promise<LeaseStats> {
  // Add a delay to simulate loading from a database
  return new Promise((resolve) => {
    setTimeout(() => {
      const totalLeases = leases.length
      const activeLeases = leases.filter((lease) => lease.status === "active").length
      const pendingLeases = leases.filter((lease) => lease.status === "pending").length
      const expiredLeases = leases.filter((lease) => lease.status === "expired").length

      // Calculate renewals due in the next 30 days
      const today = new Date()
      const thirtyDaysFromNow = new Date(today)
      thirtyDaysFromNow.setDate(today.getDate() + 30)

      const renewalsDue = leases.filter((lease) => {
        const endDate = new Date(lease.endDate)
        return lease.status === "active" && endDate >= today && endDate <= thirtyDaysFromNow
      }).length

      resolve({
        totalLeases,
        activeLeases,
        pendingLeases,
        expiredLeases,
        renewalsDue,
      })
    }, 1000)
  })
}

export default leases
