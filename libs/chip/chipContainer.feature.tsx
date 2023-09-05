import classNames from 'classnames/bind'

import styles from './chip.module.scss'
import UiChip from './chip.ui'
import { ChipContainerProps } from './shared/types/chip.type'

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
