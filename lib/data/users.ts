import type { User } from "./types"

// Sample user data
const users: User[] = [
  {
    id: "user-001",
    firstName: "Admin",
    lastName: "User",
    email: "admin@propertypro.com",
    role: "admin",
    status: "active",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-05-15T10:30:00Z",
    lastLogin: "2023-05-19T08:45:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "user-002",
    firstName: "James",
    lastName: "Wilson",
    email: "james.wilson@propertypro.com",
    role: "landlord",
    status: "active",
    createdAt: "2023-01-10T09:15:00Z",
    updatedAt: "2023-05-12T14:20:00Z",
    lastLogin: "2023-05-18T16:30:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "user-003",
    firstName: "Maria",
    lastName: "Garcia",
    email: "maria.garcia@propertypro.com",
    role: "landlord",
    status: "active",
    createdAt: "2023-02-05T11:30:00Z",
    updatedAt: "2023-05-10T09:45:00Z",
    lastLogin: "2023-05-19T10:15:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "user-004",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "tenant",
    status: "active",
    createdAt: "2023-01-20T14:30:00Z",
    updatedAt: "2023-04-21T11:45:00Z",
    lastLogin: "2023-05-17T19:20:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "user-005",
    firstName: "Robert",
    lastName: "Johnson",
    email: "robert.johnson@propertypro.com",
    role: "maintenance",
    status: "active",
    createdAt: "2023-01-15T10:45:00Z",
    updatedAt: "2023-05-16T13:30:00Z",
    lastLogin: "2023-05-19T07:30:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "user-006",
    firstName: "Lisa",
    lastName: "Brown",
    email: "lisa.brown@propertypro.com",
    role: "maintenance",
    status: "active",
    createdAt: "2023-02-10T13:20:00Z",
    updatedAt: "2023-05-15T11:45:00Z",
    lastLogin: "2023-05-18T14:10:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "user-007",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    role: "tenant",
    status: "active",
    createdAt: "2023-03-01T10:15:00Z",
    updatedAt: "2023-05-10T09:30:00Z",
    lastLogin: "2023-05-16T20:45:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "user-008",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    role: "tenant",
    status: "active",
    createdAt: "2022-12-15T13:45:00Z",
    updatedAt: "2023-05-05T14:20:00Z",
    lastLogin: "2023-05-15T18:30:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "user-009",
    firstName: "David",
    lastName: "Lee",
    email: "david.lee@propertypro.com",
    role: "landlord",
    status: "inactive",
    createdAt: "2023-01-25T15:30:00Z",
    updatedAt: "2023-04-10T11:20:00Z",
    lastLogin: "2023-04-10T11:15:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "user-010",
    firstName: "Sarah",
    lastName: "Williams",
    email: "sarah.williams@propertypro.com",
    role: "admin",
    status: "active",
    createdAt: "2023-03-10T09:45:00Z",
    updatedAt: "2023-05-18T13:30:00Z",
    lastLogin: "2023-05-19T09:10:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "user-011",
    firstName: "Thomas",
    lastName: "Anderson",
    email: "thomas.anderson@example.com",
    role: "tenant",
    status: "pending",
    createdAt: "2023-05-10T11:45:00Z",
    updatedAt: "2023-05-10T11:45:00Z",
    lastLogin: null,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "user-012",
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    role: "tenant",
    status: "active",
    createdAt: "2023-04-05T09:30:00Z",
    updatedAt: "2023-05-12T10:15:00Z",
    lastLogin: "2023-05-18T12:45:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

// Function to get all users
export function getUsers() {
  return users
}

// Function to get a user by ID
export function getUserById(id: string) {
  return users.find((user) => user.id === id)
}

// Function to get users by role
export function getUsersByRole(role: string) {
  return users.filter((user) => user.role === role)
}

// Function to get users by status
export function getUsersByStatus(status: string) {
  return users.filter((user) => user.status === status)
}

// Function to get user stats
export function getUserStats() {
  const totalUsers = users.length
  const activeUsers = users.filter((user) => user.status === "active").length
  const inactiveUsers = users.filter((user) => user.status === "inactive").length
  const pendingUsers = users.filter((user) => user.status === "pending").length

  const roleBreakdown = {
    admin: users.filter((user) => user.role === "admin").length,
    landlord: users.filter((user) => user.role === "landlord").length,
    tenant: users.filter((user) => user.role === "tenant").length,
    maintenance: users.filter((user) => user.role === "maintenance").length,
  }

  return {
    totalUsers,
    activeUsers,
    inactiveUsers,
    pendingUsers,
    roleBreakdown,
  }
}

export default users
