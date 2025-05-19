import type { Property, PropertyStats } from "./types"

// Sample property data
const properties: Property[] = [
  {
    id: "prop-001",
    name: "Sunset Apartments",
    address: "123 Sunset Blvd",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90210",
    type: "apartment",
    units: 24,
    occupancyRate: 0.92,
    totalRent: 45600,
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-01-15T08:00:00Z",
    updatedAt: "2023-04-20T14:30:00Z",
  },
  {
    id: "prop-002",
    name: "Harbor View Condos",
    address: "456 Ocean Drive",
    city: "Miami",
    state: "FL",
    zipCode: "33139",
    type: "condo",
    units: 12,
    occupancyRate: 0.83,
    totalRent: 28800,
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-02-10T10:15:00Z",
    updatedAt: "2023-05-05T09:45:00Z",
  },
  {
    id: "prop-003",
    name: "Maple Street Houses",
    address: "789 Maple Street",
    city: "Portland",
    state: "OR",
    zipCode: "97205",
    type: "house",
    units: 6,
    occupancyRate: 1.0,
    totalRent: 15000,
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-03-05T11:30:00Z",
    updatedAt: "2023-04-28T16:20:00Z",
  },
  {
    id: "prop-004",
    name: "Downtown Office Building",
    address: "101 Main Street",
    city: "Chicago",
    state: "IL",
    zipCode: "60601",
    type: "commercial",
    units: 8,
    occupancyRate: 0.75,
    totalRent: 32000,
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-01-20T09:45:00Z",
    updatedAt: "2023-05-10T13:15:00Z",
  },
  {
    id: "prop-005",
    name: "Riverside Apartments",
    address: "222 River Road",
    city: "Austin",
    state: "TX",
    zipCode: "78701",
    type: "apartment",
    units: 18,
    occupancyRate: 0.89,
    totalRent: 34200,
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-02-25T14:20:00Z",
    updatedAt: "2023-05-15T10:30:00Z",
  },
  {
    id: "prop-006",
    name: "Mountain View Cabins",
    address: "333 Mountain Road",
    city: "Denver",
    state: "CO",
    zipCode: "80202",
    type: "house",
    units: 10,
    occupancyRate: 0.7,
    totalRent: 22000,
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2023-03-15T12:10:00Z",
    updatedAt: "2023-05-12T15:45:00Z",
  },
]

// Function to get all properties
export function getProperties() {
  return properties
}

// Function to get a property by ID
export function getPropertyById(id: string) {
  return properties.find((property) => property.id === id)
}

// Function to get property stats
export function getPropertyStats(): PropertyStats {
  const totalProperties = properties.length
  const totalUnits = properties.reduce((sum, property) => sum + property.units, 0)
  const occupiedUnits = properties.reduce((sum, property) => sum + property.units * property.occupancyRate, 0)
  const vacantUnits = totalUnits - occupiedUnits
  const occupancyRate = totalUnits > 0 ? (occupiedUnits / totalUnits) * 100 : 0

  return {
    totalProperties,
    totalUnits,
    occupiedUnits,
    vacantUnits,
    occupancyRate,
  }
}

export default properties
