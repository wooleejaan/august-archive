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

  if (pathname === '/algorithms') {
    return (
      <div className={cx('linkContainer')}>
        <Link href="/" className={cx('link')} prefetch={true} shallow={true}>
          august
        </Link>
        <UiSlashPadding />
        <Link
          href="/algorithms"
          className={cx('link')}
          prefetch={true}
          shallow={true}
        >
          algorithms
        </Link>
      </div>
    )
  }

  if (pathname.includes('/algorithms/')) {
    const locationName = pathname
      .replace('/algorithms/', '')
      .replaceAll('-', ' ')
    return (
      <div className={cx('linkContainer')}>
        <Link href="/" className={cx('link')} prefetch={true} shallow={true}>
          august
        </Link>
        <UiSlashPadding />
        <Link
          href="/algorithms"
          className={cx('link')}
          prefetch={true}
          shallow={true}
        >
          algorithms
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

  if (pathname === '/graphics') {
    return (
      <div className={cx('linkContainer')}>
        <Link href="/" className={cx('link')} prefetch={true} shallow={true}>
          august
        </Link>
        <UiSlashPadding />
        <Link
          href="/graphics"
          className={cx('link')}
          prefetch={true}
          shallow={true}
        >
          graphics
        </Link>
      </div>
    )
  }

  if (pathname.includes('/graphics/')) {
    const locationName = pathname.replace('/graphics/', '').replaceAll('-', ' ')
    return (
      <div className={cx('linkContainer')}>
        <Link href="/" className={cx('link')} prefetch={true} shallow={true}>
          august
        </Link>
        <UiSlashPadding />
        <Link
          href="/graphics"
          className={cx('link')}
          prefetch={true}
          shallow={true}
        >
          graphics
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

  if (pathname.includes('/tags/')) {
    const locationName = pathname.replace('/tags/', '').replaceAll('-', ' ')
    return (
      <div className={cx('linkContainer')}>
        <Link href="/" className={cx('link')} prefetch={true} shallow={true}>
          august
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
