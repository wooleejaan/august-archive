/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind'

import Link from 'next/link'

import styles from './contacts.module.scss'

const cx = classNames.bind(styles)

export default function UiContacts() {
  return (
    <div className={cx('contacts')}>
      <Link
        href="https://github.com/wooleejaan"
        target="_blank"
        className={cx('imgContainer')}
      >
        <img src="/images/github.svg" alt="github" className={cx('img')} />
      </Link>
      <Link
        href="https://velog.io/@wejaan"
        target="_blank"
        className={cx('imgContainer')}
      >
        <img src="/images/velog.svg" alt="velog" className={cx('img')} />
      </Link>
      <Link
        href="mailto:wooleejaan@gmail.com"
        target="_blank"
        className={cx('imgContainer')}
      >
        <img src="/images/email.svg" alt="email" className={cx('img')} />
      </Link>
      <Link
        href="https://loving-kilogram-ebd.notion.site/3d544d66a8714b4eb61df3b51cc3dfa7"
        target="_blank"
        className={cx('imgContainer')}
      >
        <img src="/images/notion.svg" alt="notion" className={cx('img')} />
      </Link>
    </div>
  )
}
