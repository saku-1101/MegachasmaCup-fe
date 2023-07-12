import * as React from "react"
import { SVGProps } from "react"
export const SvgComponent = (props: SVGProps<SVGSVGElement>, colour: string) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={30}
    fill="none"
    {...props}
  >
    <path
      stroke={colour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 10v10m-5-5h10m7.5 0c0 6.904-5.596 12.5-12.5 12.5S3 21.904 3 15 8.596 2.5 15.5 2.5 28 8.096 28 15Z"
    />
  </svg>
)
