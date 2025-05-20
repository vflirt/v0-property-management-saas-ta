import type { Unit, UnitStats } from "@/lib/data/types"

// Sample unit data
const units: Unit[] = [
  {
    id: "unit-001",
    propertyId: "prop-001",
    unitNumber: "101",
    type: "1BR",
    status: "occupied",
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 750,
    rent: 1500,
    deposit: 1500,
    features: ["balcony", "updated kitchen", "hardwood floors"],
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-01-20T10:00:00Z",
    updatedAt: "2023-04-15T14:30:00Z",
  },
  {
    id: "unit-002",
    propertyId: "prop-001",
    unitNumber: "102",
    type: "2BR",
    status: "vacant",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1050,
    rent: 2200,
    deposit: 2200,
    features: ["corner unit", "updated appliances", "walk-in closet"],
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-01-20T10:15:00Z",
    updatedAt: "2023-05-01T11:45:00Z",
  },
  {
    id: "unit-003",
    propertyId: "prop-001",
    unitNumber: "103",
    type: "studio",
    status: "occupied",
    bedrooms: 0,
    bathrooms: 1,
    squareFeet: 550,
    rent: 1200,
    deposit: 1200,
    features: ["city view", "modern design"],
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-01-20T10:30:00Z",
    updatedAt: "2023-03-10T16:20:00Z",
  },
  {
    id: "unit-004",
    propertyId: "prop-002",
    unitNumber: "201",
    type: "2BR",
    status: "occupied",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1100,
    rent: 2500,
    deposit: 2500,
    features: ["ocean view", "renovated", "granite countertops"],
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-02-15T09:00:00Z",
    updatedAt: "2023-04-25T13:10:00Z",
  },
  {
    id: "unit-005",
    propertyId: "prop-002",
    unitNumber: "202",
    type: "3BR",
    status: "maintenance",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1400,
    rent: 3200,
    deposit: 3200,
    features: ["corner unit", "large balcony", "walk-in closets"],
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-02-15T09:30:00Z",
    updatedAt: "2023-05-05T15:40:00Z",
  },
  {
    id: "unit-006",
    propertyId: "prop-003",
    unitNumber: "A",
    type: "3BR",
    status: "occupied",
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1800,
    rent: 2800,
    deposit: 2800,
    features: ["backyard", "garage", "fireplace"],
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-03-10T11:00:00Z",
    updatedAt: "2023-04-30T10:15:00Z",
  },
  {
    id: "unit-007",
    propertyId: "prop-003",
    unitNumber: "B",
    type: "2BR",
    status: "occupied",
    bedrooms: 2,
    bathrooms: 1.5,
    squareFeet: 1400,
    rent: 2200,
    deposit: 2200,
    features: ["updated kitchen", "patio", "storage"],
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-03-10T11:30:00Z",
    updatedAt: "2023-05-02T14:50:00Z",
  },
  {
    id: "unit-008",
    propertyId: "prop-004",
    unitNumber: "Suite 101",
    type: "commercial",
    status: "occupied",
    bedrooms: 0,
    bathrooms: 1,
    squareFeet: 1200,
    rent: 3500,
    deposit: 7000,
    features: ["reception area", "conference room", "kitchenette"],
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-01-25T13:45:00Z",
    updatedAt: "2023-04-15T09:30:00Z",
  },
  {
    id: "unit-009",
    propertyId: "prop-004",
    unitNumber: "Suite 102",
    type: "commercial",
    status: "vacant",
    bedrooms: 0,
    bathrooms: 2,
    squareFeet: 1800,
    rent: 5200,
    deposit: 10400,
    features: ["corner office", "large windows", "private entrance"],
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-01-25T14:00:00Z",
    updatedAt: "2023-05-10T11:20:00Z",
  },
  {
    id: "unit-010",
    propertyId: "prop-005",
    unitNumber: "301",
    type: "1BR",
    status: "occupied",
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 800,
    rent: 1700,
    deposit: 1700,
    features: ["river view", "fitness center access", "in-unit laundry"],
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-03-01T10:30:00Z",
    updatedAt: "2023-05-12T16:45:00Z",
  },
]

// Function to get all units
export function getUnits() {
  return units
}

// Function to get a unit by ID
export function getUnitById(id: string) {
  return units.find((unit) => unit.id === id)
}

// Function to get units by property ID
export function getUnitsByPropertyId(propertyId: string) {
  return units.filter((unit) => unit.propertyId === propertyId)
}

// Function to get unit stats
export function getUnitStats(): UnitStats {
  const totalUnits = units.length
  const occupiedUnits = units.filter((unit) => unit.status === "occupied").length
  const vacantUnits = units.filter((unit) => unit.status === "vacant").length
  const maintenanceUnits = units.filter((unit) => unit.status === "maintenance").length
  const occupancyRate = totalUnits > 0 ? (occupiedUnits / totalUnits) * 100 : 0

  return {
    totalUnits,
    occupiedUnits,
    vacantUnits,
    maintenanceUnits,
    occupancyRate,
  }
}

export default units
