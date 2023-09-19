import { HeroMainSectionProps } from '../shared/types/HeroMainSection.type.js'
import UiHeroMainSection from '../ui/heroMainSection.ui.tsx'

export default function HeroMainArchives({ section }: HeroMainSectionProps) {
  return <UiHeroMainSection section={section} sectionType="archives" />
}
