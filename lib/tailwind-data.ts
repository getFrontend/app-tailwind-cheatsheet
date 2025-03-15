export interface ClassExampleType {
  preview: string
  code: string
}

export interface TailwindClass {
  name: string
  description: string
  cssProperties: string
  examples: {
    basic: ClassExampleType
    responsive: ClassExampleType
    hover: ClassExampleType
  }
  isNew?: boolean
  v3Comparison?: {
    v3Class: string
  }
  tips?: string
}

export interface TailwindCategory {
  id: string
  name: string
  classes: TailwindClass[]
}

// Sample data - in a real application, this would be much more comprehensive
export const tailwindCategories: TailwindCategory[] = [
  {
    id: "layout",
    name: "Layout",
    classes: [
      {
        name: "container",
        description: "Sets the max-width of an element to match the min-width of the current breakpoint",
        cssProperties: `width: 100%;
@media (min-width: 640px) {
  max-width: 640px;
}
@media (min-width: 768px) {
  max-width: 768px;
}
@media (min-width: 1024px) {
  max-width: 1024px;
}
@media (min-width: 1280px) {
  max-width: 1280px;
}
@media (min-width: 1536px) {
  max-width: 1536px;
}`,
        examples: {
          basic: {
            preview: '<div class="container mx-auto bg-blue-100 p-4">Container element</div>',
            code: '<div class="container mx-auto bg-blue-100 p-4">Container element</div>',
          },
          responsive: {
            preview: '<div class="container mx-auto bg-blue-100 p-4">Responsive container</div>',
            code: '<div class="container mx-auto bg-blue-100 p-4">Responsive container</div>',
          },
          hover: {
            preview: '<div class="container mx-auto bg-blue-100 hover:bg-blue-200 p-4">Hover over me</div>',
            code: '<div class="container mx-auto bg-blue-100 hover:bg-blue-200 p-4">Hover over me</div>',
          },
        },
      },
      {
        name: "aspect-ratio",
        description: "Controls the aspect ratio of an element",
        cssProperties: "aspect-ratio: 16 / 9;",
        examples: {
          basic: {
            preview: '<div class="aspect-video bg-blue-200 w-full"></div>',
            code: '<div class="aspect-video bg-blue-200 w-full"></div>',
          },
          responsive: {
            preview: '<div class="aspect-square md:aspect-video bg-blue-200 w-full"></div>',
            code: '<div class="aspect-square md:aspect-video bg-blue-200 w-full"></div>',
          },
          hover: {
            preview: '<div class="aspect-video hover:aspect-square transition-all bg-blue-200 w-full"></div>',
            code: '<div class="aspect-video hover:aspect-square transition-all bg-blue-200 w-full"></div>',
          },
        },
      },
      {
        name: "columns-2",
        description: "Creates a multi-column layout with 2 columns",
        cssProperties: "columns: 2;",
        examples: {
          basic: {
            preview:
              '<div class="columns-2 gap-4"><p class="mb-4 break-inside-avoid">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p class="mb-4 break-inside-avoid">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p class="mb-4 break-inside-avoid">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p></div>',
            code: '<div class="columns-2 gap-4">\n  <p class="mb-4 break-inside-avoid">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n  <p class="mb-4 break-inside-avoid">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n  <p class="mb-4 break-inside-avoid">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>\n</div>',
          },
          responsive: {
            preview:
              '<div class="columns-1 md:columns-2 gap-4"><p class="mb-4 break-inside-avoid">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p class="mb-4 break-inside-avoid">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p class="mb-4 break-inside-avoid">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p></div>',
            code: '<div class="columns-1 md:columns-2 gap-4">\n  <p class="mb-4 break-inside-avoid">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n  <p class="mb-4 break-inside-avoid">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n  <p class="mb-4 break-inside-avoid">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>\n</div>',
          },
          hover: {
            preview:
              '<div class="columns-1 hover:columns-2 transition-all gap-4"><p class="mb-4 break-inside-avoid">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p class="mb-4 break-inside-avoid">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p class="mb-4 break-inside-avoid">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p></div>',
            code: '<div class="columns-1 hover:columns-2 transition-all gap-4">\n  <p class="mb-4 break-inside-avoid">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n  <p class="mb-4 break-inside-avoid">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n  <p class="mb-4 break-inside-avoid">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>\n</div>',
          },
        },
      },
      {
        name: "break-after-auto",
        description: "Controls how page, column, or region breaks should behave after an element",
        cssProperties: "break-after: auto;",
        examples: {
          basic: {
            preview:
              '<div class="columns-2"><p class="break-after-auto">This paragraph may have a break after it.</p><p>This is the next paragraph.</p></div>',
            code: '<div class="columns-2">\n  <p class="break-after-auto">This paragraph may have a break after it.</p>\n  <p>This is the next paragraph.</p>\n</div>',
          },
          responsive: {
            preview:
              '<div class="columns-2"><p class="break-after-auto md:break-after-avoid">Responsive break behavior.</p><p>This is the next paragraph.</p></div>',
            code: '<div class="columns-2">\n  <p class="break-after-auto md:break-after-avoid">Responsive break behavior.</p>\n  <p>This is the next paragraph.</p>\n</div>',
          },
          hover: {
            preview:
              '<div class="columns-2"><p class="break-after-auto hover:break-after-column">Hover to change break behavior.</p><p>This is the next paragraph.</p></div>',
            code: '<div class="columns-2">\n  <p class="break-after-auto hover:break-after-column">Hover to change break behavior.</p>\n  <p>This is the next paragraph.</p>\n</div>',
          },
        },
      },
      {
        name: "break-before-auto",
        description: "Controls how page, column, or region breaks should behave before an element",
        cssProperties: "break-before: auto;",
        examples: {
          basic: {
            preview:
              '<div class="columns-2"><p>This is the first paragraph.</p><p class="break-before-auto">This paragraph may have a break before it.</p></div>',
            code: '<div class="columns-2">\n  <p>This is the first paragraph.</p>\n  <p class="break-before-auto">This paragraph may have a break before it.</p>\n</div>',
          },
          responsive: {
            preview:
              '<div class="columns-2"><p>This is the first paragraph.</p><p class="break-before-auto md:break-before-avoid">Responsive break behavior.</p></div>',
            code: '<div class="columns-2">\n  <p>This is the first paragraph.</p>\n  <p class="break-before-auto md:break-before-avoid">Responsive break behavior.</p>\n</div>',
          },
          hover: {
            preview:
              '<div class="columns-2"><p>This is the first paragraph.</p><p class="break-before-auto hover:break-before-column">Hover to change break behavior.</p></div>',
            code: '<div class="columns-2">\n  <p>This is the first paragraph.</p>\n  <p class="break-before-auto hover:break-before-column">Hover to change break behavior.</p>\n</div>',
          },
        },
      },
      {
        name: "break-inside-auto",
        description: "Controls how page, column, or region breaks should behave inside an element",
        cssProperties: "break-inside: auto;",
        examples: {
          basic: {
            preview:
              '<div class="columns-2"><div class="break-inside-auto"><p>This content may break inside.</p><p>Second paragraph.</p></div></div>',
            code: '<div class="columns-2">\n  <div class="break-inside-auto">\n    <p>This content may break inside.</p>\n    <p>Second paragraph.</p>\n  </div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="columns-2"><div class="break-inside-auto md:break-inside-avoid"><p>Responsive break behavior.</p><p>Second paragraph.</p></div></div>',
            code: '<div class="columns-2">\n  <div class="break-inside-auto md:break-inside-avoid">\n    <p>Responsive break behavior.</p>\n    <p>Second paragraph.</p>\n  </div>\n</div>',
          },
          hover: {
            preview:
              '<div class="columns-2"><div class="break-inside-auto hover:break-inside-avoid"><p>Hover to change break behavior.</p><p>Second paragraph.</p></div></div>',
            code: '<div class="columns-2">\n  <div class="break-inside-auto hover:break-inside-avoid">\n    <p>Hover to change break behavior.</p>\n    <p>Second paragraph.</p>\n  </div>\n</div>',
          },
        },
      },
      {
        name: "box-decoration-clone",
        description: "Specifies whether an element's decorations should be cloned when the box is split",
        cssProperties: "box-decoration-break: clone;",
        examples: {
          basic: {
            preview:
              '<div class="bg-blue-100 p-4"><span class="box-decoration-clone bg-blue-500 text-white px-2 py-1">This text spans<br>multiple lines with consistent styling</span></div>',
            code: '<div class="bg-blue-100 p-4">\n  <span class="box-decoration-clone bg-blue-500 text-white px-2 py-1">This text spans<br>multiple lines with consistent styling</span>\n</div>',
          },
          responsive: {
            preview:
              '<div class="bg-blue-100 p-4"><span class="box-decoration-slice md:box-decoration-clone bg-blue-500 text-white px-2 py-1">This text has<br>responsive decoration behavior</span></div>',
            code: '<div class="bg-blue-100 p-4">\n  <span class="box-decoration-slice md:box-decoration-clone bg-blue-500 text-white px-2 py-1">This text has<br>responsive decoration behavior</span>\n</div>',
          },
          hover: {
            preview:
              '<div class="bg-blue-100 p-4"><span class="box-decoration-slice hover:box-decoration-clone bg-blue-500 text-white px-2 py-1">Hover to change<br>decoration behavior</span></div>',
            code: '<div class="bg-blue-100 p-4">\n  <span class="box-decoration-slice hover:box-decoration-clone bg-blue-500 text-white px-2 py-1">Hover to change<br>decoration behavior</span>\n</div>',
          },
        },
      },
      {
        name: "box-border",
        description: "Sets the box-sizing to border-box",
        cssProperties: "box-sizing: border-box;",
        examples: {
          basic: {
            preview:
              '<div class="box-border h-32 w-32 p-4 border-4 border-blue-400 bg-blue-200">This box includes padding and border in its dimensions</div>',
            code: '<div class="box-border h-32 w-32 p-4 border-4 border-blue-400 bg-blue-200">\n  This box includes padding and border in its dimensions\n</div>',
          },
          responsive: {
            preview:
              '<div class="box-content md:box-border h-32 w-32 p-4 border-4 border-blue-400 bg-blue-200">Responsive box sizing</div>',
            code: '<div class="box-content md:box-border h-32 w-32 p-4 border-4 border-blue-400 bg-blue-200">\n  Responsive box sizing\n</div>',
          },
          hover: {
            preview:
              '<div class="box-content hover:box-border h-32 w-32 p-4 border-4 border-blue-400 bg-blue-200">Hover to change box sizing</div>',
            code: '<div class="box-content hover:box-border h-32 w-32 p-4 border-4 border-blue-400 bg-blue-200">\n  Hover to change box sizing\n</div>',
          },
        },
      },
      {
        name: "block",
        description: "Sets the display property to block",
        cssProperties: "display: block;",
        examples: {
          basic: {
            preview:
              '<span class="block bg-blue-200 p-2 mb-2">This span is displayed as a block</span><span class="block bg-blue-300 p-2">This span is also a block</span>',
            code: '<span class="block bg-blue-200 p-2 mb-2">This span is displayed as a block</span>\n<span class="block bg-blue-300 p-2">This span is also a block</span>',
          },
          responsive: {
            preview:
              '<span class="inline md:block bg-blue-200 p-2 mb-2">This is inline on mobile, block on larger screens</span>',
            code: '<span class="inline md:block bg-blue-200 p-2 mb-2">This is inline on mobile, block on larger screens</span>',
          },
          hover: {
            preview: '<span class="inline hover:block bg-blue-200 p-2 mb-2">Hover to change to block</span>',
            code: '<span class="inline hover:block bg-blue-200 p-2 mb-2">Hover to change to block</span>',
          },
        },
      },
      {
        name: "float-right",
        description: "Floats an element to the right",
        cssProperties: "float: right;",
        examples: {
          basic: {
            preview:
              '<div class="clearfix"><div class="float-right bg-blue-200 p-2">Floated right</div><div class="clear-both">Text flows around the floated element</div></div>',
            code: '<div class="clearfix">\n  <div class="float-right bg-blue-200 p-2">Floated right</div>\n  <div class="clear-both">Text flows around the floated element</div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="clearfix"><div class="float-none md:float-right bg-blue-200 p-2">Responsive float</div><div class="clear-both">Text behavior changes on different screen sizes</div></div>',
            code: '<div class="clearfix">\n  <div class="float-none md:float-right bg-blue-200 p-2">Responsive float</div>\n  <div class="clear-both">Text behavior changes on different screen sizes</div>\n</div>',
          },
          hover: {
            preview:
              '<div class="clearfix"><div class="float-none hover:float-right bg-blue-200 p-2">Hover to float right</div><div class="clear-both">Text behavior changes on hover</div></div>',
            code: '<div class="clearfix">\n  <div class="float-none hover:float-right bg-blue-200 p-2">Hover to float right</div>\n  <div class="clear-both">Text behavior changes on hover</div>\n</div>',
          },
        },
      },
      {
        name: "clear-both",
        description: "Clears floats on both sides",
        cssProperties: "clear: both;",
        examples: {
          basic: {
            preview:
              '<div><div class="float-left bg-blue-200 p-2">Floated left</div><div class="float-right bg-blue-300 p-2">Floated right</div><div class="clear-both bg-blue-100 p-2">This element is cleared from both floats</div></div>',
            code: '<div>\n  <div class="float-left bg-blue-200 p-2">Floated left</div>\n  <div class="float-right bg-blue-300 p-2">Floated right</div>\n  <div class="clear-both bg-blue-100 p-2">This element is cleared from both floats</div>\n</div>',
          },
          responsive: {
            preview:
              '<div><div class="float-left bg-blue-200 p-2">Floated left</div><div class="float-right bg-blue-300 p-2">Floated right</div><div class="clear-none md:clear-both bg-blue-100 p-2">Responsive clearing</div></div>',
            code: '<div>\n  <div class="float-left bg-blue-200 p-2">Floated left</div>\n  <div class="float-right bg-blue-300 p-2">Floated right</div>\n  <div class="clear-none md:clear-both bg-blue-100 p-2">Responsive clearing</div>\n</div>',
          },
          hover: {
            preview:
              '<div><div class="float-left bg-blue-200 p-2">Floated left</div><div class="float-right bg-blue-300 p-2">Floated right</div><div class="clear-none hover:clear-both bg-blue-100 p-2">Hover to clear floats</div></div>',
            code: '<div>\n  <div class="float-left bg-blue-200 p-2">Floated left</div>\n  <div class="float-right bg-blue-300 p-2">Floated right</div>\n  <div class="clear-none hover:clear-both bg-blue-100 p-2">Hover to clear floats</div>\n</div>',
          },
        },
      },
      {
        name: "isolation-isolate",
        description: "Creates a new stacking context",
        cssProperties: "isolation: isolate;",
        examples: {
          basic: {
            preview:
              '<div class="relative"><div class="absolute inset-0 bg-blue-200 mix-blend-multiply">Element 1</div><div class="isolation-isolate relative z-10 bg-red-200 mix-blend-multiply p-4">This element is isolated</div></div>',
            code: '<div class="relative">\n  <div class="absolute inset-0 bg-blue-200 mix-blend-multiply">Element 1</div>\n  <div class="isolation-isolate relative z-10 bg-red-200 mix-blend-multiply p-4">This element is isolated</div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="relative"><div class="absolute inset-0 bg-blue-200 mix-blend-multiply">Element 1</div><div class="isolation-auto md:isolation-isolate relative z-10 bg-red-200 mix-blend-multiply p-4">Responsive isolation</div></div>',
            code: '<div class="relative">\n  <div class="absolute inset-0 bg-blue-200 mix-blend-multiply">Element 1</div>\n  <div class="isolation-auto md:isolation-isolate relative z-10 bg-red-200 mix-blend-multiply p-4">Responsive isolation</div>\n</div>',
          },
          hover: {
            preview:
              '<div class="relative"><div class="absolute inset-0 bg-blue-200 mix-blend-multiply">Element 1</div><div class="isolation-auto hover:isolation-isolate relative z-10 bg-red-200 mix-blend-multiply p-4">Hover to isolate</div></div>',
            code: '<div class="relative">\n  <div class="absolute inset-0 bg-blue-200 mix-blend-multiply">Element 1</div>\n  <div class="isolation-auto hover:isolation-isolate relative z-10 bg-red-200 mix-blend-multiply p-4">Hover to isolate</div>\n</div>',
          },
        },
      },
      {
        name: "object-cover",
        description: "Resizes an element's content to cover its container",
        cssProperties: "object-fit: cover;",
        examples: {
          basic: {
            preview:
              '<div class="h-48 w-full bg-blue-100"><img class="h-full w-full object-cover" src="/placeholder.svg?height=300&width=400" alt="Object cover example" /></div>',
            code: '<div class="h-48 w-full bg-blue-100">\n  <img class="h-full w-full object-cover" src="/placeholder.svg?height=300&width=400" alt="Object cover example" />\n</div>',
          },
          responsive: {
            preview:
              '<div class="h-48 w-full bg-blue-100"><img class="h-full w-full object-contain md:object-cover" src="/placeholder.svg?height=300&width=400" alt="Responsive object fit" /></div>',
            code: '<div class="h-48 w-full bg-blue-100">\n  <img class="h-full w-full object-contain md:object-cover" src="/placeholder.svg?height=300&width=400" alt="Responsive object fit" />\n</div>',
          },
          hover: {
            preview:
              '<div class="h-48 w-full bg-blue-100"><img class="h-full w-full object-contain hover:object-cover transition-all duration-300" src="/placeholder.svg?height=300&width=400" alt="Hover to change object fit" /></div>',
            code: '<div class="h-48 w-full bg-blue-100">\n  <img class="h-full w-full object-contain hover:object-cover transition-all duration-300" src="/placeholder.svg?height=300&width=400" alt="Hover to change object fit" />\n</div>',
          },
        },
      },
      {
        name: "object-center",
        description: "Positions an element's content in the center",
        cssProperties: "object-position: center;",
        examples: {
          basic: {
            preview:
              '<div class="h-48 w-full bg-blue-100"><img class="h-full w-full object-cover object-center" src="/placeholder.svg?height=300&width=400" alt="Object center example" /></div>',
            code: '<div class="h-48 w-full bg-blue-100">\n  <img class="h-full w-full object-cover object-center" src="/placeholder.svg?height=300&width=400" alt="Object center example" />\n</div>',
          },
          responsive: {
            preview:
              '<div class="h-48 w-full bg-blue-100"><img class="h-full w-full object-cover object-left md:object-center" src="/placeholder.svg?height=300&width=400" alt="Responsive object position" /></div>',
            code: '<div class="h-48 w-full bg-blue-100">\n  <img class="h-full w-full object-cover object-left md:object-center" src="/placeholder.svg?height=300&width=400" alt="Responsive object position" />\n</div>',
          },
          hover: {
            preview:
              '<div class="h-48 w-full bg-blue-100"><img class="h-full w-full object-cover object-left hover:object-center transition-all duration-300" src="/placeholder.svg?height=300&width=400" alt="Hover to change position" /></div>',
            code: '<div class="h-48 w-full bg-blue-100">\n  <img class="h-full w-full object-cover object-left hover:object-center transition-all duration-300" src="/placeholder.svg?height=300&width=400" alt="Hover to change position" />\n</div>',
          },
        },
      },
      {
        name: "overflow-hidden",
        description: "Clips content that overflows the element's box",
        cssProperties: "overflow: hidden;",
        examples: {
          basic: {
            preview:
              '<div class="overflow-hidden h-24 w-full bg-blue-100"><div class="h-48 w-full bg-blue-200 p-4">This content is taller than its container and will be clipped</div></div>',
            code: '<div class="overflow-hidden h-24 w-full bg-blue-100">\n  <div class="h-48 w-full bg-blue-200 p-4">This content is taller than its container and will be clipped</div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="overflow-visible md:overflow-hidden h-24 w-full bg-blue-100"><div class="h-48 w-full bg-blue-200 p-4">Responsive overflow behavior</div></div>',
            code: '<div class="overflow-visible md:overflow-hidden h-24 w-full bg-blue-100">\n  <div class="h-48 w-full bg-blue-200 p-4">Responsive overflow behavior</div>\n</div>',
          },
          hover: {
            preview:
              '<div class="overflow-hidden hover:overflow-visible h-24 w-full bg-blue-100"><div class="h-48 w-full bg-blue-200 p-4">Hover to show overflow content</div></div>',
            code: '<div class="overflow-hidden hover:overflow-visible h-24 w-full bg-blue-100">\n  <div class="h-48 w-full bg-blue-200 p-4">Hover to show overflow content</div>\n</div>',
          },
        },
      },
      {
        name: "overscroll-contain",
        description: "Prevents scrolling in the target area from triggering scroll in the parent element",
        cssProperties: "overscroll-behavior: contain;",
        examples: {
          basic: {
            preview:
              '<div class="h-32 overflow-auto p-1 bg-blue-100"><div class="overscroll-contain h-64 overflow-auto p-1 bg-blue-200"><div class="h-96 bg-blue-300 p-4">Nested scrollable content with contained overscroll</div></div></div>',
            code: '<div class="h-32 overflow-auto p-1 bg-blue-100">\n  <div class="overscroll-contain h-64 overflow-auto p-1 bg-blue-200">\n    <div class="h-96 bg-blue-300 p-4">Nested scrollable content with contained overscroll</div>\n  </div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="h-32 overflow-auto p-1 bg-blue-100"><div class="overscroll-auto md:overscroll-contain h-64 overflow-auto p-1 bg-blue-200"><div class="h-96 bg-blue-300 p-4">Responsive overscroll behavior</div></div></div>',
            code: '<div class="h-32 overflow-auto p-1 bg-blue-100">\n  <div class="overscroll-auto md:overscroll-contain h-64 overflow-auto p-1 bg-blue-200">\n    <div class="h-96 bg-blue-300 p-4">Responsive overscroll behavior</div>\n  </div>\n</div>',
          },
          hover: {
            preview:
              '<div class="h-32 overflow-auto p-1 bg-blue-100"><div class="overscroll-auto hover:overscroll-contain h-64 overflow-auto p-1 bg-blue-200"><div class="h-96 bg-blue-300 p-4">Hover to change overscroll behavior</div></div></div>',
            code: '<div class="h-32 overflow-auto p-1 bg-blue-100">\n  <div class="overscroll-auto hover:overscroll-contain h-64 overflow-auto p-1 bg-blue-200">\n    <div class="h-96 bg-blue-300 p-4">Hover to change overscroll behavior</div>\n  </div>\n</div>',
          },
        },
      },
      {
        name: "static",
        description: "Positions an element according to the normal flow of the document",
        cssProperties: "position: static;",
        examples: {
          basic: {
            preview:
              '<div class="relative h-32 bg-blue-100 p-4"><div class="static bg-blue-300 p-2">This element is statically positioned</div></div>',
            code: '<div class="relative h-32 bg-blue-100 p-4">\n  <div class="static bg-blue-300 p-2">This element is statically positioned</div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="relative h-32 bg-blue-100 p-4"><div class="absolute md:static bg-blue-300 p-2">This element changes position on different screens</div></div>',
            code: '<div class="relative h-32 bg-blue-100 p-4">\n  <div class="absolute md:static bg-blue-300 p-2">This element changes position on different screens</div>\n</div>',
          },
          hover: {
            preview:
              '<div class="relative h-32 bg-blue-100 p-4"><div class="absolute hover:static bg-blue-300 p-2">Hover to change position</div></div>',
            code: '<div class="relative h-32 bg-blue-100 p-4">\n  <div class="absolute hover:static bg-blue-300 p-2">Hover to change position</div>\n</div>',
          },
        },
      },
      {
        name: "top-0",
        description: "Positions an element at the top edge of its containing block",
        cssProperties: "top: 0px;",
        examples: {
          basic: {
            preview:
              '<div class="relative h-32 bg-blue-100"><div class="absolute top-0 left-0 bg-blue-300 p-2">Top left corner</div></div>',
            code: '<div class="relative h-32 bg-blue-100">\n  <div class="absolute top-0 left-0 bg-blue-300 p-2">Top left corner</div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="relative h-32 bg-blue-100"><div class="absolute bottom-0 md:top-0 left-0 bg-blue-300 p-2">Responsive positioning</div></div>',
            code: '<div class="relative h-32 bg-blue-100">\n  <div class="absolute bottom-0 md:top-0 left-0 bg-blue-300 p-2">Responsive positioning</div>\n</div>',
          },
          hover: {
            preview:
              '<div class="relative h-32 bg-blue-100"><div class="absolute bottom-0 hover:top-0 left-0 bg-blue-300 p-2 transition-all duration-300">Hover to reposition</div></div>',
            code: '<div class="relative h-32 bg-blue-100">\n  <div class="absolute bottom-0 hover:top-0 left-0 bg-blue-300 p-2 transition-all duration-300">Hover to reposition</div>\n</div>',
          },
        },
      },
      {
        name: "visible",
        description: "Makes an element visible",
        cssProperties: "visibility: visible;",
        examples: {
          basic: {
            preview:
              '<div class="space-y-4"><div class="visible bg-blue-200 p-2">This element is visible</div><div class="invisible bg-red-200 p-2">This element is invisible (but still takes up space)</div></div>',
            code: '<div class="space-y-4">\n  <div class="visible bg-blue-200 p-2">This element is visible</div>\n  <div class="invisible bg-red-200 p-2">This element is invisible (but still takes up space)</div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="invisible md:visible bg-blue-200 p-2">This element is only visible on medium screens and up</div>',
            code: '<div class="invisible md:visible bg-blue-200 p-2">This element is only visible on medium screens and up</div>',
          },
          hover: {
            preview: '<div class="invisible hover:visible bg-blue-200 p-2">Hover to make visible</div>',
            code: '<div class="invisible hover:visible bg-blue-200 p-2">Hover to make visible</div>',
          },
        },
      },
      {
        name: "z-10",
        description: "Sets the z-index to control the stacking order of elements",
        cssProperties: "z-index: 10;",
        examples: {
          basic: {
            preview:
              '<div class="relative h-32 w-full"><div class="absolute left-0 top-0 h-16 w-16 bg-blue-200 z-0">z-0</div><div class="absolute left-8 top-8 h-16 w-16 bg-blue-400 z-10">z-10</div></div>',
            code: '<div class="relative h-32 w-full">\n  <div class="absolute left-0 top-0 h-16 w-16 bg-blue-200 z-0">z-0</div>\n  <div class="absolute left-8 top-8 h-16 w-16 bg-blue-400 z-10">z-10</div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="relative h-32 w-full"><div class="absolute left-0 top-0 h-16 w-16 bg-blue-200 z-20">z-20</div><div class="absolute left-8 top-8 h-16 w-16 bg-blue-400 z-0 md:z-30">z-0 on mobile, z-30 on medium</div></div>',
            code: '<div class="relative h-32 w-full">\n  <div class="absolute left-0 top-0 h-16 w-16 bg-blue-200 z-20">z-20</div>\n  <div class="absolute left-8 top-8 h-16 w-16 bg-blue-400 z-0 md:z-30">z-0 on mobile, z-30 on medium</div>\n</div>',
          },
          hover: {
            preview:
              '<div class="relative h-32 w-full"><div class="absolute left-0 top-0 h-16 w-16 bg-blue-200 z-20">z-20</div><div class="absolute left-8 top-8 h-16 w-16 bg-blue-400 z-0 hover:z-30">Hover to bring to front</div></div>',
            code: '<div class="relative h-32 w-full">\n  <div class="absolute left-0 top-0 h-16 w-16 bg-blue-200 z-20">z-20</div>\n  <div class="absolute left-8 top-8 h-16 w-16 bg-blue-400 z-0 hover:z-30">Hover to bring to front</div>\n</div>',
          },
        },
      },
    ],
  },
  {
    id: "typography",
    name: "Typography",
    classes: [
      {
        name: "text-base",
        description: "Sets the font size to the base size",
        cssProperties: "font-size: 1rem; /* 16px */\nline-height: 1.5rem; /* 24px */",
        examples: {
          basic: {
            preview: '<p class="text-base">This is base text size</p>',
            code: '<p class="text-base">This is base text size</p>',
          },
          responsive: {
            preview: '<p class="text-sm md:text-base lg:text-lg">This text changes size on different screens</p>',
            code: '<p class="text-sm md:text-base lg:text-lg">This text changes size on different screens</p>',
          },
          hover: {
            preview: '<p class="text-base hover:text-lg transition-all">Hover to enlarge</p>',
            code: '<p class="text-base hover:text-lg transition-all">Hover to enlarge</p>',
          },
        },
      },
      {
        name: "font-bold",
        description: "Sets the font weight to bold",
        cssProperties: "font-weight: 700;",
        examples: {
          basic: {
            preview: '<p class="font-bold">This text is bold</p>',
            code: '<p class="font-bold">This text is bold</p>',
          },
          responsive: {
            preview: '<p class="font-normal md:font-bold">This text becomes bold on medium screens and up</p>',
            code: '<p class="font-normal md:font-bold">This text becomes bold on medium screens and up</p>',
          },
          hover: {
            preview: '<p class="font-normal hover:font-bold">Hover to make bold</p>',
            code: '<p class="font-normal hover:font-bold">Hover to make bold</p>',
          },
        },
      },
      {
        name: "tracking-wider",
        description: "Increases letter spacing",
        cssProperties: "letter-spacing: 0.05em;",
        examples: {
          basic: {
            preview: '<p class="tracking-wider">This text has increased letter spacing</p>',
            code: '<p class="tracking-wider">This text has increased letter spacing</p>',
          },
          responsive: {
            preview: '<p class="tracking-normal md:tracking-wider">Letter spacing increases on medium screens</p>',
            code: '<p class="tracking-normal md:tracking-wider">Letter spacing increases on medium screens</p>',
          },
          hover: {
            preview: '<p class="tracking-normal hover:tracking-wider transition-all">Hover to increase spacing</p>',
            code: '<p class="tracking-normal hover:tracking-wider transition-all">Hover to increase spacing</p>',
          },
        },
      },
    ],
  },
  {
    id: "colors",
    name: "Colors",
    classes: [
      {
        name: "text-primary",
        description: "Sets the text color to the primary color",
        cssProperties: "color: hsl(var(--primary));",
        examples: {
          basic: {
            preview: '<p class="text-primary">This text is in the primary color</p>',
            code: '<p class="text-primary">This text is in the primary color</p>',
          },
          responsive: {
            preview: '<p class="text-gray-500 md:text-primary">This text changes color on medium screens</p>',
            code: '<p class="text-gray-500 md:text-primary">This text changes color on medium screens</p>',
          },
          hover: {
            preview: '<p class="text-gray-500 hover:text-primary">Hover to change color</p>',
            code: '<p class="text-gray-500 hover:text-primary">Hover to change color</p>',
          },
        },
        isNew: true,
        v3Comparison: {
          v3Class: "text-blue-500",
        },
        tips: "In Tailwind v4.0, color classes now use CSS variables by default, making them easier to customize with themes.",
      },
      {
        name: "bg-secondary",
        description: "Sets the background color to the secondary color",
        cssProperties: "background-color: hsl(var(--secondary));",
        examples: {
          basic: {
            preview: '<div class="bg-secondary text-secondary-foreground p-4">Secondary background</div>',
            code: '<div class="bg-secondary text-secondary-foreground p-4">Secondary background</div>',
          },
          responsive: {
            preview:
              '<div class="bg-gray-100 md:bg-secondary text-secondary-foreground p-4">Changes on medium screens</div>',
            code: '<div class="bg-gray-100 md:bg-secondary text-secondary-foreground p-4">Changes on medium screens</div>',
          },
          hover: {
            preview:
              '<div class="bg-gray-100 hover:bg-secondary text-secondary-foreground p-4">Hover to change background</div>',
            code: '<div class="bg-gray-100 hover:bg-secondary text-secondary-foreground p-4">Hover to change background</div>',
          },
        },
        isNew: true,
        v3Comparison: {
          v3Class: "bg-gray-200",
        },
        tips: "The secondary color in v4.0 is designed to work with secondary-foreground for accessible text contrast.",
      },
    ],
  },
  {
    id: "spacing",
    name: "Spacing",
    classes: [
      {
        name: "p-4",
        description: "Adds padding on all sides",
        cssProperties: "padding: 1rem; /* 16px */",
        examples: {
          basic: {
            preview: '<div class="bg-blue-100 p-4">Box with padding</div>',
            code: '<div class="bg-blue-100 p-4">Box with padding</div>',
          },
          responsive: {
            preview: '<div class="bg-blue-100 p-2 md:p-4 lg:p-8">Responsive padding</div>',
            code: '<div class="bg-blue-100 p-2 md:p-4 lg:p-8">Responsive padding</div>',
          },
          hover: {
            preview: '<div class="bg-blue-100 p-4 hover:p-8 transition-all">Hover to increase padding</div>',
            code: '<div class="bg-blue-100 p-4 hover:p-8 transition-all">Hover to increase padding</div>',
          },
        },
      },
      {
        name: "m-4",
        description: "Adds margin on all sides",
        cssProperties: "margin: 1rem; /* 16px */",
        examples: {
          basic: {
            preview: '<div class="bg-gray-200 p-8"><div class="bg-blue-100 m-4">Box with margin</div></div>',
            code: '<div class="bg-gray-200 p-8">\n  <div class="bg-blue-100 m-4">Box with margin</div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="bg-gray-200 p-8"><div class="bg-blue-100 m-2 md:m-4 lg:m-8">Responsive margin</div></div>',
            code: '<div class="bg-gray-200 p-8">\n  <div class="bg-blue-100 m-2 md:m-4 lg:m-8">Responsive margin</div>\n</div>',
          },
          hover: {
            preview:
              '<div class="bg-gray-200 p-8"><div class="bg-blue-100 m-4 hover:m-8 transition-all">Hover to increase margin</div></div>',
            code: '<div class="bg-gray-200 p-8">\n  <div class="bg-blue-100 m-4 hover:m-8 transition-all">Hover to increase margin</div>\n</div>',
          },
        },
      },
      {
        name: "gap-4",
        description: "Sets gap between grid/flex items",
        cssProperties: "gap: 1rem; /* 16px */",
        examples: {
          basic: {
            preview:
              '<div class="flex gap-4"><div class="w-16 h-16 bg-blue-200"></div><div class="w-16 h-16 bg-blue-400"></div></div>',
            code: '<div class="flex gap-4">\n  <div class="w-16 h-16 bg-blue-200"></div>\n  <div class="w-16 h-16 bg-blue-400"></div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="flex gap-2 md:gap-4 lg:gap-8"><div class="w-16 h-16 bg-blue-200"></div><div class="w-16 h-16 bg-blue-400"></div></div>',
            code: '<div class="flex gap-2 md:gap-4 lg:gap-8">\n  <div class="w-16 h-16 bg-blue-200"></div>\n  <div class="w-16 h-16 bg-blue-400"></div>\n</div>',
          },
          hover: {
            preview:
              '<div class="flex gap-4 hover:gap-8 transition-all"><div class="w-16 h-16 bg-blue-200"></div><div class="w-16 h-16 bg-blue-400"></div></div>',
            code: '<div class="flex gap-4 hover:gap-8 transition-all">\n  <div class="w-16 h-16 bg-blue-200"></div>\n  <div class="w-16 h-16 bg-blue-400"></div>\n</div>',
          },
        },
        isNew: false,
      },
    ],
  },
  {
    id: "flexbox",
    name: "Flexbox",
    classes: [
      {
        name: "flex-row",
        description: "Sets flex direction to row (horizontal)",
        cssProperties: "flex-direction: row;",
        examples: {
          basic: {
            preview:
              '<div class="flex flex-row gap-4"><div class="w-16 h-16 bg-blue-200"></div><div class="w-16 h-16 bg-blue-400"></div></div>',
            code: '<div class="flex flex-row gap-4">\n  <div class="w-16 h-16 bg-blue-200"></div>\n  <div class="w-16 h-16 bg-blue-400"></div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="flex flex-col md:flex-row gap-4"><div class="w-16 h-16 bg-blue-200"></div><div class="w-16 h-16 bg-blue-400"></div></div>',
            code: '<div class="flex flex-col md:flex-row gap-4">\n  <div class="w-16 h-16 bg-blue-200"></div>\n  <div class="w-16 h-16 bg-blue-400"></div>\n</div>',
          },
          hover: {
            preview:
              '<div class="flex flex-col hover:flex-row gap-4 transition-all duration-300"><div class="w-16 h-16 bg-blue-200"></div><div class="w-16 h-16 bg-blue-400"></div></div>',
            code: '<div class="flex flex-col hover:flex-row gap-4 transition-all duration-300">\n  <div class="w-16 h-16 bg-blue-200"></div>\n  <div class="w-16 h-16 bg-blue-400"></div>\n</div>',
          },
        },
      },
      {
        name: "justify-between",
        description: "Justifies content with space between items",
        cssProperties: "justify-content: space-between;",
        examples: {
          basic: {
            preview:
              '<div class="flex justify-between w-full bg-gray-100 p-4"><div class="w-16 h-16 bg-blue-200"></div><div class="w-16 h-16 bg-blue-400"></div></div>',
            code: '<div class="flex justify-between w-full bg-gray-100 p-4">\n  <div class="w-16 h-16 bg-blue-200"></div>\n  <div class="w-16 h-16 bg-blue-400"></div>\n</div>',
          },
          responsive: {
            preview:
              '<div class="flex justify-center md:justify-between w-full bg-gray-100 p-4"><div class="w-16 h-16 bg-blue-200"></div><div class="w-16 h-16 bg-blue-400"></div></div>',
            code: '<div class="flex justify-center md:justify-between w-full bg-gray-100 p-4">\n  <div class="w-16 h-16 bg-blue-200"></div>\n  <div class="w-16 h-16 bg-blue-400"></div>\n</div>',
          },
          hover: {
            preview:
              '<div class="flex justify-center hover:justify-between w-full bg-gray-100 p-4 transition-all duration-300"><div class="w-16 h-16 bg-blue-200"></div><div class="w-16 h-16 bg-blue-400"></div></div>',
            code: '<div class="flex justify-center hover:justify-between w-full bg-gray-100 p-4 transition-all duration-300">\n  <div class="w-16 h-16 bg-blue-200"></div>\n  <div class="w-16 h-16 bg-blue-400"></div>\n</div>',
          },
        },
      },
    ],
  },
  {
    id: "transitions",
    name: "Transitions & Animations",
    classes: [
      {
        name: "transition-all",
        description: "Applies transition to all properties",
        cssProperties:
          "transition-property: all;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;",
        examples: {
          basic: {
            preview:
              '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">Hover me</button>',
            code: '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">Hover me</button>',
          },
          responsive: {
            preview:
              '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all md:transition-none">Responsive transition</button>',
            code: '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all md:transition-none">Responsive transition</button>',
          },
          hover: {
            preview:
              '<div class="bg-blue-100 p-4 transition-all hover:p-8 hover:bg-blue-200">Hover to see transition</div>',
            code: '<div class="bg-blue-100 p-4 transition-all hover:p-8 hover:bg-blue-200">Hover to see transition</div>',
          },
        },
        isNew: false,
      },
      {
        name: "animate-spin",
        description: "Applies a spinning animation",
        cssProperties:
          "@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}",
        examples: {
          basic: {
            preview:
              '<div class="w-16 h-16 border-4 border-blue-400 border-t-blue-800 rounded-full animate-spin"></div>',
            code: '<div class="w-16 h-16 border-4 border-blue-400 border-t-blue-800 rounded-full animate-spin"></div>',
          },
          responsive: {
            preview:
              '<div class="w-16 h-16 border-4 border-blue-400 border-t-blue-800 rounded-full md:animate-spin"></div>',
            code: '<div class="w-16 h-16 border-4 border-blue-400 border-t-blue-800 rounded-full md:animate-spin"></div>',
          },
          hover: {
            preview:
              '<div class="w-16 h-16 border-4 border-blue-400 border-t-blue-800 rounded-full hover:animate-spin"></div>',
            code: '<div class="w-16 h-16 border-4 border-blue-400 border-t-blue-800 rounded-full hover:animate-spin"></div>',
          },
        },
      },
    ],
  },
]

