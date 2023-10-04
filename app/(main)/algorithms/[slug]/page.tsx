import { generateParamsMetadata } from '@/app/_meta'

import DetailPageFeature from '@/libs/_shared/pages/feature/detailPage.feature-shell'
import { DetailPageProps } from '@/libs/_shared/types/routers.type'

export const generateMetadata = generateParamsMetadata

export default async function AlgorithmDetailPage({ params }: DetailPageProps) {
  return <DetailPageFeature slug={params.slug} property="algorithm" />
}
