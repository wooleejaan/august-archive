import { HTMLAttributes } from 'react'

interface ParagraphProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  color?: string
  fontWeight?: number
  fontSize?: number
}

export type { ParagraphProps }
