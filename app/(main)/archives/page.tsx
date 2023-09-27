import { META_ARCHIVES } from '@/app/_meta'

import { notFound } from 'next/navigation'

import { getPagesHelper } from '@/libs/_shared/apis/getNotion.api'
import dateConverter from '@/libs/_shared/helpers/monthConverter.helper'
import {
  PagesHelperResponse,
  PartialPageObjectResponseMore,
} from '@/libs/_shared/types/responses.type'
import { ListPageProps } from '@/libs/_shared/types/routers.type'
import UiListMain from '@/libs/listMain/ui/listMain'
import ListMainSection from '@/libs/listMain/ui/listMainSection'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'

export const metadata = META_ARCHIVES

export default async function ArchivesPage({ searchParams }: ListPageProps) {
  const archives = await getPagesHelper<PagesHelperResponse>(
    'archive',
    10,
    searchParams.cursor,
  )
  if (!archives) notFound()

  // const nextCursor = archives.next_cursor
  const archiveList: Array<{
    slug: string
    title: string
    subTitle: string
    createdDate: string
    sectionType: string
  }> = []

  // eslint-disable-next-line no-restricted-syntax
  for (const archive of archives.results as PartialPageObjectResponseMore[]) {
    archiveList.push({
      slug: archive.properties?.Slug.rich_text[0].plain_text as string,
      title: archive.properties?.Title.title[0].plain_text as string,
      subTitle: archive.properties?.SubTitle.rich_text[0].plain_text as string,
      createdDate: dateConverter(archive.created_time),
      sectionType: archive.properties?.Status.multi_select[1].name as string,
    })
  }

  return (
    <main>
      <UiListMain listTitle="archives" location={<CurrentLocation />}>
        <ListMainSection section={archiveList} />
      </UiListMain>
    </main>
  )
}
