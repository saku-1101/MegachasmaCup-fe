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
      fill={colour}
      d="m26.88 26.6-12.4 14.84-.44-1.04-6.28 7.64-1.32-5.56 12.8-15.88h7.64Zm-17.08 0V53H2.92V26.6H9.8Zm6.92 8.72L27.36 53h-7.8l-8-13.84 5.16-3.84Zm20.534-2.72c2.106 0 3.946.413 5.52 1.24 1.6.8 2.84 1.987 3.72 3.56.906 1.547 1.36 3.413 1.36 5.6s-.454 4.067-1.36 5.64a8.872 8.872 0 0 1-3.72 3.56c-1.574.8-3.414 1.2-5.52 1.2-2.054 0-3.88-.4-5.48-1.2a9.128 9.128 0 0 1-3.76-3.56c-.88-1.573-1.32-3.453-1.32-5.64s.44-4.053 1.32-5.6c.906-1.573 2.16-2.76 3.76-3.56 1.6-.827 3.426-1.24 5.48-1.24Zm0 4.84c-.774 0-1.44.187-2 .56-.56.373-.987.973-1.28 1.8-.294.827-.44 1.893-.44 3.2 0 1.307.146 2.373.44 3.2.293.8.72 1.4 1.28 1.8.56.373 1.226.56 2 .56.8 0 1.48-.187 2.04-.56.56-.4.986-1 1.28-1.8.293-.827.44-1.893.44-3.2 0-1.307-.147-2.373-.44-3.2-.294-.827-.72-1.427-1.28-1.8s-1.24-.56-2.04-.56ZM57.639 53.4c-1.36 0-2.56-.227-3.6-.68-1.013-.48-1.813-1.24-2.4-2.28-.587-1.04-.88-2.4-.88-4.08V33h6.8v11.76c0 1.28.253 2.173.76 2.68.507.507 1.227.76 2.16.76.48 0 .933-.08 1.36-.24.427-.187.8-.453 1.12-.8.32-.373.56-.84.72-1.4.187-.587.28-1.267.28-2.04V33h6.8v20h-6.08l-.2-3.76c-.64 1.413-1.533 2.467-2.68 3.16-1.147.667-2.533 1-4.16 1Zm28.528 0c-2.347 0-4.44-.52-6.28-1.56-1.814-1.04-3.227-2.573-4.24-4.6-1.014-2.027-1.52-4.493-1.52-7.4 0-2.853.533-5.293 1.6-7.32 1.066-2.027 2.586-3.587 4.56-4.68 2-1.093 4.346-1.64 7.04-1.64 2.986 0 5.4.547 7.24 1.64 1.84 1.067 3.266 2.773 4.28 5.12l-6.36 2.52c-.347-1.36-.96-2.347-1.84-2.96-.88-.613-1.974-.92-3.28-.92-1.307 0-2.427.32-3.36.96-.934.613-1.64 1.533-2.12 2.76-.48 1.2-.72 2.693-.72 4.48 0 1.867.24 3.427.72 4.68.506 1.253 1.24 2.187 2.2 2.8.986.587 2.2.88 3.64.88.773 0 1.48-.093 2.12-.28.64-.187 1.2-.453 1.68-.8.48-.373.853-.827 1.12-1.36.266-.56.4-1.213.4-1.96v-.4h-6.04v-4.6h11.88V53h-4.68l-.52-6.2 1.12.96c-.56 1.813-1.574 3.213-3.04 4.2-1.44.96-3.307 1.44-5.6 1.44Zm23.466 0c-1.36 0-2.56-.227-3.6-.68-1.014-.48-1.814-1.24-2.4-2.28-.587-1.04-.88-2.4-.88-4.08V33h6.8v11.76c0 1.28.253 2.173.76 2.68.506.507 1.226.76 2.16.76.48 0 .933-.08 1.36-.24.426-.187.8-.453 1.12-.8.32-.373.56-.84.72-1.4.186-.587.28-1.267.28-2.04V33h6.8v20h-6.08l-.2-3.76c-.64 1.413-1.534 2.467-2.68 3.16-1.147.667-2.534 1-4.16 1Zm20.605-22.72c-1.386 0-2.4-.253-3.04-.76-.613-.533-.92-1.36-.92-2.48 0-1.147.307-1.973.92-2.48.64-.533 1.654-.8 3.04-.8 1.36 0 2.36.267 3 .8.64.507.96 1.333.96 2.48 0 1.12-.32 1.947-.96 2.48-.64.507-1.64.76-3 .76Zm3.4 2.32v20h-6.8V33h6.8Zm7.441-2.32c-1.387 0-2.4-.253-3.04-.76-.613-.533-.92-1.36-.92-2.48 0-1.147.307-1.973.92-2.48.64-.533 1.653-.8 3.04-.8 1.36 0 2.36.267 3 .8.64.507.96 1.333.96 2.48 0 1.12-.32 1.947-.96 2.48-.64.507-1.64.76-3 .76Zm3.4 2.32v20h-6.8V33h6.8Zm12.401-6.36v19.24c0 .96.226 1.653.68 2.08.48.4 1.133.6 1.96.6.64 0 1.186-.067 1.64-.2.48-.16.906-.387 1.28-.68l.72 4.2c-.667.48-1.507.853-2.52 1.12-1.014.267-2.054.4-3.12.4-1.52 0-2.84-.213-3.96-.64-1.094-.427-1.947-1.107-2.56-2.04-.587-.933-.894-2.173-.92-3.72V28.52l6.8-1.88Zm5.96 6.36v4.84h-16.2V33h16.2Zm13.852 7.32c0-.933-.266-1.667-.8-2.2-.506-.56-1.2-.84-2.08-.84-.88 0-1.64.227-2.28.68-.613.427-1.04 1.2-1.28 2.32l-5.76-1.36c.374-1.92 1.36-3.453 2.96-4.6 1.6-1.147 3.854-1.72 6.76-1.72 1.947 0 3.6.293 4.96.88 1.387.56 2.44 1.413 3.16 2.56.747 1.12 1.12 2.507 1.12 4.16v7.32c0 1.04.467 1.56 1.4 1.56.48 0 .867-.053 1.16-.16l-.4 3.88c-.8.373-1.773.56-2.92.56-1.04 0-1.96-.16-2.76-.48-.8-.347-1.426-.853-1.88-1.52-.453-.693-.68-1.56-.68-2.6v-.24l.76-.28c0 1.147-.346 2.107-1.04 2.88-.666.773-1.546 1.347-2.64 1.72-1.066.373-2.186.56-3.36.56-1.36 0-2.546-.213-3.56-.64-1.013-.427-1.8-1.04-2.36-1.84-.533-.827-.8-1.84-.8-3.04 0-1.44.427-2.627 1.28-3.56.88-.96 2.254-1.627 4.12-2l7.56-1.56-.04 3.6-3.84.8c-.8.16-1.4.4-1.8.72-.373.293-.56.747-.56 1.36 0 .587.214 1.027.64 1.32.427.293.934.44 1.52.44.454 0 .88-.067 1.28-.2.427-.133.8-.333 1.12-.6.32-.293.574-.653.76-1.08.187-.427.28-.933.28-1.52v-5.28Z"
    />
  </svg>
)
