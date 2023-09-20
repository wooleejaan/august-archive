import classNames from 'classnames/bind'

import Link from 'next/link'

import { HeadingProps } from '../shared/heading3.type'
import styles from './heading3.module.scss'

const cx = classNames.bind(styles)

export default function Heading3({ children, color, ...props }: HeadingProps) {
  return (
    <h3 className={cx('h3', 'ch')} style={{ color }} {...props}>
      <Link href={`#${props.id}`}>{children}</Link>
    </h3>
  )
}
