import bookmarkPlugin from '@notion-render/bookmark-plugin'
import { NotionRenderer } from '@notion-render/client'
import hljsPlugin from '@notion-render/hljs-plugin'
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { notFound } from 'next/navigation'

import {
  getPageBySlugHelper,
  getPageContentHelper,
} from '@/libs/_shared/apis/getNotion.api'
import dateConverter from '@/libs/_shared/helpers/monthConverter.helper'
import { notionClient } from '@/libs/_shared/helpers/notion.helper'
import convertToGithubImage from '@/libs/_shared/hooks/convertToGithubImage.hook'
import {
  BlockObjectMoreResponse,
  PageDetailHelperResponse,
  PartialDetailPageObjectResponseMore,
} from '@/libs/_shared/types/responses.type'

import dateTextConverter from '../helpers/dateTextConverter.helper'

const getPageDetail = async (slug: string, property: string) => {
  const decodedSlug = decodeURIComponent(slug)
  const page = await getPageBySlugHelper<PageDetailHelperResponse>(
    decodedSlug,
    property,
  )

  if (!page) notFound()

  const polishedProps =
    page.properties as unknown as PartialDetailPageObjectResponseMore

  const info = {
    createdTime: dateConverter(page.created_time),
    subTitle: polishedProps?.SubTitle.rich_text[0].plain_text,
    category: polishedProps?.Category.multi_select.map((tag) => tag.name),
    slug: polishedProps?.Slug.rich_text[0].plain_text,
    title: polishedProps?.Title.title[0].plain_text,
    date: dateTextConverter(polishedProps?.Date.date.start as string),
  }

  const content = await getPageContentHelper<
    Array<BlockObjectResponse & BlockObjectMoreResponse>
  >(page.id)

  const updatedContent = await Promise.all(
    content.map(async (c, index) => {
      if (c.type === 'image') {
        const customUrl = await convertToGithubImage(
          info.slug,
          index,
          c.image.file.url,
        )
        // eslint-disable-next-line no-param-reassign
        c.image.file.url = customUrl
      }
      return c
    }),
  )

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  })

  notionRenderer.use(hljsPlugin({}))
  notionRenderer.use(bookmarkPlugin(undefined))
  const html = await notionRenderer.render(...updatedContent)

  return { html, info }
}

export default getPageDetail
