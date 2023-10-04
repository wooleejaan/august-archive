import { META_ALGORITHMS } from '@/app/_meta'

import ListPageFeature from '@/libs/_shared/pages/feature/listPage.feature-shell'
import { ListPageProps } from '@/libs/_shared/types/routers.type'

export const metadata = META_ALGORITHMS

export default async function AlgorithmsPage({ searchParams }: ListPageProps) {
  return (
    <ListPageFeature
      property="algorithm"
      pageSize={10}
      cursor={searchParams.cursor}
    />
  )
}
