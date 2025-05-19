import type { Payment, PaymentStats } from "./types"

// Sample payment data
const payments: Payment[] = [
  {
    id: "payment-001",
    tenantId: "tenant-001",
    leaseId: "lease-001",
    unitId: "unit-001",
    propertyId: "prop-001",
    amount: 1800,
    date: "2023-05-01T10:15:00Z",
    type: "rent",
    status: "completed",
    method: "bank",
    createdAt: "2023-05-01T10:15:00Z",
    updatedAt: "2023-05-01T10:15:00Z",
  },
  {
    id: "payment-002",
    tenantId: "tenant-002",
    leaseId: "lease-002",
    unitId: "unit-002",
    propertyId: "prop-001",
    amount: 2200,
    date: "2023-05-03T14:30:00Z",
    type: "rent",
    status: "completed",
    method: "credit",
    createdAt: "2023-05-03T14:30:00Z",
    updatedAt: "2023-05-03T14:30:00Z",
  },
  {
    id: "payment-003",
    tenantId: "tenant-003",
    leaseId: "lease-003",
    unitId: "unit-004",
    propertyId: "prop-002",
    amount: 2600,
    date: "2023-05-01T09:45:00Z",
    type: "rent",
    status: "completed",
    method: "bank",
    createdAt: "2023-05-01T09:45:00Z",
    updatedAt: "2023-05-01T09:45:00Z",
  },
  {
    id: "payment-004",
    tenantId: "tenant-004",
    leaseId: "lease-004",
    unitId: "unit-005",
    propertyId: "prop-002",
    amount: 3200,
    date: "2023-05-02T11:20:00Z",
    type: "rent",
    status: "completed",
    method: "credit",
    createdAt: "2023-05-02T11:20:00Z",
    updatedAt: "2023-05-02T11:20:00Z",
  },
  {
    id: "payment-005",
    tenantId: "tenant-005",
    leaseId: "lease-005",
    unitId: "unit-006",
    propertyId: "prop-003",
    amount: 2500,
    date: "2023-05-01T13:10:00Z",
    type: "rent",
    status: "completed",
    method: "bank",
    createdAt: "2023-05-01T13:10:00Z",
    updatedAt: "2023-05-01T13:10:00Z",
  },
  {
    id: "payment-006",
    tenantId: "tenant-006",
    leaseId: "lease-006",
    unitId: "unit-007",
    propertyId: "prop-004",
    amount: 4000,
    date: "2023-05-10T15:45:00Z",
    type: "rent",
    status: "pending",
    method: "check",
    notes: "Check in mail",
    createdAt: "2023-05-10T15:45:00Z",
    updatedAt: "2023-05-10T15:45:00Z",
  },
  {
    id: "payment-007",
    tenantId: "tenant-007",
    leaseId: "lease-007",
    unitId: "unit-008",
    propertyId: "prop-005",
    amount: 1900,
    date: "2023-05-01T10:30:00Z",
    type: "rent",
    status: "completed",
    method: "credit",
    createdAt: "2023-05-01T10:30:00Z",
    updatedAt: "2023-05-01T10:30:00Z",
  },
  {
    id: "payment-008",
    tenantId: "tenant-001",
    leaseId: "lease-001",
    unitId: "unit-001",
    propertyId: "prop-001",
    amount: 150,
    date: "2023-05-15T09:20:00Z",
    type: "fee",
    status: "completed",
    method: "credit",
    notes: "Late fee",
    createdAt: "2023-05-15T09:20:00Z",
    updatedAt: "2023-05-15T09:20:00Z",
  },
  {
    id: "payment-009",
    tenantId: "tenant-003",
    leaseId: "lease-003",
    unitId: "unit-004",
    propertyId: "prop-002",
    amount: 100,
    date: "2023-05-10T14:15:00Z",
    type: "other",
    status: "completed",
    method: "credit",
    notes: "Parking fee",
    createdAt: "2023-05-10T14:15:00Z",
    updatedAt: "2023-05-10T14:15:00Z",
  },
  {
    id: "payment-010",
    tenantId: "tenant-009",
    leaseId: "lease-009",
    unitId: "unit-003",
    propertyId: "prop-001",
    amount: 1500,
    date: "2023-05-15T11:45:00Z",
    type: "deposit",
    status: "completed",
    method: "bank",
    notes: "Security deposit",
    createdAt: "2023-05-15T11:45:00Z",
    updatedAt: "2023-05-15T11:45:00Z",
  },
  {
    id: "payment-011",
    tenantId: "tenant-010",
    leaseId: "lease-010",
    unitId: "unit-009",
    propertyId: "prop-006",
    amount: 2200,
    date: "2023-05-18T10:30:00Z",
    type: "deposit",
    status: "completed",
    method: "credit",
    notes: "Security deposit",
    createdAt: "2023-05-18T10:30:00Z",
    updatedAt: "2023-05-18T10:30:00Z",
  },
  {
    id: "payment-012",
    tenantId: "tenant-002",
    leaseId: "lease-002",
    unitId: "unit-002",
    propertyId: "prop-001",
    amount: 100,
    date: "2023-04-20T13:45:00Z",
    type: "fee",
    status: "completed",
    method: "credit",
    notes: "Pet fee",
    createdAt: "2023-04-20T13:45:00Z",
    updatedAt: "2023-04-20T13:45:00Z",
  },
]

