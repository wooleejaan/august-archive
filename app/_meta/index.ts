import type { Metadata } from 'next'

const META_ROOT: Metadata = {
  icons: {
    icon: '/images/favicon.ico',
  },
  title: {
    template: '%s | august',
    default: 'august archives',
  },
  description:
    '새롭게 알게 된 것들, 직면하고 해결한 기술적인 문제들을 글로 정리하고 공유합니다.',
  metadataBase: new URL('https://august-archive.vercel.app/'),
}

const META_PROJECTS = {
  title: 'projects',
}

const META_ARCHIVES = {
  title: 'archives',
}

interface GenerateParamsMetadataProps {
  params: { slug: string }
}

const generateParamsMetadata = async function generateMetadata({
  params,
}: GenerateParamsMetadataProps): Promise<Metadata> {
  const { slug } = params
  return {
    title: `${slug.replace('-', ' ')}`,
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
    title: `${tag.replace('-', ' ')}`,
  }
}

export {
  META_ROOT,
  META_PROJECTS,
  META_ARCHIVES,
  generateParamsMetadata,
  generateParamsTagsMetadata,
}
