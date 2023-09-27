import bookmarkPlugin from '@notion-render/bookmark-plugin'
import { NotionRenderer } from '@notion-render/client'
// Plugins
import hljsPlugin from '@notion-render/hljs-plugin'
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import 'highlight.js/styles/github-dark.css'

import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

import {
  getPageBySlugHelper,
  getPageContentHelper,
} from '@/libs/_shared/apis/getNotion.api'
import dateConverter from '@/libs/_shared/helpers/monthConverter.helper'
import { notionClient } from '@/libs/_shared/helpers/notion.helper'
import {
  BlockObjectMoreResponse,
  PageDetailHelperResponse,
  PartialDetailPageObjectResponseMore,
} from '@/libs/_shared/types/responses.type'
import { DetailPageProps } from '@/libs/_shared/types/routers.type'
import CurrentLocation from '@/libs/location/feature/currentLocation.feature'
import UiPostDetailContainer from '@/libs/postDetail/ui/postDetailContainer.ui'

const Gnb = dynamic(() => import('@/libs/gnb/feature/gnb.feature'), {
  ssr: false,
})

export default async function ProjectDetailPage({ params }: DetailPageProps) {
  const project = await getPageBySlugHelper<PageDetailHelperResponse>(
    params.slug,
    'project',
  )
  if (!project) notFound()

  const polishedProps =
    project.properties as unknown as PartialDetailPageObjectResponseMore

  const projectInfo = {
    createdTime: dateConverter(project.created_time),
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
    <main>
      <Gnb title={projectInfo.title} />
      <UiPostDetailContainer
        content={html}
        location={<CurrentLocation />}
        {...projectInfo}
      />
    </main>
  )
}
