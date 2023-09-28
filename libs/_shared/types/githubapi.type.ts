export interface GithubResponseRoot {
  content: GithubResponseContent
  commit: GithubResponseCommit
}

export interface GithubResponseContent {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
  type: string
  _links: GithubResponseLinks
}

export interface GithubResponseLinks {
  self: string
  git: string
  html: string
}

export interface GithubResponseCommit {
  sha: string
  node_id: string
  url: string
  html_url: string
  author: GithubResponseAuthor
  committer: GithubResponseCommitter
  tree: GithubResponseTree
  message: string
  parents: any[][]
  verification: GithubResponseVerification
}

export interface GithubResponseAuthor {
  name: string
  email: string
  date: string
}

export interface GithubResponseCommitter {
  name: string
  email: string
  date: string
}

export interface GithubResponseTree {
  sha: string
  url: string
}

export interface GithubResponseVerification {
  verified: boolean
  reason: string
  signature: any
  payload: any
}

export interface GithubImageResponse {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
}
