import classNames from 'classnames/bind'

import { HeroMainSectionProps } from '@/libs/_shared/types/components.type.js'
import UiDots from '@/libs/dots/ui/dots.ui'

import styles from '../ui/heroMainContainer.module.scss'
import UiHeroMainSection from '../ui/heroMainSection.ui.tsx'

const cx = classNames.bind(styles)

export default function HeroMainArchives({
  section,
  sectionName,
}: HeroMainSectionProps) {
  return (
    <div className={cx('container')}>
      <UiHeroMainSection
        section={section}
        sectionType={sectionName as string}
      />
      <UiDots sectionType={sectionName as string} />
    </div>
  )
}
