"use client"

import type { TailwindCategory } from "@/lib/tailwind-data"
import { cn } from "@/lib/utils"

interface CategoryNavProps {
  categories: TailwindCategory[]
  selectedCategory: string
  onSelectCategory: (id: string) => void
}

export function CategoryNav({ categories, selectedCategory, onSelectCategory }: CategoryNavProps) {
  return (
    <nav className="px-4 py-2">
      <ul className="space-y-1">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onSelectCategory(category.id)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors",
                selectedCategory === category.id ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

