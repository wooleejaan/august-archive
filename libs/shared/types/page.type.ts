interface PartialPageObjectResponseMore {
  object: 'page'
  id: string
  created_time: string
  properties?: {
    Slug: {
      rich_text: Array<{ plain_text: string }>
    }
    Title: {
      title: Array<{ plain_text: string }>
    }
    SubTitle: {
      rich_text: Array<{ plain_text: string }>
    }
  }
}

interface PartialDetailPageObjectResponseMore {
  Slug: {
    rich_text: Array<{ plain_text: string }>
  }
  Title: {
    title: Array<{ plain_text: string }>
  }
  SubTitle: {
    rich_text: Array<{ plain_text: string }>
  }
  Category: {
    multi_select: Array<{ name: string }>
  }
}

interface PagesHelperResponse {
  object: 'list'
  results: PartialPageObjectResponseMore[]
}

interface PageDetailHelperResponse {
  object: 'page'
  id: string
  created_time: string
  properties: PartialDetailPageObjectResponseMore
}

interface BlockObjectMoreResponse {
  image: {
    caption: []
    type: string
    file: {
      url: string
      expiry_time: string
    }
  }
}

export type {
  PartialPageObjectResponseMore,
  PartialDetailPageObjectResponseMore,
  PagesHelperResponse,
  PageDetailHelperResponse,
  BlockObjectMoreResponse,
}
