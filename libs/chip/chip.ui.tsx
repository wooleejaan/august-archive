import classNames from 'classnames/bind'

import styles from './chip.module.scss'
import { ChipProps } from './shared/types/chip.type'

const cx = classNames.bind(styles)

export default function UiChip({ chipName, ...props }: ChipProps) {
  return (
    <span className={cx('chip')} {...props}>
      {chipName}
    </span>
  )
}
