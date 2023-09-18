// import 'highlight.js/styles/github-dark.css'
import { PartialPageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { notFound } from 'next/navigation'

import { getPages } from '@/libs/shared/helpers/notion.helpers'

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const projects = await getPages('project', 10, searchParams.cursor)
  if (!projects) notFound()

  const nextCursor = projects.next_cursor
  const projectList: Array<{ slug: string; title: string }> = []

  // eslint-disable-next-line no-restricted-syntax
  for (const page of projects.results as PartialPageObjectResponse[]) {
    projectList.push({
      slug: page.properties?.Slug.rich_text[0].plain_text as string,
      title: page.properties?.Title.title[0].plain_text as string,
    })
  }

  console.log(projectList, nextCursor)

  return <div>project page</div>
}
