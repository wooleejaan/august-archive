import { Client } from '@notionhq/client'
import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

export const notionClient = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
})

export const getPages = (
  containProperty: string,
  pageSize = 3,
  startCursor?: string,
) =>
  notionClient.databases.query({
    filter: {
      and: [
        {
          property: 'Status',
          multi_select: {
            contains: 'published',
          },
        },
        {
          property: 'Status',
          multi_select: {
            contains: containProperty,
          },
        },
      ],
    },
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string,
    page_size: pageSize,
    start_cursor: startCursor,
  })

export const getPageContent = (pageId: string) =>
  notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[])

export const getPageBySlug = (slug: string, containProperty: string) =>
  notionClient.databases
    .query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string,
      filter: {
        and: [
          {
            property: 'Slug',
            rich_text: {
              equals: slug,
            },
          },
          {
            property: 'Status',
            multi_select: {
              contains: containProperty,
            },
          },
        ],
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined)
