import { getPages } from '@/libs/shared/helpers/notion.helpers'
import { PartialPageObjectResponseMore } from '@/libs/shared/types/page.type'

import HeroMain from '@/libs/heroMain/feature/heroMain.feature'
import HeroMainArchives from '@/libs/heroMain/feature/heroMainArchives.feature'
import HeroMainProjects from '@/libs/heroMain/feature/heroMainProjects.feature'

export default async function HomePage() {
  const [archives, projects] = await Promise.all([
    getPages('archive'),
    getPages('project'),
  ])

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
    <HeroMain>
      <HeroMainProjects section={projectList} />
      <HeroMainArchives section={archiveList} />
    </HeroMain>
  )
}
