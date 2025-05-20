import type { Payment, PaymentStats } from "@/lib/data/types"

// Sample payment data
const payments: Payment[] = [
  {
    id: "payment-001",
    tenantId: "tenant-001",
    leaseId: "lease-001",
    unitId: "unit-001",
    amount: 1500,
    type: "rent",
    method: "bank",
    status: "paid",
    dueDate: "2023-01-01T00:00:00Z",
    paidDate: "2023-01-01T10:30:00Z",
    notes: "January rent",
    createdAt: "2022-12-25T14:00:00Z",
    updatedAt: "2023-01-01T10:30:00Z",
  },
  {
    id: "payment-002",
    tenantId: "tenant-001",
    leaseId: "lease-001",
    unitId: "unit-001",
    amount: 1500,
    type: "rent",
    method: "bank",
    status: "paid",
    dueDate: "2023-02-01T00:00:00Z",
    paidDate: "2023-02-01T09:15:00Z",
    notes: "February rent",
    createdAt: "2023-01-25T16:30:00Z",
    updatedAt: "2023-02-01T09:15:00Z",
  },
  {
    id: "payment-003",
    tenantId: "tenant-001",
    leaseId: "lease-001",
    unitId: "unit-001",
    amount: 1500,
    type: "rent",
    method: "bank",
    status: "paid",
    dueDate: "2023-03-01T00:00:00Z",
    paidDate: "2023-03-01T11:45:00Z",
    notes: "March rent",
    createdAt: "2023-02-25T10:00:00Z",
    updatedAt: "2023-03-01T11:45:00Z",
  },
  {
    id: "payment-004",
    tenantId: "tenant-001",
    leaseId: "lease-001",
    unitId: "unit-001",
    amount: 1500,
    type: "rent",
    method: "credit",
    status: "paid",
    dueDate: "2023-04-01T00:00:00Z",
    paidDate: "2023-04-01T14:20:00Z",
    notes: "April rent",
    createdAt: "2023-03-25T09:30:00Z",
    updatedAt: "2023-04-01T14:20:00Z",
  },
  {
    id: "payment-005",
    tenantId: "tenant-001",
    leaseId: "lease-001",
    unitId: "unit-001",
    amount: 1500,
    type: "rent",
    method: "bank",
    status: "pending",
    dueDate: "2023-05-01T00:00:00Z",
    paidDate: null,
    notes: "May rent",
    createdAt: "2023-04-25T15:45:00Z",
    updatedAt: "2023-04-25T15:45:00Z",
  },
  {
    id: "payment-006",
    tenantId: "tenant-002",
    leaseId: "lease-002",
    unitId: "unit-003",
    amount: 1200,
    type: "rent",
    method: "credit",
    status: "paid",
    dueDate: "2023-02-01T00:00:00Z",
    paidDate: "2023-02-01T13:10:00Z",
    notes: "February rent",
    createdAt: "2023-01-25T11:30:00Z",
    updatedAt: "2023-02-01T13:10:00Z",
  },
  {
    id: "payment-007",
    tenantId: "tenant-002",
    leaseId: "lease-002",
    unitId: "unit-003",
    amount: 1200,
    type: "rent",
    method: "credit",
    status: "paid",
    dueDate: "2023-03-01T00:00:00Z",
    paidDate: "2023-03-01T10:05:00Z",
    notes: "March rent",
    createdAt: "2023-02-25T14:20:00Z",
    updatedAt: "2023-03-01T10:05:00Z",
  },
  {
    id: "payment-008",
    tenantId: "tenant-002",
    leaseId: "lease-002",
    unitId: "unit-003",
    amount: 1200,
    type: "rent",
    method: "credit",
    status: "paid",
    dueDate: "2023-04-01T00:00:00Z",
    paidDate: "2023-04-01T16:30:00Z",
    notes: "April rent",
    createdAt: "2023-03-25T13:45:00Z",
    updatedAt: "2023-04-01T16:30:00Z",
  },
  {
    id: "payment-009",
    tenantId: "tenant-002",
    leaseId: "lease-002",
    unitId: "unit-003",
    amount: 1200,
    type: "rent",
    method: "credit",
    status: "late",
    dueDate: "2023-05-01T00:00:00Z",
    paidDate: null,
    notes: "May rent - late notice sent",
    createdAt: "2023-04-25T09:15:00Z",
    updatedAt: "2023-05-05T14:30:00Z",
  },
  {
    id: "payment-010",
    tenantId: "tenant-003",
    leaseId: "lease-003",
    unitId: "unit-004",
    amount: 2500,
    type: "rent",
    method: "bank",
    status: "paid",
    dueDate: "2023-02-01T00:00:00Z",
    paidDate: "2023-01-30T11:20:00Z",
    notes: "February rent",
    createdAt: "2023-01-25T10:00:00Z",
    updatedAt: "2023-01-30T11:20:00Z",
  },
  {
    id: "payment-011",
    tenantId: "tenant-003",
    leaseId: "lease-003",
    unitId: "unit-004",
    amount: 2500,
    type: "rent",
    method: "bank",
    status: "paid",
    dueDate: "2023-03-01T00:00:00Z",
    paidDate: "2023-02-28T14:45:00Z",
    notes: "March rent",
    createdAt: "2023-02-25T09:30:00Z",
    updatedAt: "2023-02-28T14:45:00Z",
  },
  {
    id: "payment-012",
    tenantId: "tenant-003",
    leaseId: "lease-003",
    unitId: "unit-004",
    amount: 2500,
    type: "rent",
    method: "bank",
    status: "paid",
    dueDate: "2023-04-01T00:00:00Z",
    paidDate: "2023-03-31T10:15:00Z",
    notes: "April rent",
    createdAt: "2023-03-25T13:00:00Z",
    updatedAt: "2023-03-31T10:15:00Z",
  },
  {
    id: "payment-013",
    tenantId: "tenant-003",
    leaseId: "lease-003",
    unitId: "unit-004",
    amount: 2500,
    type: "rent",
    method: "bank",
    status: "paid",
    dueDate: "2023-05-01T00:00:00Z",
    paidDate: "2023-04-30T15:30:00Z",
    notes: "May rent",
    createdAt: "2023-04-25T11:45:00Z",
    updatedAt: "2023-04-30T15:30:00Z",
  },
  {
    id: "payment-014",
    tenantId: "tenant-004",
    leaseId: "lease-004",
    unitId: "unit-006",
    amount: 2800,
    type: "rent",
    method: "check",
    status: "paid",
    dueDate: "2023-04-01T00:00:00Z",
    paidDate: "2023-04-03T14:00:00Z",
    notes: "April rent",
    createdAt: "2023-03-25T10:30:00Z",
    updatedAt: "2023-04-03T14:00:00Z",
  },
  {
    id: "payment-015",
    tenantId: "tenant-004",
    leaseId: "lease-004",
    unitId: "unit-006",
    amount: 2800,
    type: "rent",
    method: "check",
    status: "pending",
    dueDate: "2023-05-01T00:00:00Z",
    paidDate: null,
    notes: "May rent",
    createdAt: "2023-04-25T09:00:00Z",
    updatedAt: "2023-04-25T09:00:00Z",
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

export function getPaymentsByUnitId(unitId: string) {
  return payments.filter((payment) => payment.unitId === unitId)
}

export function getPaymentsByLease(leaseId: string) {
  return payments.filter((payment) => payment.leaseId === leaseId)
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
