import { notFound } from 'next/navigation'

import { getPagesHelper } from '@/libs/shared/apis/getNotion.api'
import dateConverter from '@/libs/shared/helpers/monthConverter.helper'
import {
  PagesHelperResponse,
  PartialPageObjectResponseMore,
} from '@/libs/shared/types/page.type'

import UiListMain from '@/libs/listMain/ui/listMain'
import ListMainSection from '@/libs/listMain/ui/listMainSection'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const projects = await getPagesHelper<PagesHelperResponse>(
    'project',
    10,
    searchParams.cursor,
  )
  if (!projects) notFound()

  // const nextCursor = projects.next_cursor
  const projectList: Array<{
    slug: string
    title: string
    subTitle: string
    createdDate: string
  }> = []

  // eslint-disable-next-line no-restricted-syntax
  for (const page of projects.results as PartialPageObjectResponseMore[]) {
    projectList.push({
      slug: page.properties?.Slug.rich_text[0].plain_text as string,
      title: page.properties?.Title.title[0].plain_text as string,
      subTitle: page.properties?.SubTitle.rich_text[0].plain_text as string,
      createdDate: dateConverter(page.created_time),
    })
  }

  return (
    <UiListMain listTitle="projects" location={<CurrentLocation />}>
      <ListMainSection section={projectList} sectionType="projects" />
    </UiListMain>
  )
}
