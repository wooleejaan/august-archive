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
interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  children?: never
  direction?: 'horizontal' | 'vertical'
  size: number
}
interface ImageContainerProps extends HTMLAttributes<HTMLImageElement> {
  width?: number | string
  height?: number | string
  imgSrc: string
  imgDesc: string
}
interface YoutubeVideoProps {
  width?: number
  height?: number
  yId: string
}

export type {
  PostProps,
  HeadingProps,
  ParagraphProps,
  SpacingProps,
  ImageContainerProps,
  YoutubeVideoProps,
}
