import { HeroMainSectionProps } from '../shared/types/heroMain.type'
import UiHeroMainSection from '../ui/heroMainSection.ui.tsx'

export default function HeroMainProjects({ section }: HeroMainSectionProps) {
  return <UiHeroMainSection section={section} sectionType="projects" />
}
