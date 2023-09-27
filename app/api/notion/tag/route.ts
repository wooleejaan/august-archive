import { NextRequest, NextResponse } from 'next/server'

import { getTagPages } from '@/libs/_shared/helpers/notion.helper'

export async function GET(req: NextRequest) {
  const property = req.nextUrl.searchParams.get('property') || ''
  const startCursor = req.nextUrl.searchParams.get('startCursor') || undefined

  const pageList = await getTagPages(
    property,
    startCursor === 'undefined' ? undefined : startCursor,
  )

  return NextResponse.json(pageList)
}
