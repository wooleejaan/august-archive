import { HeroMainSectionProps } from '../shared/types/heroMain.type'
import UiHeroMainSection from '../ui/heroMainSection.ui.tsx'

export default function HeroMainArchives({ section }: HeroMainSectionProps) {
  return <UiHeroMainSection section={section} sectionType="archives" />
}
