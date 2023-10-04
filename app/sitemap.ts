import { MetadataRoute } from 'next'

const URL = 'https://www.augustarchives.kr'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/tags', '/algorithms', '/archives', '/performances'].map(
    (route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
    }),
  )

  return [...routes]
}
