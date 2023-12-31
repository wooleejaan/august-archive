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
    Category: {
      multi_select: Array<{ name: string }>
    }
    Status: {
      multi_select: Array<{ name: string }>
    }
    Date: {
      id: string
      type: string
      date: {
        start: string
        end: string | null
        time_zone: string | null
      }
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
  Date: {
    id: string
    type: string
    date: {
      start: string
      end: string | null
      time_zone: string | null
    }
  }
}

interface PartialTagListObjectResponseMore {
  properties: {
    Category: {
      multi_select: Array<{ name: string }>
    }
  }
}

interface TagListHelperResponse {
  object: 'list'
  results: PartialTagListObjectResponseMore[]
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
  TagListHelperResponse,
  PagesHelperResponse,
  PageDetailHelperResponse,
  BlockObjectMoreResponse,
}
