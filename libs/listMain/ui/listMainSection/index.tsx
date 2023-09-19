import classNames from 'classnames/bind'

import Link from 'next/link'

import UiDividing from '@/libs/dividing/ui/dividing.ui'
import UiSpacing from '@/libs/spacing/ui/spacing.ui'

import styles from './listMainSection.module.scss'

const cx = classNames.bind(styles)

interface SectionProps {
  slug: string
  title: string
  subTitle: string
  createdDate: string
}

interface ListMainSectionProps {
  section: SectionProps[]
  sectionType: 'projects' | 'archives'
}

export default function ListMainSection({
  section,
  sectionType,
}: ListMainSectionProps) {
  return (
    <ol className={cx('sectionContainer')}>
      {section.map(({ slug, title, subTitle, createdDate }) => (
        <>
          <UiSpacing size={32} />
          <Link
            href={`/${sectionType}/${slug}`}
            shallow={true}
            key={slug}
            className={cx('section')}
          >
            <p className={cx('title')}>{title}</p>
            <p className={cx('subTitle')}>{subTitle}</p>
            <p className={cx('date')}>{createdDate}</p>
          </Link>
          <UiSpacing size={32} />
          <UiDividing lineWeight={0.1} lineColor="#424030" lineOpacity={0.1} />
        </>
      ))}
    </ol>
  )
}
