import classNames from 'classnames/bind'

import UiDividing from '@/libs/dividing/ui/dividing.ui'
import Heading3 from '@/libs/heading3/ui/heading3.ui'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'
import UiSpacing from '@/libs/spacing/ui/spacing.ui'

import styles from './listMain.module.scss'

const cx = classNames.bind(styles)

interface UiListMainProps {
  children: React.ReactNode
  listTitle: 'projects' | 'archives'
}

export default function UiListMain({ children, listTitle }: UiListMainProps) {
  return (
    <article className={cx('listWrapper')}>
      <section>
        <CurrentLocation />
        <Heading3 id={listTitle}>
          {listTitle[0].toUpperCase() + listTitle.slice(1)}
        </Heading3>
        <UiSpacing size={12} />
        <UiDividing lineColor="#424030" />
      </section>
      <article className={cx('listContainer')}>{children}</article>
    </article>
  )
}
