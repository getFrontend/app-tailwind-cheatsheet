"use client"

import { useSearchContext } from "@/components/search-provider"
import { Input } from "@/components/ui/input"
import { SearchIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Search() {
  const { searchQuery, setSearchQuery } = useSearchContext()

  return (
    <div className="relative w-64">
      <SearchIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search classes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-8 pr-8"
      />
      {searchQuery && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          onClick={() => setSearchQuery("")}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

