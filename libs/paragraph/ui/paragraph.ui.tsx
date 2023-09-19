import classNames from 'classnames/bind'

import { ParagraphProps } from '../shared/types/paragraph.type'
import styles from './paragraph.module.scss'

const cx = classNames.bind(styles)

export default function UiParagraph({
  children,
  color,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cx('paragraph')}
      style={{
        color,
      }}
      {...props}
    >
      {children}
    </p>
  )
}
