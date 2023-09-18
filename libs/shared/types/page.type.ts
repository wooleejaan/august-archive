interface PartialPageObjectResponseMore {
  object: 'page'
  id: string
  properties?: {
    Slug: {
      rich_text: Array<{ plain_text: string }>
    }
    Title: {
      title: Array<{ plain_text: string }>
    }
  }
}

export type { PartialPageObjectResponseMore }
