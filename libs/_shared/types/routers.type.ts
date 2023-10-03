interface RootLayoutProps {
  children: React.ReactNode
}

interface HomePageProps {
  searchParams: { [key: string]: string }
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
  HomePageProps,
  ListPageProps,
  ListPageFeatureProps,
  DetailPageProps,
  DetailPageFeatureProps,
  TagPageProps,
}
