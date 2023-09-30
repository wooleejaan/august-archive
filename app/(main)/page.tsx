import { notFound } from 'next/navigation'

import {
  getPagesHelper,
  getTagListHelper,
} from '@/libs/_shared/apis/getNotion.api'
import {
  PagesHelperResponse,
  PartialPageObjectResponseMore,
  TagListHelperResponse,
} from '@/libs/_shared/types/responses.type'
import { HomePageProps } from '@/libs/_shared/types/routers.type'
import HeroMain from '@/libs/heroMain/feature/heroMain.feature'
import HeroMainArchives from '@/libs/heroMain/feature/heroMainArchives.feature'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'

export default async function HomePage({ searchParams }: HomePageProps) {
  const [archives, tags] = await Promise.all([
    getPagesHelper<PagesHelperResponse>('archive', 5, searchParams.cursor),
    getTagListHelper<TagListHelperResponse>(),
  ])

  if (!archives || !tags) notFound()

  const archiveList: Array<{ slug: string; title: string }> = []
  const tagList = tags.results[0].properties.Category.multi_select.map(
    (tag) => tag.name,
  )

  // eslint-disable-next-line no-restricted-syntax
  for (const archive of archives.results as PartialPageObjectResponseMore[]) {
    archiveList.push({
      slug: archive.properties?.Slug.rich_text[0].plain_text as string,
      title: archive.properties?.Title.title[0].plain_text as string,
    })
  }

  return (
    <main>
      <HeroMain location={<CurrentLocation />} tags={tagList}>
        <HeroMainArchives section={archiveList} />
      </HeroMain>
    </main>
  )
}
