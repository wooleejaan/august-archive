interface RootLayoutProps {
  children: React.ReactNode
}

interface HomePageProps {
  searchParams: { [key: string]: string }
}

interface ListPageProps {
  searchParams: { [key: string]: string }
}

interface DetailPageProps {
  params: { slug: string }
}

export type { RootLayoutProps, HomePageProps, ListPageProps, DetailPageProps }
