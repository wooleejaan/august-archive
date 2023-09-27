import { HeroMainProps } from '@/libs/_shared/types/components.type.js'

import UiHeroMain from '../ui/heroMain.ui.tsx'

export default function HeroMain({ children, location }: HeroMainProps) {
  return <UiHeroMain location={location}>{children}</UiHeroMain>
}
