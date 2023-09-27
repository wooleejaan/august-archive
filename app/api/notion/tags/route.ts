import { NextResponse } from 'next/server'

import { getTagList } from '@/libs/_shared/helpers/notion.helper'

export async function GET() {
  const tagList = await getTagList()

  return NextResponse.json(tagList)
}
