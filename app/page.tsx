import type { Metadata } from "next"
import CheatsheetLayout from "@/components/cheatsheet-layout"
import { SearchProvider } from "@/components/search-provider"

export const metadata: Metadata = {
  title: "Tailwind CSS v4.0 Cheatsheet",
  description: "A comprehensive reference tool for Tailwind CSS v4.0 utility classes",
}

export default function Home() {
  return (
    <SearchProvider>
      <CheatsheetLayout />
    </SearchProvider>
  )
}