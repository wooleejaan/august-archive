import { NextRequest, NextResponse } from 'next/server'

import { getPages } from '@/libs/shared/helpers/notion.helpers'

export async function GET(req: NextRequest) {
  const property = req.nextUrl.searchParams.get('property') || ''
  const pageSize = Number(req.nextUrl.searchParams.get('pageSize')) || undefined
  const startCursor = req.nextUrl.searchParams.get('startCursor') || undefined

  const pageList = await getPages(property, pageSize, startCursor)

  return NextResponse.json(pageList)
}
