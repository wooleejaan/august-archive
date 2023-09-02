import '@/libs/shared/styles/global.scss'

import { spoqaHanSansNeo } from '@/public/fonts/localfonts'

import { META_ROOT } from './_meta'

export const metadata = META_ROOT

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={spoqaHanSansNeo.className}>
      <body>{children}</body>
    </html>
  )
}
