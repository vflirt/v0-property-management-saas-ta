// Re-export all data functions
export { getProperties, getPropertyById, getPropertyStats } from "./properties"
export { getUnits, getUnitById, getUnitsByPropertyId, getUnitStats } from "./units"
export { getTenants, getTenantById, getTenantsByPropertyId, getTenantStats } from "./tenants"
export { getLeases, getLeaseById, getLeasesByPropertyId, getLeaseByTenantId, getLeaseStats } from "./leases"
export { getPayments, getPaymentById, getPaymentsByTenantId, getPaymentStats } from "./payments"
export {
  getMaintenanceRequests,
  getMaintenanceRequestById,
  getMaintenanceRequestsByPropertyId,
  getMaintenanceRequestsByTenantId,
  getMaintenanceStats,
} from "./maintenance"
export { getUsers, getUserById, getUsersByRole, getUsersByStatus, getUserStats } from "./users"

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
