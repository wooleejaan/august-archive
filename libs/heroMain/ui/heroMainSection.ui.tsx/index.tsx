import classNames from 'classnames/bind'

import Link from 'next/link'

import {
  HeroMainSectionProps,
  SectionTypeProps,
} from '@/libs/_shared/types/components.type'
import Heading3 from '@/libs/heading3/ui/heading3.ui'

import styles from './heroMainSection.module.scss'

const cx = classNames.bind(styles)

export default function UiHeroMainSection({
  section,
  sectionType,
}: HeroMainSectionProps & SectionTypeProps) {
  const sectionTitle = sectionType.replace('-', ' ')
  return (
    <section className={cx('projectsWrapper')}>
      <Heading3 id={sectionType}>{sectionTitle}</Heading3>
      <ol className={cx('previewContainer')}>
        {section.map(({ slug, title }) => (
          <li key={title}>
            <Link
              href={`/${sectionType}/${slug}`}
              prefetch={true}
              shallow={true}
              className={cx('link')}
            >
              <p className={cx('list')}>{title}</p>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
