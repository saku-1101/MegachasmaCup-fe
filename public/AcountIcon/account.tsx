import * as React from "react"
import { SVGProps } from "react"
export const SvgComponent = (props: SVGProps<SVGSVGElement>, colour: string) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke={colour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M41.667 43.75v-4.167a8.333 8.333 0 0 0-8.334-8.333H16.667a8.333 8.333 0 0 0-8.334 8.333v4.167m25-29.167a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0Z"
    />
  </svg>
)
