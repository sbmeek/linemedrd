import { SVGProps } from "react"

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} width={props.width || '1.3rem'} height={props.height || '1.3rem'} viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
    <g
      stroke={props.color ? props.color : "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={5}
    >
      <path d="m17.5 17.5 37 37M54.5 17.5l-37 37" />
    </g>
  </svg>
)


