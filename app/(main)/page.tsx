import UiDots from '@/libs/dots/ui/dots.ui'
import HeroMain from '@/libs/heroMain/feature/heroMain.feature'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'

export default async function HomePage() {
  return (
    <main>
      <HeroMain location={<CurrentLocation />}>
        <UiDots sectionType="archives" />
      </HeroMain>
    </main>
  )
}
