import classNames from 'classnames/bind'

import { ChipContainerProps } from '@/libs/shared/types/components.type'

import styles from './chip.module.scss'
import UiChip from './chip.ui'

const cx = classNames.bind(styles)

export default function ChipContainer({ chipList }: ChipContainerProps) {
  return (
    <div className={cx('chipContainer')}>
      {chipList.map((chip) => (
        <UiChip key={chip} chipName={chip} />
      ))}
    </div>
  )
}
