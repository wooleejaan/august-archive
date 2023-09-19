import classNames from 'classnames/bind'

import CurrentLocation from '@/libs/location/feature/currentLocation.feature'
import UiParagraph from '@/libs/paragraph/ui/paragraph.ui'

import { HeroMainProps } from '../../shared/types/heroMain.type'
import UiContacts from './contacts.ui'
import styles from './heroMain.module.scss'

const cx = classNames.bind(styles)

export default function UiHeroMain({ children }: HeroMainProps) {
  return (
    <article className={cx('heroWrapper')}>
      <section className={cx('bioContainer')}>
        <CurrentLocation />
        <UiParagraph>
          새로운 깨달음을 얻는 순간에 가장 큰 기쁨을 느끼며, 기술적으로 문제를
          해결할 때 보람을 느낍니다. 또한 배운 지식을 글로 정리하는 걸 즐깁니다.
        </UiParagraph>
        <UiParagraph color="#d1d1d1" fontWeight={300} fontSize={13.5}>
          front-end developer
        </UiParagraph>
        <UiContacts />
      </section>
      <article className={cx('previewContainer')}>{children}</article>
    </article>
  )
}
