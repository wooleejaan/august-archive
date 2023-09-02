import type { Metadata } from 'next'

const META_ROOT: Metadata = {
  icons: {
    icon: '/images/favicon.ico',
  },
  title: {
    template: '%s : August Archive',
    default: 'August Archive',
  },
  description: '배우고 느낀 것들을 모아두는 공간',
  metadataBase: new URL('https://august-archive.vercel.app/'),
}

export { META_ROOT }
