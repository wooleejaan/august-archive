import { HeroMainProps } from '../shared/types/heroMain.type'
import UiHeroMain from '../ui/heroMain.ui.tsx'

export default function HeroMain({ children, location }: HeroMainProps) {
  return <UiHeroMain location={location}>{children}</UiHeroMain>
}
