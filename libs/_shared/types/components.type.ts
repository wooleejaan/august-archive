import { HTMLAttributes } from 'react'

interface ChipContainerProps {
  chipList: string[]
}

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  chipName: string
}

interface UiDividingProps extends HTMLAttributes<HTMLDivElement> {
  children?: never
  lineWeight?: number
  lineColor: string
  lineOpacity?: number
}

interface UiDotsProps {
  sectionType: string
}

interface GnbProps {
  title: string
}

interface UiHeading3Props extends HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
  color?: string
}

interface HeroMainProps {
  children: React.ReactNode
  location: React.ReactElement
}

interface SectionProps {
  slug: string
  title: string
}

interface SectionTypeProps {
  sectionType: string
}

interface HeroMainSectionProps {
  section: SectionProps[]
  sectionName?: string
}

interface UiListMainProps {
  children: React.ReactNode
  listTitle: string
  location: React.ReactElement
}

interface ListSectionProps {
  slug: string
  title: string
  subTitle: string
  createdDate: string
  sectionType: string
  date: string
}

interface ListMainSectionProps {
  section: ListSectionProps[]
}

interface UiParagraphProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  color?: string
  fontWeight?: number
  fontSize?: number
}

interface UiPostDetailContainerProps {
  content: string
  createdTime?: string
  subTitle: string
  category: string[]
  slug: string
  title: string
  date: string
  location: React.ReactElement
}

interface TagsProps {
  tags: string[]
}

export type {
  ChipContainerProps,
  ChipProps,
  UiDividingProps,
  UiDotsProps,
  GnbProps,
  UiHeading3Props,
  HeroMainProps,
  SectionTypeProps,
  HeroMainSectionProps,
  UiListMainProps,
  ListMainSectionProps,
  UiParagraphProps,
  UiPostDetailContainerProps,
  TagsProps,
}
