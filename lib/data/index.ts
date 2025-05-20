// Re-export all data functions
export * from "./types"
export * from "./properties"
export * from "./units"
export * from "./tenants"
export * from "./leases"
export * from "./payments"
export * from "./maintenance"
export * from "./users"

// Import functions for backward compatibility
import { getPropertyById } from "./properties"
import { getUnitsByPropertyId } from "./units"
import { getTenantsByPropertyId } from "./tenants"
import { getLeasesByPropertyId, getLeaseByTenantId } from "./leases"
import { getMaintenanceRequestsByPropertyId, getMaintenanceRequestsByTenantId } from "./maintenance"
import { getTenantById } from "./tenants"
import { getUnitById } from "./units"
import { getPaymentsByTenantId } from "./payments"

// Alias exports for backward compatibility
export const loadPropertyById = getPropertyById
export const loadUnitsByPropertyId = getUnitsByPropertyId
export const loadTenantsByPropertyId = getTenantsByPropertyId
export const loadLeasesByPropertyId = getLeasesByPropertyId
export const loadMaintenanceRequestsByPropertyId = getMaintenanceRequestsByPropertyId
export const loadTenantById = getTenantById
export const loadUnitById = getUnitById
export const loadLeaseByTenantId = getLeaseByTenantId
export const loadPaymentsByTenantId = getPaymentsByTenantId
export const loadMaintenanceRequestsByTenantId = getMaintenanceRequestsByTenantId

// Dashboard stats
import { getPropertyStats } from "./properties"
import { getUnitStats } from "./units"
import { getTenantStats } from "./tenants"
import { getLeaseStats } from "./leases"
import { getPaymentStats } from "./payments"
import { getMaintenanceStats } from "./maintenance"
import type { DashboardStats } from "./types"

// Function to get all dashboard stats
export async function getDashboardStats(): Promise<DashboardStats> {
  const [propertyStats, unitStats, tenantStats, leaseStats, paymentStats, maintenanceStats] = await Promise.all([
    getPropertyStats(),
    getUnitStats(),
    getTenantStats(),
    getLeaseStats(),
    getPaymentStats(),
    getMaintenanceStats(),
  ])

  return {
    totalProperties: propertyStats.totalProperties,
    totalUnits: unitStats.totalUnits,
    totalTenants: tenantStats.totalTenants,
    occupancyRate: unitStats.occupancyRate,
    rentCollected: paymentStats.totalCollected,
    rentOutstanding: paymentStats.totalPending,
    maintenanceRequests: maintenanceStats.totalRequests,
    leaseRenewals: leaseStats.expiringSoon,
  }
}
