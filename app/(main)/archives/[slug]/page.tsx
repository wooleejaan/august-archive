import { generateParamsMetadata } from '@/app/_meta'
import 'highlight.js/styles/github-dark.css'

import dynamic from 'next/dynamic'

import getPageDetail from '@/libs/_shared/hooks/getPageDetail.hook'
import { DetailPageProps } from '@/libs/_shared/types/routers.type'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'
import UiPostDetailContainer from '@/libs/postDetail/ui/postDetailContainer.ui'

const Gnb = dynamic(() => import('@/libs/gnb/feature/gnb.feature'), {
  ssr: false,
})

export const generateMetadata = generateParamsMetadata

export default async function ArchiveDetailPage({ params }: DetailPageProps) {
  const { html, info: archiveInfo } = await getPageDetail(
    params.slug,
    'archive',
  )

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
