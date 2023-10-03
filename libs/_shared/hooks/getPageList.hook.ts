import { notFound } from 'next/navigation'

import { getPagesHelper } from '@/libs/_shared/apis/getNotion.api'
import dateConverter from '@/libs/_shared/helpers/monthConverter.helper'
import {
  PagesHelperResponse,
  PartialPageObjectResponseMore,
} from '@/libs/_shared/types/responses.type'

const getPageList = async (
  property: string,
  pageSize: number,
  cursor?: string,
) => {
  const pages = await getPagesHelper<PagesHelperResponse>(
    property,
    pageSize,
    cursor,
  )
  if (!pages) notFound()

  // const nextCursor = archives.next_cursor
  const list: Array<{
    slug: string
    title: string
    subTitle: string
    createdDate: string
    sectionType: string
  }> = []

  // eslint-disable-next-line no-restricted-syntax
  for (const archive of pages.results as PartialPageObjectResponseMore[]) {
    list.push({
      slug: archive.properties?.Slug.rich_text[0].plain_text as string,
      title: archive.properties?.Title.title[0].plain_text as string,
      subTitle: archive.properties?.SubTitle.rich_text[0].plain_text as string,
      createdDate: dateConverter(archive.created_time),
      sectionType: archive.properties?.Status.multi_select[1].name as string,
    })
  }

  return { list }
}

export default getPageList
