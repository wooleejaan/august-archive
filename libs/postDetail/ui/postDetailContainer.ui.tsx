import classNames from 'classnames/bind'

import { UiPostDetailContainerProps } from '@/libs/_shared/types/components.type'
import UiDividing from '@/libs/dividing/ui/dividing.ui'
import UiSpacing from '@/libs/spacing/ui/spacing.ui'

import styles from './postDetailContainer.module.scss'

const cx = classNames.bind(styles)

export default function UiPostDetailContainer({
  content,
  createdTime,
  subTitle,
  title,
  location,
}: UiPostDetailContainerProps) {
  return (
    <article className={cx('detailWrapper')}>
      <section>
        {location}

        <h3 className={cx('title')}>{title}</h3>
        <p className={cx('subTitle')}>{subTitle}</p>
        <div className={cx('infoContainer')}>
          <span className={cx('created')}>{createdTime}</span>
        </div>
        <UiSpacing size={12} />
        <UiDividing lineColor="#d1d1d180" />
        <UiSpacing size={24} />
      </section>
      <section
        className={cx('detailContainer')}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <UiSpacing size={48} />
      <UiDividing lineColor="#d1d1d180" />
      <UiSpacing size={16} />
    </article>
  )
}
