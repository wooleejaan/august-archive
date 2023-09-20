import bookmarkPlugin from '@notion-render/bookmark-plugin'
import { NotionRenderer } from '@notion-render/client'
// Plugins
import hljsPlugin from '@notion-render/hljs-plugin'
import 'highlight.js/styles/github-dark.css'

import { notFound } from 'next/navigation'

import {
  getPageBySlug,
  getPageContent,
  notionClient,
} from '@/libs/shared/helpers/notion.helpers'
import { PartialDetailPageObjectResponseMore } from '@/libs/shared/types/page.type'

import UiPostDetailContainer from '@/libs/postDetail/ui/postDetailContainer.ui'

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = await getPageBySlug(params.slug, 'project')
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

  const content = await getPageContent(project.id)

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  })

  notionRenderer.use(hljsPlugin({}))
  notionRenderer.use(bookmarkPlugin(undefined))
  const html = await notionRenderer.render(...content)

  return <UiPostDetailContainer content={html} {...projectInfo} />
}
