import { META_GRAPHICS } from '@/app/_meta'

import ListPageFeature from '@/libs/_shared/pages/feature/listPage.feature-shell'
import { ListPageProps } from '@/libs/_shared/types/routers.type'

export const metadata = META_GRAPHICS

export default async function GraphicPage({ searchParams }: ListPageProps) {
  return (
    <ListPageFeature
      property="graphic"
      pageSize={99}
      cursor={searchParams.cursor}
    />
  )
}
