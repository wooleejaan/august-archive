import classNames from 'classnames/bind'

import Link from 'next/link'

import Heading3 from '@/libs/heading3/ui/heading3.ui'

import {
  HeroMainSectionProps,
  SectionTypeProps,
} from '../../shared/types/heroMain.type'
import styles from './heroMainSection.module.scss'

const cx = classNames.bind(styles)

export default function UiHeroMainSection({
  section,
  sectionType,
}: HeroMainSectionProps & SectionTypeProps) {
  return (
    <section className={cx('projectsWrapper')}>
      <Heading3 id={sectionType}>
        {sectionType[0].toUpperCase() + sectionType.slice(1)}
      </Heading3>
      <ol className={cx('previewContainer')}>
        {section.map(({ slug, title }) => (
          <li key={title} className={cx('list')}>
            <Link href={`/${sectionType}/${slug}`}>{title}</Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
