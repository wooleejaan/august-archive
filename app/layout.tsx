import RecoilRootProvider from '@/libs/_shared/context/recoil.context'
import GoogleAnalytics from '@/libs/_shared/services/ga/provider'
import '@/libs/_shared/styles/global.scss'
import { RootLayoutProps } from '@/libs/_shared/types/routers.type'
import UiFooter from '@/libs/footer/ui/footer.ui'

import { PureunJeonnam } from '@/public/fonts/localfonts'

import { META_ROOT } from './_meta'

export const metadata = META_ROOT

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className={PureunJeonnam.className}>
      <body>
        <GoogleAnalytics />
        <RecoilRootProvider>
          {children}
          <UiFooter />
        </RecoilRootProvider>
      </body>
    </html>
  )
}
