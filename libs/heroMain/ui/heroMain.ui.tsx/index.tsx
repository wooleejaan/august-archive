import classNames from 'classnames/bind'

import Link from 'next/link'

import { HeroMainProps } from '@/libs/_shared/types/components.type'
import UiParagraph from '@/libs/paragraph/ui/paragraph.ui'
import UiSpacing from '@/libs/spacing/ui/spacing.ui'

import UiContacts from './contacts.ui'
import styles from './heroMain.module.scss'

const cx = classNames.bind(styles)

export default function UiHeroMain({ children, location }: HeroMainProps) {
  return (
    <article className={cx('heroWrapper')}>
      <section className={cx('bioContainer')}>
        {location}
        <UiSpacing size={15} />
        <UiParagraph>
          정적이고 부드러운 인터페이스와 정제된 그래픽을 만들고 싶습니다.
          <br />
          <br />
          장황하기보다는 함축적이고 추상적인 걸 선호합니다.
          <br />
          논리적으로 차근차근 실타래를 풀어내고, 불필요한 것을 덜어내는 과정을
          즐깁니다.
          <br />
          복잡하게 얽힌 문제를 단순하고 명료하게 풀어낼 때 희열을 느낍니다.
          <br />
          일상적인 사물을 낯선 시선으로 재정의할 줄 아는 사람이 되고 싶습니다.
        </UiParagraph>
        <UiParagraph>
          이 곳은 지극히 취미의 영역입니다. 사랑하는 것들을 게시합니다.
          <br />
          기술적으로 학습하는 내용은{' '}
          <Link
            className={cx('underLink')}
            href="https://yongwoo.oopy.io/"
            target="_blank"
          >
            기술 블로그
          </Link>
          에 기록하고 있습니다.
        </UiParagraph>
        <UiContacts />
      </section>
      <article className={cx('previewContainer')}>{children}</article>
    </article>
  )
}
