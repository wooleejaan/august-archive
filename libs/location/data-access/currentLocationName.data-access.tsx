import classNames from 'classnames/bind'

import Link from 'next/link'

import UiSlashPadding from '../ui/slashPadding.ui'
import styles from './currentLocationName.module.scss'

const cx = classNames.bind(styles)

const currentLocationName = (pathname: string) => {
  if (pathname === '/') {
    return (
      <div>
        <Link href="/" className={cx('link')}>
          august
        </Link>
      </div>
    )
  }
  if (pathname === '/archives') {
    return (
      <div>
        <Link href="/" className={cx('link')}>
          august
        </Link>
        <UiSlashPadding />
        <Link href="/archives" className={cx('link')}>
          archives
        </Link>
      </div>
    )
  }
  if (pathname === '/projects') {
    return (
      <div>
        <Link href="/" className={cx('link')}>
          august
        </Link>
        <UiSlashPadding />
        <Link href="/projects" className={cx('link')}>
          projects
        </Link>
      </div>
    )
  }
  if (pathname.includes('/projects/')) {
    const locationName = pathname.replace('/projects/', '').replaceAll('-', ' ')
    return (
      <div>
        <Link href="/" className={cx('link')}>
          august
        </Link>
        <UiSlashPadding />
        <Link href="/projects" className={cx('link')}>
          projects
        </Link>
        <UiSlashPadding />
        <Link href={pathname} className={cx('link')}>
          {locationName}
        </Link>
      </div>
    )
  }
  if (pathname.includes('/archives/')) {
    const locationName = pathname.replace('/archives/', '').replaceAll('-', ' ')
    return (
      <div>
        <Link href="/" className={cx('link')}>
          august
        </Link>
        <UiSlashPadding />
        <Link href="/archives" className={cx('link')}>
          projects
        </Link>
        <UiSlashPadding />
        <Link href={pathname} className={cx('link')}>
          {locationName}
        </Link>
      </div>
    )
  }
}

export { currentLocationName }
