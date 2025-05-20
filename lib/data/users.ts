import type { User } from "@/lib/data/types"

// Sample user data
const users: User[] = [
  {
    id: "user-001",
    firstName: "Admin",
    lastName: "User",
    email: "admin@propertypulse.com",
    role: "admin",
    status: "active",
    createdAt: "2022-12-01T10:00:00Z",
    updatedAt: "2023-01-15T14:30:00Z",
    lastLogin: "2023-05-10T09:15:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "user-002",
    firstName: "Property",
    lastName: "Manager",
    email: "manager@propertypulse.com",
    role: "landlord",
    status: "active",
    createdAt: "2022-12-05T11:30:00Z",
    updatedAt: "2023-02-10T16:45:00Z",
    lastLogin: "2023-05-09T13:20:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "user-101",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "tenant",
    status: "active",
    createdAt: "2022-12-15T14:30:00Z",
    updatedAt: "2023-01-01T10:00:00Z",
    lastLogin: "2023-05-08T19:45:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "user-102",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    role: "tenant",
    status: "active",
    createdAt: "2023-01-20T11:15:00Z",
    updatedAt: "2023-02-01T09:30:00Z",
    lastLogin: "2023-05-10T08:30:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "user-103",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    role: "tenant",
    status: "active",
    createdAt: "2023-01-05T16:45:00Z",
    updatedAt: "2023-01-15T13:20:00Z",
    lastLogin: "2023-05-09T20:15:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "user-201",
    firstName: "Robert",
    lastName: "Brown",
    email: "robert.brown@propertypulse.com",
    role: "maintenance",
    status: "active",
    createdAt: "2022-12-10T09:00:00Z",
    updatedAt: "2023-03-15T11:30:00Z",
    lastLogin: "2023-05-10T07:45:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "user-202",
    firstName: "Sarah",
    lastName: "Davis",
    email: "sarah.davis@propertypulse.com",
    role: "maintenance",
    status: "active",
    createdAt: "2023-01-10T13:45:00Z",
    updatedAt: "2023-04-05T10:15:00Z",
    lastLogin: "2023-05-09T16:30:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "user-203",
    firstName: "James",
    lastName: "Wilson",
    email: "james.wilson@propertypulse.com",
    role: "maintenance",
    status: "inactive",
    createdAt: "2022-11-15T10:30:00Z",
    updatedAt: "2023-04-20T15:45:00Z",
    lastLogin: "2023-04-15T11:20:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "user-204",
    firstName: "Emily",
    lastName: "Taylor",
    email: "emily.taylor@propertypulse.com",
    role: "maintenance",
    status: "active",
    createdAt: "2023-02-20T09:15:00Z",
    updatedAt: "2023-04-10T14:00:00Z",
    lastLogin: "2023-05-10T10:30:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "user-205",
    firstName: "David",
    lastName: "Martinez",
    email: "david.martinez@propertypulse.com",
    role: "maintenance",
    status: "active",
    createdAt: "2023-03-05T11:45:00Z",
    updatedAt: "2023-04-25T13:30:00Z",
    lastLogin: "2023-05-09T09:15:00Z",
    avatar: "/placeholder.svg?height=100&width=100",
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

export default users
