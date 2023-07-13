import * as React from "react"
import { SVGProps } from "react"
export const SvgComponent = (props: SVGProps<SVGSVGElement>, colour: string) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke={colour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 6h.01m13.58 6.41-7.17 7.17a1.998 1.998 0 0 1-2.83 0L1.5 11V1h10l8.59 8.59a2 2 0 0 1 0 2.82Z"
    />
  </svg>
)
