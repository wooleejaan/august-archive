import { notFound } from 'next/navigation'

import {
  getPagesHelper,
  getTagListHelper,
} from '@/libs/_shared/apis/getNotion.api'
import convertToList from '@/libs/_shared/hooks/convertToList.hook'
import {
  PagesHelperResponse,
  TagListHelperResponse,
} from '@/libs/_shared/types/responses.type'
import { HomePageProps } from '@/libs/_shared/types/routers.type'
import HeroMain from '@/libs/heroMain/feature/heroMain.feature'
import HeroMainArchives from '@/libs/heroMain/feature/heroMainArchives.feature'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'

export default async function HomePage({ searchParams }: HomePageProps) {
  const [archives, algorithms, tags, graphics] = await Promise.all([
    getPagesHelper<PagesHelperResponse>('archive', 5, searchParams.cursor),
    getPagesHelper<PagesHelperResponse>('algorithm', 5, searchParams.cursor),
    getTagListHelper<TagListHelperResponse>(),
    getPagesHelper<PagesHelperResponse>('graphic', 5, searchParams.cursor),
  ])

  if (!archives || !algorithms || !tags) notFound()

  const tagList = tags.results[0].properties.Category.multi_select.map(
    (tag) => tag.name,
  )

  const archiveList = convertToList(archives)
  const algorithmList = convertToList(algorithms)
  const graphicList = convertToList(graphics)

  return (
    <main>
      <HeroMain location={<CurrentLocation />} tags={tagList}>
        <HeroMainArchives section={archiveList} sectionName="archives" />
        <HeroMainArchives section={algorithmList} sectionName="algorithms" />
        <HeroMainArchives section={graphicList} sectionName="graphics" />
      </HeroMain>
    </main>
  )
}
