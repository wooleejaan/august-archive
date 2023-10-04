import type { Metadata } from 'next'
import { headers } from 'next/headers'

import { getPageBySlugHelper } from '@/libs/_shared/apis/getNotion.api'
import { PageDetailHelperResponse } from '@/libs/_shared/types/responses.type'

const META_ROOT: Metadata = {
  icons: {
    icon: '/images/favicon.ico',
  },
  title: {
    template: '%s',
    default: 'august archives',
  },
  description:
    '새롭게 알게 된 것들, 직면하고 해결한 기술적인 문제들을 글로 정리하고 공유합니다.',
  metadataBase: new URL('https://www.augustarchives.kr'),
  other: {
    'google-site-verification': '4mQ1kGw5zwnwMv2vGXlzALAuJNFxJVUCxi0xt8WOEv0',
  },
}

const META_ARCHIVES = {
  title: 'archives | august archives',
}

const META_ALGORITHMS = {
  title: 'algorithms | august archives',
}

const META_PERFORMANCES = {
  title: 'performances | august archives',
}

interface GenerateParamsMetadataProps {
  params: { slug: string }
}

const generateParamsMetadata = async function generateMetadata({
  params,
}: GenerateParamsMetadataProps): Promise<Metadata> {
  const headersList = headers()
  const headerUrl = headersList.get('x-url') || ''
  const containProperty = headerUrl.split('/')[1].slice(0, -1)

  const { slug } = params

  const page = await getPageBySlugHelper<PageDetailHelperResponse>(
    slug,
    containProperty,
  )

  return {
    title: `${page.properties?.Title.title[0].plain_text} | august archives`,
  }
}

interface GenerateParamsTagsMetadataProps {
  params: { tag: string }
}

const generateParamsTagsMetadata = async function generateMetadata({
  params,
}: GenerateParamsTagsMetadataProps): Promise<Metadata> {
  const { tag } = params
  return {
    title: `${tag.replace('-', ' ')} | august archives`,
  }
}

export {
  META_ROOT,
  META_ARCHIVES,
  META_ALGORITHMS,
  META_PERFORMANCES,
  generateParamsMetadata,
  generateParamsTagsMetadata,
}