// Function to get all payments
export function getPayments() {
  return payments
}

// Function to get a payment by ID
export function getPaymentById(id: string) {
  return payments.find((payment) => payment.id === id)
}

// Function to get payments by tenant ID
export function getPaymentsByTenantId(tenantId: string) {
  return payments.filter((payment) => payment.tenantId === tenantId)
}

// Function to get payments by property ID
export async function getPaymentsByPropertyId(propertyId: string): Promise<Payment[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 450))
  return payments.filter((payment) => payment.propertyId === propertyId)
}

// Function to get payments by lease ID
export async function getPaymentsByLeaseId(leaseId: string): Promise<Payment[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 350))
  return payments.filter((payment) => payment.leaseId === leaseId)
}

// Function to get recent payments
export function getRecentPayments(payments: Payment[], count = 5): Payment[] {
  return [...payments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count)
}

// Function to calculate total revenue
export function calculateTotalRevenue(payments: Payment[]): number {
  return payments
    .filter((payment) => payment.status === "completed")
    .reduce((total, payment) => total + payment.amount, 0)
}

// Function to calculate monthly revenue
export function calculateMonthlyRevenue(payments: Payment[]): { month: string; revenue: number }[] {
  const monthlyRevenue: Record<string, number> = {}

  payments
    .filter((payment) => payment.status === "completed")
    .forEach((payment) => {
      const date = new Date(payment.date)
      const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`

      if (!monthlyRevenue[monthYear]) {
        monthlyRevenue[monthYear] = 0
      }

      monthlyRevenue[monthYear] += payment.amount
    })

  return Object.entries(monthlyRevenue)
    .map(([month, revenue]) => ({ month, revenue }))
    .sort((a, b) => a.month.localeCompare(b.month))
}

// Function to get payment stats
export function getPaymentStats(): PaymentStats {
  const totalPayments = payments.length
  const paidPayments = payments.filter((payment) => payment.status === "paid").length
  const pendingPayments = payments.filter((payment) => payment.status === "pending").length
  const latePayments = payments.filter((payment) => payment.status === "late").length

  const totalAmount = payments.reduce((sum, payment) => sum + payment.amount, 0)
  const paidAmount = payments
    .filter((payment) => payment.status === "paid")
    .reduce((sum, payment) => sum + payment.amount, 0)
  const pendingAmount = payments
    .filter((payment) => payment.status === "pending")
    .reduce((sum, payment) => sum + payment.amount, 0)
  const lateAmount = payments
    .filter((payment) => payment.status === "late")
    .reduce((sum, payment) => sum + payment.amount, 0)

  return {
    totalPayments,
    paidPayments,
    pendingPayments,
    latePayments,
    totalAmount,
    paidAmount,
    pendingAmount,
    lateAmount,
  }
}

export default payments
