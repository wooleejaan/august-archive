import { NextRequest, NextResponse } from 'next/server'

import { getPages } from '@/libs/_shared/helpers/notion.helper'

export async function GET(req: NextRequest) {
  const property = req.nextUrl.searchParams.get('property') || ''
  const pageSize = req.nextUrl.searchParams.get('pageSize') || undefined
  const startCursor = req.nextUrl.searchParams.get('startCursor') || undefined

  const pageList = await getPages(
    property,
    Number(pageSize),
    startCursor === 'undefined' ? undefined : startCursor,
  )

  return NextResponse.json(pageList)
}
