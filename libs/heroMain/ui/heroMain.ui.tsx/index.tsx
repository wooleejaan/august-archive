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
          새롭게 알게 된 지식, 직면하고 해결한 기술적인 문제를 글로 정리하고
          공유합니다. 정적이면서도 부드러운 그래픽과 인터페이스를 사랑합니다.
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
