import classNames from 'classnames/bind'

import Link from 'next/link'

import styles from './dots.module.scss'

const cx = classNames.bind(styles)

interface UiDotsProps {
  sectionType: 'archives' | 'projects'
}

export default function UiDots({ sectionType }: UiDotsProps) {
  return (
    <Link href={`/${sectionType}`} shallow={true} className={cx('dots')}>
      <div className={cx('dot')}></div>
      <div className={cx('dot')}></div>
      <div className={cx('dot')}></div>
    </Link>
  )
}
