const getPagesHelper = async <T>(
  containProperty: string,
  pageSize: number,
  startCursor?: string,
): Promise<T> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notion/list?property=${containProperty}&pageSize=${pageSize}&startCursor=${startCursor}`,
    {
      // cache: 'no-store',
      cache: 'force-cache',
      // next: { revalidate: 86400 },
    },
  )

  if (!res.ok) {
    // This will activate the closest `error.ts` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = res.json()
  return data
}

const getPageBySlugHelper = async <T>(
  slug: string,
  containProperty: string,
): Promise<T> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notion/listBySlug?property=${containProperty}&slug=${slug}`,
    {
      // cache: 'no-store',
      cache: 'force-cache',
      // next: { revalidate: 86400 },
    },
  )

  if (!res.ok) {
    // This will activate the closest `error.ts` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = res.json()
  return data
}

const getPageContentHelper = async <T>(pageId: string): Promise<T> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notion/content?detailId=${pageId}`,
    {
      // cache: 'no-store',
      cache: 'force-cache',
      // next: { revalidate: 86400 },
    },
  )

  if (!res.ok) {
    // This will activate the closest `error.ts` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = res.json()
  return data
}

export { getPagesHelper, getPageBySlugHelper, getPageContentHelper }
