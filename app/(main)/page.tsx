import { notFound } from 'next/navigation'

import { getPagesHelper } from '@/libs/_shared/apis/getNotion.api'
import {
  PagesHelperResponse,
  PartialPageObjectResponseMore,
} from '@/libs/_shared/types/responses.type'
import { HomePageProps } from '@/libs/_shared/types/routers.type'
import HeroMain from '@/libs/heroMain/feature/heroMain.feature'
import HeroMainArchives from '@/libs/heroMain/feature/heroMainArchives.feature'
import HeroMainProjects from '@/libs/heroMain/feature/heroMainProjects.feature'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'

export default async function HomePage({ searchParams }: HomePageProps) {
  const [archives, projects] = await Promise.all([
    getPagesHelper<PagesHelperResponse>('archive', 3, searchParams.cursor),
    getPagesHelper<PagesHelperResponse>('project', 3, searchParams.cursor),
  ])

  if (!archives || !projects) notFound()

  const projectList: Array<{ slug: string; title: string }> = []
  const archiveList: Array<{ slug: string; title: string }> = []

  // eslint-disable-next-line no-restricted-syntax
  for (const page of projects.results as PartialPageObjectResponseMore[]) {
    projectList.push({
      slug: page.properties?.Slug.rich_text[0].plain_text as string,
      title: page.properties?.Title.title[0].plain_text as string,
    })
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const archive of archives.results as PartialPageObjectResponseMore[]) {
    archiveList.push({
      slug: archive.properties?.Slug.rich_text[0].plain_text as string,
      title: archive.properties?.Title.title[0].plain_text as string,
    })
  }

  return (
    <HeroMain location={<CurrentLocation />}>
      <HeroMainProjects section={projectList} />
      <HeroMainArchives section={archiveList} />
    </HeroMain>
  )
}
