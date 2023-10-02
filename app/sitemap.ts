import { MetadataRoute } from 'next'

const URL = 'https://www.augustarchives.kr'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [''].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
