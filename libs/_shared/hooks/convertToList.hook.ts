import {
  PagesHelperResponse,
  PartialPageObjectResponseMore,
} from '@/libs/_shared/types/responses.type'

const convertToList = (pages: PagesHelperResponse) => {
  const pageList: Array<{ slug: string; title: string }> = []

  // eslint-disable-next-line no-restricted-syntax
  for (const page of pages.results as PartialPageObjectResponseMore[]) {
    pageList.push({
      slug: page.properties?.Slug.rich_text[0].plain_text as string,
      title: page.properties?.Title.title[0].plain_text as string,
    })
  }

  return pageList
}

export default convertToList
