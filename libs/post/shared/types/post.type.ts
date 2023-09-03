import { HTMLAttributes } from 'react'

interface PostProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
  text: string
  onIdExtracted?: (id: string) => void
}

export type { PostProps, HeadingProps }
