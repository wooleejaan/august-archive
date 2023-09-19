import UiDots from '@/libs/dots/ui/dots.ui'

import { HeroMainSectionProps } from '../shared/types/heroMain.type'
import UiHeroMainSection from '../ui/heroMainSection.ui.tsx'

export default function HeroMainArchives({ section }: HeroMainSectionProps) {
  return (
    <>
      <UiHeroMainSection section={section} sectionType="archives" />
      <UiDots sectionType="archives" />
    </>
  )
}
