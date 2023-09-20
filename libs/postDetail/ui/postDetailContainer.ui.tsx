import classNames from 'classnames/bind'

import ChipContainer from '@/libs/chip/chipContainer.feature'
import UiDividing from '@/libs/dividing/ui/dividing.ui'
import Heading3 from '@/libs/heading3/ui/heading3.ui'
import UiSpacing from '@/libs/spacing/ui/spacing.ui'

import styles from './postDetailContainer.module.scss'

const cx = classNames.bind(styles)

interface UiPostDetailContainerProps {
  content: string
  createdTime: string
  subTitle: string
  category: string[]
  slug: string
  title: string
  location: React.ReactElement
}

export default function UiPostDetailContainer({
  content,
  createdTime,
  subTitle,
  category,
  title,
  location,
}: UiPostDetailContainerProps) {
  return (
    <article className={cx('detailWrapper')}>
      <section>
        {location}
        <Heading3 id={title} color="#666">
          {title[0].toUpperCase() + title.slice(1)}
        </Heading3>
        <p className={cx('subTitle')}>{subTitle}</p>
        <div className={cx('infoContainer')}>
          <ChipContainer chipList={category} />
          <span className={cx('created')}>{createdTime}</span>
        </div>
        <UiSpacing size={12} />
        <UiDividing lineColor="#d1d1d1" />
        <UiSpacing size={24} />
      </section>
      <section
        className={cx('detailContainer')}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}
