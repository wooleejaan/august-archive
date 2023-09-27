import { HeroMainProps } from '@/libs/_shared/types/components.type.js'

import UiHeroMain from '../ui/heroMain.ui.tsx'

export default function HeroMain({ children, location, tags }: HeroMainProps) {
  return (
    <UiHeroMain location={location} tags={tags}>
      {children}
    </UiHeroMain>
  )
}
