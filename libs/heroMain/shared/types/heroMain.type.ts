interface HeroMainProps {
  children: React.ReactNode
  location: React.ReactElement
}

interface SectionProps {
  slug: string
  title: string
}

interface SectionTypeProps {
  sectionType: 'projects' | 'archives'
}

interface HeroMainSectionProps {
  section: SectionProps[]
}

export type { HeroMainProps, SectionTypeProps, HeroMainSectionProps }
