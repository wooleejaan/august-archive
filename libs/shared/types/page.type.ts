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

export type {
  PartialPageObjectResponseMore,
  PartialDetailPageObjectResponseMore,
}
