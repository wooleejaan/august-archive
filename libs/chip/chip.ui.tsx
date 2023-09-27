import classNames from 'classnames/bind'

import { ChipProps } from '@/libs/shared/types/components.type'

import styles from './chip.module.scss'

const cx = classNames.bind(styles)

export default function UiChip({ chipName, ...props }: ChipProps) {
  return (
    <span className={cx('chip')} {...props}>
      {chipName}
    </span>
  )
}
