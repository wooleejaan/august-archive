import classNames from 'classnames/bind'

import Link from 'next/link'

import { ListMainSectionProps } from '@/libs/_shared/types/components.type'
import UiDividing from '@/libs/dividing/ui/dividing.ui'
import UiSpacing from '@/libs/spacing/ui/spacing.ui'

import styles from './listMainSection.module.scss'

const cx = classNames.bind(styles)

export default function ListMainSection({
  section,
  sectionType,
}: ListMainSectionProps) {
  return (
    <ol className={cx('sectionContainer')}>
      {section.map(({ slug, title, subTitle, createdDate }, index) => (
        <li key={slug} className={cx(`index${index}`)}>
          <UiSpacing size={32} />
          <Link
            href={`/${sectionType}/${slug}`}
            prefetch={true}
            shallow={true}
            key={slug}
            className={cx('section')}
          >
            <p className={cx('title')}>{title}</p>
            <p className={cx('subTitle')}>{subTitle}</p>
            <p className={cx('date')}>{createdDate}</p>
          </Link>
          <UiSpacing size={32} />
          <UiDividing lineWeight={0.1} lineColor="#d1d1d1" lineOpacity={0.1} />
        </li>
      ))}
    </ol>
  )
}
