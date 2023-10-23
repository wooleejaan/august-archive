interface RootLayoutProps {
  children: React.ReactNode
}

interface ListPageProps {
  searchParams: { [key: string]: string }
}

interface ListPageFeatureProps {
  property: string
  pageSize: number
  cursor?: string
}

interface DetailPageProps {
  params: { slug: string }
}

interface DetailPageFeatureProps {
  slug: string
  property: string
}

interface TagPageProps {
  params: { tag: string }
  searchParams: { [key: string]: string }
}

export type {
  RootLayoutProps,
  ListPageProps,
  ListPageFeatureProps,
  DetailPageProps,
  DetailPageFeatureProps,
  TagPageProps,
}
