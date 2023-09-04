import { HTMLAttributes } from 'react'

interface PostProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
  text: string
  onIdExtracted?: (id: string) => void
}
interface ParagraphProps extends HTMLAttributes<HTMLSpanElement> {
  text: string
  color?: string
}

export type { PostProps, HeadingProps, ParagraphProps }
