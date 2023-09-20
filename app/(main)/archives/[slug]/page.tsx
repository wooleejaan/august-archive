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

export default async function ArchiveDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const archive = await getPageBySlug(params.slug, 'archive')
  if (!archive) notFound()

  const polishedProps =
    archive.properties as unknown as PartialDetailPageObjectResponseMore

  const archiveInfo = {
    createdTime: new Date(archive.created_time).toLocaleDateString(),
    subTitle: polishedProps?.SubTitle.rich_text[0].plain_text,
    category: polishedProps?.Category.multi_select.map((tag) => tag.name),
    slug: polishedProps?.Slug.rich_text[0].plain_text,
    title: polishedProps?.Title.title[0].plain_text,
  }

  const content = await getPageContent(archive.id)

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  })

  notionRenderer.use(hljsPlugin({}))
  notionRenderer.use(bookmarkPlugin(undefined))
  const html = await notionRenderer.render(...content)

  return <UiPostDetailContainer content={html} {...archiveInfo} />
}
