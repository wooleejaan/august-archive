'use client'

import classNames from 'classnames/bind'

import useGnbView from '../data-access/gnb.data-access'
import styles from '../ui/gnb.module.scss'

const cx = classNames.bind(styles)

interface GnbProps {
  title: string
}

export default function Gnb({ title }: GnbProps) {
  const { visible, position } = useGnbView()

  return (
    <nav
      className={cx('wrapper', {
        isView: !visible,
        isTop: position === 0,
      })}
    >
      <p className={cx('title')}>{title}</p>
    </nav>
  )
}
