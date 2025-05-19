import type { MaintenanceRequest, MaintenanceStats } from "./types"

// Sample maintenance request data
const maintenanceRequests: MaintenanceRequest[] = [
  {
    id: "maint-001",
    tenantId: "tenant-001",
    unitId: "unit-001",
    propertyId: "prop-001",
    title: "Leaking Faucet",
    description: "The kitchen faucet is leaking and causing water damage to the cabinet below.",
    priority: "medium",
    status: "in_progress",
    category: "plumbing",
    createdAt: "2023-05-10T09:30:00Z",
    updatedAt: "2023-05-11T14:15:00Z",
    assignedTo: "user-005",
    estimatedCost: 150,
  },
  {
    id: "maint-002",
    tenantId: "tenant-002",
    unitId: "unit-002",
    propertyId: "prop-001",
    title: "Broken Dishwasher",
    description: "Dishwasher is not draining properly and making loud noises during operation.",
    priority: "medium",
    status: "open",
    category: "appliance",
    createdAt: "2023-05-12T11:45:00Z",
    updatedAt: "2023-05-12T11:45:00Z",
    estimatedCost: 300,
  },
  {
    id: "maint-003",
    tenantId: "tenant-003",
    unitId: "unit-004",
    propertyId: "prop-002",
    title: "AC Not Working",
    description: "Air conditioning unit is not cooling the apartment. Current indoor temperature is 85°F.",
    priority: "high",
    status: "in_progress",
    category: "hvac",
    createdAt: "2023-05-15T10:20:00Z",
    updatedAt: "2023-05-15T15:30:00Z",
    assignedTo: "user-006",
    estimatedCost: 450,
  },
  {
    id: "maint-004",
    tenantId: "tenant-004",
    unitId: "unit-005",
    propertyId: "prop-002",
    title: "Ceiling Light Fixture Broken",
    description: "The ceiling light in the master bedroom is not working. Changing the bulb did not fix the issue.",
    priority: "low",
    status: "open",
    category: "electrical",
    createdAt: "2023-05-16T13:10:00Z",
    updatedAt: "2023-05-16T13:10:00Z",
    estimatedCost: 100,
  },
  {
    id: "maint-005",
    tenantId: "tenant-005",
    unitId: "unit-006",
    propertyId: "prop-003",
    title: "Garage Door Stuck",
    description: "The garage door is stuck halfway and won't open or close completely.",
    priority: "medium",
    status: "open",
    category: "structural",
    createdAt: "2023-05-17T09:45:00Z",
    updatedAt: "2023-05-17T09:45:00Z",
    estimatedCost: 200,
  },
  {
    id: "maint-006",
    tenantId: "tenant-006",
    unitId: "unit-007",
    propertyId: "prop-004",
    title: "Water Damage on Ceiling",
    description: "There's water damage on the ceiling of the conference room, possibly from a leak in the floor above.",
    priority: "high",
    status: "in_progress",
    category: "plumbing",
    createdAt: "2023-05-14T11:30:00Z",
    updatedAt: "2023-05-15T09:20:00Z",
    assignedTo: "user-005",
    estimatedCost: 800,
  },
  {
    id: "maint-007",
    tenantId: "tenant-007",
    unitId: "unit-008",
    propertyId: "prop-005",
    title: "Broken Window",
    description: "The window in the living room has a crack and needs to be replaced.",
    priority: "medium",
    status: "completed",
    category: "structural",
    createdAt: "2023-05-08T14:15:00Z",
    updatedAt: "2023-05-10T16:30:00Z",
    completedAt: "2023-05-10T16:30:00Z",
    assignedTo: "user-006",
    estimatedCost: 350,
    actualCost: 325,
  },
  {
    id: "maint-008",
    tenantId: "tenant-001",
    unitId: "unit-001",
    propertyId: "prop-001",
    title: "Refrigerator Not Cooling",
    description: "The refrigerator is not cooling properly. Food is spoiling.",
    priority: "high",
    status: "completed",
    category: "appliance",
    createdAt: "2023-05-05T10:45:00Z",
    updatedAt: "2023-05-07T13:20:00Z",
    completedAt: "2023-05-07T13:20:00Z",
    assignedTo: "user-005",
    estimatedCost: 250,
    actualCost: 275,
  },
  {
    id: "maint-009",
    tenantId: "tenant-003",
    unitId: "unit-004",
    propertyId: "prop-002",
    title: "Bathroom Fan Not Working",
    description: "The exhaust fan in the master bathroom is not working, causing humidity issues.",
    priority: "low",
    status: "open",
    category: "electrical",
    createdAt: "2023-05-18T09:30:00Z",
    updatedAt: "2023-05-18T09:30:00Z",
    estimatedCost: 120,
  },
  {
    id: "maint-010",
    tenantId: "tenant-010",
    unitId: "unit-009",
    propertyId: "prop-006",
    title: "Deck Railing Loose",
    description: "Several sections of the deck railing are loose and need to be secured.",
    priority: "medium",
    status: "open",
    category: "structural",
    createdAt: "2023-05-18T11:15:00Z",
    updatedAt: "2023-05-18T11:15:00Z",
    estimatedCost: 180,
  },
  {
    id: "maint-011",
    tenantId: "tenant-002",
    unitId: "unit-002",
    propertyId: "prop-001",
    title: "Smoke Detector Beeping",
    description: "The smoke detector in the hallway is beeping intermittently, likely needs a battery replacement.",
    priority: "low",
    status: "completed",
    category: "other",
    createdAt: "2023-05-16T15:30:00Z",
    updatedAt: "2023-05-17T10:45:00Z",
    completedAt: "2023-05-17T10:45:00Z",
    assignedTo: "user-005",
    estimatedCost: 30,
    actualCost: 25,
  },
  {
    id: "maint-012",
    tenantId: "tenant-004",
    unitId: "unit-005",
    propertyId: "prop-002",
    title: "Toilet Running Continuously",
    description: "The toilet in the guest bathroom runs continuously and needs to be fixed.",
    priority: "medium",
    status: "in_progress",
    category: "plumbing",
    createdAt: "2023-05-17T13:45:00Z",
    updatedAt: "2023-05-18T09:15:00Z",
    assignedTo: "user-006",
    estimatedCost: 120,
  },
]

