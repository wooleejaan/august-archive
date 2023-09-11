import RecoilRootProvider from '@/libs/shared/context/recoil.context'
import '@/libs/shared/styles/global.scss'

import { PureunJeonnam } from '@/public/fonts/localfonts'

import { META_ROOT } from './_meta'

export const metadata = META_ROOT

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={PureunJeonnam.className}>
      <body>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  )
}
