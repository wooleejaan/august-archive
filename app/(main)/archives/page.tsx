// import 'highlight.js/styles/github-dark.css'
import { notFound } from 'next/navigation'

import { getPages } from '@/libs/shared/helpers/notion.helpers'

interface PartialPageObjectResponseMore {
  object: 'page'
  id: string
  properties?: {
    Slug: {
      rich_text: Array<{ plain_text: string }>
    }
    Title: {
      title: Array<{ plain_text: string }>
    }
  }
}

export default async function ArchivesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const archives = await getPages('archive', 10, searchParams.cursor)
  if (!archives) notFound()

  const nextCursor = archives.next_cursor
  const archiveList: Array<{ slug: string; title: string }> = []

  // eslint-disable-next-line no-restricted-syntax
  for (const archive of archives.results as PartialPageObjectResponseMore[]) {
    archiveList.push({
      slug: archive.properties?.Slug.rich_text[0].plain_text as string,
      title: archive.properties?.Title.title[0].plain_text as string,
    })
  }

  console.log(archiveList, nextCursor)

  return <div>archive page</div>
}
