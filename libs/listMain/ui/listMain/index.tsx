import classNames from 'classnames/bind'

import { UiListMainProps } from '@/libs/shared/types/components.type'

import UiDividing from '@/libs/dividing/ui/dividing.ui'
import Heading3 from '@/libs/heading3/ui/heading3.ui'
import UiSpacing from '@/libs/spacing/ui/spacing.ui'

import styles from './listMain.module.scss'

const cx = classNames.bind(styles)

export default function UiListMain({
  children,
  listTitle,
  location,
}: UiListMainProps) {
  return (
    <article className={cx('listWrapper')}>
      <section>
        {location}
        <Heading3 id={listTitle}>
          {listTitle[0].toUpperCase() + listTitle.slice(1)}
        </Heading3>
        <UiSpacing size={6} />
        <UiDividing lineColor="#d1d1d1" />
      </section>
      <article className={cx('listContainer')}>{children}</article>
    </article>
  )
}
