'use client'

import classNames from 'classnames/bind'

import { GnbProps } from '@/libs/_shared/types/components.type'

import useGnbView from '../data-access/gnb.data-access'
import styles from '../ui/gnb.module.scss'

const cx = classNames.bind(styles)

export default function Gnb({ title }: GnbProps) {
  const { visible, position } = useGnbView()

  return (
    <nav>
      <div className={cx('blurLayer')} aria-hidden="true" />
      <div
        className={cx('wrapper', {
          isView: !visible,
          isTop: position <= 400,
        })}
      >
        <p className={cx('title')}>{title}</p>
      </div>
    </nav>
  )
}
