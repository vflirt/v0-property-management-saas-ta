import type { MaintenanceRequest, MaintenanceStats } from "@/lib/data/types"

// Sample maintenance request data
const maintenanceRequests: MaintenanceRequest[] = [
  {
    id: "maint-001",
    tenantId: "tenant-001",
    propertyId: "prop-001",
    unitId: "unit-001",
    title: "Leaking faucet in kitchen",
    description: "The kitchen sink faucet is leaking steadily. Water is pooling in the sink basin.",
    category: "plumbing",
    priority: "medium",
    status: "completed",
    assignedTo: "user-201",
    images: ["/placeholder.svg?height=100&width=100"],
    createdAt: "2023-01-15T09:30:00Z",
    updatedAt: "2023-01-18T14:45:00Z",
    completedAt: "2023-01-18T14:45:00Z",
  },
  {
    id: "maint-002",
    tenantId: "tenant-001",
    propertyId: "prop-001",
    unitId: "unit-001",
    title: "Bathroom light fixture not working",
    description: "The light fixture in the main bathroom doesn't turn on. I've tried replacing the bulb.",
    category: "electrical",
    priority: "medium",
    status: "open",
    assignedTo: null,
    images: ["/placeholder.svg?height=100&width=100"],
    createdAt: "2023-04-20T16:15:00Z",
    updatedAt: "2023-04-20T16:15:00Z",
    completedAt: null,
  },
  {
    id: "maint-003",
    tenantId: "tenant-002",
    propertyId: "prop-001",
    unitId: "unit-003",
    title: "Refrigerator not cooling properly",
    description: "The refrigerator isn't keeping food cold enough. The temperature setting is at maximum.",
    category: "appliance",
    priority: "high",
    status: "in-progress",
    assignedTo: "user-202",
    images: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
    createdAt: "2023-04-18T10:00:00Z",
    updatedAt: "2023-04-19T11:30:00Z",
    completedAt: null,
  },
  {
    id: "maint-004",
    tenantId: "tenant-003",
    propertyId: "prop-002",
    unitId: "unit-004",
    title: "Ceiling fan making noise",
    description: "The ceiling fan in the living room makes a loud rattling noise when on high speed.",
    category: "electrical",
    priority: "low",
    status: "completed",
    assignedTo: "user-203",
    images: ["/placeholder.svg?height=100&width=100"],
    createdAt: "2023-03-05T14:20:00Z",
    updatedAt: "2023-03-10T09:45:00Z",
    completedAt: "2023-03-10T09:45:00Z",
  },
  {
    id: "maint-005",
    tenantId: "tenant-003",
    propertyId: "prop-002",
    unitId: "unit-004",
    title: "Dishwasher leaking",
    description: "Water leaks from the bottom of the dishwasher during the wash cycle.",
    category: "appliance",
    priority: "medium",
    status: "open",
    assignedTo: null,
    images: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
    createdAt: "2023-05-02T13:10:00Z",
    updatedAt: "2023-05-02T13:10:00Z",
    completedAt: null,
  },
  {
    id: "maint-006",
    tenantId: "tenant-004",
    propertyId: "prop-003",
    unitId: "unit-006",
    title: "Broken window latch",
    description: "The latch on the living room window is broken, making it difficult to secure the window.",
    category: "structural",
    priority: "medium",
    status: "completed",
    assignedTo: "user-201",
    images: ["/placeholder.svg?height=100&width=100"],
    createdAt: "2023-04-10T11:30:00Z",
    updatedAt: "2023-04-12T15:20:00Z",
    completedAt: "2023-04-12T15:20:00Z",
  },
  {
    id: "maint-007",
    tenantId: "tenant-005",
    propertyId: "prop-003",
    unitId: "unit-007",
    title: "HVAC not heating properly",
    description:
      "The heating system isn't warming the house effectively. It runs but doesn't reach the set temperature.",
    category: "hvac",
    priority: "high",
    status: "in-progress",
    assignedTo: "user-204",
    images: ["/placeholder.svg?height=100&width=100"],
    createdAt: "2023-04-25T09:45:00Z",
    updatedAt: "2023-04-26T14:00:00Z",
    completedAt: null,
  },
  {
    id: "maint-008",
    tenantId: "tenant-006",
    propertyId: "prop-004",
    unitId: "unit-008",
    title: "Office door won't lock",
    description: "The main office door lock is not engaging properly. Security concern.",
    category: "structural",
    priority: "high",
    status: "completed",
    assignedTo: "user-205",
    images: ["/placeholder.svg?height=100&width=100"],
    createdAt: "2023-04-15T08:30:00Z",
    updatedAt: "2023-04-15T14:45:00Z",
    completedAt: "2023-04-15T14:45:00Z",
  },
  {
    id: "maint-009",
    tenantId: "tenant-007",
    propertyId: "prop-005",
    unitId: "unit-010",
    title: "Water stain on ceiling",
    description: "There's a growing water stain on the bathroom ceiling, possibly from the unit above.",
    category: "plumbing",
    priority: "emergency",
    status: "in-progress",
    assignedTo: "user-202",
    images: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
    createdAt: "2023-05-05T07:15:00Z",
    updatedAt: "2023-05-05T08:30:00Z",
    completedAt: null,
  },
  {
    id: "maint-010",
    tenantId: "tenant-002",
    propertyId: "prop-001",
    unitId: "unit-003",
    title: "Garbage disposal jammed",
    description: "The kitchen garbage disposal is making a humming noise but not spinning.",
    category: "appliance",
    priority: "low",
    status: "open",
    assignedTo: null,
    images: ["/placeholder.svg?height=100&width=100"],
    createdAt: "2023-05-10T10:00:00Z",
    updatedAt: "2023-05-10T10:00:00Z",
    completedAt: null,
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

export function getMaintenanceRequestsByUnitId(unitId: string) {
  // Add a delay to simulate loading from a database
  return new Promise<MaintenanceRequest | undefined>((resolve) => {
    setTimeout(() => {
      maintenanceRequest = maintenanceRequests.find((maintenanceRequests) => maintenanceRequest.unitId === unitId)

      resolve(maintenanceRequest)
    }, 1200)
  })
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
