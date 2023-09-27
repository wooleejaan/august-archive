import classNames from 'classnames/bind'

import { HeroMainProps } from '@/libs/_shared/types/components.type'
import UiParagraph from '@/libs/paragraph/ui/paragraph.ui'
import UiSpacing from '@/libs/spacing/ui/spacing.ui'
import Tags from '@/libs/tags/feature/tags.feature'

import UiContacts from './contacts.ui'
import styles from './heroMain.module.scss'

const cx = classNames.bind(styles)

export default function UiHeroMain({
  children,
  location,
  tags,
}: HeroMainProps) {
  return (
    <article className={cx('heroWrapper')}>
      <section className={cx('bioContainer')}>
        {location}
        <UiSpacing size={15} />
        <UiParagraph>
          새로운 깨달음을 얻는 순간에 가장 큰 기쁨을 느끼며, 기술적으로 문제를
          해결할 때 보람을 느낍니다. 또한 배운 지식을 글로 정리하는 걸 즐깁니다.
        </UiParagraph>
        <UiParagraph color="#d1d1d1" fontWeight={300} fontSize={13.5}>
          front-end developer
        </UiParagraph>
        <UiContacts />
        <UiSpacing size={15} />
        <Tags tags={tags} />
      </section>
      <article className={cx('previewContainer')}>{children}</article>
    </article>
  )
}
