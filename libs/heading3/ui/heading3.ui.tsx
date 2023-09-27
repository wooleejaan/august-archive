import classNames from 'classnames/bind'

import { UiHeading3Props } from '@/libs/_shared/types/components.type'

import styles from './heading3.module.scss'

const cx = classNames.bind(styles)

export default function Heading3({
  children,
  color,
  ...props
}: UiHeading3Props) {
  return (
    <h3 id={props.id} className={cx('h3', 'ch')} style={{ color }} {...props}>
      {/* <Link href={`#${props.id}`}>{children}</Link> */}
      {children}
    </h3>
  )
}
