import { NextRequest, NextResponse } from 'next/server'

import { getPageContent } from '@/libs/shared/helpers/notion.helpers'

export async function GET(req: NextRequest) {
  const detailId = req.nextUrl.searchParams.get('detailId') || ''

  const detail = await getPageContent(detailId)

  return NextResponse.json(detail)
}
