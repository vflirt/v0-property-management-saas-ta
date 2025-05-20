// Import from the types file
import type {
  Property,
  PropertyStats,
  Unit,
  UnitStats,
  Tenant,
  TenantStats,
  Lease,
  LeaseStats,
  Payment,
  PaymentStats,
  MaintenanceRequest,
  MaintenanceStats,
  User,
  DashboardStats,
} from "@/lib/data/types"

// Import from individual data files
import properties, { getProperties, getPropertyById, getPropertyStats } from "@/lib/data/properties"

import units, { getUnits, getUnitById, getUnitsByPropertyId, getUnitStats } from "@/lib/data/units"

import tenants, {
  getTenants,
  getTenantById,
  getTenantsByPropertyId,
  getTenantsByUnitId,
  getTenantStats,
} from "@/lib/data/tenants"

import leases, {
  getLeases,
  getLeaseById,
  getLeasesByPropertyId,
  getLeasesByTenantId,
  getLeaseByTenantId,
  getFirstLeaseByTenantId,
  getLeasesByUnitId,
  getLeaseByUnitId,
  getLeaseStats,
} from "@/lib/data/leases"

import payments, {
  getPayments,
  getPaymentById,
  getPaymentsByTenantId,
  getPaymentsByUnitId,
  getPaymentStats,
} from "@/lib/data/payments"

import maintenanceRequests, {
  getMaintenanceRequests,
  getMaintenanceRequestById,
  getMaintenanceRequestsByPropertyId,
  getMaintenanceRequestsByTenantId,
  getMaintenanceRequestsByUnitId,
  getMaintenanceStats,
} from "@/lib/data/maintenance"

import users, { getUsers, getUserById } from "@/lib/data/users"

// Re-export all types
export type {
  Property,
  PropertyStats,
  Unit,
  UnitStats,
  Tenant,
  TenantStats,
  Lease,
  LeaseStats,
  Payment,
  PaymentStats,
  MaintenanceRequest,
  MaintenanceStats,
  User,
  DashboardStats,
}

// Re-export all data and functions
export {
  // Properties
  properties,
  getProperties,
  getPropertyById,
  getPropertyStats,
  // Units
  units,
  getUnits,
  getUnitById,
  getUnitsByPropertyId,
  getUnitStats,
  // Tenants
  tenants,
  getTenants,
  getTenantById,
  getTenantsByPropertyId,
  getTenantsByUnitId,
  getTenantStats,
  // Leases
  leases,
  getLeases,
  getLeaseById,
  getLeasesByPropertyId,
  getLeasesByTenantId,
  getLeaseByTenantId,
  getFirstLeaseByTenantId,
  getLeasesByUnitId,
  getLeaseByUnitId,
  getLeaseStats,
  // Payments
  payments,
  getPayments,
  getPaymentById,
  getPaymentsByTenantId,
  getPaymentsByUnitId,
  getPaymentStats,
  // Maintenance Requests
  maintenanceRequests,
  getMaintenanceRequests,
  getMaintenanceRequestById,
  getMaintenanceRequestsByPropertyId,
  getMaintenanceRequestsByTenantId,
  getMaintenanceRequestsByUnitId,
  getMaintenanceStats,
  // Users
  users,
  getUsers,
  getUserById,
}
