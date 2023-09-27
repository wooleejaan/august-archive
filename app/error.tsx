'use client'

import { useEffect } from 'react'

import classNames from 'classnames/bind'

import paragraphGenerator from '@/libs/_shared/helpers/paragraphGenerator.helper'
import styles from '@/libs/_shared/pages/ui/error.module.scss'

const cx = classNames.bind(styles)

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  const onReset = () => reset()

  return (
    <div className={cx('container')}>
      <div className={cx('notfound')}>error : 오류가 발생했어요.</div>
      <button className={cx('text')} onClick={onReset}>
        {paragraphGenerator()}
      </button>
    </div>
  )
}
