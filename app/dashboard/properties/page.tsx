import type { Metadata } from "next"
import PropertiesPageClient from "./PropertiesPageClient"

export const metadata: Metadata = {
  title: "Properties | Property Management SaaS",
  description: "Manage your properties",
}

export default function PropertiesPage() {
  return <PropertiesPageClient />
}
