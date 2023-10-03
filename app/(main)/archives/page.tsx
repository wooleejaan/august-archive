import { META_ARCHIVES } from '@/app/_meta'

import ListPageFeature from '@/libs/_shared/pages/feature/listPage.feature-shell'
import { ListPageProps } from '@/libs/_shared/types/routers.type'

export const metadata = META_ARCHIVES

export default async function ArchivesPage({ searchParams }: ListPageProps) {
  return (
    <ListPageFeature
      property="archive"
      pageSize={10}
      cursor={searchParams.cursor}
    />
  )
}
