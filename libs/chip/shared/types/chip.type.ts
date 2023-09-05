import { HTMLAttributes } from 'react'

interface ChipContainerProps {
  chipList: string[]
}

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  chipName: string
}

export type { ChipContainerProps, ChipProps }
