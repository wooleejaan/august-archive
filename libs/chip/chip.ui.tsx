import classNames from 'classnames/bind'

import Link from 'next/link'

import { ChipProps } from '@/libs/_shared/types/components.type'

import styles from './chip.module.scss'

const cx = classNames.bind(styles)

export default function UiChip({ chipName, ...props }: ChipProps) {
  return (
    <span className={cx('chip')} {...props}>
      <Link href={`/tags/${chipName}`} prefetch={true} shallow={true}>
        {chipName.replaceAll('-', ' ')}
      </Link>
    </span>
  )
}
