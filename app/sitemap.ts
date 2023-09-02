import { MetadataRoute } from 'next'

const URL = 'https://august-archive.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [''].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
