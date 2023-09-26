import { notFound } from 'next/navigation'

import { getPagesHelper } from '@/libs/shared/helpers/getNotion.helper'
import dateConverter from '@/libs/shared/helpers/monthConverter.helper'
import {
  PagesHelperResponse,
  PartialPageObjectResponseMore,
} from '@/libs/shared/types/page.type'

import UiListMain from '@/libs/listMain/ui/listMain'
import ListMainSection from '@/libs/listMain/ui/listMainSection'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'

export default async function ArchivesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
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
  }> = []

  // eslint-disable-next-line no-restricted-syntax
  for (const archive of archives.results as PartialPageObjectResponseMore[]) {
    archiveList.push({
      slug: archive.properties?.Slug.rich_text[0].plain_text as string,
      title: archive.properties?.Title.title[0].plain_text as string,
      subTitle: archive.properties?.SubTitle.rich_text[0].plain_text as string,
      createdDate: dateConverter(archive.created_time),
    })
  }

  return (
    <UiListMain listTitle="archives" location={<CurrentLocation />}>
      <ListMainSection section={archiveList} sectionType="archives" />
    </UiListMain>
  )
}
