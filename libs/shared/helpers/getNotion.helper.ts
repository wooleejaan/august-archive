import { cache } from 'react'

/**
 *
 * @description ISR 적용된 API Handler
 * @example
 * ```bash
 * # how to revalidate
 * GET `/api/revalidate?path=/&secret=${process.env.MY_SECRET_TOKEN}`
 * ```
 */
const getPagesHelper = cache(
  async <T>(
    containProperty: string,
    pageSize: number,
    startCursor?: string,
  ): Promise<T> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/notion/list?property=${containProperty}&pageSize=${pageSize}&startCursor=${startCursor}`,
      {
        cache: 'no-store',
        // cache: 'force-cache',
        // next: { revalidate: 86400 },
      },
    )

    if (!res.ok) {
      // This will activate the closest `error.ts` Error Boundary
      throw new Error('Failed to fetch data')
    }

    const data = res.json()
    return data
  },
)

/**
 *
 * @description ISR 적용된 API Handler
 * @example
 * ```bash
 * # how to revalidate
 * GET `/api/revalidate?path=/&secret=${process.env.MY_SECRET_TOKEN}`
 * ```
 */
const getPageBySlugHelper = cache(
  async <T>(slug: string, containProperty: string): Promise<T> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/notion/listBySlug?property=${containProperty}&slug=${slug}`,
      {
        cache: 'no-store',
        // cache: 'force-cache',
        // next: { revalidate: 86400 },
      },
    )

    if (!res.ok) {
      // This will activate the closest `error.ts` Error Boundary
      throw new Error('Failed to fetch data')
    }

    const data = res.json()
    return data
  },
)

/**
 *
 * @description ISR 적용된 API Handler
 * @example
 * ```bash
 * # how to revalidate
 * GET `/api/revalidate?path=/&secret=${process.env.MY_SECRET_TOKEN}`
 * ```
 */
const getPageContentHelper = cache(async <T>(pageId: string): Promise<T> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notion/content?detailId=${pageId}`,
    {
      cache: 'no-store',
      // cache: 'force-cache',
      // next: { revalidate: 86400 },
    },
  )

  if (!res.ok) {
    // This will activate the closest `error.ts` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = res.json()
  return data
})

export { getPagesHelper, getPageBySlugHelper, getPageContentHelper }
