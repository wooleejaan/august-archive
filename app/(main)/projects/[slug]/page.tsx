import bookmarkPlugin from '@notion-render/bookmark-plugin'
import { NotionRenderer } from '@notion-render/client'
// Plugins
import hljsPlugin from '@notion-render/hljs-plugin'
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import 'highlight.js/styles/github-dark.css'

import { notFound } from 'next/navigation'

import {
  getPageBySlugHelper,
  getPageContentHelper,
} from '@/libs/shared/helpers/getNotion.helper'
import { notionClient } from '@/libs/shared/helpers/notion.helpers'
import {
  BlockObjectMoreResponse,
  PageDetailHelperResponse,
  PartialDetailPageObjectResponseMore,
} from '@/libs/shared/types/page.type'

import CurrentLocation from '@/libs/location/feature/currentLocation.feature'
import UiPostDetailContainer from '@/libs/postDetail/ui/postDetailContainer.ui'

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = await getPageBySlugHelper<PageDetailHelperResponse>(
    params.slug,
    'project',
  )
  if (!project) notFound()

  const polishedProps =
    project.properties as unknown as PartialDetailPageObjectResponseMore

  const projectInfo = {
    createdTime: new Date(project.created_time).toLocaleDateString(),
    subTitle: polishedProps?.SubTitle.rich_text[0].plain_text,
    category: polishedProps?.Category.multi_select.map((tag) => tag.name),
    slug: polishedProps?.Slug.rich_text[0].plain_text,
    title: polishedProps?.Title.title[0].plain_text,
  }

  const content = await getPageContentHelper<
    Array<BlockObjectResponse & BlockObjectMoreResponse>
  >(project.id)

  const updatedContent = await Promise.all(
    content.map(async (c) => {
      if (c.type === 'image') {
        const response = await fetch(c.image.file.url)
        const imgBuffer = await response.arrayBuffer()
        const base64Image = Buffer.from(imgBuffer).toString('base64')
        // eslint-disable-next-line no-param-reassign
        c.image.file.url = `data:image/png;base64,${base64Image}`
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

  return (
    <UiPostDetailContainer
      content={html}
      location={<CurrentLocation />}
      {...projectInfo}
    />
  )
}
