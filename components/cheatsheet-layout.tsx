"use client"

import { useState } from "react"
import { useSearchContext } from "@/components/search-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Search } from "@/components/search"
import { CategoryNav } from "@/components/category-nav"
import { ClassList } from "@/components/class-list"
import { ClassDetails } from "@/components/class-details"
import { tailwindCategories } from "@/lib/tailwind-data"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function CheatsheetLayout() {
  const { searchQuery } = useSearchContext()
  const [selectedCategory, setSelectedCategory] = useState("layout")
  const [selectedClass, setSelectedClass] = useState<string | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const currentCategory = tailwindCategories.find((category) => category.id === selectedCategory)

  const filteredClasses = searchQuery
    ? tailwindCategories
        .flatMap((category) => category.classes)
        .filter(
          (cls) =>
            cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cls.description.toLowerCase().includes(searchQuery.toLowerCase()),
        )
    : currentCategory?.classes || []

  // Find the selected class object
  const selectedClassItem = selectedClass ? filteredClasses.find((c) => c.name === selectedClass) : null

  // If the selected class is no longer in the filtered results (e.g., after a search),
  // clear the selection
  if (selectedClass && !selectedClassItem) {
    setSelectedClass(null)
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="border-b sticky top-0 z-10 bg-background">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] p-0">
                  <ScrollArea className="h-full py-4">
                    <CategoryNav
                      categories={tailwindCategories}
                      selectedCategory={selectedCategory}
                      onSelectCategory={(id) => {
                        setSelectedCategory(id)
                        setSelectedClass(null)
                      }}
                    />
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            )}
            <h1 className="text-xl font-bold">Tailwind CSS v4.0 Cheatsheet</h1>
          </div>
          <div className="flex items-center gap-3">
            <Search />
            <ModeToggle />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {!isMobile && (
          <aside className="w-64 border-r h-full bg-background">
            <ScrollArea className="h-full">
              <CategoryNav
                categories={tailwindCategories}
                selectedCategory={selectedCategory}
                onSelectCategory={(id) => {
                  setSelectedCategory(id)
                  setSelectedClass(null)
                }}
              />
            </ScrollArea>
          </aside>
        )}

        <div className="flex-1 flex overflow-hidden">
          <div
            className={`${selectedClass && selectedClassItem && !isMobile ? "w-1/3" : "w-full"} border-r overflow-hidden bg-background`}
          >
            <ScrollArea className="h-full">
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">{searchQuery ? "Search Results" : currentCategory?.name}</h2>
                <ClassList classes={filteredClasses} selectedClass={selectedClass} onSelectClass={setSelectedClass} />
              </div>
            </ScrollArea>
          </div>

          {selectedClass && selectedClassItem && (
            <div className={`${isMobile ? "w-full absolute inset-0 bg-background z-20" : "w-2/3"} overflow-hidden`}>
              <ScrollArea className="h-full">
                <ClassDetails
                  classItem={selectedClassItem}
                  onClose={() => setSelectedClass(null)}
                  isMobile={isMobile}
                />
              </ScrollArea>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

