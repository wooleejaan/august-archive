import classNames from 'classnames/bind'

import Link from 'next/link'

import paragraphGenerator from '@/libs/_shared/helpers/paragraphGenerator.helper'
import styles from '@/libs/_shared/pages/ui/not-found.module.scss'

const cx = classNames.bind(styles)

export default function NotFound() {
  return (
    <div className={cx('container')}>
      <div className={cx('notfound')}>not found : 페이지를 찾지 못했어요.</div>
      <div className={cx('text')}>
        <Link href="/">{paragraphGenerator()}</Link>
      </div>
    </div>
  )
}
