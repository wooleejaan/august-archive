import { META_ARCHIVES } from '@/app/_meta'

import getPageList from '@/libs/_shared/hooks/getPageList.hook'
import { ListPageProps } from '@/libs/_shared/types/routers.type'
import UiListMain from '@/libs/listMain/ui/listMain'
import ListMainSection from '@/libs/listMain/ui/listMainSection'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'

export const metadata = META_ARCHIVES

export default async function ArchivesPage({ searchParams }: ListPageProps) {
  const { list: archiveList } = await getPageList(
    'archive',
    10,
    searchParams.cursor,
  )

  return (
    <main>
      <UiListMain listTitle="archives" location={<CurrentLocation />}>
        <ListMainSection section={archiveList} />
      </UiListMain>
    </main>
  )
}
