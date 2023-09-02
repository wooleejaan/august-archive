import '@/libs/shared/styles/global.scss'

import { META_ROOT } from './_meta'

export const metadata = META_ROOT

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
