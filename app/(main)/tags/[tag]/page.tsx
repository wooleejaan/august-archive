import { notFound } from 'next/navigation'

import { getTagListPagesHelper } from '@/libs/_shared/apis/getNotion.api'
import dateConverter from '@/libs/_shared/helpers/monthConverter.helper'
import {
  PagesHelperResponse,
  PartialPageObjectResponseMore,
} from '@/libs/_shared/types/responses.type'
import { TagPageProps } from '@/libs/_shared/types/routers.type'
import UiListMain from '@/libs/listMain/ui/listMain'
import ListMainSection from '@/libs/listMain/ui/listMainSection'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'

export default async function TagPage({ params, searchParams }: TagPageProps) {
  const tags = await getTagListPagesHelper<PagesHelperResponse>(
    params.tag,
    searchParams.cursor,
  )
  if (!tags) notFound()

  const tagList: Array<{
    slug: string
    title: string
    subTitle: string
    createdDate: string
    sectionType: string
  }> = []

  // eslint-disable-next-line no-restricted-syntax
  for (const page of tags.results as PartialPageObjectResponseMore[]) {
    tagList.push({
      slug: page.properties?.Slug.rich_text[0].plain_text as string,
      title: page.properties?.Title.title[0].plain_text as string,
      subTitle: page.properties?.SubTitle.rich_text[0].plain_text as string,
      createdDate: dateConverter(page.created_time),
      sectionType: page.properties?.Status.multi_select[1].name as string,
    })
  }

  return (
    <UiListMain
      listTitle={`${params.tag[0].toUpperCase() + params.tag.slice(1)}`}
      location={<CurrentLocation />}
    >
      <ListMainSection section={tagList} />
    </UiListMain>
  )
}
