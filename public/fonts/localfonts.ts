import localFont from 'next/font/local'

export const PureunJeonnam = localFont({
  src: [
    {
      path: './PureunJeonnam.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './PureunJeonnam-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './PureunJeonnam-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
})
