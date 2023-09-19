import { HTMLAttributes } from 'react'

interface ParagraphProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  color?: string
}

export type { ParagraphProps }
