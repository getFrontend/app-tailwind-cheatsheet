"use client"

import { useState } from "react"
import type { TailwindClass } from "@/lib/tailwind-data"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Copy, X, Check } from "lucide-react"
import { CodeBlock } from "@/components/code-block"
import { ClassExample } from "@/components/class-example"


interface ClassDetailsProps {
  classItem: TailwindClass
  onClose: () => void
  isMobile: boolean
}

export function ClassDetails({ classItem, onClose, isMobile }: ClassDetailsProps) {
  const [copied, setCopied] = useState(false)

  // Safety check to prevent errors
  if (!classItem) {
    return (
      <div className="p-4 md:p-6 flex justify-between items-center">
        <p className="text-muted-foreground">Class not found</p>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(classItem.name)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-start justify-between mb-4 md:mb-6">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold font-mono">{classItem.name}</h2>
            {classItem.isNew && (
              <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600">
                New in v4
              </Badge>
            )}
            <Button variant="outline" size="sm" className="h-8 gap-1" onClick={copyToClipboard}>
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span className="sr-only md:not-sr-only">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span className="sr-only md:not-sr-only">Copy</span>
                </>
              )}
            </Button>
          </div>
          <p className="text-sm md:text-base text-muted-foreground">{classItem.description}</p>
        </div>
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={onClose} className="mt-1">
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-2">CSS Properties</h3>
          <CodeBlock code={classItem.cssProperties} language="css" />
        </div>

        <div>
          <h3 className="text-base md:text-lg font-semibold mb-2">Examples</h3>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="mb-4 w-full md:w-auto">
              <TabsTrigger value="basic" className="flex-1 md:flex-none">
                Basic
              </TabsTrigger>
              <TabsTrigger value="responsive" className="flex-1 md:flex-none">
                Responsive
              </TabsTrigger>
              <TabsTrigger value="hover" className="flex-1 md:flex-none">
                Hover
              </TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <ClassExample example={classItem.examples.basic} />
            </TabsContent>
            <TabsContent value="responsive">
              <ClassExample example={classItem.examples.responsive} />
            </TabsContent>
            <TabsContent value="hover">
              <ClassExample example={classItem.examples.hover} />
            </TabsContent>
          </Tabs>
        </div>

        {classItem.v3Comparison && (
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2">v3 Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-lg p-4">
              <div>
                <h4 className="font-medium mb-2">v3</h4>
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm">{classItem.v3Comparison.v3Class}</code>
              </div>
              <div>
                <h4 className="font-medium mb-2">v4</h4>
                <code className="bg-primary/10 px-1.5 py-0.5 rounded text-sm">{classItem.name}</code>
              </div>
            </div>
          </div>
        )}

        {classItem.tips && (
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="text-base md:text-lg font-semibold mb-2">Tips</h3>
            <p className="text-sm md:text-base">{classItem.tips}</p>
          </div>
        )}
      </div>
    </div>
  )
}

