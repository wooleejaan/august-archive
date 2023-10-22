import { MetadataRoute } from 'next'

const URL = 'https://www.augustarchives.kr'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/tags/graphics',
    '/tags/frontend',
    '/tags/computer-science',
    '/tags/performance',
    '/algorithms',
    '/archives',
    '/graphics',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
