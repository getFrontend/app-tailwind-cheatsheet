import type { ClassExampleType } from "@/lib/tailwind-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

interface ClassExampleProps {
  example: ClassExampleType
}

export function ClassExample({ example }: ClassExampleProps) {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="preview" className="flex-1 md:flex-none">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="flex-1 md:flex-none">
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="p-4 border rounded-lg overflow-x-auto">
          <div dangerouslySetInnerHTML={{ __html: example.preview }} />
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={example.code} language="html" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

