import 'highlight.js/styles/base16/atelier-cave-light.css'

import dynamic from 'next/dynamic'

import getPageDetail from '@/libs/_shared/hooks/getPageDetail.hook'
import { DetailPageFeatureProps } from '@/libs/_shared/types/routers.type'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'
import UiPostDetailContainer from '@/libs/postDetail/ui/postDetailContainer.ui'

const Gnb = dynamic(() => import('@/libs/gnb/feature/gnb.feature'), {
  ssr: false,
})

export default async function DetailPageFeature({
  slug,
  property,
}: DetailPageFeatureProps) {
  const { html, info: archiveInfo } = await getPageDetail(slug, property)

  return (
    <main>
      <Gnb title={archiveInfo.title} />
      <UiPostDetailContainer
        content={html}
        location={<CurrentLocation />}
        {...archiveInfo}
      />
    </main>
  )
}
