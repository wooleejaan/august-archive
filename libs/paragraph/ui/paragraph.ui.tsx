import classNames from 'classnames/bind'

import { UiParagraphProps } from '@/libs/shared/types/components.type'

import styles from './paragraph.module.scss'

const cx = classNames.bind(styles)

export default function UiParagraph({
  children,
  color,
  fontWeight,
  fontSize,
  ...props
}: UiParagraphProps) {
  return (
    <p
      className={cx('paragraph')}
      style={{
        color,
        fontWeight,
        fontSize,
      }}
      {...props}
    >
      {children}
    </p>
  )
}
