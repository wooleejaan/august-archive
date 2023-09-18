import bookmarkPlugin from '@notion-render/bookmark-plugin'
import { NotionRenderer } from '@notion-render/client'
// Plugins
import hljsPlugin from '@notion-render/hljs-plugin'

import { notFound } from 'next/navigation'

import {
  getPageBySlug,
  getPageContent,
  notionClient,
} from '@/libs/shared/helpers/notion.helpers'

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPageBySlug(params.slug, 'project')
  if (!post) notFound()

  const content = await getPageContent(post.id)

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  })

  notionRenderer.use(hljsPlugin({}))
  notionRenderer.use(bookmarkPlugin(undefined))
  const html = await notionRenderer.render(...content)

  return (
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
    // <Post
    //   title={(post.properties.Title as any).title[0].plain_text}
    //   bannerImage={(post.properties.BannerImage as any).url}
    //   bannerImageWidth={(post.properties.BannerImageWidth as any).number}
    //   bannerImageHeight={(post.properties.BannerImageHeight as any).number}
    //   content={html}
    // />
  )
}
