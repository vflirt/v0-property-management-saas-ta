import type { Metadata } from "next"
import AnalyticsPageClient from "./AnalyticsPageClient"

export const metadata: Metadata = {
  title: "Analytics | Property Management SaaS",
  description: "Analytics dashboard for property management",
}

export default function AnalyticsPage() {
  return <AnalyticsPageClient />
}
