import type { Lease, LeaseStats } from "./types"

// Sample lease data
const leases: Lease[] = [
  {
    id: "lease-001",
    tenantId: "tenant-001",
    unitId: "unit-001",
    propertyId: "prop-001",
    startDate: "2023-02-01T00:00:00Z",
    endDate: "2024-01-31T23:59:59Z",
    rentAmount: 1800,
    securityDeposit: 1800,
    status: "active",
    documents: ["lease_agreement.pdf", "move_in_checklist.pdf"],
    createdAt: "2023-01-20T14:30:00Z",
    updatedAt: "2023-01-20T14:30:00Z",
  },
  {
    id: "lease-002",
    tenantId: "tenant-002",
    unitId: "unit-002",
    propertyId: "prop-001",
    startDate: "2023-03-15T00:00:00Z",
    endDate: "2024-03-14T23:59:59Z",
    rentAmount: 2200,
    securityDeposit: 2200,
    status: "active",
    documents: ["lease_agreement.pdf", "pet_addendum.pdf"],
    createdAt: "2023-03-01T10:15:00Z",
    updatedAt: "2023-03-01T10:15:00Z",
  },
  {
    id: "lease-003",
    tenantId: "tenant-003",
    unitId: "unit-004",
    propertyId: "prop-002",
    startDate: "2023-01-10T00:00:00Z",
    endDate: "2023-12-31T23:59:59Z",
    rentAmount: 2600,
    securityDeposit: 2600,
    status: "active",
    documents: ["lease_agreement.pdf", "parking_addendum.pdf"],
    createdAt: "2022-12-15T13:45:00Z",
    updatedAt: "2022-12-15T13:45:00Z",
  },
  {
    id: "lease-004",
    tenantId: "tenant-004",
    unitId: "unit-005",
    propertyId: "prop-002",
    startDate: "2023-04-01T00:00:00Z",
    endDate: "2024-03-31T23:59:59Z",
    rentAmount: 3200,
    securityDeposit: 3200,
    status: "active",
    documents: ["lease_agreement.pdf", "move_in_checklist.pdf"],
    createdAt: "2023-03-15T11:30:00Z",
    updatedAt: "2023-03-15T11:30:00Z",
  },
  {
    id: "lease-005",
    tenantId: "tenant-005",
    unitId: "unit-006",
    propertyId: "prop-003",
    startDate: "2023-02-15T00:00:00Z",
    endDate: "2024-02-14T23:59:59Z",
    rentAmount: 2500,
    securityDeposit: 2500,
    status: "active",
    documents: ["lease_agreement.pdf", "yard_maintenance_addendum.pdf"],
    createdAt: "2023-02-01T09:45:00Z",
    updatedAt: "2023-02-01T09:45:00Z",
  },
  {
    id: "lease-006",
    tenantId: "tenant-006",
    unitId: "unit-007",
    propertyId: "prop-004",
    startDate: "2023-03-01T00:00:00Z",
    endDate: "2024-02-29T23:59:59Z",
    rentAmount: 4000,
    securityDeposit: 4000,
    status: "active",
    documents: ["commercial_lease_agreement.pdf", "insurance_requirements.pdf"],
    createdAt: "2023-02-15T14:20:00Z",
    updatedAt: "2023-02-15T14:20:00Z",
  },
  {
    id: "lease-007",
    tenantId: "tenant-007",
    unitId: "unit-008",
    propertyId: "prop-005",
    startDate: "2023-01-15T00:00:00Z",
    endDate: "2024-01-14T23:59:59Z",
    rentAmount: 1900,
    securityDeposit: 1900,
    status: "active",
    documents: ["lease_agreement.pdf", "amenities_addendum.pdf"],
    createdAt: "2023-01-02T10:30:00Z",
    updatedAt: "2023-01-02T10:30:00Z",
  },
  {
    id: "lease-008",
    tenantId: "tenant-008",
    unitId: "unit-001",
    propertyId: "prop-001",
    startDate: "2022-06-01T00:00:00Z",
    endDate: "2023-01-31T23:59:59Z",
    rentAmount: 1750,
    securityDeposit: 1750,
    status: "expired",
    documents: ["lease_agreement.pdf", "move_out_checklist.pdf"],
    createdAt: "2022-05-15T13:15:00Z",
    updatedAt: "2023-02-01T09:30:00Z",
  },
  {
    id: "lease-009",
    tenantId: "tenant-009",
    unitId: "unit-003",
    propertyId: "prop-001",
    startDate: "2023-06-01T00:00:00Z",
    endDate: "2024-05-31T23:59:59Z",
    rentAmount: 1500,
    securityDeposit: 1500,
    status: "pending",
    documents: ["lease_agreement.pdf"],
    createdAt: "2023-05-10T11:45:00Z",
    updatedAt: "2023-05-10T11:45:00Z",
  },
  {
    id: "lease-010",
    tenantId: "tenant-010",
    unitId: "unit-009",
    propertyId: "prop-006",
    startDate: "2023-07-01T00:00:00Z",
    endDate: "2024-06-30T23:59:59Z",
    rentAmount: 2200,
    securityDeposit: 2200,
    status: "pending",
    documents: ["lease_agreement.pdf", "seasonal_occupancy_addendum.pdf"],
    createdAt: "2023-05-15T10:30:00Z",
    updatedAt: "2023-05-15T10:30:00Z",
  },
]

// Function to get all leases
export function getLeases() {
  return leases
}

// Function to get a lease by ID
export function getLeaseById(id: string) {
  return leases.find((lease) => lease.id === id)
}

// Function to get leases by property ID
export function getLeasesByPropertyId(propertyId: string) {
  return leases.filter((lease) => lease.propertyId === propertyId)
}

// Function to get leases by tenant ID
export function getLeaseByTenantId(tenantId: string) {
  return leases.find((lease) => lease.tenantId === tenantId)
}

// Function to get lease stats
export function getLeaseStats(): LeaseStats {
  const totalLeases = leases.length
  const activeLeases = leases.filter((lease) => lease.status === "active").length
  const pendingLeases = leases.filter((lease) => lease.status === "pending").length
  const expiredLeases = leases.filter((lease) => lease.status === "expired").length
  const renewalsDue = leases.filter((lease) => {
    const expiryDate = new Date(lease.endDate)
    const now = new Date()
    const daysUntilExpiry = Math.floor((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    return lease.status === "active" && daysUntilExpiry <= 30
  }).length

  return {
    totalLeases,
    activeLeases,
    pendingLeases,
    expiredLeases,
    renewalsDue,
  }
}

export default leases
