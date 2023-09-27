import classNames from 'classnames/bind'

import Link from 'next/link'

import { UiDotsProps } from '@/libs/shared/types/components.type'

import styles from './dots.module.scss'

const cx = classNames.bind(styles)

export default function UiDots({ sectionType }: UiDotsProps) {
  return (
    <Link
      href={`/${sectionType}`}
      prefetch={true}
      shallow={true}
      className={cx('dots')}
    >
      <div className={cx('dot')}></div>
      <div className={cx('dot')}></div>
      <div className={cx('dot')}></div>
    </Link>
  )
}
