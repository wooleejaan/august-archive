import classNames from 'classnames/bind'

import styles from './footer.module.scss'

const cx = classNames.bind(styles)

export default function UiFooter() {
  return (
    <footer className={cx('footer')}>
      &copy; 2023 yongwoo all rights reserved.
    </footer>
  )
}
