import getPageList from '@/libs/_shared/hooks/getPageList.hook'
import { ListPageFeatureProps } from '@/libs/_shared/types/routers.type'
import UiListMain from '@/libs/listMain/ui/listMain'
import ListMainSection from '@/libs/listMain/ui/listMainSection'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'

export default async function ListPageFeature({
  property,
  pageSize,
  cursor,
}: ListPageFeatureProps) {
  const { list: archiveList } = await getPageList(property, pageSize, cursor)

  return (
    <main>
      <UiListMain
        listTitle={property === 'cs' ? 'cS' : `${property}s`}
        location={<CurrentLocation />}
      >
        <ListMainSection section={archiveList} />
      </UiListMain>
    </main>
  )
}
