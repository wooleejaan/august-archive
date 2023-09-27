import { HeroMainSectionProps } from '@/libs/_shared/types/components.type.js'
import UiDots from '@/libs/dots/ui/dots.ui'

import UiHeroMainSection from '../ui/heroMainSection.ui.tsx'

export default function HeroMainProjects({ section }: HeroMainSectionProps) {
  return (
    <>
      <UiHeroMainSection section={section} sectionType="projects" />
      <UiDots sectionType="projects" />
    </>
  )
}
