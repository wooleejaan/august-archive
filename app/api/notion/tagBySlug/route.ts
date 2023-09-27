import { NextRequest, NextResponse } from 'next/server'

import { getPageBySlugAndCategory } from '@/libs/_shared/helpers/notion.helper'

export async function GET(req: NextRequest) {
  const property = req.nextUrl.searchParams.get('property') || ''
  const slug = req.nextUrl.searchParams.get('slug') || ''

  const page = await getPageBySlugAndCategory(slug, property)

  return NextResponse.json(page)
}
