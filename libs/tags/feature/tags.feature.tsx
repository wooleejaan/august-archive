/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind'

import Link from 'next/link'

import { TagsProps } from '@/libs/_shared/types/components.type'

import styles from '../ui/tags.module.scss'

const cx = classNames.bind(styles)

export default function Tags({ tags }: TagsProps) {
  return (
    <div className={cx('container')}>
      <div className={cx('blurContainer')}></div>
      <ul className={cx('wrapper')}>
        {tags.map((tag) => (
          <li className={cx('tag')} key={tag}>
            <Link href={`/tags/${tag}`} prefetch={true} shallow={true}>
              {tag.replaceAll('-', ' ')}
            </Link>
          </li>
        ))}
      </ul>
      <div className={cx('blurContainer')}></div>
    </div>
  )
}
