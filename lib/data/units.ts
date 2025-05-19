import type { Unit, UnitStats } from "./types"

// Sample unit data
const units: Unit[] = [
  {
    id: "unit-001",
    propertyId: "prop-001",
    unitNumber: "101",
    type: "1BR",
    squareFeet: 750,
    rent: 1800,
    status: "occupied",
    bedrooms: 1,
    bathrooms: 1,
    features: ["balcony", "updated kitchen", "hardwood floors"],
    createdAt: "2023-01-16T09:30:00Z",
    updatedAt: "2023-04-21T11:45:00Z",
  },
  {
    id: "unit-002",
    propertyId: "prop-001",
    unitNumber: "102",
    type: "2BR",
    squareFeet: 950,
    rent: 2200,
    status: "occupied",
    bedrooms: 2,
    bathrooms: 1,
    features: ["corner unit", "washer/dryer", "pet friendly"],
    createdAt: "2023-01-16T10:15:00Z",
    updatedAt: "2023-04-22T13:20:00Z",
  },
  {
    id: "unit-003",
    propertyId: "prop-001",
    unitNumber: "103",
    type: "studio",
    squareFeet: 550,
    rent: 1500,
    status: "vacant",
    bedrooms: 0,
    bathrooms: 1,
    features: ["city view", "updated bathroom", "granite countertops"],
    createdAt: "2023-01-17T08:45:00Z",
    updatedAt: "2023-05-01T15:10:00Z",
  },
  {
    id: "unit-004",
    propertyId: "prop-002",
    unitNumber: "201",
    type: "2BR",
    squareFeet: 1100,
    rent: 2600,
    status: "occupied",
    bedrooms: 2,
    bathrooms: 2,
    features: ["ocean view", "balcony", "modern appliances"],
    createdAt: "2023-02-11T11:30:00Z",
    updatedAt: "2023-05-06T10:15:00Z",
  },
  {
    id: "unit-005",
    propertyId: "prop-002",
    unitNumber: "202",
    type: "3BR",
    squareFeet: 1400,
    rent: 3200,
    status: "occupied",
    bedrooms: 3,
    bathrooms: 2,
    features: ["corner unit", "ocean view", "renovated kitchen"],
    createdAt: "2023-02-11T12:45:00Z",
    updatedAt: "2023-05-07T09:30:00Z",
  },
  {
    id: "unit-006",
    propertyId: "prop-003",
    unitNumber: "A",
    type: "3BR",
    squareFeet: 1800,
    rent: 2500,
    status: "occupied",
    bedrooms: 3,
    bathrooms: 2.5,
    features: ["backyard", "garage", "fireplace"],
    createdAt: "2023-03-06T13:15:00Z",
    updatedAt: "2023-04-29T14:40:00Z",
  },
  {
    id: "unit-007",
    propertyId: "prop-004",
    unitNumber: "Suite 101",
    type: "commercial",
    squareFeet: 2500,
    rent: 4000,
    status: "occupied",
    bedrooms: 0,
    bathrooms: 1,
    features: ["reception area", "conference room", "kitchenette"],
    createdAt: "2023-01-21T10:30:00Z",
    updatedAt: "2023-05-11T11:45:00Z",
  },
  {
    id: "unit-008",
    propertyId: "prop-005",
    unitNumber: "301",
    type: "2BR",
    squareFeet: 1050,
    rent: 1900,
    status: "occupied",
    bedrooms: 2,
    bathrooms: 2,
    features: ["river view", "fitness center access", "stainless appliances"],
    createdAt: "2023-02-26T15:10:00Z",
    updatedAt: "2023-05-16T09:20:00Z",
  },
  {
    id: "unit-009",
    propertyId: "prop-006",
    unitNumber: "Cabin 1",
    type: "2BR",
    squareFeet: 1200,
    rent: 2200,
    status: "vacant",
    bedrooms: 2,
    bathrooms: 1,
    features: ["mountain view", "deck", "wood stove"],
    createdAt: "2023-03-16T13:45:00Z",
    updatedAt: "2023-05-13T16:30:00Z",
  },
  {
    id: "unit-010",
    propertyId: "prop-001",
    unitNumber: "104",
    type: "1BR",
    squareFeet: 780,
    rent: 1850,
    status: "maintenance",
    bedrooms: 1,
    bathrooms: 1,
    features: ["pool view", "updated flooring", "dishwasher"],
    createdAt: "2023-01-17T09:30:00Z",
    updatedAt: "2023-04-25T10:15:00Z",
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
