import { NextRequest, NextResponse } from 'next/server'

import { getPageBySlug } from '@/libs/shared/helpers/notion.helper'

export async function GET(req: NextRequest) {
  const property = req.nextUrl.searchParams.get('property') || ''
  const slug = req.nextUrl.searchParams.get('slug') || ''

  const page = await getPageBySlug(slug, property)

  return NextResponse.json(page)
}