// Function to get all maintenance requests
export function getMaintenanceRequests() {
  return maintenanceRequests
}

// Function to get a maintenance request by ID
export function getMaintenanceRequestById(id: string) {
  return maintenanceRequests.find((request) => request.id === id)
}

// Function to get maintenance requests by property ID
export function getMaintenanceRequestsByPropertyId(propertyId: string) {
  return maintenanceRequests.filter((request) => request.propertyId === propertyId)
}

// Function to get maintenance requests by tenant ID
export function getMaintenanceRequestsByTenantId(tenantId: string) {
  return maintenanceRequests.filter((request) => request.tenantId === tenantId)
}

// Function to get maintenance stats
export function getMaintenanceStats(): MaintenanceStats {
  const totalRequests = maintenanceRequests.length
  const openRequests = maintenanceRequests.filter((request) => request.status === "open").length
  const inProgressRequests = maintenanceRequests.filter((request) => request.status === "in-progress").length
  const completedRequests = maintenanceRequests.filter((request) => request.status === "completed").length

  const priorityBreakdown = {
    low: maintenanceRequests.filter((request) => request.priority === "low").length,
    medium: maintenanceRequests.filter((request) => request.priority === "medium").length,
    high: maintenanceRequests.filter((request) => request.priority === "high").length,
    emergency: maintenanceRequests.filter((request) => request.priority === "emergency").length,
  }

  return {
    totalRequests,
    openRequests,
    inProgressRequests,
    completedRequests,
    priorityBreakdown,
  }
}

export default maintenanceRequests
