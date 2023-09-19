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

export type { SectionTypeProps, HeroMainSectionProps }
