"use client"

import type { TailwindClass } from "@/lib/tailwind-data"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface ClassListProps {
  classes: TailwindClass[]
  selectedClass: string | null
  onSelectClass: (className: string) => void
}

export function ClassList({ classes, selectedClass, onSelectClass }: ClassListProps) {
  if (classes.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">No classes found</div>
  }

  return (
    <div className="space-y-2">
      {classes.map((classItem) => (
        <div
          key={classItem.name}
          className={cn(
            "p-3 rounded-lg border cursor-pointer transition-colors",
            selectedClass === classItem.name ? "border-primary bg-primary/5" : "hover:bg-muted",
          )}
          onClick={() => onSelectClass(classItem.name)}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-sm font-semibold">{classItem.name}</h3>
            {classItem.isNew && (
              <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">
                New in v4
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{classItem.description}</p>
        </div>
      ))}
    </div>
  )
}

