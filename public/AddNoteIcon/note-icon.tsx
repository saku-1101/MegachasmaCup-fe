import * as React from "react"
import { SVGProps } from "react"
export const SvgComponent = (props: SVGProps<SVGSVGElement>, colour: string) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={59}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M11.013 11H8.89l-.552-1.788H5.625L5.061 11H2.985L5.77 3.08h2.472L11.013 11ZM6.01 7.808h1.944l-.972-3.204-.972 3.204Zm9.645-4.728c1.24 0 2.188.344 2.844 1.032.664.688.996 1.664.996 2.928s-.332 2.24-.996 2.928c-.656.688-1.604 1.032-2.844 1.032h-3.36V3.08h3.36Zm-.204 6.36c.672 0 1.16-.2 1.464-.6.312-.408.468-1.008.468-1.8s-.156-1.388-.468-1.788c-.304-.408-.792-.612-1.464-.612h-1.092v4.8h1.092Zm9.178-6.36c1.24 0 2.188.344 2.844 1.032.664.688.996 1.664.996 2.928s-.332 2.24-.996 2.928c-.656.688-1.604 1.032-2.844 1.032h-3.36V3.08h3.36Zm-.204 6.36c.672 0 1.16-.2 1.464-.6.312-.408.468-1.008.468-1.8s-.156-1.388-.468-1.788c-.304-.408-.792-.612-1.464-.612h-1.092v4.8h1.092Zm16.75-6.36V11h-2.291l-2.46-4.284-.6-1.176h-.013l.048 1.464V11h-1.823V3.08h2.292l2.46 4.284.6 1.176h.011l-.048-1.464V3.08h1.825Zm5.667-.12c.8 0 1.488.164 2.064.492.584.32 1.032.784 1.344 1.392.312.608.468 1.34.468 2.196 0 .856-.156 1.588-.468 2.196a3.3 3.3 0 0 1-1.344 1.404c-.576.32-1.264.48-2.064.48s-1.492-.16-2.076-.48a3.3 3.3 0 0 1-1.344-1.404c-.312-.608-.468-1.34-.468-2.196 0-.856.156-1.588.468-2.196a3.228 3.228 0 0 1 1.344-1.392c.584-.328 1.276-.492 2.076-.492Zm0 1.62c-.384 0-.708.092-.972.276-.264.184-.464.46-.6.828-.136.36-.204.812-.204 1.356 0 .536.068.988.204 1.356.136.368.336.644.6.828.264.184.588.276.972.276s.704-.092.96-.276c.264-.184.464-.46.6-.828.136-.368.204-.82.204-1.356 0-.544-.068-.996-.204-1.356-.136-.368-.336-.644-.6-.828-.256-.184-.576-.276-.96-.276Zm11.988-1.5v1.596h-2.58V11h-2.064V4.676h-2.592V3.08h7.236Zm1.54 7.92V3.08h6.167v1.596h-4.104v1.608h3.264v1.5h-3.264v1.62h4.26V11h-6.324Z"
    />
    <path
      stroke={colour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M38.333 22.333H25a3.333 3.333 0 0 0-3.334 3.334v26.666A3.334 3.334 0 0 0 25 55.667h20a3.334 3.334 0 0 0 3.333-3.334v-20m-10-10 10 10m-10-10v10h10M35 49V39m-5 5h10"
    />
  </svg>
)