import { notFound } from 'next/navigation'

import { getPages } from '@/libs/shared/helpers/notion.helpers'
import { PartialPageObjectResponseMore } from '@/libs/shared/types/page.type'

import UiListMain from '@/libs/listMain/ui/listMain'
import ListMainSection from '@/libs/listMain/ui/listMainSection'

export default async function ArchivesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const archives = await getPages('archive', 10, searchParams.cursor)
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
      createdDate: new Date(archive.created_time).toLocaleDateString(),
    })
  }

  return (
    <UiListMain listTitle="archives">
      <ListMainSection section={archiveList} sectionType="archives" />
    </UiListMain>
  )
}
