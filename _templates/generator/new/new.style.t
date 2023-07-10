---
to: src/components/<%= atomic %>/<%= name %>/<%= name %>.style.ts
---
import tw from "tailwind-styled-components"

export const Div = tw.div`
    flex
    items-center
    justify-center
    w-full
    h-full
    bg-primary
`