import classNames from 'classnames/bind'

import Link from 'next/link'

import UiSlashPadding from '../ui/slashPadding.ui'
import styles from './currentLocationName.module.scss'

const cx = classNames.bind(styles)

const currentLocationName = (pathname: string) => {
  if (pathname === '/') {
    return (
      <div className={cx('linkContainer')}>
        <Link href="/" className={cx('link')} prefetch={true} shallow={true}>
          august
        </Link>
      </div>
    )
  }
  if (pathname === '/archives') {
    return (
      <div className={cx('linkContainer')}>
        <Link href="/" className={cx('link')} prefetch={true} shallow={true}>
          august
        </Link>
        <UiSlashPadding />
        <Link
          href="/archives"
          className={cx('link')}
          prefetch={true}
          shallow={true}
        >
          archives
        </Link>
      </div>
    )
  }
  if (pathname === '/projects') {
    return (
      <div className={cx('linkContainer')}>
        <Link href="/" className={cx('link')} prefetch={true} shallow={true}>
          august
        </Link>
        <UiSlashPadding />
        <Link
          href="/projects"
          className={cx('link')}
          prefetch={true}
          shallow={true}
        >
          projects
        </Link>
      </div>
    )
  }
  if (pathname.includes('/projects/')) {
    const locationName = pathname.replace('/projects/', '').replaceAll('-', ' ')
    return (
      <div className={cx('linkContainer')}>
        <Link href="/" className={cx('link')} prefetch={true} shallow={true}>
          august
        </Link>
        <UiSlashPadding />
        <Link
          href="/projects"
          className={cx('link')}
          prefetch={true}
          shallow={true}
        >
          projects
        </Link>
        <UiSlashPadding />
        <Link
          href={pathname}
          className={cx('link')}
          prefetch={true}
          shallow={true}
        >
          {locationName}
        </Link>
      </div>
    )
  }
  if (pathname.includes('/archives/')) {
    const locationName = pathname.replace('/archives/', '').replaceAll('-', ' ')
    return (
      <div className={cx('linkContainer')}>
        <Link href="/" className={cx('link')} prefetch={true} shallow={true}>
          august
        </Link>
        <UiSlashPadding />
        <Link
          href="/archives"
          className={cx('link')}
          prefetch={true}
          shallow={true}
        >
          archives
        </Link>
        <UiSlashPadding />
        <Link
          href={pathname}
          className={cx('link')}
          prefetch={true}
          shallow={true}
        >
          {locationName}
        </Link>
      </div>
    )
  }
}

export { currentLocationName }
